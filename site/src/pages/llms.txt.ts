import type { APIRoute } from 'astro';
import { PAGES } from '../data/site';
import { SITE } from '../data/schema';

export const GET: APIRoute = () => {
  const body = `# KitPeregrino

> Guías prácticas en español de España para preparar el Camino de Santiago: checklists curadas con el porqué de cada artículo y un kit para añadir al carrito de Amazon.es en un clic. Sin precios. Contiene enlaces de afiliado de Amazon.

## Guías publicadas

${PAGES.map(p => `- [${p.title}](${SITE}${p.path}): ${p.summary}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
