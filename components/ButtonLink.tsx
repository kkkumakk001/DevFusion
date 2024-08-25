import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
    return (
        <Button asChild size="lg">
            <Link href={href}>
                {children}
                <ArrowRight size={16} className="ml-1" />
            </Link>
        </Button>
    );
}
