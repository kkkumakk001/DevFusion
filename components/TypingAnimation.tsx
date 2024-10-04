"use client";

import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
};

const TypingAnimation = ({ children }: Props) => {
    const [text, setText] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [isFirstVisit, setIsFirstVisit] = useState(true);
    const fullText = typeof children === "string" ? children : "";

    // 初回訪問時だけにするか迷ってる
    useEffect(() => {
        // const hasVisited = localStorage.getItem("hasVisitedTyping");
        // if (hasVisited) {
        //     setIsFirstVisit(false);
        //     setText(fullText);
        //     setIsCompleted(true);
        // } else {
        let index = 0;

        const typing = () => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
                return window.setTimeout(typing, 80);
            } else {
                setIsCompleted(true);
                localStorage.setItem("hasVisitedTyping", "true");
                return undefined;
            }
        };

        const timerId = typing();

        return () => {
            if (timerId) clearTimeout(timerId);
        };
        // }
    }, [fullText]);

    return (
        <div className="px-4 text-wrap font-mono whitespace-pre-wrap overflow-hidden p-8 lg:p-12 rounded-xl">
            <span>{text}</span>
            {!isCompleted && isFirstVisit && (
                <span className="ml-1 animate-blink-dot scale-150">●</span>
            )}
        </div>
    );
};

export default TypingAnimation;
