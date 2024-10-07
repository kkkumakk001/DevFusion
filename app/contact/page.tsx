import { EnvelopeClosedIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/PageTitle";
import PageTitleMargin from "@/components/PageTitleMargin";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <PageTitle>お問い合わせ</PageTitle>
            <PageTitleMargin />
            <section className="max-w-screen-md mx-auto">
                <div className="mb-8 p-6 border border-border rounded-md">
                    <h2 className="font-semibold mb-4 text-primary">連絡先</h2>
                    <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center">
                            <EnvelopeClosedIcon className="mr-2" />
                            <Link href="mailto:kk.10.kuma.kk@gmail.com">
                                kk.10.kuma.kk@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mb-8 p-6 border border-border rounded-md">
                    <h2 className="font-semibold mb-2 text-primary">K.K</h2>
                    <p className="text-muted-foreground">
                        Next.jsとその周辺技術に興味があります。実務未経験ですが、ポートオフォリオとして作成した作品がこのDevFusionです。
                    </p>
                </div>

                <div className="mb-8 p-6 border border-border rounded-md">
                    <h2 className="font-semibold mb-2 text-primary">SNS</h2>
                    <div className="flex justify-center space-x-4">
                        <Button
                            asChild
                            variant="outline"
                            size="icon"
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                            <Link
                                href="https://github.com/kkkumakk001?tab=repositories"
                                target="_blank"
                            >
                                <GitHubLogoIcon className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="icon"
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                            <Link href="">
                                <TwitterLogoIcon className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
