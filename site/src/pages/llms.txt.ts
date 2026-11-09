import type { APIRoute } from 'astro';
import { PAGES } from '../data/site';
import { SITE } from '../data/schema';

export const GET: APIRoute = () => {
  const body = `# KitPeregrino

> Guías prácticas en español de España para preparar el Camino de Santiago: checklists curadas con el porqué de cada artículo y un kit para añadir al carrito de Amazon.es en un clic. Sin precios. Contiene enlaces de afiliado de Amazon.

Cada producto recomendado se comprueba en su ficha de Amazon.es antes de publicarlo. Los artículos que se venden por talla o color se recomiendan pero no entran en el carrito de un clic. No publicamos estadísticas sin fuente primaria.

## Guías publicadas

${PAGES.map(p => `- [${p.title}](${SITE}${p.path}): ${p.summary} (actualizada ${p.modified})`).join('\n')}

## Datos clave

- Compostela: últimos 100 km continuos a pie o a caballo, o 200 km en bicicleta, por un mismo camino y en dirección a Santiago, con la credencial sellada. Es gratuita y se recoge en persona. Fuente: https://oficinadelperegrino.com/peregrinacion/la-compostela/
- Peso de la mochila: objetivo en torno al 10 % del peso corporal, con agua.
- Capacidad de mochila: 30-35 L de primavera a otoño; 35-40 L en invierno.

## Por dónde empezar

- Primer Camino: ${SITE}/mochila-del-camino/ y luego ${SITE}/calzado/
- Elegir ruta: ${SITE}/frances-vs-portugues/
- Según la época: ${SITE}/camino-en-verano/ o ${SITE}/camino-en-invierno/
- Qué ropa llevar (3 capas, mudas, merino o sintético): ${SITE}/ropa-del-camino/
- Qué bicicleta elegir: ${SITE}/camino-en-bici-y-con-ninos/#que-bici
- Glosario y requisitos de la Compostela: ${SITE}/#glosario y ${SITE}/#compostela

## Opcional

- Mapa del sitio: ${SITE}/sitemap.xml
- Inicio: ${SITE}/
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
