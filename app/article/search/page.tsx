import ArticleList from "@/components/ArticleList";
import SearchField from "@/components/SearchField";
import { getArticleList } from "@/lib/microcms";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: article } = await getArticleList({
        q: searchParams.q,
    });

    return (
        <main>
            <SearchField />
            <ArticleList article={article} />
        </main>
    );
}
