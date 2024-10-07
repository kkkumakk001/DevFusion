import PageTitle from "@/components/PageTitle";
import PageTitleMargin from "@/components/PageTitleMargin";
import { componentRecipe } from "@/datas/componentRecipe";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <PageTitle>コンポーネント集</PageTitle>
            <PageTitleMargin />
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
                            <div className="p-10">{component.componentName}</div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
