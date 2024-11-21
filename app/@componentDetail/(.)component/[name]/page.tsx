import { notFound } from "next/navigation";
import { componentRecipe } from "@/datas/componentRecipe";
import ComponentDetail from "./ComponentDetail";
import styles from "../.././../styles/componentResipe.module.scss";
import ComponentDetailLoading from "./loading";
import { Suspense } from "react";

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
            <Suspense fallback={<ComponentDetailLoading />}>
                <ComponentDetail title={component.title}>
                    <div className="flex justify-center items-center">
                        <div className="w-full">
                            <p className="mb-4 font-semibold text-lg">{component.title}</p>
                            <div className="relative overflow-hidden min-h-[300px] h-auto mb-8 border border-border rounded-xl flex justify-center items-center">
                                <div className="absolute inset-0 h-full w-full bg-custom-pattern"></div>
                                <div className="p-10">{component.componentName}</div>
                            </div>
                            <div className={styles.highlight}>{component.content}</div>
                        </div>
                    </div>
                </ComponentDetail>
            </Suspense>
        </>
    );
}
