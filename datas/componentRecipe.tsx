import Header from "@/components/Header";
import { ModeToggleButton } from "@/components/ModeToggleButton";
import SideNav from "@/components/SideNav";

export const componentRecipe = [
    { title: "ヘッダー", linkName: "header", componentName: <Header /> },
    { title: "サイドナビゲーション", linkName: "sidenav", componentName: <SideNav /> },
    {
        title: "ダークモドーライトモード切り替え",
        linkName: "modetogglebutton",
        componentName: <ModeToggleButton />,
    },
];
