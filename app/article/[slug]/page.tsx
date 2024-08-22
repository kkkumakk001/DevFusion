import ArticleDetail from "@/components/ArticleDetail";
import { getArticleDetail } from "@/lib/microcms";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    const data = await getArticleDetail(params.slug);

    return (
        <main>
            <ArticleDetail data={data} />
        </main>
    );
}
