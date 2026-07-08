/**
 * Contenido rico por producto en español.
 * Es la fuente de verdad: el inglés y el chino se mantienen al ritmo
 * que decidan negocio / traducción. Cualquier producto sin traducción
 * cae aquí como fallback (ver product-content.ts).
 */
import type { ProductContent } from './product-content'

export const productContent: Record<string, ProductContent> = {
  motorchat: {
    subtitle: 'La IA de Motorflash que atiende tus chats de Coches.net, Wallapop y Milanuncios al instante',
    sections: [
      {
        type: 'highlights',
        title: 'El problema que te está costando ventas',
        lead: 'Pagas por estar en los portales líderes… pero el retorno se pierde por el camino. Motor-Chat convierte cada mensaje en una oportunidad real.',
        highlights: [
          { title: '24/7', description: 'Atención sin descanso — también fuera de horario comercial' },
          { title: '0', description: 'Chats sin responder · ni un solo cliente se queda sin contestar' },
          { title: 'Inmediata', description: 'Contesta en el mismo momento en que te escriben' },
          { title: 'CRM', description: 'El lead entra directo en tu herramienta, listo para vender' },
        ],
        bullets: [
          'Inviertes en los portales, pero los leads no llegan: pagas por visibilidad en Coches.net y Wallapop y los mensajes se acumulan sin convertirse en oportunidades reales.',
          'Una persona atendiendo todas las cuentas, a mano: alguien de tu equipo con todas las cuentas abiertas todo el día, respondiendo una a una. Horas perdidas y respuestas que llegan tarde.',
          'Resultado: menos leads, atención lenta y tu equipo atrapado gestionando portales en vez de vender.',
        ],
      },
      {
        type: 'features',
        title: 'Motor-Chat atiende por ti, al instante',
        lead: 'Un agente de IA conectado a Coches.net, Wallapop y Milanuncios que responde, cualifica y entrega el lead a tu CRM.',
        items: [
          { title: 'Responde al instante', description: 'Respuesta inmediata mediante conversación en tiempo real, a cualquier hora. Sin turnos ni horarios.', icon: 'bolt' },
          { title: 'Pide los datos y genera el lead', description: 'Cualifica al cliente y recoge la información clave (vehículo de interés, intención, contacto) en una conversación natural.', icon: 'contact_page' },
          { title: 'Lo envía a tu CRM', description: 'El lead entra directo en tu herramienta comercial listo para vender. Sin trasvases manuales ni doble entrada de datos.', icon: 'sync_alt' },
          { title: 'Coches.net · Wallapop · Milanuncios', description: 'Conectado a los principales portales del sector. Un solo agente que atiende todas tus cuentas en paralelo.', icon: 'hub' },
          { title: 'Panel real de gestión', description: 'Dashboard con el estado de cada conversación, leads generados por portal y métricas de rendimiento.', icon: 'analytics' },
          { title: 'Sin curva de aprendizaje', description: 'Motor-Chat se conecta a tus cuentas existentes de portales y a tu CRM actual. Cero configuración manual.', icon: 'settings' },
        ],
      },
      {
        type: 'highlights',
        title: 'Lo que cambia en tu negocio',
        lead: 'Más leads captados, menos tiempo de respuesta y menos gestión manual. Motor-Chat te devuelve las horas que hoy pierdes en los portales.',
        highlights: [
          { title: '+ Más leads', description: 'Captados y cualificados · el volumen sube porque ningún chat queda sin contestar' },
          { title: '− Menos tiempo', description: 'De respuesta al cliente · contesta al segundo, en el mismo momento en que escribe' },
          { title: '− Menos gestión', description: 'Manual de los portales · tu equipo deja de perseguir mensajes y se centra en vender' },
          { title: '× 0 Chats perdidos', description: 'Ni un cliente sin respuesta · atención garantizada 24/7' },
        ],
        bullets: [
          'Motor-Chat trabaja 24 horas, 7 días a la semana, sin descanso ni vacaciones.',
          'Cada conversación queda registrada, cualificada y auditable desde el panel.',
          'Compatible con cualquier CRM del mercado a través de integración estándar.',
        ],
      },
      {
        type: 'cta',
        title: 'Deja que Motor-Chat gestione por ti',
        lead: 'Solicita tu demo y te enseñamos cómo Motor-Chat responde tus chats y llena tu CRM de leads desde el primer día.',
      },
    ],
  },
  'contact-center': {
    subtitle: 'Gestiona llamadas, chats y mensajes desde una sola plataforma conectada con tu CRM',
    sections: [
      {
        type: 'features',
        title: 'Control total, atención que convierte',
        lead: 'Gestiona llamadas, chats y mensajes desde un solo entorno. Nuestra IA de voz atiende y cualifica leads en tiempo real, mientras el sistema de Quality Monitoring analiza y puntúa cada conversación.',
        items: [
          { title: 'Llamadas inbound y outbound', description: 'Atendemos las llamadas entrantes y realizamos campañas de llamadas salientes para contactar y cualificar todos tus leads en menos de 5 minutos.', icon: 'support_agent' },
          { title: 'Cualificación de leads', description: 'Nuestros agentes especializados en automoción detectan el nivel de interés, el vehículo buscado, el plazo de compra y el presupuesto de cada lead.', icon: 'verified' },
          { title: 'Gestión de agenda', description: 'Concertamos visitas y pruebas de ruta directamente en la agenda de tus asesores. Tus comerciales reciben el lead ya con cita confirmada.', icon: 'calendar_month' },
          { title: 'Campañas de email y SMS', description: 'Secuencias de comunicación multicanal que complementan la gestión telefónica: emails de seguimiento, SMS de recordatorio y confirmación de citas.', icon: 'chat' },
          { title: 'Reporting en tiempo real', description: 'Dashboard con el rendimiento de cada campaña, tasa de contactabilidad, conversión a visita y cierre. Métricas reales para tomar decisiones.', icon: 'analytics' },
          { title: 'Equipo especializado en automoción', description: 'Agentes formados específicamente en el sector del motor. Saben de qué hablan al cliente y cómo cualificar correctamente cada lead.', icon: 'group' },
        ],
      },
      {
        type: 'highlights',
        title: 'El lead gestionado a tiempo multiplica la conversión',
        lead: 'El tiempo de respuesta es el factor más crítico en la conversión de leads de automoción. Los leads contactados en menos de 5 minutos convierten hasta 9 veces más.',
        highlights: [
          { title: 'Contacto en <5 minutos', description: 'El mejor tiempo de respuesta del sector' },
          { title: 'Lead cualificado con cita', description: 'Tu asesor solo atiende visitas confirmadas' },
          { title: '70.000 llamadas/mes', description: 'Experiencia a escala en automoción' },
          { title: 'Agentes especializados', description: 'Conocen el sector de la automoción' },
        ],
        bullets: [
          'Contacto en menos de 5 minutos: tu lead es llamado antes de que tenga tiempo de contactar con la competencia.',
          'Persistencia controlada: hasta 6 intentos de contacto por lead con pausas optimizadas para maximizar la tasa de contacto.',
          'Escala sin fricción: absorbe picos de leads sin necesidad de ampliar tu plantilla. Pagas por lead gestionado.',
          'Grabación de todas las llamadas para control de calidad y formación',
          'Integración directa con tu CRM sin doble entrada de datos',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo trabajamos contigo?',
        steps: [
          { title: 'Configuración del servicio', description: 'Definimos contigo los scripts de llamada, los criterios de cualificación y la integración con tu CRM y agenda de asesores.' },
          { title: 'Activación y gestión de leads', description: 'En cuanto llega un lead, nuestro equipo lo contacta en menos de 5 minutos y realiza los intentos necesarios hasta establecer contacto.' },
          { title: 'Entrega y seguimiento', description: 'El lead cualificado y con cita llega a tu CRM. Informe semanal con resultados y métricas de conversión de tu concesionario.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Quieres que ningún lead se quede sin llamar?',
        lead: 'Solicita una propuesta personalizada y te explicamos cómo Contact Center puede aumentar tu tasa de conversión desde el primer mes.',
      },
    ],
  },
  'spyne': {
    subtitle: 'La solución de IA para tus catálogos de coches — antes Carlens',
    sections: [
      {
        type: 'highlights',
        title: 'El 95% de los concesionarios publica online. Y el 40% de los compradores decide sin pisar el concesionario.',
        lead: 'Tus fotos son tu fuerza de venta. Hacerlas bien con el método tradicional cuesta tiempo, dinero y un fotógrafo profesional. Photocall IA elimina esas tres barreras de un golpe: cualquier persona del concesionario puede generar fotos y vídeos de calidad profesional desde el aparcamiento.',
        highlights: [
          { title: '95%', description: 'De concesionarios publican su stock online' },
          { title: '40%', description: 'De compradores no llegan a ver el coche en persona antes de decidir' },
          { title: '4,2 webs', description: 'En las que entra un comprador antes de elegir vehículo' },
          { title: '+150', description: 'Funcionalidades de IA disponibles entre detección y transformación' },
        ],
        bullets: [
          'Costes: te ahorras fotógrafo profesional, estudio y equipamiento.',
          'Experiencia: la guía en pantalla y la IA cubren la parte técnica por ti.',
          'Tiempo: foto al coche, procesado automático y publicación al instante en tus canales.',
        ],
      },
      {
        type: 'features',
        title: 'Imágenes y vídeos que convierten',
        lead: 'IA en la nube + app móvil. Cualquier comercial del concesionario hace la foto, la IA hace el resto: fondo profesional, reflejos, iluminación, matrícula, ángulo… Todo automático y con resultado consistente en cada vehículo.',
        items: [
          { title: 'Sustitución automática de fondos', description: 'La IA detecta el coche, recorta y reemplaza el fondo por uno profesional, un estudio virtual o el fondo personalizado de tu concesionario con tu logo.', icon: 'wallpaper' },
          { title: 'Generación de plataforma giratoria', description: 'Genera automáticamente la plataforma/suelo bajo el coche para que parezca tomado en estudio, incluso si la foto se hizo en el parking.', icon: 'view_in_ar' },
          { title: 'Vídeo Spin 360° interactivo', description: 'Crea vídeos 360° que muestran el vehículo desde todos los ángulos. El comprador gira el coche desde su móvil — más tiempo en ficha, más conversión.', icon: 'rotate_90_degrees_ccw' },
          { title: 'Corrección de reflejos y sombras', description: 'Identifica y elimina reflejos en carrocería y cristales, ajusta sombras y mejora la iluminación para que cada foto luzca como editada a mano.', icon: 'auto_fix_high' },
          { title: 'Cobertura inteligente de matrícula', description: 'Sustituye la matrícula por una limpia, la oculta o la cubre con el logo del concesionario. RGPD cumplido sin pasos manuales.', icon: 'directions_car' },
          { title: 'Tintado de lunas y visión interior', description: 'Cubre ventanas para imagen homogénea o tapa lo que se ve a través de ellas (gente, otros coches, paredes) — el foco siempre en el vehículo.', icon: 'blur_on' },
          { title: 'Corrección de inclinación y ángulo', description: 'Detecta y corrige automáticamente la inclinación del coche y la perspectiva para que todas las fotos del catálogo tengan el mismo encuadre.', icon: 'straighten' },
          { title: '+50 detecciones automáticas con IA', description: 'Identifica reflejos, exposición, desenfoque, imágenes cortadas, ángulo de posición, distancia, tipo de coche, tonos, neumáticos y barro en ruedas — auditoría continua de la calidad.', icon: 'auto_awesome' },
          { title: 'Logo del concesionario incrustado', description: 'Tu marca en el fondo y en la matrícula sin que se note edición. Catálogo coherente en todos los portales.', icon: 'verified' },
          { title: 'Mejora de fotos de interior', description: 'Corrige la inclinación interior, cubre exteriores visibles por las ventanas y mejora la iluminación del habitáculo.', icon: 'airline_seat_recline_normal' },
          { title: 'Mejora de resolución y enfoque', description: 'Sube la nitidez y el enfoque de imágenes antiguas o de baja resolución. Auditoría automática del catálogo histórico.', icon: 'high_quality' },
          { title: 'Reajuste de tamaños por portal', description: 'Genera automáticamente todas las variantes de tamaño que pide cada portal (Coches.net, AutoScout24, redes sociales, tu web…).', icon: 'aspect_ratio' },
        ],
      },
      {
        type: 'highlights',
        title: '5 formas de integrar Photocall IA en tu concesionario',
        lead: 'Tú eliges el canal que mejor encaja con tus procesos. Funcionan en paralelo: alguien hace fotos con la app mientras el sistema mete las del DMS por API.',
        highlights: [
          { title: 'App iOS / Android', description: 'Hace fotos cualquiera, sin formación técnica' },
          { title: 'Consola Carlens360', description: 'Panel web con todas tus fotos y proyectos' },
          { title: 'API e integración DMS', description: 'Sube todo el inventario automáticamente' },
          { title: 'SDK', description: 'Empotra el flujo de fotos en tu propia app' },
        ],
        bullets: [
          'Carlens App: sencilla en iOS y Android, guía paso a paso para cada ángulo del vehículo.',
          'Consola Carlens360: acceso web a todas tus fotos, proyectos y configuraciones de IA.',
          'API: actualiza el inventario completo desde tu DMS sin intervención manual.',
          'SDK: embebe el flujo de captura en la app del concesionario o del fabricante.',
          'Integración DMS: nos enchufamos al workflow que ya tienes — concesionario → proveedor web → portal.',
        ],
      },
      {
        type: 'process',
        title: 'De la foto a la publicación en minutos',
        steps: [
          { title: 'Captura con la app', description: 'El comercial abre la Carlens App, escanea el vehículo y sigue la guía en pantalla para capturar todos los ángulos. Sin estudio, sin trípode, sin fotógrafo.' },
          { title: 'Procesado automático con IA', description: 'Las imágenes suben a la nube. La IA aplica las +100 transformaciones configuradas (fondo, reflejos, matrícula, logo, vídeo 360°) y audita la calidad con +50 detecciones automáticas.' },
          { title: 'Publicación sincronizada', description: 'El vehículo, sus fotos finales y el vídeo 360° se publican en tu web, en Coches.net, AutoScout24 y en tu DMS. Sin re-trabajo y sin diferencias entre canales.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Quieres ver tu catálogo transformado con IA?',
        lead: 'Te enseñamos una demo con fotos reales de tu stock procesadas en directo. Set up desde 150 €, procesado desde 4 € por galería de hasta 40 fotos (5,50 € con Spin 360° incluido).',
      },
    ],
  },
  'motorflash-message': {
    subtitle: 'WhatsApp para empresas del automóvil · IA primero · desde 20 €/usuario/mes · piloto de 4 semanas',
    sections: [
      {
        type: 'highlights',
        title: 'El valor del lead se deteriora minuto a minuto',
        lead: 'Cerca del 75 % de los compradores compran al primer concesionario que responde — la rapidez es la mayor palanca de conversión. MF Message es la única plataforma de WhatsApp diseñada específicamente para empresas del automóvil: dashboard, coexistencia, IA conversacional y enrutamiento a escala de grupo.',
        highlights: [
          { title: '60 %', description: 'Conversión si respondes en menos de 1 minuto' },
          { title: '65 %', description: 'De los leads de formulario no reciben respuesta en 24 horas' },
          { title: '25-42 %', description: 'De los leads telefónicos nunca se atienden eficazmente' },
          { title: 'Desde 20 €', description: 'Por usuario/mes — 6-8× más barato que la competencia CX' },
        ],
        bullets: [
          'Un lead pierde su eficacia 30 minutos después de enviarse para su gestión.',
          'Los portales verticales lanzaron WhatsApp como un chat web: bot básico, sin transferencia a comercial, sin analítica, sin trazabilidad de cierre.',
          'MF Message resuelve ese vacío: WhatsApp empresarial real con IA, coexistencia y enrutamiento entre cientos de concesionarios.',
          'IA primero, plataforma multi-agente con dashboard y SLA bajo control desde el día 1.',
        ],
      },
      {
        type: 'features',
        title: 'Las 5 claves de MF Message',
        lead: 'Lo que WhatsApp Business no ofrece — y lo que ni siquiera las plataformas CX empresariales han adaptado al sector del automóvil.',
        items: [
          { title: 'Dashboard y analítica de datos', description: 'KPIs en directo (conversaciones totales, transferidas, atendidas a tiempo, perdidas), tiempos de espera y SLA por canal/grupo/franja, actividad por equipo y agente, etiquetado de conversaciones con estado y etiquetas personalizadas, exportación a Excel.', icon: 'analytics' },
          { title: 'Coexistencia · sin barreras', description: 'Sin plantillas de Meta, sin ventana de 24 horas: tu equipo escribe libremente en lenguaje natural. Conecta con las líneas WhatsApp Business que tus comerciales ya usan, y todo queda registrado en el panel y en tu CRM en segundo plano.', icon: 'sync' },
          { title: 'Dos arquitecturas diferentes', description: 'A) Un número maestro → muchos negocios: enrutamiento por marca, geografía, modelo o campaña (caso Das WeltAuto: 200+ concesionarios bajo un número). B) Muchos negocios → muchas líneas: ideal para portales que revenden la plataforma a sus dealers.', icon: 'account_tree' },
          { title: 'IA conversacional en producción', description: 'Primera línea de respuesta: cualifica leads, agenda visitas, optimiza la conversación 24/7 y solo escala a humano cuando hace falta criterio. Multilingüe, NLP con intención/entidad/sentimiento, prompt editable desde la propia herramienta.', icon: 'smart_toy' },
          { title: 'API · el conector que unifica los cuatro', description: 'Un único hub bidireccional que conecta clientes (WhatsApp directo, leads de portales, CTA web), espacio de agentes, comerciales y tu CRM. Cumplimiento RGPD de extremo a extremo y entrega en tiempo real.', icon: 'hub' },
          { title: 'Plataforma específica para automoción', description: 'Diseñada para cerrar ventas en el sector del motor: estados del cliente (En conversación → Compra → Financiación → Posventa) sincronizados con el CRM, plantillas y enrutamiento listos para concesionario.', icon: 'verified' },
        ],
      },
      {
        type: 'highlights',
        title: 'Coexistencia: 0 barreras, 0 bloqueos',
        lead: 'Conecta MF Message con la app de WhatsApp Business que el comercial ya tiene en su teléfono (línea de empresa). Cada chat fluye al panel y al CRM en segundo plano, sin que el comercial tenga que instalar nada. Funciona con las cuentas que ya usa el equipo, no con un chat web genérico.',
        highlights: [
          { title: 'Sin plantillas de Meta', description: 'Texto libre en lenguaje natural · sin bloqueos previos' },
          { title: 'Sin ventana de 24 h', description: 'Las conversaciones nunca se cierran · responde cuando haga falta' },
          { title: 'Sin costes de plantilla', description: 'Aprovecha la línea Business que ya tienes' },
          { title: 'Trazabilidad total al CRM', description: 'Cada mensaje sincronizado · panel de moderación centralizado' },
        ],
        bullets: [
          'Conectar → Sincronizar → Trabajar como siempre: el comercial sigue chateando de forma nativa.',
          'Compatible con la línea de empresa (un número personal está prohibido en España para uso profesional).',
          'Usa los contactos que ya tienes en el teléfono, sin migraciones.',
          'Panel central con KPIs y SLA por agente, grupo y franja horaria.',
        ],
      },
      {
        type: 'features',
        title: 'IA en producción — tu primer agente incansable',
        lead: 'La IA de MF Message gestiona conversaciones entrantes de principio a fin y solo escala cuando se requiere criterio humano. Operativa hoy en cuentas reales con métricas por cliente disponibles bajo petición.',
        items: [
          { title: 'Respuesta instantánea 24/7', description: 'Primera respuesta en menos de un segundo. Ningún cliente espera, ni de noche ni en fin de semana.', icon: 'bolt' },
          { title: 'NLP multilingüe', description: 'Intención, entidad y sentimiento extraídos del historial completo de conversación a nivel grupo. Conversación natural en varios idiomas.', icon: 'translate' },
          { title: 'Cualificación de leads automática', description: 'Vehículo, presupuesto, geografía e intención se extraen y se envían al CRM. La IA agenda visitas y reserva pruebas de conducción.', icon: 'fact_check' },
          { title: 'Traspaso fluido al humano', description: 'Cuando la operación madura, la IA transfiere al comercial con todo el contexto. Sin repeticiones, sin pérdida de información.', icon: 'forward_to_inbox' },
          { title: 'Búsqueda en toda la base de datos', description: 'Consulta todo tu stock para dar al cliente la información máxima disponible. Cada consulta se ejecuta de forma anonimizada y conforme con el RGPD.', icon: 'search' },
          { title: 'Prompt editable + retroalimentación', description: 'Ajusta el comportamiento de la IA desde la propia herramienta con bloques de comportamiento. Comenta las respuestas para corregirla y entrenarla: mejora continuamente.', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: 'Caso real · Das WeltAuto',
        lead: 'La operación de vehículos de ocasión certificados del Grupo Volkswagen en España gestiona todo su negocio de WhatsApp a través de MF Message: una única puerta de entrada para toda España y enrutamiento automático al concesionario adecuado.',
        highlights: [
          { title: '200+', description: 'Concesionarios bajo un único número maestro' },
          { title: '1', description: 'Número de cara al cliente para toda España' },
          { title: '5', description: 'Unidades de negocio enrutadas (ventas, servicio, recambios, administración, posventa)' },
          { title: '288', description: 'Concesionarios con panel a nivel de grupo' },
        ],
        bullets: [
          'Cada consulta de WhatsApp se enruta al concesionario y unidad de negocio adecuados, automáticamente.',
          'Visibilidad total desde la central · paneles a nivel de grupo en los 288 concesionarios y 5 unidades de negocio.',
          'Historial completo de conversaciones en el CRM, incluso cuando cambian los concesionarios: los datos del cliente permanecen en el grupo.',
          'Conforme con el RGPD por diseño · cada consentimiento con marca temporal · cada interacción auditable.',
        ],
      },
      {
        type: 'highlights',
        title: 'Precios diseñados para superar al mercado',
        lead: 'Transparente, modular y con el tráfico de Meta repercutido a coste. Sin márgenes ocultos. Las plataformas CX empresariales arrancan en 132-169 € por usuario — MF Message arranca en 20 €.',
        highlights: [
          { title: 'Desde 20 €/usuario/mes', description: 'Licencia unificada: WhatsApp Business + Coexistencia. Consola, campañas, analítica y RGPD incluidos.' },
          { title: '132-169 € la competencia', description: 'Zendesk 169 $ · Salesforce 165 $ · Twilio Flex 150 $ · Intercom 132 $ · 6-8× más caro que MF antes de complementos.' },
          { title: 'IA · 150 €/mes + 0,08 €/conv.', description: 'Todo incluido: LLM, orquestación y mejora continua. Una licencia, un precio por conversación.' },
          { title: 'Tráfico Meta a coste', description: '≈ 0,0509 €/conversación saliente si usas plantilla de marketing · sin recargo.' },
        ],
        bullets: [
          'Descuentos por volumen a partir de 100 / 250 usuarios activos.',
          'SLA empresariales y gestión de éxito dedicada incluidos.',
          'Hasta 6,50 € por lote de agentes adicionales.',
          'Precios de entrada orientativos · precio final adaptado al volumen y al alcance del proyecto.',
        ],
      },
      {
        type: 'process',
        title: 'De la sesión de descubrimiento al despliegue de grupo',
        steps: [
          { title: 'Sesión de descubrimiento (60 min)', description: 'Taller con tu equipo de operaciones comerciales + IT para mapear tu presencia actual en WhatsApp, los flujos de respuesta del concesionario y los puntos donde se pierden leads hoy.' },
          { title: 'Piloto en 4 semanas', description: 'Conectamos 3-5 concesionarios y validamos Coexistencia + enrutamiento + IA + sincronización con CRM de extremo a extremo. Pruebas con conversaciones reales en producción.' },
          { title: 'Despliegue por fases en el grupo', description: 'Implantación progresiva por marcas, regiones y unidades de negocio, co-liderada por Motorflash. Onboarding del equipo y métricas activas desde el primer día.' },
        ],
      },
      {
        type: 'cta',
        title: 'Construyamos lo que viene · lleva WhatsApp a tu operación, a escala de grupo',
        lead: 'Reserva la sesión de descubrimiento de 60 minutos con nuestro equipo. En 4 semanas tienes piloto en producción con 3-5 concesionarios y, si encaja, plan de despliegue de grupo. Contacto directo: Andrés Tejero · info@motorflash.com · +34 913 728 790.',
      },
    ],
  },
  'ia': {
    subtitle: 'IA en WhatsApp, Chat web y Voz — disponibles 24/7',
    sections: [
      {
        type: 'features',
        title: 'IA conversacional adaptada a cada canal',
        lead: 'Cada canal tiene su propio comportamiento y su propio tipo de cliente. Nuestras soluciones de IA están diseñadas específicamente para WhatsApp, web y voz, maximizando la conversión en cada punto de contacto.',
        items: [
          { title: 'IA en WhatsApp', description: 'Canal directo y familiar: el cliente ya usa WhatsApp, sin barreras ni descarga. Conversación libre, natural y disponible 24/7 para captar leads, responder dudas y enviar información del vehículo.', icon: 'chat' },
          { title: 'Chat web con flujo cerrado', description: 'Integrado en tu web: capta al usuario mientras navega. Ideal para tareas concretas como formularios, reservas, FAQs o cotizaciones. Guía al cliente paso a paso hacia la conversión.', icon: 'edit_note' },
          { title: 'IA de Voz', description: 'Asistente de voz inteligente para concertar citas, resolver dudas rápidas o completar procesos iniciados por chat. Atiende llamadas fuera de horario sin dejar ningún lead sin respuesta.', icon: 'support_agent' },
          { title: 'Disponible 24/7 sin descanso', description: 'La IA atiende en festivos, por la noche y en fines de semana. Ningún lead se queda sin respuesta por fuera de horario. Más oportunidades de venta, sin coste adicional de personal.', icon: 'schedule' },
          { title: 'Relación y seguimiento continuo', description: 'La IA mantiene el hilo de la conversación a lo largo de varios días. Reactiva leads fríos, agenda recordatorios y sigue al cliente hasta la venta.', icon: 'autorenew' },
          { title: 'Integración con tu CRM y sistemas', description: 'Cada conversación queda registrada en CRM4YOU. La IA conoce el stock, los precios y la disponibilidad de tus vehículos en tiempo real.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'El canal marca la diferencia en la conversión',
        lead: 'No todos los canales de IA tienen el mismo alcance ni las mismas posibilidades de seguimiento. Entender las diferencias te ayuda a elegir la combinación más rentable para tu concesionario.',
        highlights: [
          { title: 'IA en WhatsApp', description: 'Canal familiar · Seguimiento post-visita' },
          { title: 'Chat web con flujo cerrado', description: 'Ideal para reservas, FAQs y cotizaciones' },
          { title: 'IA de Voz', description: 'Citas y dudas resueltas por voz 24/7' },
          { title: 'Leads al CRM', description: 'Sin doble entrada, historial completo' },
        ],
        bullets: [
          'Alcance: WhatsApp llega al cliente donde ya está; el chat web solo funciona mientras navega tu página.',
          'Conversación: la IA de WhatsApp entiende preguntas libres; el chat web sigue flujos predefinidos.',
          'Seguimiento: WhatsApp permite retomar el contacto días después; el chat web termina cuando el usuario cierra la pestaña.',
          'WhatsApp es más cercano y genera mayor confianza que un chat web genérico',
          'El chat web es ideal para procesos estructurados: reservas, cotizaciones o FAQs',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo funciona la IA de Motorflash?',
        steps: [
          { title: 'Configuramos tu canal', description: 'Definimos contigo el canal o canales de IA más adecuados para tu negocio: WhatsApp, chat web o voz. Configuramos los flujos de conversación y los integramos con tu CRM.' },
          { title: 'La IA atiende y cualifica', description: 'La inteligencia artificial conversa con tus clientes de forma natural, responde dudas, capta datos de contacto y detecta el nivel de interés de cada prospecto en tiempo real.' },
          { title: 'Lead cualificado a tu equipo', description: 'Los leads con mayor intención de compra se trasladan al equipo de ventas con el historial de conversación completo. Tu asesor entra en acción en el mejor momento.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Tu concesionario pierde leads fuera del horario de atención?',
        lead: 'Activa la IA conversacional y empieza a captar y cualificar leads las 24 horas, sin aumentar tu plantilla.',
      },
    ],
  },
  'soluciones-web': {
    subtitle: 'Optimizada para vender, rendimiento rápido y total autonomía de gestión',
    sections: [
      {
        type: 'features',
        title: 'Tu escaparate digital, con todo bajo control',
        lead: 'Gestiona contenido, promociones y stock desde un mismo panel. Rendimiento, diseño y facilidad de uso para impulsar tus resultados online.',
        items: [
          { title: 'Web 100 % automoción', description: 'Incluye todo lo que un concesionario necesita: gestión de stock, leads, renting, tasaciones y más, con una experiencia de usuario fluida y profesional.', icon: 'language' },
          { title: 'Diseño optimizado para generar leads', description: 'UX/UI pensado para convertir visitas en contactos: formularios inteligentes, pasarelas de pago y secciones personalizadas para destacar tus ofertas.', icon: 'trending_up' },
          { title: 'Autogestionable con IA', description: 'Crea y actualiza tus propios contenidos, landings y formularios con nuestro CMS potenciado por inteligencia artificial para una gestión más fluida.', icon: 'auto_awesome' },
          { title: 'Diseñada para convertir en dos clics', description: 'Estructura orientada a la conversión, con formularios inteligentes y pasarelas de pago integradas.', icon: 'verified' },
          { title: 'Optimizada para SEO', description: 'Marcado de datos estructurados automático, sitemap dinámico, velocidad Core Web Vitals A+ y arquitectura SEO friendly desde el primer día.', icon: 'trending_up' },
          { title: 'CMS propio pensado para el sector', description: 'Sin plugins externos. Todo lo que necesita un concesionario integrado nativamente: stock, leads, tasaciones, formularios y reporting.', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: '10 ventajas que nos diferencian de la competencia',
        lead: 'Nuestra tecnología integra las bases de datos más completas del sector para que tu web sea la más informativa y la que mejor convierte.',
        highlights: [
          { title: 'Base de datos JATO/Eurotax', description: 'Equipamiento completo automático' },
          { title: 'Feeds automáticos de fabricante', description: 'Stock siempre actualizado' },
          { title: 'Calculadora financiera', description: 'Contado y financiación integradas' },
          { title: 'Formulario de tasación online', description: 'Capta leads de venta de VO' },
        ],
        bullets: [
          'Integración con bases de datos JATO y Eurotax para equipamiento completo',
          'Feeds automáticos de stock de fabricante (Audi, BMW, Mercedes, VW...)',
          'Calculadora financiera de contado y financiación integrada',
          'Formulario de tasación y solicitud de prueba de ruta',
          'Agenda de taller y calculadora de neumáticos',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo funciona?',
        steps: [
          { title: 'Consultoría gratuita', description: 'Analizamos tu web actual, tu competencia y definimos juntos el proyecto que mejor se adapta a tu negocio.' },
          { title: 'Desarrollo en 30 días', description: 'Nuestro equipo desarrolla tu web con tecnología propia. Te mantenemos informado en todo momento del progreso.' },
          { title: 'Lanzamiento y soporte', description: 'Formación de 3 horas en el CMS, SEO inicial configurado y puesta en marcha. Soporte continuo incluido.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Lista para renovar tu web de automoción?',
        lead: 'Solicita tu consultoría gratuita hoy y te preparamos un análisis sin compromiso de tu web actual.',
      },
    ],
  },
  'marketing-digital': {
    subtitle: 'Impulsa tu visibilidad, conecta con tus clientes y vende más online',
    sections: [
      {
        type: 'features',
        title: 'Estrategias inteligentes, resultados reales',
        lead: 'El equipo de Marketing Digital de Motorflash combina experiencia y tecnología para diseñar campañas personalizadas y medibles. Estrategias adaptadas al sector de la automoción, pensadas para generar impacto y aumentar tus ventas.',
        items: [
          { title: 'Especialización en automoción', description: 'Conocemos las necesidades y particularidades del mercado del motor, lo que nos permite diseñar estrategias digitales adaptadas a cada concesionario o empresa de compraventa.', icon: 'verified' },
          { title: 'Equipos especializados en GEO, SEA y Social', description: 'Un equipo experto en GEO (el nuevo SEO, visibilidad en Google y en los buscadores IA), otro dedicado exclusivamente a SEA y un tercero centrado en Social Ads para potenciar tu negocio.', icon: 'group' },
          { title: 'Estrategia integral y optimización continua', description: 'Desarrollamos y analizamos campañas en GEO, SEA y redes sociales, optimizando cada acción para maximizar el rendimiento y generar más oportunidades de venta.', icon: 'autorenew' },
          { title: 'GEO · el nuevo SEO', description: 'El SEO evoluciona: GEO (Generative Engine Optimization) sustituye al SEO tradicional. Incluye todo lo del SEO técnico de siempre — arquitectura, contenido, autoridad — y añade la optimización para Google AI Overviews, ChatGPT, Perplexity y Gemini. Cuando un comprador te busca en Google o le pregunta a la IA por concesionarios, tu marca aparece.', icon: 'auto_awesome' },
          { title: 'SEA a la vanguardia con Google Ads', description: 'Trabajamos con las últimas incorporaciones de Google Ads para automoción: Vehicle Ads (anuncios de vehículos en Google Search y Maps), conversiones offline para medir ventas reales en el concesionario, Business Agent for leads y todas las novedades que Google va lanzando para el sector. No esperamos a que se estabilicen: probamos y desplegamos desde el día 1.', icon: 'bolt' },
          { title: 'Social Ads · Meta y TikTok', description: 'Prospección en Meta y TikTok con creatividades ajustadas al motor, targeting sectorial y medición de conversión real hasta el cierre. Alcance a compradores que aún no te buscan activamente.', icon: 'share' },
          { title: 'Rendimiento medible', description: 'Visualiza los datos más importantes de tus campañas desde un panel claro y visual. Evalúa el impacto de cada acción y toma decisiones basadas en resultados reales.', icon: 'analytics' },
          { title: 'Un equipo que trabaja contigo', description: 'No somos una agencia más. Trabajamos pegados a tu equipo comercial, ajustando las campañas según el funnel real de tu concesionario.', icon: 'support_agent' },
          { title: 'Campañas personalizadas', description: 'Cada acción se adapta a tu marca, tu stock y tu objetivo de venta. Nada genérico: todo a medida.', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: 'Tráfico que te busca vs. tráfico que te descubre',
        lead: 'No todo el tráfico tiene el mismo valor ni el mismo momento de compra. Nuestra estrategia combina ambos tipos para maximizar resultados a corto y largo plazo.',
        highlights: [
          { title: 'Tráfico orgánico GEO', description: 'Google + buscadores IA · sin coste por clic' },
          { title: 'Campañas SEA con Google Ads', description: 'Vehicle Ads, conversiones offline, Business Agent' },
          { title: 'Social Ads Meta / TikTok', description: 'Prospección a menor coste' },
          { title: 'Reporting en tiempo real', description: 'Métricas de negocio, no de vanidad' },
        ],
        bullets: [
          'GEO / SEA: clientes que buscan tu marca o tus vehículos en Google o le preguntan a la IA. Conversión inmediata en cualquier motor de búsqueda.',
          'Social Ads: prospectos que aún no te conocen. Conversión a medio plazo a menor coste.',
          'SEA a la vanguardia: Vehicle Ads, conversiones offline y Business Agent for leads — todas las novedades de Google, desde el día 1.',
          'Seguimiento del funnel completo: visita → lead → llamada → venta',
          'Reporting mensual con métricas reales de negocio, no de vanidad',
          'Optimización continua basada en datos, no en suposiciones',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo trabajamos?',
        steps: [
          { title: 'Auditoría gratuita', description: 'Analizamos tu web, el tráfico actual, la competencia y las oportunidades de mejora. Sin coste ni compromiso.' },
          { title: 'Plan de acción', description: 'Diseñamos una estrategia personalizada con objetivos medibles, canales prioritarios y presupuesto recomendado.' },
          { title: 'Ejecución y reporting', description: 'Implementamos, medimos y optimizamos continuamente. Informe mensual con resultados reales.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Tu web no genera suficientes leads?',
        lead: 'Solicita tu auditoría gratuita y te decimos exactamente qué está fallando y cómo solucionarlo.',
      },
    ],
  },
  'lead-factory': {
    subtitle: 'Captación de leads con intención de compra real · Cualificados o sin cualificar',
    sections: [
      {
        type: 'highlights',
        title: '¿De dónde vienen los leads?',
        lead: 'Dos fuentes de tráfico complementarias que alimentan el canal: tráfico orgánico SEO y la mayor base de stock e inventario del mercado.',
        highlights: [
          { title: '70.000+', description: 'Vehículos publicados en el portal Motorflash.com' },
          { title: '17.000+', description: 'Concesionarios trabajando con Motorflash.com' },
          { title: '120.000', description: 'Visitas orgánicas mensuales al portal' },
          { title: 'SEO', description: 'Posicionamiento por marca, modelo e intención de compra' },
        ],
        bullets: [
          'SEO orgánico cualificado: posicionamiento por marca y modelo (Audi A4, Q3, Q5…) y por búsquedas con intención de compra ("Citroen ocasión Madrid").',
          'Portal Motorflash: la mayor base de stock e inventario del mercado, con tráfico orgánico especializado en automoción.',
          'Lead de alta calidad: el usuario llega buscando comprar, no navegando por curiosidad.',
        ],
      },
      {
        type: 'features',
        title: 'Dos modalidades, una promesa',
        lead: 'Elige el nivel de cualificación que mejor encaje con tu equipo comercial. Solo pagas por leads entregados — sin coste de inversión publicitaria.',
        items: [
          { title: 'Cualificado', description: 'Filtrado por nuestro sistema de scoring: solo entregamos leads que superan el umbral mínimo de cualificación. Máxima calidad para tu equipo comercial.', icon: 'verified' },
          { title: 'Prospect (sin cualificar)', description: 'Mismo origen de tráfico, sin filtro de scoring. Mayor volumen, cualificación a cargo de tu equipo comercial. Sin duplicados ni repetidos.', icon: 'inventory' },
          { title: 'Sin inversión publicitaria', description: 'No pagas por clicks ni por campañas: solo pagas por lo que recibes. Modelo escalable según la capacidad de gestión de tu equipo.', icon: 'savings' },
          { title: 'Entregable completo', description: 'Cada prospect llega con nombre, teléfono, email, vehículo de interés (marca y modelo), intención de compra (plazo y urgencia) y ubicación (provincia y ciudad).', icon: 'contact_page' },
          { title: 'Filtro de calidad', description: 'Solo el 70 % de los leads generados pasa el filtro inicial. Solo te entregamos los que son prospect válidos.', icon: 'filter_alt' },
          { title: 'Contacto caliente', description: 'La inmediatez es clave: contactar caliente multiplica la conversión. Te enviamos el lead al momento para que actúes con la máxima información.', icon: 'schedule' },
        ],
      },
      {
        type: 'process',
        title: 'Sistema de Scoring · 6 variables',
        steps: [
          { title: 'Intención de compra', description: 'Menos de 1 mes · 1-3 meses · 3+ meses. El plazo previsto de compra impacta directamente en el scoring.' },
          { title: 'Encaje del vehículo', description: 'Escala de 1 a 5 sobre el modelo buscado. Cuanto mejor encaje con tu stock, más alto el score.' },
          { title: 'Confirmación de ubicación', description: 'Provincia y ciudad de la concesión. Confirma que el comprador puede desplazarse a tu punto de venta.' },
          { title: 'Interés en visitar', description: 'Disponibilidad real para acudir al concesionario. Filtra a los que solo están en fase de exploración.' },
          { title: 'Vehículo a cambio', description: 'Posible parte del pago en su coche actual. Doble oportunidad: tasación VO + venta VN.' },
          { title: 'Forma de pago', description: 'Financiado · Contado · Por definir. Aporta contexto sobre la capacidad y velocidad de cierre.' },
        ],
      },
      {
        type: 'highlights',
        title: 'Caso cliente real',
        lead: 'Resultados reales de un concesionario tras la implementación del canal Exclusive. Puntuación media obtenida: 55/100.',
        highlights: [
          { title: '230', description: 'Coches publicados · inventario activo en el portal' },
          { title: '92', description: 'Prospectos generados por el canal Exclusive' },
          { title: '22', description: 'Leads cualificados que superan el umbral de scoring' },
          { title: '9 %', description: 'Ratio de conversión de lead a venta · 2 ventas cerradas' },
        ],
        bullets: [
          '2 operaciones convertidas en facturación real sobre un total de 22 leads cualificados.',
          'Puntuación media de los leads: 55/100 sobre las 6 variables del scoring.',
          'Modelo escalable: a más volumen publicado, mayor generación de leads.',
        ],
      },
      {
        type: 'cta',
        title: 'Hablemos de tus leads',
        lead: 'Te ayudamos a definir el modelo de generación de tráfico que mejor se adapta a tu concesionario. Consulta con nuestro equipo comercial la modalidad y el volumen adecuados para tu operación.',
      },
    ],
  },
  dealer: {
    subtitle: 'Gestión inteligente del VO + multipublicación en +16 portales · Importa, crea con asistencia y publica desde una sola plataforma · +1.000 clientes publican cada día con nosotros',
    sections: [
      {
        type: 'highlights',
        title: 'Desde una sencilla importación hasta la creación avanzada y la publicación enriquecida',
        lead: 'Motorflash te ofrece fiabilidad y flexibilidad en cada paso. Supervisa tu inventario con dashboards intuitivos, ajusta precios al mercado en tiempo real y publica tus vehículos en los principales portales con información enriquecida para destacar frente a la competencia. Todo, diseñado para ahorrar tiempo y maximizar resultados.',
        highlights: [
          { title: '+1.000', description: 'Clientes publicando diariamente con nuestro Multipublicador' },
          { title: '+2.500', description: 'Exportaciones de stock cada día desde nuestra plataforma' },
          { title: '+150', description: 'Importaciones nativas con los DMS del mercado · servicios Ad Hoc para casos específicos' },
          { title: '1M', description: 'Vehículos exportados al mes a portales del sector' },
        ],
        bullets: [
          'Conectado con los principales portales verticales en España (Coches.net, Sumauto, Coches.com, Autocasión, AutoScout24, Wallapop) y con Motorflash.com.',
          'Únicos en el mercado en verificar la versión y los extras de cada anuncio por VIN — el resto de multipublicadores estima por matrícula; nosotros publicamos datos verificados del fabricante.',
          'Permanencia mínima de 6 meses. Sin sorpresas en la factura ni costes ocultos.',
        ],
      },
      {
        type: 'spotlight',
        badge: 'Únicos en el mercado',
        title: 'Creación Premium por VIN: verificamos versión y extras en cada anuncio',
        lead: 'Somos el único multipublicador del mercado capaz de identificar automáticamente la versión exacta y el equipamiento opcional real de cada vehículo a partir del bastidor (VIN). El resto de multipublicadores estiman por matrícula; nosotros publicamos datos verificados del fabricante — con la fiabilidad que eso da a tu ficha, a tu SEO en portal y a la conversión.',
        bullets: [
          'Versión y variante exactas por VIN — sin errores de interpretación.',
          'Extras y equipamiento opcional detectados y desglosados uno a uno.',
          'Anuncios con fiabilidad de fábrica: menos devoluciones, menos disputas.',
          'Máxima densidad de información para posicionar mejor en cada portal.',
        ],
        icon: 'verified',
        badgeIcon: 'workspace_premium',
      },
      {
        type: 'features',
        title: 'Importación y creación de stock a tu medida',
        lead: 'Cuatro modos de creación del anuncio según el nivel de fiabilidad y tiempo que quieras dedicarle. La Creación Premium por VIN — nuestro diferenciador — te da la versión y los extras exactos de cada unidad sin que muevas un dedo.',
        items: [
          { title: 'Creación Premium (por VIN) · Únicos en el mercado', description: 'Introducimos el bastidor y obtenemos automáticamente la versión exacta y el equipamiento opcional real de esa unidad concreta. Ningún otro multipublicador del mercado lo hace: mientras la competencia estima por matrícula, tú publicas datos verificados del fabricante. Incluye la creación avanzada.', icon: 'workspace_premium' },
          { title: 'Creación avanzada (por matrícula)', description: 'Introduces la matrícula y el sistema autocompleta los datos básicos. Solo tienes que seleccionar versión y extras. Incluye la creación básica.', icon: 'directions_car' },
          { title: 'Creación básica (manual)', description: 'Tú creas el anuncio desde una interfaz intuitiva basada en JATO: fecha de matriculación, tipo, marca, modelo, versión, combustible, puertas, carrocería, cambio y extras.', icon: 'edit_note' },
          { title: 'Creación delegada en Motorflash', description: 'Si lo prefieres, deja que nuestro equipo de expertos cree tus anuncios por ti. Ahorras tiempo y ganas fiabilidad sin desviar a tu equipo.', icon: 'support_agent' },
          { title: 'Integración con +150 DMS', description: 'Conectados con la mayoría de los DMS del mercado: Keyloop, Autoline, Aswin, Incadea, Pymecar, Nextlane, Quiter, Bee2link, Inventario.pro… Más servicios Ad Hoc para necesidades específicas.', icon: 'hub' },
          { title: 'Importación automática de fotos', description: 'Integración con múltiples plataformas para traer automáticamente las imágenes de los vehículos y mantener el stock siempre actualizado.', icon: 'photo_library' },
          { title: 'Carlens 360 · personalización visual', description: 'Personaliza las fotografías de tus publicaciones sin necesidad de photocall. Ahorra tiempo y mejora la calidad visual de tu catálogo.', icon: 'auto_fix_high' },
          { title: 'Marcas de agua', description: 'Crea marcas de agua para tus campañas o gestionamos las que tú nos facilites. Tu marca visible en cada foto publicada.', icon: 'branding_watermark' },
        ],
      },
      {
        type: 'features',
        title: 'Dealer: gestiona tu stock como un profesional',
        lead: 'Toda la información de tu inventario resumida en un dashboard intuitivo. Compara precios con el mercado en tiempo real, tasa vehículos al instante y calcula financiación para tus clientes desde la propia ficha.',
        items: [
          { title: 'Dashboard intuitivo de stock', description: 'Antigüedad de stock, días sin cambio de precio y análisis de precio en una sola pantalla. Detecta de un vistazo qué vehículos hay que mover.', icon: 'dashboard' },
          { title: 'Precio estimado vs. mercado', description: 'Comparativa instantánea del precio de tus vehículos con el de unidades similares anunciadas en los principales portales españoles.', icon: 'price_check' },
          { title: 'Tasador integrado', description: 'Recibe un precio recomendado de compra y venta para cualquier vehículo introduciendo solo la matrícula. Mercado real, sin opiniones.', icon: 'calculate' },
          { title: 'Temperatura de mercado', description: 'Visualiza qué modelos están calientes en cada momento y ajusta tu estrategia de stock y precios.', icon: 'thermostat' },
          { title: 'Calculadora de financiación', description: 'Calculadoras integradas con Banco Santander, CaixaBank, Cetelem y más. Ofrece a tus clientes la mejor cuota desde la propia ficha.', icon: 'account_balance' },
          { title: 'Perchas y ofertas personalizadas', description: 'Genera perchas y ofertas a medida para cada cliente desde la ficha del vehículo, en un clic.', icon: 'description' },
        ],
      },
      {
        type: 'features',
        title: 'Exportaciones: publica donde te interese, con la información enriquecida',
        lead: 'Decide tú qué vehículos van a cada portal: publicación masiva, selectiva o mixta. Pasarela con los principales portales verticales de compra-venta en España y dashboard centralizado para controlarlo todo.',
        items: [
          { title: 'Publicación masiva, selectiva o mixta', description: 'Elige qué publicaciones quieres que se exporten a cada portal. Máxima flexibilidad — tú decides la estrategia portal a portal.', icon: 'tune' },
          { title: 'Enriquecimiento del anuncio', description: 'A diferencia de otros multipublicadores, exportamos cada anuncio con el equipamiento extra de cada unidad perfectamente desglosado. Tus anuncios destacan frente a la competencia.', icon: 'auto_awesome' },
          { title: 'Pasarelas con los principales portales', description: 'Coches.net, Sumauto, Coches.com, Autocasión, AutoScout24, Wallapop y más. Una sola herramienta, todos los portales.', icon: 'sync_alt' },
          { title: 'Dashboard de exportaciones', description: 'Control y visualización global del stock en cada portal. Sabes en cada momento qué vehículo está publicado dónde y en qué estado.', icon: 'monitoring' },
          { title: 'Motorflash.com incluido', description: 'Tu stock también se publica en motorflash.com con los 10 primeros leads gratis al mes incluidos en cualquier tarifa.', icon: 'language' },
          { title: 'Cuentas ilimitadas en cada portal', description: 'Coches.net, Sumauto y portales verticales con cuentas ilimitadas en los tier S en adelante. Una tarifa por toda la red, no por cuenta.', icon: 'all_inclusive' },
        ],
      },
      {
        type: 'process',
        title: 'En 2 semanas estás publicando con Multipublicador',
        steps: [
          { title: 'Firma de contrato y kickoff', description: 'Firmamos el contrato y arrancamos. En la sesión inicial recogemos los datos de tus cuentas en portales y los detalles de tus tiendas.' },
          { title: 'Creación de cuenta y tiendas', description: 'Damos de alta tu cuenta en Multipublicador, configuramos las tiendas y los usuarios según tu estructura.' },
          { title: 'Importación de stock', description: 'Conectamos tu DMS o subimos el Excel inicial y traemos todo tu stock al sistema. A partir de aquí los datos se sincronizan automáticamente.' },
          { title: 'Exportaciones y arranque', description: 'Activamos las exportaciones a los portales que toque. Opcionalmente, hacemos una pasada de cualificación de stock para subir la calidad de los anuncios desde el día 1.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Cuántos vehículos publicas al mes?',
        lead: 'Cuéntanos el tamaño de tu stock y te enseñamos un caso real de un grupo de tu tamaño. En 30 minutos sabes qué tier encaja contigo y cuánto pagarías.',
      },
    ],
  },
  'motorflash-connect': {
    subtitle: 'Vídeos IA personalizados para retener y vender más a tus clientes de renting',
    sections: [
      {
        type: 'highlights',
        title: 'Cuando termina el renting, pierdes al cliente. Y la competencia ya le está llamando.',
        lead: 'Cada año, miles de clientes terminan su contrato sin renovar porque no han recibido una propuesta personalizada a tiempo. Tu equipo no llega a todos. Tus emails masivos se ignoran. Fleet Manager convierte ese final de contrato en una nueva venta, automáticamente, con un vídeo único por cliente.',
        highlights: [
          { title: '100%', description: 'De tu cartera contactada con vídeo personalizado' },
          { title: '×5', description: 'Tasa de respuesta vs. email comercial tradicional' },
          { title: '0', description: 'Trabajo manual de creación: la IA genera todo' },
          { title: 'White-label', description: 'Tu logo, tus colores, tu dominio. El cliente ve tu marca, no la nuestra' },
        ],
        bullets: [
          'Cero clientes perdidos por desbordamiento comercial: la plataforma llega al 100% de la cartera, no solo a quien tu equipo puede llamar.',
          'Recuperas leads que se escapaban por no llegar a tiempo: la IA dispara el vídeo en la fecha óptima antes del fin de contrato.',
          'Multi-organización: si tienes varios concesionarios o brokers, cada uno con su branding y configuración en una sola plataforma.',
        ],
      },
      {
        type: 'features',
        title: 'Un vídeo único por cliente, generado por IA en minutos',
        lead: 'Cada cliente recibe una pieza personalizada con su nombre, su coche actual, su cuota y hasta 5 propuestas reales para renovar, cambiar de modelo, subir de gama o comprar el vehículo. Todo con un solo clic para responder.',
        items: [
          { title: 'Voz IA natural en español', description: 'Voces seleccionables y ajustables por organización (powered by ElevenLabs). Saluda al cliente por su nombre con un tono natural — desde sobrio hasta cercano y dinámico, según tu marca.', icon: 'record_voice_over' },
          { title: 'Hasta 5 propuestas reales por cliente', description: 'Renovar con el mismo modelo nuevo, cambiar a otro de la marca, subir de gama, renovar con condiciones reducidas o comprar el coche al contado o financiado. Tú las defines, la IA las personaliza.', icon: 'tune' },
          { title: 'Botones de respuesta con un clic', description: 'El cliente abre el vídeo, ve las opciones y pulsa la que le interesa. Cero fricción, cero formularios, cero llamadas previas para descubrir qué quiere.', icon: 'ads_click' },
          { title: 'Branding 100% white-label', description: 'Tu logo, tus colores corporativos, tu dominio. El cliente no ve "MotorFlash" en ningún sitio — ve tu organización en cada frame.', icon: 'palette' },
          { title: 'Multi-canal: email y WhatsApp', description: 'El vídeo llega por email, por WhatsApp o por ambos, según las preferencias del cliente. Más oportunidades de apertura, más respuestas.', icon: 'forward_to_inbox' },
          { title: 'Multi-tenant y RGPD', description: 'Cada organización tiene su espacio aislado. Datos del cliente en servidores europeos, cumplimiento RGPD garantizado, branding y configuración independientes.', icon: 'shield' },
        ],
      },
      {
        type: 'process',
        title: 'De la cartera a la venta cerrada en 4 pasos',
        steps: [
          { title: 'Importas tu cartera', description: 'Sube un Excel con tus clientes y rentings activos, o conecta tu ERP por API REST. La plataforma lee los datos del cliente (nombre, email, teléfono), del coche actual (marca, modelo, matrícula, cuota) y las fechas de fin de contrato.' },
          { title: 'Configuras tus propuestas', description: 'Para cada cliente o tipo de cliente defines hasta 5 ofertas concretas con cuota, modelo y fotos: renovar, cambiar a otro modelo, subir de gama, reducir kilometraje, comprar al contado o financiado.' },
          { title: 'La plataforma envía el vídeo', description: 'Cuando faltan X días para el fin de contrato (tú decides cuántos), el sistema genera la voz IA, compone el vídeo con tu branding y lo envía por email y/o WhatsApp. Tu equipo no toca nada.' },
          { title: 'Cierras la venta', description: 'El cliente responde con un clic. Tu comercial recibe al instante un email + notificación en el CRM con la opción elegida y los datos del cliente. Llama ya sabiendo qué le interesa.' },
        ],
      },
      {
        type: 'features',
        title: 'Más allá del fin de renting: motor de campañas todo el año',
        lead: 'Además del flujo de fin de contrato, Fleet Manager incluye un motor para enviar vídeos personalizados en cualquier momento del año. Diseñas la campaña una vez y la plataforma la dispara automáticamente, personalizada para cada cliente.',
        items: [
          { title: 'Campañas estacionales', description: 'Neumáticos de invierno, revisión ITV, cambio de aceite, seguro a renovar. Vídeos automáticos en la fecha justa para cada cliente.', icon: 'event_repeat' },
          { title: 'Campañas de fecha fija', description: 'Black Friday, lanzamiento de un modelo nuevo, fin de año fiscal. Defines fecha y audiencia, la plataforma envía a todos con su nombre y datos.', icon: 'calendar_month' },
          { title: 'Campañas por audiencia', description: 'Define una base de datos concreta (clientes de cierta marca, cuota, antigüedad) y mándales una oferta exclusiva con vídeo personalizado.', icon: 'group' },
          { title: 'Integración con tu CRM/ERP', description: 'API REST y webhooks para sincronizar cartera, disparar campañas desde tu CRM y mandar respuestas automáticamente al lead correcto.', icon: 'integration_instructions' },
        ],
      },
      {
        type: 'showcase',
        eyebrow: 'ASÍ LO CONTROLAS TÚ',
        title: 'Métricas del embudo en tiempo real.',
        lead: 'Panel de administración con envíos, entregas, aperturas, clics, visualizaciones y respuestas por período. Ves el embudo completo — desde el email enviado hasta la respuesta del cliente — y sabes exactamente qué campañas están funcionando y dónde afinar.',
        bullets: [
          'KPIs por rango de fechas: vídeos generados, emails abiertos, respuestas, rebotes.',
          'Embudo de conversión: enviado → entregado → abierto → clic → visualizado → respuesta.',
          'Vista de todos los vídeos generados con estado, canal, cliente y vehículo.',
        ],
        imageSrc: '/images/products/fleet-manager-dashboard.png',
        imageAlt: 'Dashboard de Fleet Manager con KPIs de fin de renting: vídeos generados, aperturas, respuestas y embudo de conversión',
        imagePosition: 'left',
      },
      {
        type: 'cta',
        title: '30 minutos y te enseñamos un vídeo real con uno de tus clientes',
        lead: 'Demo personalizada: vídeo generado con un caso real de tu cartera (con tu autorización), panel de respuestas y métricas, integración con tu sistema actual y cálculo de ROI estimado. Modalidad SaaS sin permanencia, con plan piloto para validar antes de decidir.',
      },
    ],
  },
  apex: {
    subtitle: 'El CRM para concesionarios que centraliza inventario, leads y multipublicación en una sola plataforma · Alta en 24 h, sin permanencia',
    sections: [
      {
        type: 'highlights',
        title: 'Una sola plataforma para todo lo que hace tu concesionario',
        lead: 'Tres pilares conectados: inventario, comunicación y operación. Sin tecleo doble, sin copiar y pegar entre herramientas.',
        highlights: [
          { title: 'Inventario', description: 'Stock vivo, precios, fotos y fichas técnicas' },
          { title: 'Comunicación', description: 'Todos los leads y mensajes en un solo buzón' },
          { title: 'Operación', description: 'Del lead al contrato sin salir de la herramienta' },
          { title: '24 h', description: 'Alta operativa · sin permanencia obligatoria' },
        ],
        bullets: [
          'Alta por matrícula o VIN con ficha técnica autocompletada.',
          'Multipublicación a +16 portales en un solo click.',
          'Histórico de ventas y precio de mercado integrados.',
          'Factura electrónica (Régimen General y REBU) y contrato con firma digital incluidos.',
        ],
      },
      {
        type: 'process',
        title: 'De la matrícula al contrato firmado',
        steps: [
          { title: '01 · Matrícula', description: 'Tecleas la matrícula o el bastidor. Apex trae ficha técnica, equipamiento de serie y extras automáticamente.' },
          { title: '02 · Stock vivo', description: 'Subes fotos, ajustas precio. El vehículo queda en inventario, listo para publicar.' },
          { title: '03 · +16 portales', description: 'Multipublicación en Facilitea, Wallapop, Coches.net, Motorflash, Tikcars y más. Un solo botón.' },
          { title: '04 · Inbox', description: 'Mensajes, leads y llamadas de todos los portales en una única bandeja. Pipeline Kanban.' },
          { title: '05 · Cierre', description: 'Cita, contrato firmado digital, factura electrónica. Todo en Apex, sin salir de la herramienta.' },
        ],
      },
      {
        type: 'features',
        title: 'Todo lo que necesita tu concesionario, ya integrado',
        lead: 'Cuatro áreas funcionales, todos los módulos conectados entre sí. Los datos no salen de Apex.',
        items: [
          { title: 'Inventario', description: 'Stock, multipublicación a +16 portales, histórico de ventas, tasaciones con valoración automática y alta por matrícula o VIN con ficha técnica autocompletada.', icon: 'inventory_2' },
          { title: 'Leads y Chat', description: 'Inbox unificado, pipeline Kanban, Chat Center con Wallapop y Coches.net integrados, captación en Wallapop, ofertas comerciales y campañas con seguimiento.', icon: 'forum' },
          { title: 'Venta', description: 'Clientes (personas físicas y jurídicas), calendario integrado de citas, contratos de compraventa con firma digital, factura electrónica (Régimen General y REBU) y sitio web del concesionario incluido.', icon: 'point_of_sale' },
          { title: 'Operación', description: 'Multiubicaciones para grupos con varias sedes, multisociedades (multi-CIF), reportes con KPIs fiscal y stock, auditoría (quién hizo qué y cuándo), usuarios con permisos granulares.', icon: 'account_tree' },
          { title: 'Multipublicación', description: 'Coches.net, Wallapop, AutoScout24, Coches.com, Autocasión, Carwow, Carnovo, Motorflash, Motos.net, km77, Motor.es, Tikcars, Motoreto, Maxterauto, Gremi Motor, Facilitea… Stock sincronizado en tiempo real: vendido en Apex, retirado de todos los portales.', icon: 'share' },
          { title: 'Chat Center', description: 'Unificas conversaciones de Wallapop y Coches.net con chat integrado. Un solo agente atiende todos los canales en paralelo.', icon: 'chat' },
        ],
      },
      {
        type: 'highlights',
        title: 'Pensado para grupos con varias sociedades',
        lead: 'Cada CIF, cada sede, cada equipo en su sitio. Sin cruces de datos entre sociedades del mismo grupo.',
        highlights: [
          { title: 'Multisociedades', description: 'Operación multi-CIF: cada sociedad con su facturación, stock y leads independientes' },
          { title: 'Permisos granulares', description: 'Un comercial de Madrid solo ve sus propios leads y su stock' },
          { title: 'Credenciales cifradas', description: 'Cada cuenta de portal con sus propias claves, almacenadas con cifrado' },
          { title: 'Auditoría completa', description: 'Registro de quién hizo qué, cuándo y sobre qué registro' },
        ],
        bullets: [
          'Ejemplo real: un grupo con Sociedad A (BMW/MINI Madrid), Sociedad B (Audi/VW Valencia) y Sociedad C (Multimarca Sevilla) opera con stock, leads y chats propios e independientes en cada una.',
          'Reportes consolidados a nivel grupo con KPIs fiscales, de stock y de rendimiento comercial.',
          'Account manager y SLA dedicados en el plan Enterprise para grupos con +120 vehículos.',
        ],
      },
      {
        type: 'cta',
        title: 'Una demo de 30 minutos sobre tu stock real',
        lead: 'Nos cuentas tu operativa actual y te enseñamos cómo quedaría en Apex con tu propio inventario. Sin compromiso ni instalaciones. contacto@apexcrm.es · apexcrm.es · +34 655 85 25 70',
      },
    ],
  },
}

