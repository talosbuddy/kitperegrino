# Verificación ASIN — Ropa para el Camino
Comprobado con curl a https://www.amazon.es/dp/ASIN el 09/11/2026 (10:00-10:22 hora de Madrid, CET). Todos HTTP 200 y ficha propia en Amazon.es. Nota (acrPopover) y nº de valoraciones (acrCustomerReviewText) leídos de la ficha; vendedor y remitente leídos de la caja de compra de la variante que muestra la ficha por defecto.

| ASIN | Producto | Valoración | Reseñas | Vendido / enviado por | Disponibilidad | Carrito |
|---|---|---|---|---|---|---|
| B081QRG93N | MERIWOOL camiseta 100 % merino, peso medio, manga larga (mujer) | 4,7 | 4.220 | Amazon UK / Amazon UK | Con tallas | No (talla) |
| B0036ZA060 | ExOfficio Give-N-Go bóxer de viaje (hombre) | 4,6 | 4.249 | Amazon / Amazon | «Sólo queda(n) 1 en stock» en la variante por defecto; resto por talla | No (talla) |
| B0052AXWX0 | Columbia Fast Trek II forro polar cremallera completa | 4,5 | 9.435 | Amazon / Amazon | Con tallas y colores | No (talla) |
| B0CN3VRSTG | Columbia Watertight II chaqueta impermeable (hombre) | 4,6 | 32.620 | Amazon / Amazon | Con tallas y colores | No (talla) |
| B0BQ7GGLMH | Columbia Silver Ridge Utility Convertible pantalón (hombre) | 4,4 | 960 | Amazon / Amazon | Con tallas y colores | No (talla) |
| B002PHHB62 | Buff Merino Lightweight braga de cuello | 4,5 | 3.019 | Amazon / Amazon | En stock | Sí |
| B0CXT78KJV | Pardo jabón natural en pastilla 2 × 150 g | 4,6 | 385 | Amazon / Amazon | En stock | Sí |
| B007MCRUT8 | KORBOND 50 imperdibles | 4,6 | 2.723 | Amazon / Amazon | En stock | Sí |
| B0B298NWP1 | Amazon Basics 12 bolsas enrollables con cremallera | 4,2 | 2.478 | Amazon / Amazon | En stock | Sí |

Carrito (cart-url-ropa.txt): add.html con los 4 ASIN de talla única y tag=XXXX-21. Con curl, Amazon redirige (HTTP 200 tras 2 redirecciones) a la pantalla de inicio de sesión /ax/claim con return_to=/associates/addtocart conservando los 4 ASIN, cantidades y el tag; el mismo comportamiento que el carrito ya publicado de albergue. No se ha podido ver la cesta final sin sesión de Amazon.

Descartados:
- Merino.tech (B0BHZMLBRC, polo de hombre 4,3/836; B09STVP2QK, mujer 4,3/1.674): la ficha no mostraba vendedor ni remitente en la variante por defecto («No disponible por el momento» en variantes); no verificable.
- Camisetas merino de Odlo, Smartwool e Icebreaker: menos de 20 valoraciones en Amazon.es.
- Tommy Hilfiger forro polar B08Z5MN23Q (4,6/6.363): no es prenda técnica de trekking.
- Buff Original EcoStretch B07FKD5FVW (4,6/2.996): ASIN con variantes de color; se prefiere la Merino Lightweight, de variante única, para el carrito.
- No se encontró una camiseta merino de hombre con suficientes valoraciones y vendida por Amazon: el texto recomienda buscar el equivalente y la guía no inventa modelo.
