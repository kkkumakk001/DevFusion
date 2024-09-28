"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const navLink = [
    { name: "はじめに戻る", ruby: "Home", href: "", delay: "delay-300" },
    { name: "記事一覧", ruby: "Article", href: "article", delay: "delay-600" },
    { name: "コンポーネント", ruby: "Component", href: "component", delay: "delay-900" },
    { name: "お問い合わせ", ruby: "Contact", href: "contact", delay: "delay-1200" },
];

export default function NavSheet({ className }: { className?: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn(className, "flex items-center justify-center")}>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="md:hidden flex justify-center items-center w-10 h-10">
                    <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]"></HamburgerMenuIcon>
                </SheetTrigger>
                <SheetContent
                    side={"top"}
                    className="flex h-screen flex-col flex-wrap items-center justify-center gap-6"
                >
                    {navLink.map((nav) => {
                        return (
                            <Link
                                key={nav.name}
                                href={`/${nav.href}`}
                                className={`hover:underline ${nav.delay} animate-text-pop-up-top`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <span>
                                    <ruby>
                                        {nav.name}
                                        <rt className="text-xs tracking-wider font-thin">
                                            {nav.ruby}
                                        </rt>
                                    </ruby>
                                </span>
                                {/* <span>
                                    <ruby>
                                        {nav.name}
                                        <rt className="text-xs tracking-wider font-thin">
                                            {nav.ruby}
                                        </rt>
                                    </ruby>
                                </span> */}
                            </Link>
                        );
                    })}
                </SheetContent>
            </Sheet>
        </div>
    );
}
