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
            },
            {
                protocol: 'https',
                hostname: '7bfe-2001-56a-7423-1d00-7926-7347-5d50-d018.ngrok-free.app',
                port: '',
                pathname: '/images/**',
            }
        ]
    },
    reactStrictMode: false
};

export default nextConfig;
