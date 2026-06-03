import fs from "fs";
import path from "path";
import { seoPages, siteUrl } from "../src/seo/seoRoutes.js";

const publicDir = path.resolve(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const robotsPath = path.join(publicDir, "robots.txt");

const rows = seoPages
	.filter((page) => !page.noIndex)
	.map((page) => {
		const loc = `${siteUrl}${page.path}`;
		return `  <url>
    <loc>${loc}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
	})
	.join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows}
</urlset>
`;

const robots = `# robots.txt for Hemmings Anytime
User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml

# Use the site URL above to ensure crawlers can discover the sitemap.
`;

if (!fs.existsSync(publicDir)) {
	fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap, "utf8");
fs.writeFileSync(robotsPath, robots, "utf8");

console.log("Generated sitemap.xml and robots.txt in public/");
