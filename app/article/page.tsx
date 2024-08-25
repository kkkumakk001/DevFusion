import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import SearchField from "@/components/SearchField";
import { NEWS_LIST_LIMIT } from "@/constants";
import { getArticleList } from "@/lib/microcms";

export default async function Articles() {
    const { contents: article, totalCount } = await getArticleList({
        limit: NEWS_LIST_LIMIT,
    });
    return (
        <main className="w-[90%] pt-12 mx-auto">
            <SearchField />
            <ArticleList article={article} />
            <Pagination totalCount={totalCount} />
        </main>
    );
}
