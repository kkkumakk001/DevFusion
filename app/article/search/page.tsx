import ArticleList from "@/components/ArticleList";
import SearchField from "@/components/SearchField";
import { NEWS_LIST_LIMIT } from "@/constants";
import { getArticleList } from "@/lib/microcms";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: article } = await getArticleList({
        limit: NEWS_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <main>
            <h2>特定のキーワードで絞り込んだ記事の一覧</h2>
            <SearchField />
            <ArticleList article={article} />
        </main>
    );
}
