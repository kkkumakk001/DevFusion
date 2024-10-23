/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.microcms-assets.io",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
    eslint: {
        // 本番環境でもツールバーを完全に無効化
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
