/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'wpriverthemes.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.iconscout.com',
            },
        ],
    },
    // domains: ['plus.unsplash.com','images.pexels.com','wpriverthemes.com','cdn.iconscout.com']
};

export default nextConfig;
