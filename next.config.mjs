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
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        
      }

      


    ],
  },
};

export default nextConfig;