/*
  Biblioteca de Afiches y Volantes
  ================================
  Documentos, oraciones e imágenes listos para usar. La app los muestra en «📚 Biblioteca»,
  con buscador (por nombre, categoría, etiquetas, descripción y el texto mismo) y filtro por categoría.

  Para agregar un elemento, copia un bloque window.BIBLIOTECA.push({ ... }) y cambia sus datos.
  Este archivo se carga con <script>, así que funciona también abriendo index.html con doble clic.

  Campos comunes
    id           texto único, sin espacios (por ejemplo 'mes-de-maria')
    tipo         'diseno'  → reemplaza el diseño abierto por este (texto, formato y estilo)
                 'imagen'  → pone la imagen en la cara que estás editando (frente o reverso)
    nombre       lo que se muestra en la lista
    categoria    para el filtro: 'Oraciones', 'Comunicados', 'Imágenes', 'Avisos'…
    etiquetas    palabras extra para el buscador: ['María', 'rosario', …]
    descripcion  una o dos líneas
    icono        un emoji para la tarjeta (opcional)

  tipo 'diseno'
    base         opcional: ajustes de partida. 'folleto' = media carta a dos caras, letra compacta.
    diseno       { hoja, formato, orientacion, caras, margen, frente: {…}, reverso: {…} }
                 hoja: carta | oficio | legal | a4 | a3 | tabloide
                 formato: completo (afiche) | mitad (flyer) | cuarto (volante) | octavo (tarjeta)
                 orientacion: vertical | horizontal · caras: una | dos · margen: 'auto' o mm ('5')
                 Cada cara admite: titulo, subtitulo, cuerpo, pie, alinear (left|center|right|justify),
                 vertical (arriba|centro|abajo|repartido), fuenteTitulo, fuenteTexto, colorTitulo, colorTexto,
                 fondo, interlineado, espacioParrafos, proporcionTitulo, marco, interior, disposicion
                 (texto|imagen|imagen-texto|texto-sobre-imagen) e imagen: 'biblioteca/imagenes/archivo.jpg'.
                 En «cuerpo»: línea en blanco entre párrafos, **negrita**, *cursiva*, «- » viñetas,
                 «1. » pasos numerados; una línea entera en **negrita** se ve como encabezado de sección.

  tipo 'imagen'
    imagen       ruta del archivo, por ejemplo 'biblioteca/imagenes/virgen-maria.jpg'
                 (guarda las imágenes en la carpeta biblioteca/imagenes)
*/
window.BIBLIOTECA = window.BIBLIOTECA || [];

