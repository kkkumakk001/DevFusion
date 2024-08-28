import ArticleList from "@/components/ArticleList";
import CategoryTitle from "@/components/CategoryTitle";
import Pagination from "@/components/Pagination";
import { NEWS_LIST_LIMIT } from "@/constants";
import { getArticleList, getCategoryDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ArticleListLoading from "../../loading";

type Props = {
    params: {
        categoryId: string;
    };
};

export default async function Page({ params }: Props) {
    const category = await getCategoryDetail(params.categoryId).catch(notFound);

    const { contents: article, totalCount } = await getArticleList({
        filters: `category[contains]${category.id}`,
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
            <CategoryTitle category={category} />
            <span className="block mb-8"></span>
            <Suspense fallback={<ArticleListLoading />}>
                <ArticleList article={article} />
            </Suspense>
            <Pagination totalCount={totalCount} basePath={`/article/category/${category.id}`} />
        </>
    );
}
