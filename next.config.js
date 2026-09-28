/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let phones/tablets on the local network use the dev server
  // (e.g. http://192.168.1.70:3000)
  allowedDevOrigins: ["192.168.*.*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/perfil-clinico", permanent: true },
      { source: "/contact", destination: "/#contacto", permanent: true },
      // English route folders keep Portuguese public URLs (see rewrites)
      { source: "/booking", destination: "/marcar-consulta", permanent: true },
    ];
  },
  async rewrites() {
    return [{ source: "/marcar-consulta", destination: "/booking" }];
  },
};

module.exports = nextConfig;