// Texto completo de «Oración mes de María.docx», sin quitar nada. Frente: inicio, oración inicial
// y cómo rezar el rosario. Reverso, en el orden en que se reza: misterios, Salve y oración final.
// Único agregado: «(al reverso)» para encontrar la Salve.
window.BIBLIOTECA.push({
  id: 'mes-de-maria',
  tipo: 'diseno',
  nombre: 'Oración mes de María',
  categoria: 'Oraciones',
  etiquetas: ['María', 'Virgen', 'rosario', 'misterios', 'Salve', 'noviembre', 'diciembre', 'folleto', 'manual', 'dos caras'],
  descripcion: 'Folleto a dos caras en media carta: oración inicial, cómo rezar el rosario, los cuatro misterios, la Salve y la oración final.',
  icono: '📿',
  base: 'folleto',
  diseno: {
    frente: {
      titulo: 'Oración mes de María',
      subtitulo: '8 de noviembre al 8 de diciembre',
      pie: '',
      cuerpo: [
        '**Inicio:** Señal de la Cruz y canto tradicional de entrada (como *"Venid y vamos todos"*).',
        '**1- Oración Inicial**\nRezo de la oración de apertura del mes.',
        '¡Oh María!, durante el bello mes que te está consagrado, todo resuena con tu nombre y alabanza. Tu santuario resplandece con nuevo brillo, y nuestras manos te han elevado un trono de gracia y de amor, desde donde presides nuestras fiestas y escuchas nuestras oraciones y votos.',
        'Para honrarte, hemos esparcido frescas flores a tus pies, y adornado tu frente con guirnaldas y coronas. Mas, ¡oh María!, no te das por satisfecha con estos homenajes. Hay flores cuya frescura y lozanía jamás pasan y coronas que no se marchitan. Éstas son las que tú esperas de tus hijos, porque el más hermoso adorno de una madre es la piedad de sus hijos, y la más bella corona que pueden deponer a sus pies, es la de sus virtudes.',
        'Sí, los lirios que tú nos pides son la inocencia de nuestros corazones. Nos esforzaremos, pues, durante el curso de este mes consagrado a tu gloria, en conservar nuestras almas puras y sin manchas, y en separar de nuestros pensamientos, deseos y miradas aun la sombra misma del mal.',
        'La rosa, cuyo brillo agrada a tus ojos, es la caridad, el amor a Dios y a nuestros hermanos. Nos amaremos, pues, los unos a los otros, como hijos de una misma familia, cuya Madre eres, viviendo todos en la dulzura de una concordia fraternal.',
        'En este mes bendito, procuraremos cultivar en nuestros corazones la humildad, modesta flor que te es tan querida, y con tu auxilio llegaremos a ser puros, humildes, caritativos, pacientes y esperanzados.',
        '¡Oh María!, haz producir en el fondo de nuestros corazones todas estas amables virtudes; que ellas broten, florezcan y den al fin frutos de gracia, para poder ser algún día dignos hijos de la más santa y la mejor de las madres. Amén.',
        '**2- Liturgia o Rosario:** Lectura bíblica del día, reflexión o meditación propia de la jornada, y el rezo de las decenas del Santo Rosario (o al menos un misterio).',
        [
          '- **Enunciación del misterio:** Se anuncia el misterio que se va a meditar. Por ejemplo: «Primer Misterio Gozoso: La Anunciación del ángel Gabriel a la Virgen María».',
          '- **Padre Nuestro:** Se reza un Padre Nuestro.',
          '- **Diez Ave Marías:** Se rezan diez Ave Marías, meditando el misterio anunciado.',
          '- **Gloria:** Gloria al Padre, y al Hijo, y al Espíritu Santo...',
          '- **Oración de Fátima:** Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia. Amén.',
        ].join('\n'),
        'Una vez terminadas las cinco decenas, se puede rezar por las intenciones del Santo Padre y por las necesidades de la Iglesia. Padre Nuestro y Tres Ave Marías.\nTambién se acostumbra rezar la Salve, una oración mariana tradicional (al reverso).',
      ].join('\n\n'),
    },
    reverso: {
      titulo: '',
      subtitulo: '',
      pie: '',
      interlineado: 1.15, espacioParrafos: 0.3, // listas cortas: más juntas para igualar la letra del frente
      cuerpo: [
        '**1. Misterios Gozosos (Lunes y Sábado)**',
        [
          '1. **Primer misterio:** El anuncio del ángel a María y la Encarnación del Hijo de Dios.',
          '2. **Segundo misterio:** La visita de la Virgen María a su prima santa Isabel.',
          '3. **Tercer misterio:** El nacimiento del Niño Jesús en el portal de Belén.',
          '4. **Cuarto misterio:** La presentación de Jesús en el Templo y la purificación de María.',
          '5. **Quinto misterio:** El Niño Jesús perdido y hallado en el Templo entre los doctores.',
        ].join('\n'),
        '**2. Misterios Dolorosos (Martes y Viernes)**',
        [
          '1. **Primer misterio:** La oración y agonía de Jesús en el Huerto de los Olivos.',
          '2. **Segundo misterio:** La flagelación de Jesús atado a la columna.',
          '3. **Tercer misterio:** La coronación de espinas.',
          '4. **Cuarto misterio:** El camino hacia el Calvario cargando con la Cruz a cuestas.',
          '5. **Quinto misterio:** La crucifixión y muerte de Jesús.',
        ].join('\n'),
        '**3. Misterios Gloriosos (Miércoles y Domingo)**',
        [
          '1. **Primer misterio:** La triunfante Resurrección del Señor.',
          '2. **Segundo misterio:** La Ascensión de Jesús al Cielo.',
          '3. **Tercer misterio:** La venida del Espíritu Santo sobre los Apóstoles y María en Pentecostés.',
          '4. **Cuarto misterio:** La Asunción de la Virgen María en cuerpo y alma al Cielo.',
          '5. **Quinto misterio:** La Coronación de María Santísima como Reina de todo lo creado.',
        ].join('\n'),
        '**4. Misterios Luminosos (Jueves)**',
        [
          '1. **Primer misterio:** El Bautismo de Jesús en el río Jordán.',
          '2. **Segundo misterio:** La autorrevelación de Jesús en el milagro de las bodas de Caná.',
          '3. **Tercer misterio:** La predicación del Reino de Dios y el llamado a la conversión.',
          '4. **Cuarto misterio:** La Transfiguración del Señor en el monte Tabor.',
          '5. **Quinto misterio:** La institución de la Sagrada Eucaristía durante la Última Cena.',
        ].join('\n'),
        [
          '**Salve:**',
          'Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra, Dios te salve.',
          'A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas.',
          'Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre.',
          '¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María!',
          'Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.',
        ].join('\n'),
        '**3- Oración Final**\nRezo de la oración de cierre y canto final a la Virgen.',
        '¡Oh María, Madre de Jesús, nuestro Salvador y nuestra buena Madre! Nosotros venimos a ofrecerte, con estos obsequios que colocamos a tus pies, nuestros corazones, deseosos de serte agradables, y a solicitar de tu bondad un nuevo ardor en tu santo servicio.',
        'Dígnate presentarnos a tu Divino Hijo, que en vista de sus méritos y a nombre de su Santa Madre, dirija nuestros pasos por el sendero de la virtud. Que haga lucir con nuevo esplendor la luz de la fe sobre los infortunados pueblos que gimen por tanto tiempo en las tinieblas del error; que vuelvan hacia Él, y cambie tantos corazones rebeldes, cuya penitencia regocijará su corazón y el tuyo.',
        'Que convierta a los enemigos de su Iglesia y que, en fin, encienda por todas partes el fuego de su ardiente caridad; que nos colme de alegría en medio de las tribulaciones de esta vida y de esperanza para el porvenir. Amén.',
      ].join('\n\n'),
    },
  },
});

