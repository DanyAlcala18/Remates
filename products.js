/* =========================================================
   Remates iSTORE — CATÁLOGO
   ---------------------------------------------------------
   Cada producto:
     id       identificador único (sin espacios)
     cat      iphone | airpods | cargadores | cables
     name     nombre que se muestra en la tarjeta
     tag      línea corta debajo del nombre
     price    precio en MXN
     old      precio anterior tachado (opcional)
     img      foto principal (carpeta img/). Si no hay foto se dibuja
              una ilustración automática según la categoría.
     badge    etiqueta opcional ("Nuevo", "Oferta"…)
     soldOut  true = "Agotado" (el botón pregunta por WhatsApp)
     featured true = aparece en "Lo más vendido"
     desc     descripción
     hl       puntos clave
     specs    especificaciones [etiqueta, valor]
     options  variantes. Cada valor puede tener:
                price / old       -> precio propio de esa opción
                img               -> foto de esa opción
                hex               -> color de la muestra
                available:false   -> se muestra tachado
   ========================================================= */

const CATEGORIES = [
  { id: "iphone", label: "iPhone", icon: "phone", blurb: "11, 12, mini, Pro y Pro Max" },
  { id: "airpods", label: "AirPods", icon: "airpods", blurb: "AirPods 4, 5, Pro y Max" },
  { id: "cargadores", label: "Cargadores", icon: "plug", blurb: "Originales Apple: USB-C y MagSafe" },
  { id: "cables", label: "Cables", icon: "cable", blurb: "Lightning y USB-C certificados" },
];

/* ---------- iPhone: estado, capacidad y color ---------- */
const NOTE =
  "Equipo semi nuevo: revisado, funcional y en excelente estado estético.";

const CONDITIONS = [{ label: "Semi nuevo" }];

/* capacidades con su precio: caps([["64GB", 3990, 4790], ...]) */
const caps = (list) => list.map(([label, price, old]) => ({ label, price, old }));

/* precio, foto e insignia salen de la primera capacidad y el primer color */
const iphone = (p) => ({
  cat: "iphone",
  badge: "Oferta",
  price: p.storage[0].price,
  old: p.storage[0].old,
  img: p.colors[0].img,
  ...p,
  desc: p.desc + " " + NOTE,
  options: [
    { key: "estado", label: "Estado", values: CONDITIONS },
    { key: "capacidad", label: "Capacidad", values: p.storage },
    { key: "color", label: "Color", type: "swatch", values: p.colors },
  ],
});

