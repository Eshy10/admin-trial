/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
        NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
        NEXT_ENVIRONMENT: process.env.NODE_ENV,
        NEXT_PUBLIC_BACKEND_URI: process.env.NEXT_PUBLIC_BACKEND_URI,
        NEXT_PUBLIC_AURAL_URI: process.env.NEXT_PUBLIC_AURAL_URI,
        NEXT_PUSHER_APP_KEY: process.env.NEXT_PUSHER_APP_KEY,
        NEXT_PUSHER_CLUSTER: process.env.NEXT_PUSHER_CLUSTER,
        NEXT_CONFIG_CAT: process.env.NEXT_CONFIG_CAT,
        NEXT_PUBLIC_CHAT_BACKEND_URI: process.env.NEXT_PUBLIC_CHAT_BACKEND_URI,
        NEXT_PUBLIC_SEARCH_BACKEND_URI: process.env.NEXT_PUBLIC_SEARCH_BACKEND_URI,
      },
      images: {
        domains: ["media.razumusic.com", "m.razu.io"],
      },
}

module.exports = nextConfig
