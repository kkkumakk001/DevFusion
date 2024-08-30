"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

import { useSelectedLayoutSegments } from "next/navigation";

const Breadcrumbs = () => {
    const segments = useSelectedLayoutSegments();
    return (
        <div className="w-[95%] mx-auto">
            <Breadcrumb>
                <BreadcrumbList>
                    {segments.map((segment, index) => {
                        const createLink = segments.slice(0, index + 1);
                        const link = createLink.join("/");
                        const notLink = link.endsWith("page");
                        return (
                            <span key={index} className="flex gap-2 items-center group">
                                <BreadcrumbLink asChild>
                                    {notLink ? (
                                        <BreadcrumbItem className="h-full">
                                            {segment}
                                        </BreadcrumbItem>
                                    ) : (
                                        <Link href={`/${link}`} className="hover:text-foreground">
                                            <BreadcrumbItem className="h-full">
                                                {segment}
                                            </BreadcrumbItem>
                                        </Link>
                                    )}
                                </BreadcrumbLink>
                                <BreadcrumbSeparator className="group-last:hidden" />
                            </span>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default Breadcrumbs;
