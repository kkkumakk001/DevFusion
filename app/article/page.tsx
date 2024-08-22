import ArticleList from "@/components/ArticleList";
import { getArticleList } from "@/lib/microcms";

export default async function Articles() {
    const data = await getArticleList({
        limit: 5,
    });
    return (
        <main>
            <h2>記事一覧</h2>
            <ArticleList article={data.contents} />
        </main>
    );
}
