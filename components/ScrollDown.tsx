"use client";
import { useCallback } from "react";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

const ScrollDown = () => {
    const handleScroll = useCallback(() => {
        const target = document.getElementById("recentArticle");
        const headerOffset = 88;

        if (target) {
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button
                onClick={handleScroll}
                className="animate-bounce-infinite delay-10000 p-4 rounded-full shadow-lg"
            >
                <DoubleArrowDownIcon />
            </button>
        </div>
    );
};

export default ScrollDown;
