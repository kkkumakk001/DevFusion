import RecentArticle from "@/components/RecentArticle";
import RecommendRecipe from "@/components/RecommendRecipe";

export default async function Home() {
    return (
        <>
            <RecentArticle />
            <RecommendRecipe />
        </>
    );
}
