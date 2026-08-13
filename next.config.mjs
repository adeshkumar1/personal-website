/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site ships as a static bundle to GitHub Pages (see
  // .github/workflows/nextjs.yml, which uploads ./out). Declaring these here
  // rather than relying on the workflow to inject them means `npm run build`
  // reproduces the deployed output locally.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
