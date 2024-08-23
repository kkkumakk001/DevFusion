import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import { NEWS_LIST_LIMIT } from "@/constants";
import { getArticleList } from "@/lib/microcms";
import { notFound } from "next/navigation";

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
            <h2>全記事を10個ごとに分けた何ページ目か</h2>
            <ArticleList article={article} />
            <Pagination totalCount={totalCount} current={current} />
        </main>
    );
}
