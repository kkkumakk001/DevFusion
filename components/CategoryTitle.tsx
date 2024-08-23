import { CategoryName } from "@/lib/microcms";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
    category: CategoryName;
};
export default function CategoryTitle({ category }: Props) {
    return (
        <p>
            <Button asChild size="sm">
                <Link
                    key={category.name}
                    href={`/article/category/${category.id}`}
                    className="border px-2 py-1 rounded-xl duration-500"
                >
                    {category.name}
                </Link>
            </Button>
            <span>の一覧</span>
        </p>
    );
}
