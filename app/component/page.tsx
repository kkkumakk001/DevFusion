import { componentRecipe } from "@/datas/componentRecipe";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <h2 className="text-2xl font-semibold mb-12">コンポーネント集</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
                {componentRecipe.map((component, index) => (
                    <div key={index}>
                        <p className="mb-2">
                            <Link
                                href={`/component/${component.linkName}`}
                                className="font-semibold"
                            >
                                {component.title}
                            </Link>
                        </p>
                        <div className="relative overflow-hidden h-[200px] md:h-[300px] border border-border rounded-xl flex justify-center items-center">
                            <div className="absolute inset-0 h-full w-full bg-custom-pattern"></div>
                            <div className="p-10">{component.componentName}</div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
