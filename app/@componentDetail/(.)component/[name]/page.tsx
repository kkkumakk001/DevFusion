import { notFound } from "next/navigation";
import { componentRecipe } from "@/datas/componentRecipe";
import ComponentDetail from "./ComponentDetail";
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
        <>
            <ComponentDetail title={component.title}>
                <div className="flex justify-center items-center">
                    <div className="w-full">
                        <p className="mb-4 font-semibold text-lg">{component.title}</p>
                        <div className="min-h-[300px] h-auto mb-4 p-4 border border-border rounded-xl flex justify-center items-center">
                            <span>{component.componentName}</span>
                        </div>
                        <span className="flex justify-end">
                            <ButtonLink href="/component">コンポーネント一覧へ</ButtonLink>
                        </span>
                    </div>
                </div>
            </ComponentDetail>
        </>
    );
}
