import { notFound } from "next/navigation";
import { componentRecipe } from "@/datas/componentRecipe";
import ButtonLink from "@/components/ButtonLink";

export const dynamicParams = false;

export function generateStaticParams() {
    return componentRecipe.map((component) => ({ name: component.linkName }));
}

export default function Page({ params: { name } }: { params: { name: string } }) {
    const component = componentRecipe.find((comp) => comp.linkName === name);
    if (component === undefined) {
        notFound();
    }
    return (
        <div className="flex justify-center items-center max-w-3xl mx-auto">
            <div className="w-full">
                <p className="mt-8 mb-4 font-semibold text-lg">{component.title}</p>
                <div className="min-h-[300px] h-auto p-4 mb-6 border border-border rounded-xl flex justify-center items-center">
                    <span>{component.componentName}</span>
                </div>
                <span className="flex justify-end">
                    <ButtonLink href="/component">コンポーネント一覧へ</ButtonLink>
                </span>
            </div>
        </div>
    );
}
