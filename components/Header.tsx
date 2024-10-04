"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { ModeToggleButton } from "./ModeToggleButton";
import NavSheet from "./NavSheet";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
// import { NAV_LINK } from "@/constants";
const NAV_LINK = [
    { name: "はじめに戻る", ruby: "Home", href: "", delay: "delay-300" },
    { name: "記事一覧", ruby: "Article", href: "article", delay: "delay-600" },
    { name: "コンポーネント", ruby: "Component", href: "component", delay: "delay-900" },
    { name: "お問い合わせ", ruby: "Contact", href: "contact", delay: "delay-1200" },
];

const Header = () => {
    useEffect(() => {
        const header = document.getElementById("main-header");
        const hasVisited = localStorage.getItem("hasVisited");

        const timer = setTimeout(
            () => {
                if (!hasVisited) {
                    localStorage.setItem("hasVisited", "true");
                }
                if (header) {
                    header.classList.remove("hidden");
                }
            },
            hasVisited ? 0 : 4000
        );

        return () => clearTimeout(timer);
    }, []);

    return (
        <header
            id="main-header"
            className="hidden sticky top-0 z-50 py-4 text-primary dark:text-muted-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 "
        >
            <div className="mx-auto flex w-[95%] items-center justify-between">
                <h1>
                    <Link href="/" className="text-xl font-semibold font-serif">
                        DevFusion
                    </Link>
                </h1>
                <div className="hidden lg:block">
                    <ul className="flex flex-row space-x-8">
                        {NAV_LINK.map((nav) => {
                            return (
                                <Link
                                    key={nav.name}
                                    href={`/${nav.href}`}
                                    className={`hover:underline animate-text-pop-up-top ${nav.delay}`}
                                >
                                    <span>
                                        <ruby>
                                            <span className="text-sm">{nav.name}</span>
                                            <rt className="text-xs tracking-wider font-thin">
                                                {nav.ruby}
                                            </rt>
                                        </ruby>
                                    </span>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex wrap">
                    <Button variant="noDesign" size="icon">
                        <Link href="/article/search">
                            <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
                        </Link>
                    </Button>
                    <ModeToggleButton />
                    <NavSheet className="lg:hidden" />
                </div>
            </div>
        </header>
    );
};

export default Header;
