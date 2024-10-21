"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getArticleDetail, Article } from "@/lib/microcms";
import { useAuth } from "../context/AuthContext";
import BookmarkButton from "@/components/BookmarkButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Date from "@/components/Date";
import PageTitle from "@/components/PageTitle";
import PageTitleMargin from "@/components/PageTitleMargin";

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
                // ダッシュボード画面でログアウトしてもブックマーク記事が消えなかったけど、↓で解決
                setBookmarkedArticles([]);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const bookmarksRef = collection(db, `users/${user.uid}/bookmarks`);
                const bookmarksSnapshot = await getDocs(bookmarksRef);

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
        <>
            <PageTitle>ブックマークした記事</PageTitle>
            <PageTitleMargin />
            <section className="bg-background p-8 lg:p-12 rounded-xl border">
                <div className="flex justify-end">
                    <Link
                        href="/article"
                        className="text-sm text-muted-foreground hover:text-accent-foreground hover:bg-accent/80 px-4 py-2 rounded-md transition duration-500"
                    >
                        記事一覧へ
                    </Link>
                </div>
                <ul>
                    {bookmarkedArticles.map((article) => (
                        <li
                            key={article.id}
                            className="w-full border-b border-dashed border-primary/30 p-6"
                        >
                            <div>
                                <div className="text-lg mb-2 hover:underline flex justify-between items-center">
                                    <Link
                                        href={`/article/${article.id}`}
                                        className="hover:underline"
                                    >
                                        {article.title}
                                    </Link>
                                </div>
                                <div className="md:flex md:items-center">
                                    <div className="flex gap-2">
                                        <Date date={article.publishedAt ?? article.createdAt} />
                                        <BookmarkButton articleId={article.id} />
                                    </div>
                                    <div className="mt-2 md:mt-0 md:ml-2">
                                        {article.category.map((category) => (
                                            <Button key={category.name} asChild size="tag">
                                                <Link
                                                    key={category.name}
                                                    href={`/article/category/${category.id}`}
                                                    className="[&:not(:last-child)]:mr-2 duration-500"
                                                >
                                                    {category.name}
                                                </Link>
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
