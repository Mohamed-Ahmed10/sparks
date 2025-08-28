import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        domains: ['boost-lab-bucket.s3.amazonaws.com'],
    },
};;

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
