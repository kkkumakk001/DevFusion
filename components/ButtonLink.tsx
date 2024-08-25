import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
    return (
        <Button asChild size="lg">
            <Link href={href}>
                {children}
                <Image
                    className="ml-2"
                    width={16}
                    height={16}
                    alt="アイコン"
                    src="/arrow-right.svg"
                ></Image>
            </Link>
        </Button>
    );
}
