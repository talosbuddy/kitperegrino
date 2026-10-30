import type { APIRoute } from 'astro';
import { PAGES } from '../data/site';
import { SITE } from '../data/schema';

export const GET: APIRoute = () => {
  const latest = PAGES.map(p => p.modified).sort().at(-1);
  const urls = [{ path: '/', modified: latest }, ...PAGES];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${SITE}${u.path}</loc><lastmod>${u.modified}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
