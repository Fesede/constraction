/** @type {import('next').NextJSConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "img.magnific.com",
      },
    ],
  },
};

module.exports = nextConfig;
