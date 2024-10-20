"use client";

import { useState, useEffect } from "react";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../app/context/AuthContext";

export function useBookmark(articleId: string) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const checkBookmarkStatus = async () => {
            if (!user) return;
            const docRef = doc(db, `users/${user.uid}/bookmarks`, `${user.uid}_${articleId}`);
            const docSnap = await getDoc(docRef);
            setIsBookmarked(docSnap.exists());
        };

        checkBookmarkStatus();
    }, [user, articleId]);

    const toggleBookmark = async () => {
        if (!user) return;
        const docRef = doc(db, `users/${user.uid}/bookmarks`, `${user.uid}_${articleId}`);
        if (isBookmarked) {
            await deleteDoc(docRef);
        } else {
            //   set() を使用してドキュメントを作成する場合、作成するドキュメントの ID を指定する必要があります
            await setDoc(docRef, { userId: user.uid, articleId });
        }
        setIsBookmarked(!isBookmarked);
    };

    return { isBookmarked, toggleBookmark };
}
