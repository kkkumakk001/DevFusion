import { FaceIcon, PersonIcon } from "@radix-ui/react-icons";

export default function SideNav() {
    return (
        <>
            <section>
                <p className="pb-2 mb-4 border-b border-primary/30">プロフィール</p>
                <div>
                    <PersonIcon width={64} height={64} className="block mx-auto" />
                    <p className="text-center mb-4">K.K</p>
                    <p className="">
                        <span>
                            Next.jsとその周辺技術についての記事が多めです。アイドルと野球が好きです
                        </span>
                        <FaceIcon width={16} height={16} className="inline-block" />
                    </p>
                </div>
            </section>
            <nav>
                <ul>
                    <li></li>
                </ul>
            </nav>
        </>
    );
}
