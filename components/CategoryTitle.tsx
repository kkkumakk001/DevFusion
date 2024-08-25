import { CategoryName } from "@/lib/microcms";
import Link from "next/link";

type Props = {
    category: CategoryName;
};
export default function CategoryTitle({ category }: Props) {
    return (
        <p className="pl-6">
            <Link
                key={category.name}
                href={`/article/category/${category.id}`}
                className="duration-500"
            >
                "{category.name}"
            </Link>
            <span className="">の検索結果</span>
        </p>
    );
}
