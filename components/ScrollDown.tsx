"use client";
import { useCallback } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollDown = () => {
    const handleScroll = useCallback(() => {
        const target = document.getElementById("targetSection");
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
                className="animate-bounce-infinite delay-10000 p-4 text-white rounded-full shadow-lg"
            >
                <MdOutlineKeyboardDoubleArrowDown size="32px" />
            </button>
        </div>
    );
};

export default ScrollDown;
