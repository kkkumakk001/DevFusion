import ArticleList from "@/components/ArticleList";
import SearchField from "@/components/SearchField";
import { getArticleList } from "@/lib/microcms";
import { Suspense } from "react";
import ArticleListLoading from "../loading";

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
            <Suspense fallback={<ArticleListLoading />}>
                <ArticleList article={article} />
            </Suspense>
        </main>
    );
}
