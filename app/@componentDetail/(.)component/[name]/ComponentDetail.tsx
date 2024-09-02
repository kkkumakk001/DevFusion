"use client";

import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function ComponentDetail({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);
    const outsideClick = () => {
        setIsOpen(false);
        router.back();
    };

    return (
        <div>
            {isOpen && (
                <div>
                    <Sheet open={isOpen} onOpenChange={outsideClick}>
                        <SheetDescription>
                            <VisuallyHidden.Root>説明文です</VisuallyHidden.Root>
                        </SheetDescription>
                        <SheetTitle>
                            <VisuallyHidden.Root>{title}</VisuallyHidden.Root>
                        </SheetTitle>
                        <SheetContent side="right" className="w-full pt-16">
                            {children}
                        </SheetContent>
                    </Sheet>
                </div>
            )}
        </div>
    );
}
