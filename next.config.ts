import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { routing } from "./i18n/routing";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    srcPath: ".",
    extract: {
      sourceLocale: "en",
    },
    messages: {
      path: "./messages",
      format: "json",
      locales: routing.locales,
      precompile: true,
    },
  },
});

const config: NextConfig = {};
export default withNextIntl(config);
