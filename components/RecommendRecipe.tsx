import { componentRecipe } from "@/datas/componentRecipe";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function RecommendRecipe() {
    return (
        <section id="recommendRecipe" className="bg-background p-8 lg:p-12 rounded-xl border">
            <div className="flex justify-between mb-8">
                <h2 className="font-semibold">レシピ集</h2>
                <span>
                    <Link
                        href="/component"
                        className="text-sm text-muted-foreground hover:text-accent-foreground hover:bg-accent/80 px-4 py-2 rounded-md transition duration-500"
                    >
                        レシピ一覧へ
                    </Link>
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
                {componentRecipe.map((component, index) => (
                    <div key={index}>
                        <p className="mb-2">
                            <Link
                                href={`/component/${component.linkName}`}
                                className="flex items-center"
                            >
                                <span className="font-light mr-1">{component.title}</span>
                                <ExternalLinkIcon className="w-4 h-4" />
                            </Link>
                        </p>
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
