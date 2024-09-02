import { componentRecipe } from "@/datas/componentRecipe";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <h2>コンポーネント集</h2>
            <section>
                {componentRecipe.map((component, index) => (
                    <Link key={index} href={`/component/${component.linkName}`}>
                        {component.linkName}
                    </Link>
                ))}
            </section>
        </main>
    );
}
