import LoginButton from "./LoginButton";
import ScrollDown from "./ScrollDown";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
    return (
        <section id="hero">
            <div className="relative w-full h-screen-minus-header bg-background text-center rounded-xl mb-12 flex justify-center items-center mx-auto font-mono">
                <div>
                    <p className="text-2xl">Welcome to DevFusion!</p>
                    <TypingAnimation>
                        ようこそ、DevFusionではNext.jsの周辺技術についての記事やコンポーネントのレシピを掲載しています。
                    </TypingAnimation>
                    <LoginButton />
                    <ScrollDown />
                </div>
            </div>
        </section>
    );
};

export default Hero;
