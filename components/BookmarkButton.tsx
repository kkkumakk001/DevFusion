"use client";

import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { useBookmark } from "../hook/useBookmark";
import { useAuth } from "@/app/context/AuthContext";

type BookmarkButtonProps = {
    articleId: string;
};

export default function BookmarkButton({ articleId }: BookmarkButtonProps) {
    const { user } = useAuth();
    const { isBookmarked, toggleBookmark } = useBookmark(articleId);

    if (!user) {
        return null; // ユーザーがログインしていない場合はボタンを表示しない
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleBookmark}
            aria-label={isBookmarked ? "ブックマークを解除" : "ブックマークに追加"}
        >
            <Bookmark className={isBookmarked ? "fill-current text-primary" : "text-primary"} />
            <span className="sr-only">
                {isBookmarked ? "ブックマークを解除" : "ブックマークに追加"}
            </span>
        </Button>
    );
}
