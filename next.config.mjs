/** @type {import('next').NextConfig} */
const nextConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.[^/]+$).*)"],
};

export default nextConfig;
