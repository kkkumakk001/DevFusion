import { Article } from "@/lib/microcms";
import Link from "next/link";
import Date from "./Date";
import { Button } from "./ui/button";
// import Image from "next/image";
// import Category from "../Category";

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
                <li key={article.id} className="w-full [&:not(:last-child)]:border-b p-6">
                    <dl>
                        <dt className="text-lg mb-2 hover:underline">
                            <Link href={`/article/${article.id}`}>{article.title}</Link>
                        </dt>
                        <dd className="md:flex">
                            {/* <dd> */}
                            <Date date={article.publishedAt ?? article.createdAt} />
                            <div className="mt-2 md:mt-0 md:ml-2">
                                {article.category.map((category) => (
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
                        </dd>
                    </dl>
                </li>
            ))}
        </ul>
        // <ul className="flex flex-wrap gap-8">
        //     {article.map((article) => (
        //         <li
        //             key={article.id}
        //             className="w-full flex flex-wrap md:flex-nowrap gap-4 md:gap-8 [&:not(:last-child)]:border-b p-12"
        //         >
        //             {article.thumbnail ? (
        //                 <Image
        //                     className="w-full md:w-[200px] max-h-[300px] md:h-[120px] object-contain"
        //                     src={article.thumbnail.url}
        //                     alt=""
        //                     width={article.thumbnail.width}
        //                     height={article.thumbnail.height}
        //                 />
        //             ) : (
        //                 <Image
        //                     className="w-full md:w-[200px] object-contain"
        //                     src="/no-image.png"
        //                     alt="No Image"
        //                     width={1200}
        //                     height={630}
        //                 />
        //             )}
        //             <dl>
        //                 <dt className="text-lg mb-2 hover:underline">
        //                     <Link href={`/article/${article.id}`}>{article.title}</Link>
        //                 </dt>
        //                 <dd className="flex flex-wrap">
        //                     <div className="mb-2">
        //                         {article.category.map((category) => (
        //                             <Link
        //                                 key={category.name}
        //                                 href={`/article/category/${category.name}`}
        //                                 className="border px-2 py-1 rounded-xl [&:not(:last-child)]:mr-2"
        //                             >
        //                                 {category.name}
        //                             </Link>
        //                         ))}
        //                     </div>
        //                     <div className="w-full">{article.publishedAt ?? article.createdAt}</div>
        //                 </dd>
        //             </dl>
        //         </li>
        //     ))}
        // </ul>
    );
}
