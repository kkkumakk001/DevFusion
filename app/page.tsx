import Hero from "@/components/Hero";
import RecentArticle from "@/components/RecentArticle";
import RecommendRecipe from "@/components/RecommendRecipe";

export default async function Home() {
    return (
        <>
            <Hero />
            <RecentArticle />
            <RecommendRecipe />
        </>
    );
}
