import Hero from "@/components/Hero";
import OpeningAnimation from "@/components/OpeningAnimation";
import RecentArticle from "@/components/RecentArticle";
import RecommendRecipe from "@/components/RecommendRecipe";

export default async function Home() {
    return (
        <OpeningAnimation>
            <Hero />
            <RecentArticle />
            <RecommendRecipe />
        </OpeningAnimation>
    );
}
