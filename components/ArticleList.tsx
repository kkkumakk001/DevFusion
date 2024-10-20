import { Article } from "@/lib/microcms";
import Link from "next/link";
import Date from "./Date";
import { Button } from "./ui/button";
import BookmarkButton from "./BookmarkButton";

type Props = {
    article: Article[];
};

export default function ArticleList({ article }: Props) {
    if (article.length === 0) {
        return <p>記事がありません。</p>;
    }
    return (
        <ul>
            {article.map((article) => (
                <li
                    key={article.id}
                    className="w-full border-b border-dashed border-primary/30 p-6"
                >
                    <dl>
                        <dt className="text-lg mb-2 hover:underline flex justify-between items-center">
                            <Link href={`/article/${article.id}`}>{article.title}</Link>
                            <BookmarkButton articleId={article.id} />
                        </dt>
                        <dd className="md:flex">
                            <Date date={article.publishedAt ?? article.createdAt} />
                            <div className="mt-2 md:mt-0 md:ml-2">
                                {article.category.map((category) => (
                                    <Button key={category.name} asChild size="tag">
                                        <Link
                                            key={category.name}
                                            href={`/article/category/${category.id}`}
                                            className="[&:not(:last-child)]:mr-2 duration-500"
                                        >
                                            {category.name}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </dd>
                    </dl>
                </li>
            ))}
        </ul>
    );
}
