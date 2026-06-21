import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rohit Chavan Portfolio",
    short_name: "Rohit Portfolio",
    description: "Full stack software engineer portfolio of Rohit Chavan",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1128",
    theme_color: "#0a1128",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
