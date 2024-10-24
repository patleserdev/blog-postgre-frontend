/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG:true,
    remotePatterns: [  
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        
      },
    ],
  },
};

export default nextConfig;