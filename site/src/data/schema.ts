import type { Group } from './checklist';
import { amazon } from './site';

export const SITE = 'https://kitperegrino.com';
export const ORG = { '@type': 'Organization', name: 'KitPeregrino', url: SITE + '/', logo: SITE + '/og.png' };
export const website = () => ({ '@context': 'https://schema.org', '@type': 'WebSite', name: 'KitPeregrino', url: SITE + '/', inLanguage: 'es-ES', publisher: ORG });

export const faqPage = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

/** Checklist as ItemList of ListItem (name + url). No Product type: we never show prices or invent ratings/reviews. */
export const itemList = (name: string, groups: Group[]) => ({
  '@context': 'https://schema.org', '@type': 'ItemList', name,
  itemListElement: groups.flatMap(g => g.items).map((it, i) => ({
    '@type': 'ListItem', position: i + 1, name: it.name, url: amazon(it.asin),
  })),
});

export const breadcrumbs = (path: string, name: string) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE + '/' },
    { '@type': 'ListItem', position: 2, name, item: SITE + path },
  ],
});

export const article = (o: { path: string; headline: string; description: string; dateModified: string; datePublished: string }) => ({
  '@context': 'https://schema.org', '@type': 'Article', headline: o.headline, description: o.description,
  mainEntityOfPage: SITE + o.path, inLanguage: 'es-ES', datePublished: o.datePublished, dateModified: o.dateModified,
  author: ORG, publisher: ORG, image: SITE + '/og.png',
});
