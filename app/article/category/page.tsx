import { Button } from "@/components/ui/button";
import { tags } from "@/datas/tags";
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <nav>
                <p className="pb-2 mb-4 border-b border-primary/30 max-w-fit">タグ一覧</p>
                <ul className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <li key={tag.name}>
                            <Button asChild size="tag">
                                <Link
                                    href={`/article/category/${tag.id}`}
                                    className="border duration-500"
                                >
                                    {tag.name}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Page;
