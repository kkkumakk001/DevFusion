"use client";
import { NAV_LINK } from "@/constants";
import Link from "next/link";
import React, { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        const footer = document.getElementById("main-footer");
        const timer = setTimeout(() => {
            if (footer) {
                footer.classList.remove("hidden");
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <footer className="hidden text-primary dark:text-muted-foreground py-16" id="main-footer">
            <div className="container mx-auto text-center">
                <p className="text-2xl font-bold">DevFusion</p>
                <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
                    {NAV_LINK.map((nav) => {
                        return (
                            <Link
                                key={nav.name}
                                href={`/${nav.href}`}
                                className={`hover:underline ${nav.delay} animate-text-pop-up-top`}
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
                <p className="mt-8 text-sm">&copy; 2024 kkkumakk001</p>
            </div>
        </footer>
    );
};

export default Footer;
