"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchFieldComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem("q");
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set("q", q.value.trim());
            router.push(`/article/search?${params.toString()}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <label className="flex items-center gap-3 px-4 py-3 border border-primary/30 focus-within:border-primary/70 w-full max-w-full rounded-sm">
                <MagnifyingGlassIcon width={24} height={24} />
                <input
                    type="text"
                    name="q"
                    defaultValue={searchParams.get("q") ?? undefined}
                    placeholder="キーワードを入力"
                    className="block p-0 w-full appearance-none outline-none bg-transparent border-transparent placeholder:text-primary"
                />
            </label>
        </form>
    );
}

export default function SearchField() {
    return (
        <Suspense>
            <SearchFieldComponent />
        </Suspense>
    );
}
