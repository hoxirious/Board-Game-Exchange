/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cf.geekdo-images.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '/images/**',
            },
            {
                protocol: 'http',
                hostname: 'host.docker.internal',
                port: '8080',
                pathname: '/images/**',
            }
        ]
    },
    reactStrictMode: false
};

export default nextConfig;
