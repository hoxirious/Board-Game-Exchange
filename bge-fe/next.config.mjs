/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cf.geekdo-images.com',
                port: '',
                pathname: '/original/img/**',
            }
        ]
    }
};

export default nextConfig;
