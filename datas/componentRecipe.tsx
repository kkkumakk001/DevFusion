import Header from "@/components/Header";
import { ModeToggleButton } from "@/components/ModeToggleButton";
import SideNav from "@/components/SideNav";

export const componentRecipe = [
    {
        title: "ヘッダー",
        linkName: "header",
        componentName: <Header />,
        content: (
            <div>
                <pre>
                    <code>npm install shadcn@......</code>
                </pre>
                <p>インストールしたら</p>
                <pre>
                    <code>git push ogirin main</code>
                </pre>
            </div>
        ),
    },
    { title: "サイドナビゲーション", linkName: "sidenav", componentName: <SideNav /> },
    {
        title: "ダークモドーライトモード切り替え",
        linkName: "modetogglebutton",
        componentName: <ModeToggleButton />,
    },
];
