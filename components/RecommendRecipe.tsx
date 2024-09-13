import { componentRecipe } from "@/datas/componentRecipe";
import Link from "next/link";

export default function RecommendRecipe() {
    return (
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
                        <div className="mb-2">
                            <Link
                                href={`/component/${component.linkName}`}
                                className="font-semibold"
                            >
                                {component.title}
                            </Link>
                        </div>
                        <div className="relative overflow-hidden h-[200px] md:h-[300px] border border-border rounded-xl flex justify-center items-center">
                            <div className="absolute inset-0 h-full w-full bg-custom-pattern"></div>
                            <div className="p-4">{component.componentName}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
