import Link from "next/link";
import Image from "next/image";
import type { Article } from "../lib/microcms";
import Date from "./Date";
import { Button } from "./ui/button";
import ButtonLink from "./ButtonLink";

type Props = {
    data: Article;
};

export default function ArticleDetail({ data }: Props) {
    return (
        <article>
            <h3 className="text-2xl">{data.title}</h3>
            <div className="grid gap-2 mb-8">
                <Date date={data.publishedAt ?? data.createdAt} />
                <div className="">
                    {data.category.map((category) => (
                        <Button asChild size="tag" key={category.name}>
                            <Link
                                href={`/article/category/${category.id}`}
                                className="[&:not(:last-child)]:mr-2 duration-500"
                            >
                                {category.name}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
            <p>この記事の概要↓</p>
            <p className="mb-8 pb-8 border-b border-primary/30">{data.description}</p>
            {data.thumbnail && (
                <Image
                    className="mb-16 w-full"
                    src={data.thumbnail.url}
                    alt=""
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                />
            )}
            <div
                className="mb-8 pb-8 border-b border-primary/30"
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            />
            <div className="flex justify-end">
                <ButtonLink href="/article">記事一覧へ</ButtonLink>
            </div>
        </article>
    );
}
