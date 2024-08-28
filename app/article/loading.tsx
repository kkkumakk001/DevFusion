import { Skeleton } from "@/components/ui/skeleton";

function LoadingComponent() {
    return (
        <div className="space-y-2 border-b border-dashed border-primary/30 p-6">
            <Skeleton className="h-7 w-[100%]" />
            <Skeleton className="h-7 w-[70%]" />
        </div>
    );
}

const ArticleListLoading = () => {
    return (
        <div>
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
        </div>
    );
};
export default ArticleListLoading;
