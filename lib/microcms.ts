import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type CategoryName = { name: string; id: string } & MicroCMSListContent;

export type Category = [{ name: string; id: string }] & MicroCMSListContent;

export type Article = {
    title: string;
    description: string;
    content: string;
    category: Category;
    thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}
// if (!process.env.MICROCMS_SERVICE_DOMAIN) {
//     throw new Error("MICROCMS_SERVICE_DOMAIN is required");
// }

// if (!process.env.MICROCMS_API_KEY) {
//     throw new Error("MICROCMS_API_KEY is required");
// }

const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});
// const client = createClient({
//     serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
//     apiKey: process.env.MICROCMS_API_KEY,
// });

export const getArticleList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Article>({
        endpoint: "article",
        queries,
    });
    return listData;
};

export const getArticleDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const customRequestInit: { next?: { revalidate?: number } } = {};

    if (queries?.draftKey !== undefined) {
        customRequestInit.next = { revalidate: 0 };
    }

    const detailData = await client.getListDetail<Article>({
        endpoint: "article",
        contentId,
        queries,
        customRequestInit,
    });

    return detailData;
};
// export const getArticleDetail = async (contentId: string, queries?: MicroCMSQueries) => {
//     const detailData = await client.getListDetail<Article>({
//         endpoint: "article",
//         contentId,
//         queries,
//         customRequestInit: {
//             next: {
//                 revalidate: queries?.draftKey === undefined ? 60 : 0,
//             },
//         },
//     });

//     return detailData;
// };

export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<CategoryName>({
        endpoint: "categories",
        contentId,
        queries,
    });

    return detailData;
};
// export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
//     const detailData = await client.getListDetail<Category>({
//         endpoint: "categories",
//         contentId,
//         queries,
//     });

//     return detailData;
// };
