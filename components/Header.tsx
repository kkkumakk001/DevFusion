"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { ModeToggleButton } from "./ModeToggleButton";
import NavSheet from "./NavSheet";
import { MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuth } from "@/app/context/AuthContext";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

// import { NAV_LINK } from "@/constants";
const NAV_LINK = [
    { name: "はじめに戻る", ruby: "Home", href: "", delay: "delay-300" },
    { name: "記事一覧", ruby: "Article", href: "article", delay: "delay-600" },
    { name: "コンポーネント", ruby: "Component", href: "component", delay: "delay-900" },
    { name: "お問い合わせ", ruby: "Contact", href: "contact", delay: "delay-1200" },
];

export default function Header() {
    const { user } = useAuth();

    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out", error);
        }
    };

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
                    <Link href="/" className="text-xl font-semibold">
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
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="rounded-full inline-flex items-center justify-center h-10 w-10 cursor-pointer">
                                    {user.photoURL ? (
                                        <Image
                                            src={user.photoURL}
                                            alt="ユーザーアイコン"
                                            width={15}
                                            height={15}
                                            className="rounded-full h-[1.2rem] w-[1.2rem]"
                                        />
                                    ) : (
                                        <PersonIcon
                                            width={15}
                                            height={15}
                                            className="h-[1.2rem] w-[1.2rem]"
                                        />
                                    )}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href="dashboard">ブックマーク一覧</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={handleSignOut}>
                                    ログアウト
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button className="text-sm" onClick={signIn}>
                            Sign In
                        </Button>
                    )}
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
}
