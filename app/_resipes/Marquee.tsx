import {
    SiGithub,
    SiNextdotjs,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiVercel,
    SiShadcnui,
    SiTypescript,
    SiNotion,
    SiJavascript,
    SiRadixui,
} from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import Marquee from "react-fast-marquee";

const icons = [
    {
        icon: <SiJavascript />,
        label: "JavaScript",
    },
    {
        icon: <SiTypescript />,
        label: "TypeScript",
    },
    {
        icon: <SiReact />,
        label: "React",
    },
    {
        icon: <SiNextdotjs />,
        label: "Next.js",
    },
    {
        icon: <SiTailwindcss />,
        label: "Tailwind CSS",
    },
    {
        icon: <SiShadcnui />,
        label: "Shadcn/ui",
    },
    {
        icon: <SiRadixui />,
        label: "RadixUI",
    },
    {
        icon: <SiSupabase />,
        label: "Supabase",
    },
    {
        icon: <SiVercel />,
        label: "Vercel",
    },
    {
        icon: <SiGithub />,
        label: "GitHub",
    },
    {
        icon: <SiNotion />,
        label: "Notion",
    },
];

export default function MarqueeComp() {
    return (
        <div className="my-24 lg:my-16 mx-auto max-w-[500px] overflow-hidden">
            <span className="sr-only">セクションタイトル</span>
            <Marquee
                speed={30}
                gradient
                gradientColor="hsl(var(--background))"
                gradientWidth={120}
                className="text-muted-foreground"
            >
                {icons.map((icon) => (
                    <div key={icon.label} className="mx-6">
                        <Slot className="w-10 h-10">{icon.icon}</Slot>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}

export const MarqueeCompCode = `
import {
    SiGithub,
    SiNextdotjs,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiVercel,
    SiShadcnui,
    SiTypescript,
    SiNotion,
    SiJavascript,
    SiRadixui,
} from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import Marquee from "react-fast-marquee";

const icons = [
    {
        icon: <SiJavascript />,
        label: "JavaScript",
    },
    {
        icon: <SiTypescript />,
        label: "TypeScript",
    },
    {
        icon: <SiReact />,
        label: "React",
    },
    {
        icon: <SiNextdotjs />,
        label: "Next.js",
    },
    {
        icon: <SiTailwindcss />,
        label: "Tailwind CSS",
    },
    {
        icon: <SiShadcnui />,
        label: "Shadcn/ui",
    },
    {
        icon: <SiRadixui />,
        label: "RadixUI",
    },
    {
        icon: <SiSupabase />,
        label: "Supabase",
    },
    {
        icon: <SiVercel />,
        label: "Vercel",
    },
    {
        icon: <SiGithub />,
        label: "GitHub",
    },
    {
        icon: <SiNotion />,
        label: "Notion",
    },
];

export default function MarqueeComp() {
    return (
        <div className="my-24 lg:my-16 mx-auto max-w-[800px] overflow-hidden">
            <span className="sr-only">セクションタイトル</span>
            <Marquee
                speed={30}
                gradient
                gradientColor="hsl(var(--background))"
                gradientWidth={120}
                className="text-muted-foreground"
            >
                {icons.map((icon) => (
                    <div key={icon.label} className="mx-6">
                        <Slot className="w-10 h-10">{icon.icon}</Slot>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
`;
