// "use client";

// import { type ElementRef, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { createPortal } from "react-dom";

// export function Modal({ children }: { children: React.ReactNode }) {
//     const router = useRouter();
//     const dialogRef = useRef<ElementRef<"dialog">>(null);

//     useEffect(() => {
//         if (!dialogRef.current?.open) {
//             dialogRef.current?.showModal();
//         }
//     }, []);

//     function onDismiss() {
//         router.back();
//     }

//     return createPortal(
//         <div className="modal-backdrop">
//             <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
//                 {children}
//                 <button onClick={onDismiss} className="close-button" />
//             </dialog>
//         </div>,
//         document.getElementById("modal-root")!
//     );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ComponentDetail({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const insideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setOpen(true);
    }, []);

    useEffect(() => {
        const el = insideRef.current;

        if (!el) return;

        const hundleClickOutside = (e: MouseEvent) => {
            if (!el?.contains(e.target as Node)) {
                router.back();
            }
        };

        document.addEventListener("click", hundleClickOutside);

        return () => {
            document.removeEventListener("click", hundleClickOutside);
        };
    }, [insideRef]);

    return (
        <div ref={insideRef} className={cn(className, "flex items-center justify-center")}>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="right" className="flex items-center justify-center">
                    {children}
                    <button onClick={router.back}>一覧に戻る</button>
                </SheetContent>
            </Sheet>
        </div>
    );
}
