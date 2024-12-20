/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  transpilePackages: ['@repo/ui'],
  images: {
    domains: [
      'adaptors-bucket.s3.ap-northeast-2.amazonaws.com',
      'i.pinimg.com',
      'picsum.photos',
      'd2v80xjmx68n4w.cloudfront.net',
    ],
  },
};
