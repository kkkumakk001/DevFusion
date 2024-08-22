import Link from "next/link";
import Image from "next/image";
import type { Article } from "../lib/microcms";
// import Category from "../Category";
import Date from "./Date";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import ButtonLink from "./ButtonLink";

type Props = {
    data: Article;
};

export default function ArticleDetail({ data }: Props) {
    return (
        <article className="flex justify-center mb-20">
            <Card className="max-w-[900px]">
                <CardHeader className="mb-16">
                    <CardTitle className="mb-4 text-3xl">{data.title}</CardTitle>
                    <div className="grid gap-2">
                        <Date date={data.publishedAt ?? data.createdAt} />
                        <div className="mb-8">
                            {data.category.map((category) => (
                                <Button asChild size="sm">
                                    <Link
                                        key={category.name}
                                        href={`/article/category/${category.name}`}
                                        className="border px-2 py-1 rounded-xl [&:not(:last-child)]:mr-2 hover:bg-blue-200 duration-500"
                                    >
                                        {category.name}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <p>この記事の概要↓</p>
                    <CardDescription className="text-base">{data.description}</CardDescription>
                </CardHeader>
                <CardContent>
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
                        className="mb-16"
                        dangerouslySetInnerHTML={{
                            __html: data.content,
                        }}
                    />
                    <div className="flex justify-end">
                        <ButtonLink href="/article">記事一覧へ</ButtonLink>
                    </div>
                </CardContent>
            </Card>
        </article>
    );
}
