import Link from "next/link";
const BackButton = () => {
    return (
        <Link href="/component" className="border border-border rounded-sm">
            一覧に戻る
        </Link>
    );
};

export default BackButton;
