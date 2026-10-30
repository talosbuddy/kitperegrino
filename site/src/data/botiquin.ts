import type { Group } from './checklist';

export const botiquinChecklist: Group[] = [
  { title: 'Pies y ampollas', items: [
    { what: 'Apósitos hidrocoloides para ampollas', name: 'Compeed Ampollas Surtido', asin: 'B076C1QQCQ', why: 'el hidrocoloide crea un ambiente húmedo y protegido que amortigua la presión y alivia el dolor mientras la piel se regenera. El surtido trae varios tamaños, para el talón y para los dedos. Déjalo puesto hasta que se despegue solo.' },
    { what: 'Barra antifricción', name: 'Compeed Stick Anti-fricción', asin: 'B07T2724KV', why: 'la ampolla aparece por fricción repetida: la barra reduce el roce donde la piel toca el calcetín. Es el gesto de prevención más rentable de cada mañana.', link: { pre: 'Más prevención en', href: '/calzado/', text: 'Calzado para el Camino' } },
    { what: 'Esparadrapo de tela', name: 'Salvelox Esparadrapo Textile', asin: 'B00TPLYV2S', why: 'protege de antemano una zona que empieza a calentarse (la «zona caliente» que anuncia la ampolla) y sujeta gasas o apósitos. Se corta con los dedos.' },
    { what: 'Antiséptico de clorhexidina', name: 'Senti2 Clorhexidina 2 %', asin: 'B0CVBBRNP5', why: 'la clorhexidina no mancha ni escuece como el alcohol y es el antiséptico de referencia para desinfectar una ampolla abierta, un rasguño o la aguja antes de drenar.' },
    { what: 'Suero fisiológico en monodosis', name: 'Senti2 Suero Fisiológico, 30 monodosis', asin: 'B00J9FNRWU', why: 'sirve para limpiar una herida antes de desinfectarla y para lavar los ojos si entra polvo en la Meseta. Las monodosis son estériles y casi no pesan: lleva 5 o 6 en la mochila.' },
    { what: 'Tiritas surtidas resistentes al agua', name: 'Hansaplast Universal, 40 surtido', asin: 'B01LCU4AYI', why: 'cubren cortes y rozaduras pequeñas sin gastar un Compeed. Los 4 tamaños cubren las curas más habituales.' },
    { what: 'Tijeras de punta roma', name: 'Tijeras de enfermería, 15,5 cm', asin: 'B09VL8MN14', why: 'cortan esparadrapo, gasas y apósitos a medida, y con la punta redonda no te pinchas al recortar junto a una ampolla. Llévalas en el equipaje facturado si vuelas.' },
    { what: 'Pinzas de precisión', name: 'Beter pinzas punta cangrejo', asin: 'B00U8QYLTC', why: 'sirven para sacar astillas, espinas o una garrapata tras dormir en hierba, y para retirar la piel que ya se ha despegado del todo sin tirar de la sana.' },
  ]},
  { title: 'Dolor y músculos', items: [
    { what: 'Venda cohesiva de 5 cm', name: 'Venda cohesiva (blanco)', asin: 'B09KS31HTX', why: 'se pega a sí misma y no a la piel: sirve para sujetar un apósito en un dedo o para hacer un vendaje de compresión ligera, y aguanta el sudor mejor que una venda de gasa.' },
    { what: 'Cinta de kinesiología', name: 'Kinesiotape, 3 rollos de 5 m × 5 cm', asin: 'B0CWNRVTF2', why: 'muchos peregrinos la usan como «segunda piel» sobre zonas de roce o para sentir sujeción en rodillas y tobillos. Solo merece la pena si sabes aplicarla o te la ha enseñado un fisio.' },
  ]},
  { title: 'Piel, sol e insectos', items: [
    { what: 'Comprimidos de electrolitos', name: 'Science in Sport Hydro, 20 comprimidos', asin: 'B00BJP2JFE', why: 'en las etapas de calor pierdes sal además de agua. Un comprimido en la botella ayuda a reponer sodio y evita la sensación de agua «que no hidrata».', link: { pre: 'Más en', href: '/camino-en-verano/', text: 'Camino en verano' } },
    { what: 'After sun en formato viaje', name: 'Babaria After Sun Aloe Vera 100 ml', asin: 'B0DW4H1RSC', why: 'calma la piel quemada de la nuca, las orejas y las piernas. El formato de 100 ml entra en la normativa de líquidos del equipaje de mano.' },
    { what: 'Repelente de mosquitos', name: 'Relec Extra Fuerte 125 ml', asin: 'B09V35NLJG', why: 'en verano, en Galicia, junto a ríos y en las terrazas de los albergues, los mosquitos pican al atardecer. Mejor llegar a la etapa siguiente sin noches en vela.' },
  ]},
  { title: 'Lo personal', items: [
    { what: 'Pastillero de viaje con etiquetas', name: 'Pastillero de viaje (2 uds.)', asin: 'B0CBN94LFB', why: 'separa tu medicación habitual y los analgésicos que ya toleras, con la etiqueta a la vista, sin cargar con cajas enteras. Pesa poco y cierra bien en la mochila.' },
    { what: 'Botiquín base todo en uno', name: 'HONYAO Mini Botiquín 90 piezas', asin: 'B0B4GWF112', why: 'si prefieres una base ya hecha con gasas, vendas y manta térmica, añade encima lo específico para pies (Compeed, barra antifricción). Lo dejamos fuera del kit para no duplicar.' },
  ]},
];

