# Contexto del proyecto: Afiches y Volantes

> Documento vivo: intención, decisiones técnicas e historial de cambios.

## Propósito

Herramienta para crear e imprimir piezas con **texto y/o imágenes**: afiches grandes con toda la información, flyers, oraciones o estampitas y comunicados para entregar en mano. Las piezas se adaptan a distintos tamaños y se pueden imprimir **a una o dos caras**.

Nace de la fusión de dos apps del usuario:

- **PintablesCatolicos** (`../PintablesCatolicos`): app de un solo archivo HTML, hojas calibradas en mm, margen de 1 cm hasta el borde y la línea de corte, modo oscuro, impresión con `@page` dinámico y logo que recarga la app.
- **Flyers** (`github.com/rodrigoquezadab/Flyers`, React + Vite): tamaños A3–Tabloide, orientación, mosaico de copias por hoja, modos de ajuste de imagen (ajustar, cubrir, estirar) y exportación a imagen/PDF.

## Decisiones

- **Un solo archivo `index.html`, sin dependencias ni internet**, igual que Pintables: se abre con doble clic. Fuentes del sistema (Windows) en vez de Google Fonts.
- **Renderizado en HTML/CSS con medidas en mm** (no canvas): la impresión y el PDF salen con texto vectorial y a escala 1:1. En pantalla la hoja se escala con `transform`.
- **Geometría:** cada división a la mitad de la hoja cambia la orientación de la pieza. Con 1, 2, 4 u 8 piezas por hoja y la orientación elegida para la pieza se deduce la orientación de la hoja y la grilla (`geometria()`). El margen se aplica dentro de cada celda (hasta el borde del papel y a cada lado de la línea de corte). Automático: 10 / 8 / 6 / 5 mm.
- **Texto ajustado:** búsqueda binaria del tamaño de letra más grande con el que el bloque de texto cabe (alto y ancho, sin cortar palabras) en una copia de la pieza a tamaño real fuera de pantalla (`ajustarTexto()`). El control «Tamaño del texto» reduce desde ese máximo, así el texto nunca se desborda.
- **Dos caras:** como todas las piezas de una hoja son iguales y la grilla es simétrica, el reverso no necesita reflejarse; basta con elegir en la impresora «voltear por el borde largo» (hoja vertical) o «borde corto» (hoja horizontal). Opción para girar el reverso 180° y para imprimir solo frentes o solo reversos (impresoras sin dúplex).
- **Imagen descargable** a 300 ppp: la hoja se serializa en un SVG con `foreignObject` (con la hoja de estilos `#estiloHoja`, que por eso no debe contener `<` ni `&`) y se dibuja en un canvas.
- **Lectura de documentos sin bibliotecas** (para mantener el archivo único y sin internet). Se detecta el formato por los primeros bytes, no por la extensión (Word a veces guarda RTF o HTML con extensión .doc):
  - `.docx` y `.odt` son ZIP: un lector mínimo del directorio central + `DecompressionStream('deflate-raw')`.
  - `.docx`: estilos por nombre canónico (`title`, `subtitle`, `heading N`), `numbering.xml` para distinguir viñetas de números, y se ignoran las copias de `mc:Fallback`.
  - `.odt`: estilos automáticos con su cadena de padres y `text:list-style`.
  - `.doc` (Word 97-2003): archivo compuesto OLE → flujo `WordDocument` → tabla de piezas (Clx). Solo se obtiene texto; los campos se reducen a su resultado.
  - `.rtf`: recorrido de grupos con la hoja de estilos, `\listtext` para las viñetas, `\u` y `\'hh`.
  - HTML: la página web de Google Docs y lo que se pega desde Word o Google Docs. En este último caso hay que respetar `font-weight:normal` en el `<b>` envolvente y tratar `mso-list:Ignore` como viñeta.

  Todos los lectores entregan párrafos `{tipo, segs:[{t,b,i}]}`, y `aCampos()` los reparte así:
  - **título:** el estilo Título o el primer encabezado. Si no hay estilos, la primera línea corta.
  - **subtítulo:** el estilo Subtítulo.
  - **cuerpo:** el resto, con `**`, `*`, `- ` y `1. `.

  Además se fija la alineación que usa la mayoría de los párrafos y se carga la primera imagen PNG, JPG, GIF, WebP o SVG (EMF y WMF no se pueden mostrar). Google Docs no se puede leer por enlace, porque la política CORS lo impide: hay que descargarlo.
