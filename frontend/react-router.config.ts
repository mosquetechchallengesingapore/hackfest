import type { Config } from "@react-router/dev/config";

export default {
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  future: {
    // Enable compatibility with the Cloudflare Vite plugin
    unstable_viteEnvironmentApi: true,
  },
} satisfies Config;
