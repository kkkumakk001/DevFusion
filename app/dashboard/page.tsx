import BookmarkArticle from "@/components/BookMarkArticle";

export default async function Page() {
    return (
        <div className="flex-1 w-full flex flex-col gap-20 items-center pt-24">
            <BookmarkArticle></BookmarkArticle>
        </div>
    );
}
