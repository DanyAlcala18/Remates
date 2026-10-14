/* =========================================================
   Remates iSTORE — POLÍTICAS Y DATOS DE LA TIENDA
   ---------------------------------------------------------
   Revisa y ajusta estos datos: aparecen en el footer y
   dentro de cada política.
   ========================================================= */

const STORE = {
  hours: "Lunes a sábado · 10:00 a 20:00 h",
  coverage: "Envíos a toda la República Mexicana",
  warrantyDays: 30,   // garantía de funcionamiento en equipos
  returnDays: 7,      // días para solicitar un cambio o devolución
  shipDays: "1 a 5 días hábiles",
  updated: "octubre de 2026",
};

const POLICIES = [
  {
    id: "pagos",
    title: "Métodos de pago",
    icon: "bank",
    body: `
      <p>Todos los pagos se realizan <b>en moneda nacional (MXN)</b> mediante métodos locales de México. El pago se acuerda directamente contigo por WhatsApp; en esta página no se cobra nada.</p>
      <h4>Transferencia SPEI</h4>
      <p>Te compartimos la CLABE interbancaria por WhatsApp. Puedes transferir desde la app de cualquier banco mexicano (BBVA, Banorte, Santander, Banamex, HSBC, Nu, Mercado Pago, entre otros). Envíanos tu comprobante por el mismo chat para confirmar tu pedido.</p>
      <h4>Tarjeta de débito o crédito</h4>
      <p>Aceptamos Visa y Mastercard nacionales mediante un enlace de pago seguro que te enviamos por WhatsApp. Pregunta por disponibilidad de meses sin intereses.</p>
      <h4>Tu seguridad</h4>
      <ul>
        <li>Nunca te pediremos los datos de tu tarjeta por chat ni por llamada.</li>
        <li>Los datos de pago solo se comparten desde nuestro WhatsApp oficial.</li>
        <li>Tu pedido se envía una vez confirmado el pago.</li>
      </ul>`,
  },
  {
    id: "envios",
    title: "Política de envíos",
    icon: "truck",
    body: `
      <p>${STORE.coverage}. Todos los paquetes se envían <b>asegurados y con número de guía</b> para que puedas rastrearlos.</p>
      <h4>Tiempos</h4>
      <p>Los pedidos confirmados antes de las 14:00 h salen el mismo día hábil. El tiempo de entrega estimado es de ${STORE.shipDays}, según tu código postal y la paquetería.</p>
      <h4>Costo</h4>
      <p>El costo de envío se calcula según tu código postal y se confirma por WhatsApp antes de pagar.</p>
      <h4>Recepción</h4>
      <ul>
        <li>Revisa que el paquete llegue cerrado y sin daños antes de firmar.</li>
        <li>Si notas algo extraño, toma fotos y avísanos ese mismo día.</li>
      </ul>`,
  },
  {
    id: "garantia",
    title: "Garantía",
    icon: "shield",
    body: `
      <p>Todos nuestros equipos se revisan uno por uno antes de enviarse e incluyen <b>${STORE.warrantyDays} días de garantía de funcionamiento</b> a partir de la fecha de entrega.</p>
      <h4>Qué cubre</h4>
      <ul>
        <li>Fallas de funcionamiento no causadas por el usuario (pantalla, batería, cámaras, bocinas, carga, señal).</li>
        <li>Reparación o cambio del equipo por uno equivalente, según disponibilidad.</li>
      </ul>
      <h4>Qué no cubre</h4>
      <ul>
        <li>Golpes, caídas, humedad, pantallas estrelladas o daños por mal uso.</li>
        <li>Equipos abiertos o reparados por terceros.</li>
        <li>Desgaste estético normal en equipos Outlet.</li>
      </ul>
      <p>Para hacer válida la garantía, escríbenos por WhatsApp con tu número de folio.</p>`,
  },
  {
    id: "devoluciones",
    title: "Cambios y devoluciones",
    icon: "refresh",
    body: `
      <p>Tienes <b>${STORE.returnDays} días naturales</b> a partir de la entrega para solicitar un cambio o devolución.</p>
      <h4>Requisitos</h4>
      <ul>
        <li>El producto debe estar en las mismas condiciones en que lo recibiste, con sus accesorios y empaque.</li>
        <li>Presentar tu número de folio del pedido.</li>
        <li>El equipo no debe tener cuenta de iCloud activa ni bloqueo de activación.</li>
      </ul>
      <h4>Reembolsos</h4>
      <p>Una vez recibido y revisado el producto, el reembolso se realiza por el mismo método de pago en un plazo de 5 a 10 días hábiles. Los gastos de envío por devoluciones que no sean por falla corren por cuenta del cliente.</p>`,
  },
  {
    id: "privacidad",
    title: "Aviso de privacidad",
    icon: "lock",
    body: `
      <p>Remates iSTORE es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
      <h4>Datos que recabamos</h4>
      <p>Nombre, ciudad, código postal, número de WhatsApp y la dirección de envío que nos compartas para procesar tu pedido.</p>
      <h4>Para qué los usamos</h4>
      <ul>
        <li>Procesar, enviar y dar seguimiento a tu compra.</li>
        <li>Atender garantías, cambios y aclaraciones.</li>
      </ul>
      <p>No vendemos ni compartimos tus datos con terceros, salvo con la paquetería para realizar la entrega.</p>
      <h4>Tus derechos ARCO</h4>
      <p>Puedes solicitar el acceso, rectificación, cancelación u oposición al uso de tus datos escribiéndonos por WhatsApp.</p>`,
  },
  {
    id: "terminos",
    title: "Términos y condiciones",
    icon: "doc",
    body: `
      <p>Al realizar un pedido en Remates iSTORE aceptas los siguientes términos.</p>
      <ul>
        <li>Los precios están en pesos mexicanos (MXN) e incluyen IVA. El costo de envío se cotiza aparte.</li>
        <li>Los precios y la disponibilidad pueden cambiar sin previo aviso; el precio válido es el confirmado por WhatsApp.</li>
        <li>Un pedido se considera confirmado cuando se recibe el pago completo.</li>
        <li>Estado <b>Semi nuevo</b>: equipo revisado, funcional y en excelente estado estético. Estado <b>Outlet</b>: equipo en perfecto funcionamiento que puede mostrar ligeras marcas de uso.</li>
        <li>Remates iSTORE es una tienda independiente. iPhone, AirPods y MagSafe son marcas registradas de Apple Inc.</li>
      </ul>`,
  },
];
