import ArticleDetail from "@/components/ArticleDetail";
import { getArticleDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ArticleDetailLoading from "./loading";

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    };
};

export default async function Page({ params, searchParams }: Props) {
    const data = await getArticleDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
            <Suspense fallback={<ArticleDetailLoading />}>
                <ArticleDetail data={data} />
            </Suspense>
        </>
    );
}
