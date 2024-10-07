import { NEWS_LIST_LIMIT } from "../constants";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
    totalCount: number;
    current?: number;
    basePath?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = "/article" }: Props) {
    const pages = Array.from({ length: Math.ceil(totalCount / NEWS_LIST_LIMIT) }, (_, i) => i + 1);

    return (
        <nav>
            <ul className="flex justify-center items-center p-6 mt-6">
                {pages.map((p) => (
                    <li key={p} className="mx-1">
                        {current !== p ? (
                            <Link
                                href={`${basePath}/page/${p}`}
                                className="flex justify-center items-center w-9 h-9 rounded-sm"
                            >
                                {p}
                            </Link>
                        ) : (
                            <Button asChild variant="noDesign" size="sm">
                                <span className="flex justify-center items-center w-9 h-9 rounded-sm bg-primary text-background">
                                    {p}
                                </span>
                            </Button>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
