import { FaceIcon, GitHubLogoIcon, PersonIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import { tags } from "@/datas/tags";

export default function SideNav() {
    return (
        <>
            <div>
                <p className="pb-2 mb-4 border-b border-primary/30">プロフィール</p>
                <div>
                    <PersonIcon width={64} height={64} className="block mx-auto" />
                    <p className="text-center mb-4">K.K</p>
                    <p className="mb-4">
                        <span>
                            Next.jsとその周辺技術についての記事が多めです。アイドルと野球が好きです
                        </span>
                        <FaceIcon width={16} height={16} className="inline-block" />
                    </p>
                </div>
                <div className="mb-16">
                    <Link
                        href="https://github.com/kkkumakk001"
                        className="flex items-center justify-center gap-1 border border-primary/30 hover:border-primary/70 duration-300 px-2 py-1 rounded-sm w-[200px] mx-auto mb-4"
                    >
                        <GitHubLogoIcon className="inline-block" />
                        Github
                    </Link>
                    <Link
                        href="https://x.com/"
                        className="flex items-center justify-center gap-1 border border-primary/30 hover:border-primary/70 duration-300 px-2 py-1 rounded-sm w-[200px] mx-auto"
                    >
                        <TwitterLogoIcon className="inline-block" />
                        Twitter
                    </Link>
                </div>
            </div>
            <nav>
                <p className="pb-2 mb-4 border-b border-primary/30">タグ一覧</p>
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
        </>
    );
}
