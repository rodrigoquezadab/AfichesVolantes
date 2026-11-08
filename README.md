# Afiches y Volantes

Crea e imprime afiches, flyers, volantes, oraciones, estampitas y comunicados con texto e imágenes, en distintos tamaños y a una o dos caras.

Es una aplicación de un solo archivo (`index.html`): se abre con doble clic en el navegador, sin instalar nada. Fusiona las ideas de **PintablesCatolicos** (hojas calibradas en milímetros, margen hasta la línea de corte, modo oscuro, impresión y PDF) y **Flyers** (tamaños de A3 a Tabloide, orientación, varias copias por hoja, ajuste de imagen y descarga como imagen).

## Cómo usarla

1. Abre `index.html` (doble clic, o con Live Server).
2. En **📐 Formato** elige el papel, el tamaño de cada pieza y su orientación, o usa una plantilla rápida.
3. En **Frente** (y **Reverso** si es a dos caras) escribe el texto o cárgalo desde un documento, y/o agrega una imagen: haz clic en el recuadro, arrástrala o pégala con Ctrl+V.
4. Imprime, guarda como PDF o descarga la hoja como imagen PNG/JPG a 300 ppp.

## Agregar elementos a la Biblioteca

La biblioteca está en la carpeta `biblioteca/`:

- `biblioteca/biblioteca.js`: la lista de elementos. Cada uno es un bloque `window.BIBLIOTECA.push({ ... })`, y al comienzo del archivo se explican todos los campos.
- `biblioteca/imagenes/`: las imágenes que usan los elementos.

Para agregar un documento, copia el bloque de «Oración mes de María» y cambia el `id`, el nombre, la categoría, las etiquetas y el texto. Para agregar una imagen, guárdala en `biblioteca/imagenes/` y agrega un elemento `tipo: 'imagen'`.

Abriendo `index.html` con doble clic, las imágenes de la biblioteca se ven y se imprimen bien, pero la descarga como PNG o JPG puede fallar. Con Live Server funciona todo.

## Funciones

- **Tamaños de pieza:** Afiche (hoja completa), Flyer (media hoja, 2 por hoja), Volante (un cuarto, 4 por hoja) y Tarjeta (un octavo, 8 por hoja), en orientación vertical u horizontal. La hoja se gira sola para que las piezas aprovechen el papel.
- **Papeles:** Carta, Oficio (21,6 × 33 cm), Legal, A4, A3 y Tabloide.
- **Contenido:** solo texto, solo imagen, imagen y texto (arriba, abajo, izquierda o derecha) o texto sobre la imagen.
- **Texto que siempre cabe:** el tamaño de la letra se calcula solo para llenar la pieza; un control permite achicarlo. Admite párrafos, **negrita**, *cursiva* y viñetas con «- ».
- **Cargar documentos:** botón «📄 Cargar texto desde un documento» o arrastrar el archivo a la ventana. Lee Word (.docx y .doc), LibreOffice/OpenOffice Writer (.odt, .fodt), Google Docs (descargado como .docx u .odt, o como página web .zip), .rtf, .txt y .md. Reconoce el título, el subtítulo, los encabezados, la negrita, la cursiva, las viñetas, las listas numeradas, la alineación y la primera imagen. De los .doc antiguos solo se obtiene el texto, sin formato. También se puede copiar desde Word o Google Docs y pegar en «Texto principal» conservando la negrita, la cursiva y las viñetas.
- **📚 Biblioteca:** oraciones, documentos e imágenes listos para usar, con buscador.
  - Se abre con el botón de arriba, con el buscador de la pestaña Formato o con **Ctrl + K**.
  - Busca sin importar tildes ni mayúsculas, en el nombre, la categoría, las etiquetas, la descripción y el texto mismo. Muestra el fragmento donde aparece la palabra.
  - Filtra por categoría e incluye también tus **Mis diseños**.
  - Un documento reemplaza el diseño abierto; una imagen se pone en la cara que estás editando.
  - Primer elemento: «📿 Oración mes de María», un folleto a dos caras en media carta.
- **Folletos y manuales a dos caras:** plantilla «📖 Folleto o manual (2 caras)», que deja media carta, frente y reverso, letra compacta, poco margen y texto desde arriba. Los pasos numerados («1. …») quedan con el número colgando y las líneas enteras en negrita se ven como encabezados con el color del título.
- **Interlineado y espacio entre párrafos** ajustables en cada cara, para que un texto largo quepa con la letra más grande posible.
- **Estilo:** 7 fuentes del sistema, alineación, posición vertical, colores, fondo, marco y espacio interior.
- **Imagen:** ajustar, cubrir o estirar; giro manual o automático.
- **Dos caras:** frente y reverso con instrucciones para la impresora (voltear por el borde largo o corto), opción de imprimir solo frentes y luego solo reversos, y giro de 180° del reverso.
- **📝 Documento para LibreOffice Writer (.odt):** descarga el diseño como documento.
  - La página no tiene márgenes y una tabla ocupa la hoja completa, con la línea de corte como borde entre celdas. Así la línea queda **exactamente en la mitad** (o en los cuartos) de la página en las dos caras.
  - Página 1 es el frente y página 2 el reverso. Se imprime desde Writer a dos caras.
  - Conserva fuentes, tamaños, negritas, cursivas, viñetas, numerales y colores.
- **Alinear el reverso con la impresora:** muchas impresoras corren o achican el reverso.
  - En **📐 Formato → Caras** hay una **hoja de prueba** con reglas en milímetros sobre las líneas de corte.
  - Se imprime a dos caras, se mira el reverso contra la luz y se lee cuánto se corre la línea del frente.
  - Ese valor va en «Mover reverso ↔ / ↕». Queda guardado para esa impresora y vale para todos los diseños.
  - Hay que imprimir siempre con **escala 100 %** y **márgenes: ninguno**.
- **Margen hasta el borde y la línea de corte** (automático según el tamaño de la pieza) y línea de corte punteada.
- **Mis diseños:** guarda y abre diseños con sus imágenes en el navegador; el trabajo actual se guarda solo.
- **Modo oscuro** por defecto, con botón para cambiar a claro.
