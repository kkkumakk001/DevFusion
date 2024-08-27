import Link from "next/link";
import React from "react";
import { ModeToggleButton } from "./ModeToggleButton";
import NavSheet from "./NavSheet";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="mx-auto flex w-[95%] items-center justify-between py-4">
            <h1 className="text-2xl">
                <Link href="/">DevFusion</Link>
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
        </header>
    );
};

export default Header;
