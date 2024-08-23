import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
    return (
        <Button asChild size="lg">
            <Link href={href}>
                {children}
                <img className="ml-2 size-4" src="/arrow-right.svg"></img>
            </Link>
        </Button>
    );
}
