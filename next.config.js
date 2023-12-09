/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports ={ nextConfig,

    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname:'images.unsplash.com'
      },
    ],
  },
  }



