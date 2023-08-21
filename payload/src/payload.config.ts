import { buildConfig } from "payload/config";
import path from "path";
import Pages from "@/collections/Pages";
import Posts from "@/collections/Posts";
import Users from "@/collections/Users";
import Media from "@/collections/Media";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@": path.resolve(__dirname, "./"),
        },
      },
    }),
  },
  collections: [Pages, Posts, Users, Media],
  typescript: {
    outputFile: path.resolve("/", "types.ts"),
  },
});
