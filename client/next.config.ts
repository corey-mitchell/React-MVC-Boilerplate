/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants.js';

function nextConfig(phase: string) {
  // Config options for development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      async rewrites() {
        return {
          fallback: [
            {
              source: "/api/:slug*",
              destination: "http://localhost:8080/api/:slug*"
            }
          ]
        }
      }
    };
  };

  return {
    // Config options for all phases except development
  };
};

export default nextConfig;