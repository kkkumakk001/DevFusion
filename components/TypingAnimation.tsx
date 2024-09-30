"use client";
import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
};

const TypingAnimation = ({ children }: Props) => {
    const [text, setText] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const fullText = typeof children === "string" ? children : "";

    useEffect(() => {
        let index = 0;

        const typing = () => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
                const timerId = window.setTimeout(typing, 80);
                return timerId;
            } else {
                setIsCompleted(true);
            }
        };

        const timerId = typing();

        return () => clearTimeout(timerId);
    }, [fullText]);

    return (
        <div className="px-4 text-wrap font-mono whitespace-pre-wrap overflow-hidden p-8 lg:p-12 rounded-xl">
            <span>{text}</span>
            {!isCompleted && <span className="ml-1 animate-blink-dot scale-150">●</span>}
        </div>
    );
};

export default TypingAnimation;
