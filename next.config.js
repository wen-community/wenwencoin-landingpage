/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
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
