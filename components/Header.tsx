import Link from "next/link";
import React from "react";
import { ModeToggleButton } from "./ModeToggleButton";
import NavSheet from "./NavSheet";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="sticky top-0 z-100 py-4 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
            <div className="mx-auto flex w-[95%] items-center justify-between">
                <h1>
                    <Link href="/" className="text-xl font-bold">
                        DevFusion
                    </Link>
                </h1>
                <div className="flex wrap">
                    <Button variant="noDesign" size="icon">
                        <Link href="/article/search">
                            <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
                        </Link>
                    </Button>
                    <ModeToggleButton />
                    <NavSheet className="md:hidden" />
                </div>
            </div>
        </header>
    );
};

export default Header;
