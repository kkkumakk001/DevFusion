"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { useSelectedLayoutSegments } from "next/navigation";

const Breadcrumbs = () => {
    const segments = useSelectedLayoutSegments();
    return (
        <>
            {segments.length > 0 ? (
                <div className="w-[95%] mx-auto">
                    <Breadcrumb className="border-border border-b-2 w-fit pb-2">
                        <BreadcrumbList>
                            {segments.length > 0 ? (
                                <span className="flex gap-2 items-center">
                                    <BreadcrumbLink asChild>
                                        <Link
                                            href="/"
                                            className="hover:text-foreground flex items-center"
                                        >
                                            <BreadcrumbItem className="h-full">
                                                <HomeIcon className="w-4 h-4" />
                                            </BreadcrumbItem>
                                        </Link>
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    <BreadcrumbItem className="h-full">
                                        <HomeIcon className="w-4 h-4" />
                                    </BreadcrumbItem>
                                </span>
                            )}
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
                                                <Link
                                                    href={`/${link}`}
                                                    className="hover:text-foreground"
                                                >
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
            ) : null}
        </>
    );
};

export default Breadcrumbs;
// "use client";

// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { HomeIcon } from "@radix-ui/react-icons";
// import Link from "next/link";

// import { useSelectedLayoutSegments } from "next/navigation";

// const Breadcrumbs = () => {
//     const segments = useSelectedLayoutSegments();
//     console.log(segments);
//     return (
//         <div className="w-[95%] mx-auto">
//             <Breadcrumb className="border-border border-b-2 w-fit pb-2">
//                 <BreadcrumbList>
//                     {segments.length > 0 ? (
//                         <span className="flex gap-2 items-center">
//                             <BreadcrumbLink asChild>
//                                 <Link href="/" className="hover:text-foreground flex items-center">
//                                     <BreadcrumbItem className="h-full">
//                                         <HomeIcon className="w-4 h-4" />
//                                     </BreadcrumbItem>
//                                 </Link>
//                             </BreadcrumbLink>
//                             <BreadcrumbSeparator />
//                         </span>
//                     ) : (
//                         <span className="flex items-center">
//                             <BreadcrumbItem className="h-full">
//                                 <HomeIcon className="w-4 h-4" />
//                             </BreadcrumbItem>
//                         </span>
//                     )}
//                     {segments.map((segment, index) => {
//                         const createLink = segments.slice(0, index + 1);
//                         const link = createLink.join("/");
//                         const notLink = link.endsWith("page");
//                         return (
//                             <span key={index} className="flex gap-2 items-center group">
//                                 <BreadcrumbLink asChild>
//                                     {notLink ? (
//                                         <BreadcrumbItem className="h-full">
//                                             {segment}
//                                         </BreadcrumbItem>
//                                     ) : (
//                                         <Link href={`/${link}`} className="hover:text-foreground">
//                                             <BreadcrumbItem className="h-full">
//                                                 {segment}
//                                             </BreadcrumbItem>
//                                         </Link>
//                                     )}
//                                 </BreadcrumbLink>
//                                 <BreadcrumbSeparator className="group-last:hidden" />
//                             </span>
//                         );
//                     })}
//                 </BreadcrumbList>
//             </Breadcrumb>
//         </div>
//     );
// };

// export default Breadcrumbs;
