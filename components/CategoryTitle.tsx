import { CategoryName } from "@/lib/microcms";
import Link from "next/link";

type Props = {
    category: CategoryName;
};
export default function CategoryTitle({ category }: Props) {
    return (
        <p className="pl-6 pb-2 border-b border-primary/30 max-w-fit">
            <span className="-ml-6">
                <Link
                    key={category.name}
                    href={`/article/category/${category.id}`}
                    className="duration-500"
                >
                    &quot;{category.name}&#34;
                </Link>
                <span className="">の検索結果</span>
            </span>
        </p>
    );
}
