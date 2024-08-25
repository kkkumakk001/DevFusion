type Props = {
    children: React.ReactNode;
};

export const reavalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <h2 className="text-xl font-bold text-center mb-12">記事ページ</h2>
            <main className="flex gap-8">
                <div className="flex-1">{children}</div>
                <aside className="hidden lg:block w-1/3 max-w-[400px] border-l border-border">
                    <p className="text-center">サイドバー</p>
                </aside>
            </main>
        </>
    );
}
