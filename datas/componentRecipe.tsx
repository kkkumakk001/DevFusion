import Breadcrumbs, { BreadcrumbsCode } from "@/app/_resipes/BreadCrumbs";
import ButtonWithIcon, { ButtonWithIconCode } from "@/app/_resipes/ButtonWithIcon";
import FrostedGlass, { FrostedGlassCode } from "@/app/_resipes/FrostedGlass";
import MarqueeComp, { MarqueeCompCode } from "@/app/_resipes/Marquee";
import { ModeToggleButton, ModeToggleButtonCode } from "@/app/_resipes/ModeToggleButton";
import SearchField, { SearchFieldCode } from "@/app/_resipes/SearchField";

export const componentRecipe = [
    {
        title: "ダークモードーライトモード切り替え",
        linkName: "modetogglebutton",
        componentName: <ModeToggleButton />,
        content: (
            <div>
                <pre>
                    <code>{ModeToggleButtonCode}</code>
                </pre>
            </div>
        ),
    },
    {
        title: "アイコン付きボタン",
        linkName: "buttonwithicon",
        componentName: <ButtonWithIcon href="/">ボタン</ButtonWithIcon>,
        content: (
            <div>
                <pre>
                    <code>{ButtonWithIconCode}</code>
                </pre>
            </div>
        ),
    },
    {
        title: "検索フィールド",
        linkName: "searchfield",
        componentName: <SearchField />,
        content: (
            <div>
                <pre>
                    <code>{SearchFieldCode}</code>
                </pre>
            </div>
        ),
    },
    {
        title: "すりガラス",
        linkName: "frostedglass",
        componentName: <FrostedGlass />,
        content: (
            <div>
                <pre>
                    <code>{FrostedGlassCode}</code>
                </pre>
            </div>
        ),
    },
    {
        title: "パンくずリスト",
        linkName: "breadcrumbs",
        componentName: <Breadcrumbs />,
        content: (
            <div>
                <pre>
                    <code>{BreadcrumbsCode}</code>
                </pre>
            </div>
        ),
    },
    {
        title: "マーキー",
        linkName: "marquee",
        componentName: <MarqueeComp />,
        content: (
            <div>
                <pre>
                    <code>{MarqueeCompCode}</code>
                </pre>
            </div>
        ),
    },
];
