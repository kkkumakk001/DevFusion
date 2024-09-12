import ArticleList from "@/components/ArticleList";
import { TOP_NEWS_LIMIT } from "@/constants";
import { componentRecipe } from "@/datas/componentRecipe";
import { getArticleList } from "@/lib/microcms";
import Link from "next/link";

export default async function Home() {
    const { contents: article } = await getArticleList({
        limit: TOP_NEWS_LIMIT,
    });

    return (
        <>
            <section className="border border-border p-12 rounded-xl mb-8">
                <div className="flex justify-between mb-4">
                    <h2 className="font-bold">新着記事</h2>
                    <span>
                        <Link
                            href="/article"
                            className="text-sm text-muted-foreground hover:text-accent-foreground hover:bg-accent/80 px-4 py-2 rounded-md transition duration-500"
                        >
                            記事一覧へ
                        </Link>
                    </span>
                </div>
                <ArticleList article={article} />
            </section>
            <section className="border border-border p-12 rounded-xl">
                <div className="flex justify-between mb-8">
                    <h2>おすすめのコンポーネント</h2>
                    <span>
                        <Link
                            href="/component"
                            className="text-sm text-muted-foreground hover:text-accent-foreground hover:bg-accent/80 px-4 py-2 rounded-md transition duration-500"
                        >
                            コンポーネント一覧へ
                        </Link>
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
                    {componentRecipe.map((component, index) => (
                        <div
                            key={index}
                            className="grid grid-rows-subgrid row-span-1 md:row-span-2 xl:row-span-3"
                        >
                            <Link
                                href={`/component/${component.linkName}`}
                                className="mb-2 font-semibold"
                            >
                                {component.title}
                            </Link>
                            <div className="relative overflow-hidden h-[200px] md:h-[300px] border border-border rounded-xl flex justify-center items-center">
                                <div className="absolute inset-0 h-full w-full bg-custom-pattern"></div>
                                <div className="p-10">{component.componentName}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
