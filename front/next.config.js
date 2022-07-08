/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    FRONT_URL: process.env.FRONT_URL
  }
}