export const botiquinFaqs = [
  { q: '¿Qué llevar en el botiquín del Camino de Santiago?', a: 'El botiquín del Camino debe centrarse en los pies: apósitos hidrocoloides para ampollas, barra antifricción o vaselina, esparadrapo, antiséptico, suero fisiológico, tiritas, tijeras y pinzas. Añade venda cohesiva, electrolitos, after sun, repelente y tu medicación habitual con la tarjeta sanitaria. Lo demás se compra en farmacias del recorrido.' },
  { q: '¿Cómo se cura una ampolla en el Camino de Santiago?', a: 'Una ampolla se cura lavándola, desinfectándola y protegiéndola sin quitar la piel. Si es grande y dolorosa, se drena por el borde con una aguja limpia o estéril, se vuelve a desinfectar y se cubre con un apósito hidrocoloide o una gasa con esparadrapo. Revísala cada día por si aparecen signos de infección.' },
  { q: '¿Hay que pinchar las ampollas? ¿Con aguja e hilo?', a: 'Solo se pinchan las ampollas grandes, tensas o dolorosas; las pequeñas se protegen intactas. El método de aguja e hilo deja un hilo dentro para que siga drenando y es tradición entre peregrinos, pero las guías sanitarias oficiales indican pinchar con aguja limpia sin quitar la piel. Si usas hilo, que sea estéril y retíralo en 24 horas.' },
  { q: '¿Compeed sirve si la ampolla está reventada?', a: 'Sí, los apósitos hidrocoloides tipo Compeed se pueden usar en ampollas reventadas o abiertas, siempre después de limpiar con suero y desinfectar. Colócalo sin arrugas, déjalo hasta que se despegue solo y no lo pongas si hay pus o signos de infección: en ese caso, acude a un centro de salud.' },
  { q: '¿Qué vaselina usar para los pies en el Camino?', a: 'Sirve cualquier vaselina pura (filante o sólida) de farmacia o supermercado. Aplícala cada mañana en una capa fina sobre talones, dedos y zonas de roce, tal como recomienda la web oficial del Camino de la Xunta. Si te resulta grasienta, una barra antifricción hace lo mismo sin manchar.' },
  { q: '¿Cuánto pesa un botiquín para el Camino?', a: 'Depende de cuántas unidades lleves de cada cosa. Para saberlo, pon tu botiquín ya repartido en raciones de viaje (5 o 6 monodosis, una tira de esparadrapo, los apósitos justos) en una báscula de cocina. No lleves cajas enteras: reparte en bolsitas y deja el resto en casa.' },
  { q: '¿Hay farmacias en el Camino de Santiago?', a: 'Sí, en las rutas principales hay farmacias en las localidades medianas y en las ciudades de final de etapa, y muchos albergues tienen un botiquín básico. Aun así, sal con lo esencial para pies: los domingos y en los tramos entre pueblos pequeños puede que no encuentres una abierta.' },
  { q: '¿Cuándo ir al médico por una ampolla?', a: 'Acude a un centro de salud si la ampolla no mejora, es muy grande o profunda, sangra mucho, tiene pus, el enrojecimiento se extiende o tienes fiebre. Son los criterios que recoge Sacyl para peregrinos. Si tienes diabetes o mala circulación, consulta antes de pinchar cualquier ampolla.' },
];
