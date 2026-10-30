import type { Group } from './checklist';

export const calzadoChecklist: Group[] = [
  { title: 'Zapatillas o botas (elige una opción)', items: [
    { what: 'Zapatilla de senderismo impermeable para mujer', name: 'Merrell Moab 3 GTX', asin: 'B09XR6MX8Z', why: 'tiene una horma ancha que deja sitio a los pies cuando se hinchan a partir del tercer día, la suela Vibram agarra en losa mojada y la membrana Gore-Tex resiste los chaparrones gallegos.' },
    { what: 'Zapatilla de senderismo impermeable para hombre', name: 'Columbia Woodburn II Waterproof', asin: 'B0CN3V77D6', why: 'es ligera, amortigua bien en las pistas de tierra y en el asfalto que ocupan buena parte del Francés, y su caña baja no cansa el tobillo.' },
    { what: 'Alternativa ligera de tipo trail para hombre', name: 'adidas Terrex Anylander Rain.Rdy', asin: 'B0DHVX2WM7', why: 'pesa menos que una bota, transpira mejor y repele el agua. Encaja si caminas rápido o vas en primavera o verano.' },
  ]},
  { title: 'Calcetines: la mitad de la batalla contra las ampollas', items: [
    { what: 'Calcetines de dedos para caminar', name: 'Injinji Trail Midweight Crew', asin: 'B07ZTY44WQ', why: 'separan los dedos y evitan el roce entre ellos, que es donde salen muchas ampollas en las etapas largas.' },
    { what: 'Calcetines de dedos finos (para verano o como liner)', name: 'Injinji Run Lightweight No-show', asin: 'B0BRL7TLK6', why: 'puedes ponerlos debajo de un calcetín de merino como doble capa: la fricción se queda entre los dos calcetines y no en tu piel.' },
    { what: 'Calcetines de lana merino', name: 'Niorasen merino', asin: 'B0DMWC11BP', why: 'aguantan bien la humedad, no huelen después de varios días y amortiguan. Lleva 2 o 3 pares y ve alternándolos.' },
  ]},
  { title: 'Cuidado de los pies', items: [
    { what: 'Barra antifricción para los pies', name: 'Compeed Stick Anti-fricción', asin: 'B07T2724KV', why: 'aplícala cada mañana en los talones, los dedos y las zonas donde ya hayas notado roce. Prevenir así lleva un minuto y te ahorra días de ampollas.' },
    { what: 'Apósitos para ampollas en zonas de mucho roce', name: 'Compeed Ampollas Extreme', asin: 'B00TTX0KV8', why: 'son más gruesos que los normales y aguantan varias etapas en el talón. Ponte uno en cuanto notes una zona caliente.', link: { pre: 'Cómo tratarlas en ruta:', href: '/botiquin-y-ampollas/', text: 'Botiquín y ampollas' } },
    { what: 'Esparadrapo de tela', name: 'Salvelox Esparadrapo Textile', asin: 'B00TPLYV2S', why: 'te sirve para proteger de antemano los puntos de roce y para sujetar apósitos o gasas. Se corta con los dedos.' },
    { what: 'Polvos para los pies', name: 'Funsol polvo desodorante', asin: 'B00J5G51E0', why: 'reducen el sudor, y el sudor ablanda la piel y la deja más expuesta a las ampollas. Échalos también dentro del calzado por la noche.' },
    { what: 'Cortaúñas de precisión', name: 'BEZOX alicates cortaúñas', asin: 'B01MQQS5US', why: 'llevar las uñas cortas y rectas antes de salir evita las uñas negras en las bajadas. Recuerda que no puedes llevarlo en el equipaje de mano.' },
  ]},
  { title: 'Ajustes del calzado', items: [
    { what: 'Spray impermeabilizante', name: 'Búfalo Spray Impermeabilizante 250 ml', asin: 'B0D44WM77X', why: 'aplícalo en casa antes de salir para que el agua resbale y no empape la malla. Es útil sobre todo si tus zapatillas no tienen membrana.' },
    { what: 'Cordones elásticos', name: 'Cordones elásticos sin nudo (2 pares)', asin: 'B0D3C33JRJ', why: 'mantienen la presión aunque el pie se hinche y te permiten calzarte en un segundo en el albergue.' },
    { what: 'Plantillas con gel', name: 'smart&gentle plantillas gel', asin: 'B0731RXZVR', why: 'añaden amortiguación si tu zapatilla es muy firme o si el tramo tiene mucho asfalto. Pruébalas antes de salir, nunca por primera vez en ruta.' },
  ]},
];

export const calzadoFaqs = [
  { q: '¿Botas o zapatillas para el Camino de Santiago?', a: 'Para la mayoría de los peregrinos, entre abril y octubre, unas zapatillas de senderismo o de trail. Pesan menos y transpiran mejor. Las botas de caña media tienen sentido en invierno, con barro o si tienes los tobillos débiles.' },
  { q: '¿Qué talla de calzado debo comprar para el Camino?', a: 'Media talla o una talla más de la habitual: los pies se hinchan al caminar muchos días seguidos. Pruébatelas por la tarde y con el calcetín que vayas a usar.' },
  { q: '¿Puedo estrenar calzado en el Camino?', a: 'No. Camina con él al menos 50-100 km en las semanas anteriores, con la mochila cargada, para detectar dónde te roza.' },
  { q: '¿Calzado impermeable o transpirable?', a: 'En primavera, otoño o invierno, o si vas por Galicia, merece la pena la membrana impermeable. En pleno verano por la Meseta, una zapatilla transpirable se seca antes y da menos calor.' },
  { q: '¿Cuántos pares de calcetines llevo?', a: 'Entre 2 y 3 pares de merino o técnicos. Si tienes tendencia a las ampollas entre los dedos, añade unos de dedos.' },
  { q: '¿Llevo un segundo calzado?', a: 'Sí, unas chanclas o sandalias ligeras para la ducha y el albergue. Las recomendamos en la lista de la mochila.' },
];
