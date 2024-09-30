import Link from "next/link";
import React from "react";
import ArticleList from "./ArticleList";
import { getArticleList } from "@/lib/microcms";
import { TOP_NEWS_LIMIT } from "@/constants";

export default async function RecentArticle() {
    const { contents: article } = await getArticleList({
        limit: TOP_NEWS_LIMIT,
        orders: "createdAt",
    });
    return (
        <section id="targetSection" className="bg-background p-8 lg:p-12 rounded-xl mb-12 border">
            <div className="flex justify-between mb-4">
                <h2 className="font-semibold">新着記事</h2>
                <span>
                    <Link
                        href="/article"
                        className="text-sm text-muted-foreground hover:text-accent-foreground hover:bg-accent/80 px-4 py-2 rounded-md transition duration-500"
                    >
                        記事一覧へ
                    </Link>
                </span>
            </div>
            <ArticleList article={article} />
        </section>
    );
}
