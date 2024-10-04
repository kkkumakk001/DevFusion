"use client";
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
        <footer className="hidden" id="main-footer">
            <p>footer</p>
            <ul>
                <li>list</li>
                <li>list</li>
                <li>list</li>
            </ul>
        </footer>
    );
};

export default Footer;
