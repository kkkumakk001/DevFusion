import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageTopScroll from "@/components/PageTopScroll";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
    componentDetail,
}: {
    children: React.ReactNode;
    componentDetail: React.ReactNode;
}) {
    return (
        <html lang="ja" suppressHydrationWarning={true}>
            <PageTopScroll />
            <body className={`notoSansJP.className -z-10`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <Breadcrumbs />
                    <span className="block mb-4"></span>
                    <main className="w-[95%] mx-auto">
                        {children}
                        {componentDetail}
                    </main>
                    <footer>footer</footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
