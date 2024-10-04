"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OpeningAnimation({ children }: { children: React.ReactNode }) {
    const [showOpening, setShowOpening] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOpening(false);
            setShowContent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const header = document.querySelector("header");
        if (header) {
            header.style.display = showOpening ? "none" : "block";
        }
        const footer = document.querySelector("footer");
        if (footer) {
            footer.style.display = showOpening ? "none" : "block";
        }
        const hero = document.getElementById("#hero");
        if (hero) {
            hero.style.display = showOpening ? "none" : "block";
        }
        const recommendRecipe = document.getElementById("#recommendRecipe");
        if (recommendRecipe) {
            recommendRecipe.style.display = showOpening ? "none" : "block";
        }
        const recentArticle = document.getElementById("#recentArticle");
        if (recentArticle) {
            recentArticle.style.display = showOpening ? "none" : "block";
        }
    }, [showOpening]);

    return (
        <>
            <AnimatePresence>
                {showOpening && (
                    <motion.div
                        key="opening"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center text-white"
                    >
                        <motion.h1
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                            className="text-4xl font-bold"
                        >
                            Welcome to DevFusion!
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            {showContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            )}
        </>
    );
}
