import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import { NEWS_LIST_LIMIT } from "@/constants";
import { getArticleList } from "@/lib/microcms";

export default async function Articles() {
    const { contents: article, totalCount } = await getArticleList({
        limit: NEWS_LIST_LIMIT,
    });
    return (
        <main>
            <h2>記事一覧</h2>
            <ArticleList article={article} />
            <Pagination totalCount={totalCount} />
        </main>
    );
}