const PRODUCTS = [
  /* ===================== iPHONE ===================== */
  /* Precios por capacidad: [capacidad, precio, precio anterior] */
  iphone({
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max",
    tag: "6.7\" · Triple cámara · LiDAR · 5G",
    featured: true,
    desc: "La pantalla más grande de la familia iPhone 12, acero inoxidable, sistema de triple cámara Pro con teleobjetivo 2.5x, escáner LiDAR y estabilización por desplazamiento del sensor.",
    hl: ["Pantalla Super Retina XDR de 6.7\"", "Chip A14 Bionic", "Triple cámara de 12 MP + LiDAR", "Teleobjetivo 2.5x", "Acero inoxidable y Ceramic Shield"],
    specs: [["Pantalla", "6.7\" Super Retina XDR OLED"], ["Chip", "A14 Bionic"], ["Cámaras", "12 MP gran angular · ultra gran angular · teleobjetivo 2.5x"], ["Extras", "Escáner LiDAR · MagSafe"], ["Resistencia", "IP68"], ["Conector", "Lightning"], ["Red", "5G"]],
    storage: caps([["128GB", 7490, 8690], ["256GB", 8190, 9390], ["512GB", 8990, 10290]]),
    colors: [
      { label: "Azul pacífico", hex: "#2f4452", img: "img/i12pm-azul.jpg" },
      { label: "Grafito", hex: "#52514d", img: "img/i12pm-grafito.jpg" },
      { label: "Oro", hex: "#f3e2c7", img: "img/i12pm-oro.jpg" },
      { label: "Plata", hex: "#e3e4e0", img: "img/i12pm-plata.jpg" },
    ],
  }),
  iphone({
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    tag: "6.1\" · Triple cámara · LiDAR · 5G",
    desc: "Diseño de acero inoxidable con bordes planos, sistema de triple cámara Pro con teleobjetivo 2x y escáner LiDAR para fotos nocturnas de retrato.",
    hl: ["Pantalla Super Retina XDR de 6.1\"", "Chip A14 Bionic", "Triple cámara de 12 MP + LiDAR", "Teleobjetivo 2x", "Acero inoxidable y Ceramic Shield"],
    specs: [["Pantalla", "6.1\" Super Retina XDR OLED"], ["Chip", "A14 Bionic"], ["Cámaras", "12 MP gran angular · ultra gran angular · teleobjetivo 2x"], ["Extras", "Escáner LiDAR · MagSafe"], ["Resistencia", "IP68"], ["Conector", "Lightning"], ["Red", "5G"]],
    storage: caps([["128GB", 6490, 7590], ["256GB", 7190, 8290], ["512GB", 7890, 8990]]),
    colors: [
      { label: "Grafito", hex: "#52514d", img: "img/i12p-grafito.jpg" },
      { label: "Azul pacífico", hex: "#2f4452", img: "img/i12p-azul.jpg" },
      { label: "Oro", hex: "#f3e2c7", img: "img/i12p-oro.jpg" },
      { label: "Plata", hex: "#e3e4e0", img: "img/i12p-plata.jpg" },
    ],
  }),
  iphone({
    id: "iphone-12",
    name: "iPhone 12",
    tag: "6.1\" · OLED · A14 Bionic · 5G",
    featured: true,
    desc: "Pantalla Super Retina XDR OLED de 6.1\", chip A14 Bionic, Ceramic Shield y conectividad 5G en un diseño de bordes planos.",
    hl: ["Pantalla OLED Super Retina XDR de 6.1\"", "Chip A14 Bionic", "Doble cámara de 12 MP con modo Noche", "Ceramic Shield", "5G y MagSafe"],
    specs: [["Pantalla", "6.1\" Super Retina XDR OLED"], ["Chip", "A14 Bionic"], ["Cámaras", "12 MP gran angular · 12 MP ultra gran angular"], ["Frontal", "Ceramic Shield"], ["Resistencia", "IP68"], ["Conector", "Lightning"], ["Red", "5G"]],
    storage: caps([["64GB", 4990, 5990], ["128GB", 5490, 6490], ["256GB", 6190, 7190]]),
    colors: [
      { label: "Azul", hex: "#1f4a73", img: "img/i12-azul.jpg" },
      { label: "Negro", hex: "#25212b", img: "img/i12-negro.jpg" },
      { label: "Blanco", hex: "#f6f2ef", img: "img/i12-blanco.jpg" },
      { label: "Verde", hex: "#d8efd5", img: "img/i12-verde.jpg" },
      { label: "Morado", hex: "#b7afe6", img: "img/i12-morado.jpg" },
      { label: "(PRODUCT)RED", hex: "#d82e2f", img: "img/i12-rojo.jpg" },
    ],
  }),
  iphone({
    id: "iphone-12-mini",
    name: "iPhone 12 mini",
    tag: "5.4\" · Compacto · A14 Bionic · 5G",
    desc: "Todo el poder del iPhone 12 en un tamaño compacto que cabe en cualquier bolsillo: pantalla OLED de 5.4\", chip A14 Bionic y 5G.",
    hl: ["Pantalla OLED Super Retina XDR de 5.4\"", "Chip A14 Bionic", "Doble cámara de 12 MP con modo Noche", "Ceramic Shield", "5G y MagSafe"],
    specs: [["Pantalla", "5.4\" Super Retina XDR OLED"], ["Chip", "A14 Bionic"], ["Cámaras", "12 MP gran angular · 12 MP ultra gran angular"], ["Frontal", "Ceramic Shield"], ["Resistencia", "IP68"], ["Conector", "Lightning"], ["Red", "5G"]],
    storage: caps([["64GB", 4290, 5190], ["128GB", 4790, 5690], ["256GB", 5390, 6290]]),
    colors: [
      { label: "Verde", hex: "#d8efd5", img: "img/i12m-verde.jpg" },
      { label: "Negro", hex: "#25212b", img: "img/i12m-negro.jpg" },
      { label: "Blanco", hex: "#f6f2ef", img: "img/i12m-blanco.jpg" },
      { label: "Azul", hex: "#1f4a73", img: "img/i12m-azul.jpg" },
      { label: "Morado", hex: "#b7afe6", img: "img/i12m-morado.jpg" },
      { label: "(PRODUCT)RED", hex: "#d82e2f", img: "img/i12m-rojo.jpg" },
    ],
  }),
  iphone({
    id: "iphone-11-pro-max",
    name: "iPhone 11 Pro Max",
    tag: "6.5\" · Triple cámara · OLED",
    featured: true,
    desc: "Pantalla Super Retina XDR de 6.5\", acero inoxidable con vidrio mate texturizado, triple cámara de 12 MP con teleobjetivo 2x y la mejor batería de la generación.",
    hl: ["Pantalla Super Retina XDR de 6.5\"", "Chip A13 Bionic", "Triple cámara de 12 MP", "Teleobjetivo 2x y modo Noche", "Acero inoxidable"],
    specs: [["Pantalla", "6.5\" Super Retina XDR OLED"], ["Chip", "A13 Bionic"], ["Cámaras", "12 MP gran angular · ultra gran angular · teleobjetivo 2x"], ["Resistencia", "IP68"], ["Conector", "Lightning"], ["Red", "4G LTE"]],
    storage: caps([["64GB", 5490, 6490], ["256GB", 6190, 7190], ["512GB", 6690, 7690]]),
    colors: [
      { label: "Oro", hex: "#f3dcc6", img: "img/i11pm-oro.jpg" },
      { label: "Verde noche", hex: "#4e5851", img: "img/i11pm-verde.jpg" },
      { label: "Gris espacial", hex: "#535150", img: "img/i11pm-gris.jpg" },
      { label: "Plata", hex: "#ebebe3", img: "img/i11pm-plata.jpg" },
    ],
  }),
  iphone({
    id: "iphone-11-pro",
    name: "iPhone 11 Pro",
    tag: "5.8\" · Triple cámara · OLED",
    desc: "Diseño compacto de acero inoxidable con pantalla Super Retina XDR de 5.8\" y triple cámara de 12 MP con teleobjetivo 2x y modo Noche.",
    hl: ["Pantalla Super Retina XDR de 5.8\"", "Chip A13 Bionic", "Triple cámara de 12 MP", "Teleobjetivo 2x y modo Noche", "Acero inoxidable"],
    specs: [["Pantalla", "5.8\" Super Retina XDR OLED"], ["Chip", "A13 Bionic"], ["Cámaras", "12 MP gran angular · ultra gran angular · teleobjetivo 2x"], ["Resistencia", "IP68"], ["Conector", "Lightning"], ["Red", "4G LTE"]],
    storage: caps([["64GB", 4790, 5690], ["256GB", 5490, 6390], ["512GB", 5990, 6890]]),
    colors: [
      { label: "Verde noche", hex: "#4e5851", img: "img/i11p-verde.jpg" },
      { label: "Gris espacial", hex: "#535150", img: "img/i11p-gris.jpg" },
      { label: "Oro", hex: "#f3dcc6", img: "img/i11p-oro.jpg" },
      { label: "Plata", hex: "#ebebe3", img: "img/i11p-plata.jpg" },
    ],
  }),
  iphone({
    id: "iphone-11",
    name: "iPhone 11",
    tag: "6.1\" · A13 Bionic · Doble cámara",
    badge: "Mejor precio",
    featured: true,
    desc: "Doble cámara de 12 MP con modo Noche, chip A13 Bionic y batería para todo el día en seis colores.",
    hl: ["Pantalla Liquid Retina de 6.1\"", "Chip A13 Bionic", "Doble cámara de 12 MP con modo Noche", "Video 4K a 60 fps", "Face ID"],
    specs: [["Pantalla", "6.1\" Liquid Retina HD"], ["Chip", "A13 Bionic"], ["Cámaras", "12 MP gran angular · 12 MP ultra gran angular"], ["Resistencia", "IP68"], ["Conector", "Lightning"], ["Red", "4G LTE"]],
    storage: caps([["64GB", 3990, 4790], ["128GB", 4490, 5290], ["256GB", 4990, 5790]]),
    colors: [
      { label: "Morado", hex: "#d1cde0", img: "img/i11-morado.jpg" },
      { label: "Negro", hex: "#1f2023", img: "img/i11-negro.jpg" },
      { label: "Blanco", hex: "#f4f4f2", img: "img/i11-blanco.jpg" },
      { label: "Verde", hex: "#aee1cd", img: "img/i11-verde.jpg" },
      { label: "Amarillo", hex: "#ffe681", img: "img/i11-amarillo.jpg" },
      { label: "(PRODUCT)RED", hex: "#ba0c2e", img: "img/i11-rojo.jpg" },
    ],
  }),

  /* ===================== AIRPODS ===================== */
  {
    id: "airpods-4",
    cat: "airpods",
    name: "AirPods 4",
    tag: "Estuche de carga USB-C",
    price: 2499,
    img: "img/airpods-4.png",
    badge: "Nuevo precio",
    desc: "Diseño rediseñado para mayor comodidad, chip H2, audio espacial personalizado y aislamiento de voz para llamadas más claras. Incluye estuche de carga USB-C.",
    hl: ["Diseño más cómodo", "Chip H2", "Audio espacial personalizado", "Aislamiento de voz", "Estuche de carga USB-C"],
    specs: [["Chip", "H2"], ["Batería", "Hasta 5 h · 30 h con estuche"], ["Resistencia", "IP54"], ["Carga", "USB-C"]],
  },
  {
    id: "airpods-4-anc",
    cat: "airpods",
    name: "AirPods 4 con cancelación activa de ruido",
    tag: "Cancelación activa · Estuche USB-C",
    price: 2999,
    img: "img/airpods-4-anc.png",
    badge: "Nuevo precio",
    featured: true,
    desc: "AirPods 4 con cancelación activa de ruido, modo Ambiente y audio espacial personalizado, con estuche de carga USB-C.",
    hl: ["Cancelación activa de ruido", "Modo Ambiente", "Audio espacial personalizado", "Chip H2", "Estuche de carga USB-C"],
    specs: [["Chip", "H2"], ["Batería", "Hasta 5 h · 30 h con estuche"], ["Resistencia", "IP54"], ["Carga", "USB-C"]],
  },
  {
    id: "airpods-5-anc",
    cat: "airpods",
    name: "AirPods 5 con cancelación activa de ruido",
    tag: "Cancelación activa · Estuche USB-C",
    price: 2999,
    img: "img/airpods-5-anc.png",
    badge: "Nuevo",
    desc: "La nueva generación de AirPods con cancelación activa de ruido y estuche de carga USB-C.",
    hl: ["Cancelación activa de ruido", "Nueva generación", "Estuche de carga USB-C"],
    specs: [["Cancelación de ruido", "Activa"], ["Estuche", "Carga USB-C"]],
  },
  {
    id: "airpods-5-anc-wireless",
    cat: "airpods",
    name: "AirPods 5 con cancelación activa de ruido y carga inalámbrica",
    tag: "Cancelación activa · Estuche inalámbrico",
    price: 3299,
    img: "img/airpods-5-anc-wireless.png",
    badge: "Nuevo",
    desc: "La nueva generación de AirPods con cancelación activa de ruido y estuche de carga inalámbrica con puerto USB-C.",
    hl: ["Cancelación activa de ruido", "Nueva generación", "Estuche de carga inalámbrica", "Puerto USB-C"],
    specs: [["Cancelación de ruido", "Activa"], ["Estuche", "Carga inalámbrica y USB-C"]],
  },
  {
    id: "airpods-pro-3",
    cat: "airpods",
    name: "AirPods Pro (3.ª generación)",
    tag: "Cancelación activa · Sensor de ritmo cardiaco",
    price: 5299,
    img: "img/airpods-pro-3.png",
    featured: true,
    desc: "Los AirPods Pro más avanzados: cancelación activa de ruido mejorada, sensor de ritmo cardiaco para tus entrenamientos, traducción en vivo y mayor duración de batería.",
    hl: ["Cancelación activa de ruido mejorada", "Sensor de ritmo cardiaco", "Audio espacial personalizado", "Resistencia IP57", "Estuche de carga USB-C"],
    specs: [["Chip", "H2"], ["Batería", "Hasta 8 h con cancelación de ruido"], ["Resistencia", "IP57"], ["Carga", "USB-C"]],
  },
  {
    id: "airpods-max",
    cat: "airpods",
    name: "AirPods Max (USB-C)",
    tag: "Over-ear · Cancelación activa · USB-C",
    price: 11999,
    img: "img/airpods-max.png",
    badge: "Últimas piezas",
    desc: "Audífonos over-ear con sonido de alta fidelidad, cancelación activa de ruido, audio espacial y conector USB-C. Diadema de malla transpirable y almohadillas de espuma viscoelástica.",
    hl: ["Sonido de alta fidelidad", "Cancelación activa de ruido", "Audio espacial con seguimiento de la cabeza", "Hasta 20 h de batería", "Carga USB-C"],
    specs: [["Tipo", "Over-ear"], ["Batería", "Hasta 20 h"], ["Conector", "USB-C"]],
    options: [{ key: "color", label: "Color", values: [{ label: "Medianoche" }, { label: "Blanco estelar" }, { label: "Azul" }, { label: "Morado" }, { label: "Naranja" }] }],
  },
  {
    id: "airpods-max-2",
    cat: "airpods",
    name: "AirPods Max 2",
    tag: "Over-ear · Nueva generación",
    price: 12499,
    img: "img/airpods-max-2.png",
    badge: "Nuevo",
    featured: true,
    desc: "La nueva generación de AirPods Max: audífonos over-ear con sonido de alta fidelidad y cancelación activa de ruido.",
    hl: ["Nueva generación", "Over-ear", "Cancelación activa de ruido", "Sonido de alta fidelidad"],
    specs: [["Tipo", "Over-ear"], ["Condición", "Nuevo"]],
  },

  /* ===================== CARGADORES ===================== */
  {
    id: "cargador-20w",
    cat: "cargadores",
    name: "Cargador Apple USB-C de 20 W",
    tag: "Carga rápida · 50 % en 30 min",
    price: 599,
    img: "img/cargador-20w.jpg",
    badge: "Más vendido",
    featured: true,
    desc: "Adaptador de corriente USB-C de 20 W de Apple para carga rápida en iPhone, AirPods y iPad. Carga tu iPhone al 50 % en unos 30 minutos.",
    hl: ["Carga rápida de 20 W", "Puerto USB-C", "Compatible con iPhone 8 en adelante", "Compacto y ligero"],
    specs: [["Potencia", "20 W"], ["Puerto", "USB-C"], ["Marca", "Apple"], ["Cable", "Se vende por separado"]],
  },
  {
    id: "cargador-40w",
    cat: "cargadores",
    name: "Cargador Apple USB-C Dinámico de 40 W (máx. 60 W)",
    tag: "Potencia dinámica hasta 60 W",
    price: 899,
    img: "img/cargador-40w.png",
    badge: "Nuevo",
    desc: "Adaptador de corriente USB-C de Apple con potencia dinámica: entrega 40 W y puede subir hasta 60 W cuando el dispositivo lo necesita. Ideal para carga rápida de iPhone, iPad y MacBook Air.",
    hl: ["40 W con picos de hasta 60 W", "Puerto USB-C", "Carga rápida", "Diseño compacto"],
    specs: [["Potencia", "40 W (máx. 60 W)"], ["Puerto", "USB-C"], ["Marca", "Apple"], ["Cable", "Se vende por separado"]],
  },
  {
    id: "cargador-magsafe",
    cat: "cargadores",
    name: "Cargador MagSafe",
    tag: "Inalámbrico magnético · USB-C",
    price: 999,
    img: "img/magsafe-1m.png",
    featured: true,
    desc: "Los imanes se alinean perfecto con tu iPhone para una carga inalámbrica más rápida y eficiente. También carga AirPods con estuche inalámbrico.",
    hl: ["Alineación magnética", "Carga inalámbrica rápida", "Cable USB-C integrado", "Compatible con AirPods"],
    specs: [["Conector", "USB-C integrado"], ["Compatibilidad", "iPhone 12 en adelante"], ["Marca", "Apple"]],
    options: [{ key: "largo", label: "Largo", values: [{ label: "1 m" }, { label: "2 m", price: 1299, img: "img/magsafe-2m.png" }] }],
  },

  /* ===================== CABLES ===================== */
  {
    id: "cable-usbc-lightning",
    cat: "cables",
    name: "Cable de USB-C a conector Lightning",
    tag: "Carga rápida · iPhone 11 y 12",
    price: 549,
    img: "img/cable-usbc-lightning-1m.png",
    featured: true,
    desc: "Conecta tu iPhone con conector Lightning a un adaptador USB-C para carga rápida y sincronización. El cable ideal para iPhone 11 y iPhone 12.",
    hl: ["Compatible con carga rápida", "Sincronización de datos", "Para iPhone con Lightning", "Original Apple"],
    specs: [["Conectores", "USB-C a Lightning"], ["Compatibilidad", "iPhone 5 a iPhone 14, AirPods"], ["Marca", "Apple"]],
    options: [{ key: "largo", label: "Largo", values: [{ label: "1 m" }, { label: "2 m", price: 699, img: "img/cable-usbc-lightning-2m.png" }] }],
  },
  {
    id: "cable-lightning-usb",
    cat: "cables",
    name: "Cable de conector Lightning a USB (1 m)",
    tag: "Para cubos y puertos USB-A",
    price: 549,
    img: "img/cable-lightning-usb.png",
    desc: "Cable para cargar y sincronizar tu iPhone con conector Lightning usando un adaptador o puerto USB-A tradicional.",
    hl: ["Puerto USB-A", "Para iPhone con Lightning", "Carga y sincronización", "Original Apple"],
    specs: [["Conectores", "USB-A a Lightning"], ["Largo", "1 m"], ["Marca", "Apple"]],
  },
  {
    id: "cable-usbc-240w",
    cat: "cables",
    name: "Cable de carga USB-C de 240 W (2 m)",
    tag: "Tejido · Hasta 240 W",
    price: 749,
    img: "img/cable-usbc-240w.png",
    featured: true,
    desc: "Cable USB-C tejido de 2 m que soporta hasta 240 W. Carga iPhone 15 o posterior, iPad, AirPods con USB-C y hasta MacBook Pro.",
    hl: ["Hasta 240 W", "Diseño tejido resistente", "2 metros de largo", "Original Apple"],
    specs: [["Conectores", "USB-C a USB-C"], ["Potencia", "Hasta 240 W"], ["Largo", "2 m"], ["Marca", "Apple"]],
  },
  {
    id: "cable-usbc-audio",
    cat: "cables",
    name: "Cable de USB-C a conector de audio de 3.5 mm (1.2 m)",
    tag: "Audio para auto y bocinas",
    price: 899,
    img: "img/cable-usbc-audio.png",
    desc: "Conecta un dispositivo con USB-C a estéreos de auto, bocinas y otros equipos con entrada de audio de 3.5 mm.",
    hl: ["USB-C a 3.5 mm", "Ideal para el auto", "1.2 m de largo", "Original Apple"],
    specs: [["Conectores", "USB-C a 3.5 mm"], ["Largo", "1.2 m"], ["Marca", "Apple"]],
  },
  {
    id: "cable-usbc-usbc",
    cat: "cables",
    name: "Cable USB-C a USB-C (1 m)",
    tag: "ROKA CASE · Carga y datos",
    price: 249,
    img: "img/cable-usbc-usbc.png",
    badge: "Mejor precio",
    desc: "Cable USB-C a USB-C de 1 m marca ROKA CASE para cargar y sincronizar dispositivos con USB-C.",
    hl: ["USB-C en ambos extremos", "Carga y transferencia de datos", "1 m de largo"],
    specs: [["Conectores", "USB-C a USB-C"], ["Largo", "1 m"], ["Marca", "ROKA CASE"]],
  },
];

