import { Skeleton } from "@/components/ui/skeleton";

const ArticleDetailLoading = () => {
    return (
        <div>
            <Skeleton className="h-8 w-[100%] mb-2"></Skeleton>
            <Skeleton className="h-6 w-[80px] mb-2" />
            <div className="mb-8 pb-8 flex gap-2 border-b border-primary/30">
                <Skeleton className="h-6 w-[80px]" />
                <Skeleton className="h-6 w-[80px]" />
                <Skeleton className="h-6 w-[80px]" />
            </div>
            <Skeleton className="h-28 w-full pb-8 mb-8" />
            <Skeleton className="h-[500px] w-full" />
        </div>
    );
};
export default ArticleDetailLoading;
