export const CART_URL = 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08JQX9VZR&Quantity.1=1&ASIN.2=B08RYQLK92&Quantity.2=1&ASIN.3=B0DCRXDTQS&Quantity.3=1&ASIN.4=B082XJHQPC&Quantity.4=1&ASIN.5=B0B82PFNRP&Quantity.5=1&ASIN.6=B09RVQ5SXG&Quantity.6=1&ASIN.7=B00ID51M5Q&Quantity.7=1&ASIN.8=B0D3V6TR98&Quantity.8=1&ASIN.9=B09C5FKFVD&Quantity.9=1&ASIN.10=B0CHSB1Y7N&Quantity.10=1&tag=XXXX-21';
export const AFFILIATE_TAG = 'XXXX-21';
export const amazon = (asin: string) => `https://www.amazon.es/dp/${asin}?tag=${AFFILIATE_TAG}`;

export const guides = [
  { slug: 'calzado', title: 'Calzado para el Camino de Santiago', desc: '¿Botas o zapatillas? Cómo acertar con la talla.' },
  { slug: 'botiquin-y-ampollas', title: 'Botiquín y ampollas', desc: 'Qué llevar y cómo curar una ampolla en ruta.' },
  { slug: 'kit-de-albergue', title: 'Kit de albergue', desc: 'Dormir bien en albergues públicos.' },
  { slug: 'camino-en-verano', title: 'Camino en verano', desc: 'Calor, agua y salir de madrugada.' },
  { slug: 'camino-en-invierno', title: 'Camino en invierno', desc: 'Capas, albergues cerrados y luz.' },
  { slug: 'frances-vs-portugues', title: 'Camino Francés vs Portugués', desc: 'Qué cambia en la mochila según la ruta.' },
  { slug: 'camino-en-bici-y-con-ninos', title: 'Camino en bici y con niños', desc: 'Alforjas, kit de reparación y equipo infantil.' },
] as const;
export const PUBLISHED = new Set<string>(['calzado']);
export const CART_URL_CALZADO = 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B00TTX0KV8&Quantity.1=1&ASIN.2=B07T2724KV&Quantity.2=1&ASIN.3=B00TPLYV2S&Quantity.3=1&ASIN.4=B00J5G51E0&Quantity.4=1&ASIN.5=B0D44WM77X&Quantity.5=1&ASIN.6=B01MQQS5US&Quantity.6=1&tag=XXXX-21';
