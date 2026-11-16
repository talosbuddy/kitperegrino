# Verificación ASIN — Bastones para el Camino de Santiago
Comprobado con curl a https://www.amazon.es/dp/ASIN el 16/11/2026 (10:08-10:12 hora de Madrid, CET). Todos HTTP 200 con ficha propia en Amazon.es y «En stock». Nota (acrPopover) y nº de valoraciones (acrCustomerReviewText) leídos de la ficha; vendedor y remitente, de la caja de compra de la variante por defecto. Datos técnicos (peso, longitudes) tomados de las viñetas y la tabla de la ficha.

| ASIN | Producto (título en Amazon.es) | Valoración | Reseñas | Vendido / enviado por | Datos de la ficha | Carrito |
|---|---|---|---|---|---|---|
| B08RYQLK92 | Anykuu Bastones de Senderismo y Trekking Plegables 2PCS Aluminio 7075 (Azul negruzco) | 4,4 | 4.641 | ANGELA MARGARET NICHOLSON / Amazon | Plegables 5 tramos, 36 cm plegados, 110-130 cm, 290 g/bastón, puntas de goma y rosetas | Sí |
| B08NSW7R43 | OTraki Tapas para Bastones de Senderismo, 12 uds. | 4,3 | 5.569 | OTraki / Amazon | Diámetro interior 11 mm, 42 mm de alto | Sí |
| B07Z92HJ49 | ALPIN LOACKER Bastones Trekking Telescópicos, Aluminio + Accesorios + Bolso (anillas rojas) | 4,5 | 2.207 | Alpin Loacker / Amazon | Telescópicos 3 tramos, 105-135 cm, 65 cm recogidos, 292 g/bastón, corcho, bolsa | No (alternativa) |
| B01IC7XZ68 | Foxelli Bastones de Senderismo de Fibra de Carbono, corcho, cierres abatibles (Negro) | 4,7 | 8.029 | Amazon UK / Amazon UK | 100 % carbono, 61-139 cm, 215 g/bastón, cierres de palanca | No (alternativa) |
| B07Z5YV9TM | Chris.W Bolsa de transporte para bastón de senderismo (Negro) | 4,5 | 200 | ximeishanghang / ximeishanghang | 76 cm de largo, 1 par; «Envío en 4 a 5 días» | No (opcional, vendedor externo) |

Nota: en las fichas con variantes de color la valoración y el número de reseñas son los del producto padre (compartidos entre colores).

Carrito (cart-url-bastones.txt / CART_URL_BASTONES): add.html con B08RYQLK92 + B08NSW7R43 y tag=XXXX-21. Con curl, Amazon responde HTTP 200 tras 1 redirección a /ap/signin con return_to=/associates/addtocart conservando los 2 ASIN, cantidades y el tag; mismo comportamiento que los carritos ya publicados. No se puede ver la cesta final sin sesión de Amazon.
Solo un par de bastones en el carrito: no tiene sentido comprar tres pares; los telescópicos son alternativas.

Descartados:
- Trekology Trek-Z (B07Q6BZQZC, 4,5/10.376): la ficha no mostraba vendedor ni remitente en la variante por defecto y se vende por talla (100-120 / 115-135 cm).
- NORDMUT carbono (B091Q4NJK6, 4,6/1.873): las viñetas de la variante de carbono describen la de aluminio (325 g, «aluminio»); datos no fiables.
- Bastones de marcha nórdica (Msports, KADVA…): la guía recomienda trekking para el Camino.
- Tacos con menos de 300 valoraciones o sin valoraciones (QWORK, Linian, supregear…).

## Datos verificados en fuente oficial (16/11/2026)
- AENA, «¿Qué está permitido llevar en el avión?» (https://www.aena.es/es/pasajeros/equipajes-controles/equipaje-mano.html): «Bastones de senderismo plegables, que podrán mantenerse dentro de la maleta para su inspección con el escáner de rayos X.» La lista es orientativa y el personal de seguridad puede denegar un artículo que suscite recelo.
- Vueling, «Objetos permitidos como equipaje de mano» (https://help.vueling.com/hc/es/articles/20955280277521-Objetos-permitidos-como-equipaje-de-mano): «Palos de trekking (solo se permiten dentro o como equipaje de mano los plegables; los telescópicos deben ir dentro del equipaje facturado)»; además del equipaje de mano: «bastón de peregrino (si no tiene punta afilada)».
