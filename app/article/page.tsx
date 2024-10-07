import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import SearchField from "@/components/SearchField";
import { NEWS_LIST_LIMIT } from "@/constants";
import { getArticleList } from "@/lib/microcms";
import { Suspense } from "react";
import ArticleListLoading from "./loading";

export default async function Articles() {
    const { contents: article, totalCount } = await getArticleList({
        limit: NEWS_LIST_LIMIT,
    });
    return (
        <section>
            <SearchField />
            <Suspense fallback={<ArticleListLoading />}>
                <ArticleList article={article} />
            </Suspense>
            <Pagination totalCount={totalCount} />
        </section>
    );
}
