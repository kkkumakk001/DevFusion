/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.microcms-assets.io",
            },
        ],
    },
};

module.exports = nextConfig;
