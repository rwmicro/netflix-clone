import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Netflix Clone",
    short_name: "Netflix Clone",
    description:
      "Netflix Clone app made the Nebula Company.",
    start_url: "/",
    display: "standalone",    
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

