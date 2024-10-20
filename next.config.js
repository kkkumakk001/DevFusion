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
};

module.exports = nextConfig;
