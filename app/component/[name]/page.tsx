import BackButton from "./button";

export const dynamicParams = false;

export function generateStaticParams() {
    let slugs = ["1", "2", "3", "4", "5", "6"];
    return slugs.map((slug) => ({ name: slug }));
}

export default function PhotoPage({ params: { name } }: { params: { name: string } }) {
    return (
        <div className="bg-blue-500 h-32 flex justify-center items-center">
            {name}
            <BackButton />
        </div>
    );
}
