import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonWithIcon({ href, children }: Props) {
    return (
        <Button asChild>
            <Link href={href}>
                {children}
                <ArrowRight size={16} className="ml-1" />
            </Link>
        </Button>
    );
}

export const ButtonWithIconCode = `
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonWithIcon({ href, children }: Props) {
    return (
        <Button asChild>
            <Link href={href}>
                {children}
                <ArrowRight size={16} className="ml-1" />
            </Link>
        </Button>
    );
}
`;
