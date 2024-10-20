"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getArticleDetail, Article } from "@/lib/microcms";
import { useAuth } from "../context/AuthContext";
import BookmarkButton from "@/components/BookmarkButton";
import Link from "next/link";

interface BookmarkedArticle extends Article {
    bookmarkId: string;
}

export default function Dashboard() {
    const [bookmarkedArticles, setBookmarkedArticles] = useState<BookmarkedArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchBookmarkedArticles = async () => {
            if (!user) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // ユーザーのブックマークを取得
                const bookmarksRef = collection(db, `users/${user.uid}/bookmarks`);
                const bookmarksSnapshot = await getDocs(bookmarksRef);

                // 各ブックマークに対して記事の詳細を取得
                const articlePromises = bookmarksSnapshot.docs.map(async (doc) => {
                    const bookmarkData = doc.data();
                    const articleId = bookmarkData.articleId;

                    try {
                        const articleData = await getArticleDetail(articleId);
                        return {
                            ...articleData,
                            bookmarkId: doc.id,
                        };
                    } catch (error) {
                        console.error(`Error fetching article ${articleId}:`, error);
                        return null;
                    }
                });

                // 全ての記事データを取得し、エラーがあったものを除外
                const articles = (await Promise.all(articlePromises)).filter(
                    (article): article is BookmarkedArticle => article !== null
                );
                setBookmarkedArticles(articles);
            } catch (error) {
                console.error("Error fetching bookmarked articles:", error);
                setError("ブックマークした記事の取得中にエラーが発生しました。");
            } finally {
                setLoading(false);
            }
        };

        fetchBookmarkedArticles();
    }, [user]);

    if (loading) {
        return <p>ブックマークを読み込み中...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (bookmarkedArticles.length === 0) {
        return <p>ブックマークした記事がありません。</p>;
    }

    return (
        <div>
            <h2>ブックマークした記事</h2>
            <ul>
                {bookmarkedArticles.map((article) => (
                    <li key={article.bookmarkId} className="flex items-center">
                        <Link href={`/article/${article.id}`}>
                            <h3 className="inline">{article.title}</h3>
                        </Link>
                        <BookmarkButton articleId={article.id} />
                    </li>
                ))}
            </ul>
            {/* {bookmarkedArticles} */}
        </div>
    );

    // return { bookmarkedArticles, loading, error };
}
