import { componentRecipe } from "@/datas/componentRecipe";
import Link from "next/link";

export default function RecommendRecipe() {
    return (
        // <section className="border border-border p-8 lg:p-12 rounded-xl shadow-lg dark:shadow-[2px_4px_8px_0_rgba(255,255,255,0.1)]">
        <section className="bg-background p-8 lg:p-12 rounded-xl shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-[0_0_12px_6px_rgba(255,255,255,0.05)]">
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
                            <Link href={`/component/${component.linkName}`} className="font-light">
                                {component.title}
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
