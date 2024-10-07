import PageTitle from "@/components/PageTitle";
import SideNav from "@/components/SideNav";

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <PageTitle>ブログ</PageTitle>
            <div className="flex">
                <div className="flex-1 p-8 rounded-3xl">{children}</div>
                <aside className="hidden lg:block w-1/3 max-w-[400px] p-8 rounded-3xl">
                    <SideNav />
                </aside>
            </div>
        </>
    );
}
