import Image from "next/image";
import { EnvelopeClosedIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Page() {
    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            {/* <h1 className="text-3xl font-bold mb-6">プロフィール</h1> */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
                <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="プロフィール写真"
                    width={150}
                    height={150}
                    className="rounded-full mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                    <h2 className="text-2xl font-semibold mb-2">山田 太郎</h2>
                    <p className="text-gray-600 mb-4">
                        ウェブ開発者として5年間の経験があります。新しい技術を学ぶことが大好きで、
                        特にフロントエンド開発に情熱を注いでいます。
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">連絡先</h3>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <EnvelopeClosedIcon className="w-5 h-5 mr-2" />
                        <a href="mailto:taro@example.com" className="hover:underline">
                            taro@example.com
                        </a>
                    </li>
                    <li className="flex items-center">
                        <TwitterLogoIcon className="w-5 h-5 mr-2" />
                        <a
                            href="https://www.example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            www.example.com
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4">スキルと興味</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>HTML / CSS / Tailwind CSS</li>
                    <li>ユーザーインターフェースデザイン</li>
                    <li>アクセシビリティ</li>
                    <li>パフォーマンス最適化</li>
                </ul>
            </div>
        </div>
    );
}
