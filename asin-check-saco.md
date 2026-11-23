# Verificación ASIN — Saco sábana / saco de dormir para el Camino de Santiago
Comprobado con curl a https://www.amazon.es/dp/ASIN el 23/11/2026 (09:55-10:00 hora de Madrid, CET). Todos HTTP 200 con ficha propia en Amazon.es y en stock. Nota (acrPopover) y nº de valoraciones (acrCustomerReviewText) leídos de la ficha; vendedor y remitente, de la caja de compra de la variante por defecto.

| ASIN | Producto (título en Amazon.es) | Valoración | Reseñas | Vendido / enviado por | Datos de la ficha usados en la guía | Carrito |
|---|---|---|---|---|---|---|
| B0744L2QJZ | MIQIO 2en1 Saco de Dormir Ultraligero y Sábana de Viaje Ligera… Microfibra… XL | 4,4 | 1.938 | miqio / Amazon | 90×220 cm, abre a 180×220, ~395 g (viñeta) / 360 g (tabla), plegado ~9×19 cm, bolsillo almohada, 15-25 °C, «no abriga» | Sí |
| B01LYJTTIZ | Lixada Saco de dormir ultraligero para camping, Viajes, Senderismo | 4,4 | 932 | JINGTAOnet / Amazon | Confort 15 °C, límite 9 °C, 190×75 cm, 688 g, cremallera, se usa como manta | Sí |
| B07NPCBJ4P | MIQIO 2en1 Saco de Dormir Ligero de Algodón… XL | 4,4 | 364 | miqio / Amazon | 100 % algodón, 90×220 cm, 398 g (tabla) / 490 g (viñeta), bolsillo almohada | No (alternativa) |
| B001DX9YTQ | COCOON Sábana de Viaje, Seda | 4,6 | 334 | FluxPerfect / Amazon | Seda, 218×89 cm | No (alternativa) |
| B084HLF3XY | Trail Saco de Dormir Adulto Estilo Momia… 300gsm, 3 Estaciones | 4,3 | 1.149 | TII Brands / Amazon | Confort 0 °C, extrema -10 °C, 220×80 cm, 1,6 kg, capucha, bolsillo interior, saco de compresión | No (invierno) |
| B09C5FKFVD | Shappy 6 Set Bolsas Secas Impermeables 20/15/10/8/5/3L | 4,5 | 741 | Yayakneen / Amazon | 6 bolsas 3-20 L | No (opcional; ya en el kit de mochila) |

Carrito (cart-url-saco.txt / CART_URL_SACO): add.html con B0744L2QJZ + B01LYJTTIZ y tag=XXXX-21 (la web aún no tiene tag real). Con curl desde el box, Amazon respondió con un desafío anti-bot (/ax/claim, 503), así que la redirección del carrito no se pudo comprobar por curl esta vez; formato idéntico al de los carritos ya publicados.

Descartados:
- NORDMUT Comfortable (B0BZWDZBZL, 4,6/315): ficha con versiones de 900 y 1500 g y datos de peso y temperatura contradictorios.
- Millet Baikal 1100 (B0D6WFVFWD 1 reseña; B0CP2NWLYD 10): muy pocas valoraciones.
- Naturehike plumón (B0DDSZFQJ6 9 reseñas, B0CMPVJQ21 27) y Sea to Summit Reactor (B0GFY9VMS7, 3 reseñas): pocas valoraciones.
- Sea to Summit Comfort Blend (B0CT69TP3Q, 62): pocas valoraciones frente a las alternativas.
- MOUNTREX verano (B0948TF11Z, 4,4/450): confort 20 °C, menos abrigo que el Lixada con peso similar.
- JAICOM (B0DCRXDTQS, 4,4/1.315): válido (ya en el kit de mochila), pero la ficha da 540 g y 900 g a la vez.
