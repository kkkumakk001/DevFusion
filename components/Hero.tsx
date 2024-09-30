import TypingAnimation from "./TypingAnimation";

const Hero = () => {
    return (
        <div className="w-full bg-background border rounded-xl mb-12 flex justify-center items-center mx-auto font-mono">
            <TypingAnimation>
                ようこそ、DevFusionではNext.jsの周辺技術についての記事やコンポーネントのレシピを掲載しています。
            </TypingAnimation>
        </div>
    );
};

export default Hero;
