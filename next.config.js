/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Browser-side values. Anything prefixed NEXT_PUBLIC_ is inlined by Next on
  // its own; the Google Maps key is one of those (it is loaded in a <script>
  // URL in every visitor's browser). Keeping it out of this `env` block matters
  // on Netlify, which serializes `env` into its server function config.
  env: {
    WEN_PUBLIC_ADDRESS: process.env.WEN_PUBLIC_ADDRESS,
    QUICKNODE_URL: process.env.QUICKNODE_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'niwzrpzmgomfotvsyjsy.supabase.co'
      }
    ]
  }
}

module.exports = nextConfig