- **Persistencia en IndexedDB** (`AfichesVolantesDB`, almacén `disenos`): autoguardado del trabajo actual (`__actual`) y diseños con nombre, con sus imágenes en data URL. Las imágenes de más de 5000 px se reducen al cargarlas. Tema en `localStorage` (`afiches.tema`).

## Historial

- **v1.0.0 (07-11-2026):** primera versión. Formatos Afiche, Flyer, Volante y Tarjeta; 6 papeles; 4 disposiciones de contenido; texto con ajuste automático, viñetas, negrita y cursiva; 7 fuentes; colores, marco y espacio interior; frente y reverso; plantillas rápidas (Afiche grande, Flyer, Oración/estampita, Comunicado, Tarjetas); imprimir, PDF e imagen PNG/JPG; Mis diseños; modo oscuro; diseño adaptable a celular.
- **v1.1.0 (08-11-2026):** cargar el texto desde documentos (.docx, .doc, .odt, .fodt, .rtf, .txt, .md, página web de Google Docs) con botón o arrastrando el archivo, y pegar con formato desde Word o Google Docs en «Texto principal». Probado con archivos generados por LibreOffice en cada formato.
- **v1.2.0 (08-11-2026):**
  - **Controles nuevos:**
    - Interlineado y espacio entre párrafos por cara.
    - Listas numeradas con sangría colgante.
    - Las líneas enteras en negrita se muestran como encabezado de sección con el color del título.
  - **Plantillas nuevas:**
    - «Folleto o manual (2 caras)»: carta, media hoja, margen de 5 mm y espacio interior del 2 %.
    - «Ejemplo: Mes de María» (en v1.3.0 pasó a la Biblioteca), con el documento `Oración mes de María.docx` del usuario.
      - No se quitó ninguna palabra; se verificó comparándolas con el original.
      - La Salve pasa al reverso, después de los misterios, que es el orden en que se reza. El único texto agregado es «(al reverso)».
      - Resultado: frente a 9,6 pt y reverso a 9,1 pt.
  - **Corrección:** `ajustarTexto` redondeaba el tamaño de letra hacia arriba (`toFixed`). Justo en un salto de línea, eso desbordaba el texto. Ahora redondea hacia abajo y deja un 1 % de holgura para la impresión.

- **v1.3.0 (08-11-2026):** 📚 **Biblioteca**.
  - **Datos:** los elementos están en `biblioteca/biblioteca.js`, que llena `window.BIBLIOTECA` y se carga con `<script src>` antes del script principal.
    - Funciona también con doble clic, porque `fetch` no hace falta para los datos.
    - Si el archivo falta, la biblioteca queda vacía y la app sigue funcionando.
    - El ejemplo del Mes de María salió de `PLANTILLAS` y es el primer elemento.
  - **Tipos de elemento:**
    - `diseno`: reemplaza el diseño abierto (previa confirmación). Admite `base` para partir de una plantilla, por ejemplo `folleto`, que corresponde a `aplicarFolleto`.
    - `imagen`: se pone en la cara abierta.
  - **Imágenes:**
    - Las rutas se convierten en data URL con `fetch` para que se guarden y se exporten.
    - Con `file://` eso no es posible y se usa la ruta: se ve y se imprime bien, pero el PNG podría fallar.
  - **Búsqueda:**
    - Se normaliza a NFD sin tildes y todas las palabras deben aparecer.
    - Puntaje: nombre 10, índice (categoría, etiquetas, descripción) 4, texto 1.
    - Muestra un fragmento con `<mark>` cuando la coincidencia está solo en el texto.
    - Filtra por categoría con conteos, incluye «Mis diseños» y se navega con ↑ ↓ y Enter.
  - **Accesos:** botón en la barra, buscador en la pestaña Formato y Ctrl + K.

## Ideas pendientes

- Varias piezas distintas en una misma hoja (por ejemplo, 4 oraciones diferentes).
- Tríptico (hoja plegada en tres).
- Biblioteca de imágenes compartida con PintablesCatolicos (se pueden copiar a `biblioteca/imagenes/` y registrar como `tipo: 'imagen'`).
