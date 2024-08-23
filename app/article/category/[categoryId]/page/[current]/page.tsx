import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import { NEWS_LIST_LIMIT } from "@/constants";
import { getArticleList, getCategoryDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";

type Props = {
    params: {
        categoryId: string;
        current: string;
    };
};

export default async function Page({ params }: Props) {
    const current = parseInt(params.current, 10);
    if (Number.isNaN(current) || current < 1) {
        notFound();
    }
    const category = await getCategoryDetail(params.categoryId).catch(notFound);

    const { contents: article, totalCount } = await getArticleList({
        filters: `category[contains]${category.id}`,
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (current - 1),
    });

    if (article.length === 0) {
        notFound();
    }

    return (
        <main>
            <h2>
                {category.name}で絞り込んだ記事の一覧を3づつ分けた{current}ページ目
            </h2>
            <p>{params.categoryId}</p>
            <ArticleList article={article} />
            <Pagination
                totalCount={totalCount}
                current={current}
                basePath={`/article/category/${category.id}`}
            />
        </main>
    );
}
