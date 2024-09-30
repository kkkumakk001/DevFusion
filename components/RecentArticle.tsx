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
        // <section className="bg-background p-8 lg:p-12 rounded-xl mb-12 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-[0_0_12px_6px_rgba(255,255,255,0.05)]">
        <section className="bg-background p-8 lg:p-12 rounded-xl mb-12 border">
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