/* ---------- Opiniones ---------- */
const REVIEWS = [
  { name: "Mariana G.", city: "Guadalajara, Jal.", pid: "iphone-11", product: "iPhone 11", text: "Me atendieron súper rápido por WhatsApp, el equipo llegó impecable y con la batería en excelente estado." },
  { name: "Luis R.", city: "CDMX", pid: "airpods-4", product: "AirPods 4", text: "Pagué por transferencia y en dos días ya los tenía. Originales y con su caja, muy recomendables." },
  { name: "Fernanda T.", city: "Monterrey, N.L.", pid: "iphone-12", product: "iPhone 12", text: "Excelente precio para un iPhone en tan buen estado. Me resolvieron todas mis dudas antes de comprar." },
  { name: "Jorge P.", city: "Puebla, Pue.", pid: "cargador-20w", product: "Cargador 20 W", text: "Carga rapidísimo y el cable se siente de calidad. Ya les compré dos veces." },
  { name: "Daniela M.", city: "Querétaro, Qro.", pid: "iphone-12-pro-max", product: "iPhone 12 Pro Max", text: "Llegó bien empacado y tal cual las fotos. La batería al 90 %, justo como me dijeron." },
  { name: "Ricardo S.", city: "Mérida, Yuc.", pid: "iphone-11-pro", product: "iPhone 11 Pro", text: "Pagué con tarjeta sin problema y me mandaron la guía el mismo día. Súper confiables." },
];
