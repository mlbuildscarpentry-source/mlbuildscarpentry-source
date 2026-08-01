export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mlbuildscarpentry.ca/sitemap.xml",
  };
}
