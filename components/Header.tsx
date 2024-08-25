import Link from "next/link";
import React from "react";
import { ModeToggleButton } from "./ModeToggleButton";
import NavSheet from "./NavSheet";

const Header = () => {
    return (
        <header className="mx-auto flex w-[90%] items-center justify-between py-2">
            <h1 className="font-semibold">
                <Link href="/">DevFusion</Link>
            </h1>
            <div className="flex wrap gap-4">
                <ModeToggleButton />
                <NavSheet className="md:hidden" />
            </div>
        </header>
    );
};

export default Header;
