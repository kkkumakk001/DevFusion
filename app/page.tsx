import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="p-12 mb-6 border border-border relative grid">
                <Link href="/article" className="absolute inset-0"></Link>
                <span className="place-items-center text-center">最新記事</span>
            </section>
            <section className="p-12 mb-6 border border-border relative grid">
                <Link href="/component" className="absolute inset-0"></Link>
                <span className="place-items-center text-center">コンポーネント集</span>
            </section>
        </>
    );
}
