export interface Item { what: string; name: string; asin: string; why: string; link?: { href: string; text: string; pre: string } }
export interface Group { title: string; items: Item[] }

export const checklist: Group[] = [
  { title: 'Mochila y protección', items: [
    { what: 'Mochila de 30-35 L con cinturón lumbar y espalda ventilada', name: 'Deuter Futura 32', asin: 'B08JQX9VZR', why: 'el cinturón lleva el peso a la cadera en vez de a los hombros, y la rejilla evita que la espalda llegue empapada a cada etapa.' },
    { what: 'Funda de lluvia para la mochila', name: 'HYCOPROT con banda reflectante', asin: 'B09Z2JLVRZ', why: 'en Galicia llueve incluso en verano, y la banda reflectante te hace visible en los tramos de arcén.' },
    { what: 'Bolsas estancas para organizar', name: 'Shappy, set de 6', asin: 'B09C5FKFVD', why: 'separan la ropa limpia de la sucia, mantienen el saco seco y te dejan hacer la mochila en dos minutos en el albergue a oscuras.' },
    { what: 'Poncho de lluvia que cubre la mochila', name: 'Ferrino Trekker Poncho', asin: 'B07MQG63JB', why: 'os cubre a ti y a la mochila, ventila mejor que un chubasquero y cabe en un puño.' },
  ]},
  { title: 'Para caminar', items: [
    { what: 'Bastones de trekking plegables', name: 'Anykuu, aluminio 7075', asin: 'B08RYQLK92', why: 'quitan carga a las rodillas en las bajadas (O Cebreiro, Alto del Perdón) y plegados caben en la mochila. Para volver en avión, factúralos.' },
    { what: 'Calcetines de lana merino', name: 'Niorasen merino', asin: 'B0DMWC11BP', why: 'son la primera defensa contra las ampollas: regulan el sudor y apenas huelen tras varios días.', link: { pre: 'Más en', href: '/calzado/', text: 'Calzado para el Camino' } },
    { what: 'Apósitos para ampollas', name: 'Compeed Ampollas Medianas, 2×12', asin: 'B09RVQ5SXG', why: 'póntelo en cuanto notes el roce, antes de que salga la ampolla.', link: { pre: 'Completa el botiquín con nuestra guía de', href: '/botiquin-y-ampollas/', text: 'Botiquín y ampollas' } },
    { what: 'Camiseta técnica de secado rápido', name: 'Joma, manga corta', asin: 'B0B6P6CQ3K', why: 'la lavas a mano por la tarde y por la mañana está seca. El algodón no lo consigue. Lleva dos.', link: { pre: 'El resto de la ropa, por capas, en', href: '/ropa-del-camino/', text: 'Ropa para el Camino' } },
    { what: 'Protector solar resistente al sudor', name: 'ISDIN Fusion Gel Sport SPF50', asin: 'B00ID51M5Q', why: 'caminando hacia el oeste, el sol te da en la nuca y en el lado izquierdo durante horas. No deja la piel grasa.' },
    { what: 'Botella plegable', name: 'Soft Flask, pack de 2', asin: 'B0CHSB1Y7N', why: 'cuando está vacía no ocupa nada y hay fuentes en casi todos los pueblos.', link: { pre: 'Si vas en verano, mira cuánta agua llevar en', href: '/camino-en-verano/', text: 'Camino en verano' } },
    { what: 'Riñonera fina para móvil y credencial', name: 'Fitgriff', asin: 'B07WH7JH6W', why: 'llevas la credencial, el DNI y el móvil a mano para sellar sin quitarte la mochila.' },
  ]},
  { title: 'Para el albergue', items: [
    { what: 'Saco sábana ultraligero', name: 'JAICOM 220×90 cm', asin: 'B0DCRXDTQS', why: 'muchos albergues solo dan una sábana desechable. En primavera y otoño basta con el saco sábana más la manta del albergue.', link: { pre: 'En invierno, mira', href: '/camino-en-invierno/', text: 'Camino en invierno' } },
    { what: 'Toalla de microfibra', name: 'NirvanaShape', asin: 'B082XJHQPC', why: 'pesa la mitad que una de algodón y se seca colgada de la mochila mientras caminas.' },
    { what: 'Chanclas de ducha', name: 'adidas Adilette Shower', asin: 'B09HZB2BC3', why: 'evitan hongos en duchas compartidas y dejan descansar los pies por la tarde.' },
    { what: 'Linterna frontal recargable por USB-C', name: 'UNBON', asin: 'B0B82PFNRP', why: 'para hacer la mochila a las 6:00 sin despertar a nadie (usa la luz roja) y para las salidas de noche en verano.' },
    { what: 'Tapones para los oídos', name: 'Loop Quiet 2', asin: 'B0D3V6TR98', why: 'en una habitación de 40 literas siempre hay alguien que ronca. Dormir bien es lo que te permite caminar al día siguiente.' },
  ]},
];

export const faqs: { q: string; a: string }[] = [
  { q: '¿Cuántos litros debe tener la mochila del Camino de Santiago?', a: 'Entre 30 y 40 litros. Con 30-35 L basta para primavera, verano y otoño. Si vas en invierno o con saco de dormir, elige 40 L.' },
  { q: '¿Cuánto debe pesar la mochila?', a: 'Alrededor del 10 % de tu peso corporal con agua incluida, y nunca más del 12 %.' },
  { q: '¿Puedo enviar la mochila entre etapas?', a: 'Sí. En el Francés y el Portugués hay servicios de transporte de mochilas de albergue a albergue. Para obtener la Compostela no hace falta cargar con ella.' },
  { q: '¿Hace falta saco de dormir?', a: 'De mayo a septiembre basta con un saco sábana. De noviembre a marzo conviene llevar un saco ligero, porque no todos los albergues tienen mantas.' },
  { q: '¿Qué calzado llevo?', a: 'Zapatillas de trail o botas ligeras ya usadas, media talla más grandes. Lo explicamos en nuestra guía de calzado.' },
  { q: '¿Dónde consigo la credencial del peregrino?', a: 'En la oficina del peregrino o en albergues de la salida, en asociaciones de amigos del Camino y en parroquias. No es un producto de Amazon.' },
  { q: '¿Cuántos kilómetros hacen falta para la Compostela?', a: 'Los últimos 100 km continuos a pie o 200 km en bici por un mismo camino, con la credencial sellada, según la Oficina del Peregrino. Es gratuita y se recoge en persona en Santiago.' },
  { q: '¿Cómo se coloca bien la mochila?', a: 'Primero el cinturón lumbar sobre los huesos de la cadera, luego las hombreras, después los tensores de carga y por último la cinta de pecho. Lo pesado, pegado a la espalda y a media altura.' },
  { q: '¿Qué hago si la mochila pesa demasiado?', a: 'Quita mudas, duplicados y todo lo que lleves «por si acaso». Lo que sobre se puede enviar a casa o a Santiago por correo.' },
];
