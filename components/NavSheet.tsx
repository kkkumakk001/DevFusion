"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navLink = [
    { name: "Home", href: "" },
    { name: "Article", href: "article" },
    { name: "Component", href: "component" },
    { name: "Contact", href: "contact" },
];

export default function NavSheet({ className }: { className?: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn(className, "flex items-center justify-center")}>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="md:hidden">
                    <Button asChild variant="noDesign" size="icon">
                        <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]"></HamburgerMenuIcon>
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side={"top"}
                    className="flex h-screen flex-col flex-wrap items-center justify-center"
                >
                    {navLink.map((nav, index) => {
                        return (
                            <Link
                                key={nav.name}
                                href={`/${nav.href}`}
                                className="hover:underline animate-accordion-down relative"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <span className="absolute block h-full bg-background animate-slide-to-right delay-100"></span>
                                <span>{nav.name}</span>
                            </Link>
                        );
                    })}
                </SheetContent>
            </Sheet>
        </div>
    );
}
