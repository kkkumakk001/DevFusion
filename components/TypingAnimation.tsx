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
                setText(fullText.slice(0, index + 1)); // 現在のindexまでの文字列を設定
                index++;
                const timerId = window.setTimeout(typing, 80); // タイピング速度
                return timerId;
            } else {
                setIsCompleted(true); // 全ての文字が表示されたら完了フラグをセット
            }
        };

        const timerId = typing();

        return () => clearTimeout(timerId); // コンポーネントがアンマウントされたときにタイマーをクリア
    }, [fullText]);

    return (
        // <div className="px-4 text-wrap font-mono whitespace-pre-wrap overflow-hidden">
        <div className="px-4 text-wrap font-mono whitespace-pre-wrap overflow-hidden bg-background p-8 lg:p-12 rounded-xl shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-[0_0_12px_6px_rgba(255,255,255,0.05)]">
            <span>{text}</span>
            {!isCompleted && <span className="ml-1 animate-blink-dot scale-150">●</span>}
        </div>
    );
};

export default TypingAnimation;
