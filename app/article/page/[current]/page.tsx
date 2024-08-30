import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import { NEWS_LIST_LIMIT } from "@/constants";
import { getArticleList } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ArticleListLoading from "../../loading";

type Props = {
    params: {
        current: string;
    };
};

export default async function Page({ params }: Props) {
    const current = parseInt(params.current, 10);
    if (Number.isNaN(current) || current < 1) {
        notFound();
    }
    const { contents: article, totalCount } = await getArticleList({
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (current - 1),
    });

    if (article.length === 0) {
        notFound();
    }

    return (
        <main>
            <p className="pb-2 mb-4 border-b border-primary/30 max-w-fit">記事一覧</p>
            <Suspense fallback={<ArticleListLoading />}>
                <ArticleList article={article} />
            </Suspense>
            <Pagination totalCount={totalCount} current={current} />
        </main>
    );
}
