import Link from "next/link";

export default function Page() {
    let photos = Array.from({ length: 6 }, (_, i) => i + 1);
    return (
        <main>
            <h2>コンポーネント集</h2>
            <section>
                {photos.map((id) => (
                    <Link key={id} href={`/component/${id}`}>
                        {id}
                    </Link>
                ))}
                {/* <Link href={`/component/1`}>{1}</Link>
                <Link href={`/component/2`}>{2}</Link>
                <Link href={`/component/3`}>{3}</Link>
                <Link href={`/component/4`}>{4}</Link>
                <Link href={`/component/5`}>{5}</Link>
                <Link href={`/component/6`}>{6}</Link> */}
            </section>
        </main>
    );
}