// Mismo texto en una sola página carta vertical, en el orden original del documento
// (Salve antes de los misterios) y sin el «(al reverso)» del folleto. Se arma a partir
// del folleto para que el texto exista una sola vez.
(function () {
  const folleto = window.BIBLIOTECA.find((x) => x.id === 'mes-de-maria');
  if (!folleto) return;
  const frente = folleto.diseno.frente.cuerpo.split('\n\n');
  const reverso = folleto.diseno.reverso.cuerpo.split('\n\n');
  frente[frente.length - 1] = frente[frente.length - 1].replace(' (al reverso)', '');
  const iSalve = reverso.findIndex((b) => b.startsWith('**Salve:**'));
  const cuerpo = [...frente, reverso[iSalve], ...reverso.slice(0, iSalve), ...reverso.slice(iSalve + 1)].join('\n\n');

  window.BIBLIOTECA.push({
    id: 'mes-de-maria-rosario-carta',
    tipo: 'diseno',
    nombre: 'Oración mes de María y Rosario (carta vertical)',
    categoria: 'Oraciones',
    etiquetas: ['María', 'Virgen', 'rosario', 'misterios', 'Salve', 'noviembre', 'diciembre', 'página', 'carta', 'vertical', 'una cara'],
    descripcion: 'Todo en una página carta vertical a dos columnas: oración inicial, cómo rezar el rosario, la Salve, los cuatro misterios y la oración final.',
    icono: '📄',
    diseno: {
      hoja: 'carta', formato: 'completo', orientacion: 'vertical', caras: 'una', margen: '8', corte: false,
      frente: {
        titulo: folleto.diseno.frente.titulo,
        subtitulo: folleto.diseno.frente.subtitulo,
        cuerpo,
        pie: '',
        disposicion: 'texto',
        fuenteTitulo: 'elegante', fuenteTexto: 'moderna', alinear: 'left', vertical: 'arriba',
        tamano: 100, proporcionTitulo: 1.9, mayusculas: false, interior: 1,
        interlineado: 1.15, espacioParrafos: 0.35, columnas: '2', marco: 'ninguno',
        colorTitulo: '#1e3a8a', colorTexto: '#111827', fondo: '#ffffff',
      },
    },
  });
})();

// La misma oración en carta vertical a dos caras, con letra más grande. Orden original del documento:
// frente hasta la Salve; reverso con los misterios y la oración final. Se arma desde el texto del folleto.
(function () {
  const folleto = window.BIBLIOTECA.find((x) => x.id === 'mes-de-maria');
  if (!folleto) return;
  const frente = folleto.diseno.frente.cuerpo.split('\n\n');
  const reverso = folleto.diseno.reverso.cuerpo.split('\n\n');
  frente[frente.length - 1] = frente[frente.length - 1].replace(' (al reverso)', '');
  const iSalve = reverso.findIndex((b) => b.startsWith('**Salve:**'));
  const estilo = {
    disposicion: 'texto', pie: '',
    fuenteTitulo: 'elegante', fuenteTexto: 'moderna', alinear: 'left', vertical: 'arriba',
    tamano: 100, proporcionTitulo: 1.9, mayusculas: false, interior: 1,
    interlineado: 1.15, espacioParrafos: 0.35, columnas: '2', marco: 'ninguno',
    colorTitulo: '#1e3a8a', colorTexto: '#111827', fondo: '#ffffff',
  };
  window.BIBLIOTECA.push({
    id: 'mes-de-maria-rosario-carta-2caras',
    tipo: 'diseno',
    nombre: 'Oración mes de María y Rosario (carta, dos caras)',
    categoria: 'Oraciones',
    etiquetas: ['María', 'Virgen', 'rosario', 'misterios', 'Salve', 'noviembre', 'diciembre', 'carta', 'vertical', 'dos caras', 'letra grande'],
    descripcion: 'Hoja carta vertical impresa por ambos lados, con letra más grande y a dos columnas. Frente: oración inicial, cómo rezar el rosario y la Salve. Reverso: los misterios y la oración final.',
    icono: '📖',
    diseno: {
      hoja: 'carta', formato: 'completo', orientacion: 'vertical', caras: 'dos', margen: '8', corte: false, imprimir: 'ambas',
      frente: {
        ...estilo,
        titulo: folleto.diseno.frente.titulo,
        subtitulo: folleto.diseno.frente.subtitulo,
        cuerpo: [...frente, reverso[iSalve]].join('\n\n'),
      },
      reverso: {
        ...estilo,
        tamano: 92, // el reverso tiene menos texto: así la letra queda igual que en el frente (unos 13 pt)
        titulo: '', subtitulo: '',
        cuerpo: [...reverso.slice(0, iSalve), ...reverso.slice(iSalve + 1)].join('\n\n'),
      },
    },
  });
})();
