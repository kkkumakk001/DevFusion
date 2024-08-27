import SideNav from "@/components/SideNav";

type Props = {
    children: React.ReactNode;
};

export const reavalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <h2 className="flex items-center gap-4 text-xl font-bold text-center -mt-[14px] mb-12">
                <span className="flex-1 h-px bg-white/50"></span>
                記事ページ
                <span className="flex-1 h-px bg-white/50"></span>
            </h2>
            <div className="flex gap-8">
                <div className="flex-1  p-8 rounded-3xl">{children}</div>
                <aside className="hidden lg:block w-1/3 max-w-[400px]  p-8 rounded-3xl">
                    <SideNav />
                </aside>
            </div>
        </>
    );
}
