/**
 * Contenido rico por producto, migrado de App\Catalog\ProductContent del Symfony.
 * Extraído originalmente de motorflashiberica.testmotorflash.com.
 */

export type FeaturesSection = {
  type: 'features'
  title: string
  lead: string
  items: { title: string; description: string; icon: string }[]
}

export type HighlightsSection = {
  type: 'highlights'
  title: string
  lead: string
  highlights: { title: string; description: string }[]
  bullets: string[]
}

export type ProcessSection = {
  type: 'process'
  title: string
  steps: { title: string; description: string }[]
}

export type CtaSection = {
  type: 'cta'
  title: string
  lead: string
}

export type ProductContentSection = FeaturesSection | HighlightsSection | ProcessSection | CtaSection

export interface ProductContent {
  subtitle: string
  sections: ProductContentSection[]
}

export const productContent: Record<string, ProductContent> = {
  'portal-publicacion': {
    subtitle: 'El portal propio de VO del grupo Motorflash',
    sections: [
      {
        type: 'features',
        title: 'Publica una vez, aparece en todos los portales',
        lead: 'Olvídate de subir los vehículos portal a portal. Con Clasificados, publicas una vez y tu stock aparece en todos los portales de forma automática.',
        items: [
          { title: 'Publicación automática multiportal', description: 'Un solo clic publica tu vehículo en Coches.net, Milanuncios, Wallapop, AutoScout24 y otros portales líderes. Stock siempre sincronizado.', icon: 'rocket_launch' },
          { title: 'Fichas de vehículo optimizadas', description: 'Fichas con equipamiento completo (JATO/Eurotax), fotografías, precio, financiación y descripción generada automáticamente para maximizar conversión.', icon: 'description' },
          { title: 'Gestión de precios inteligente', description: 'Comparativa de precios de mercado en tiempo real. Alertas cuando tu precio está por encima o por debajo del mercado para tomar decisiones rápidas.', icon: 'sell' },
          { title: 'Analítica de portales', description: 'Visitas, leads y ratio de conversión por vehículo y por portal. Identifica qué canales te traen más clientes y optimiza tu inversión publicitaria.', icon: 'analytics' },
          { title: 'Centralización de leads', description: 'Todos los leads de tus portales llegan al mismo lugar, sincronizados con tu CRM. Sin pérdida de información.', icon: 'inbox' },
          { title: 'Integración con web y CRM', description: 'Conectado nativamente con CRM4YOU y tu web Motorflash. Ecosistema cerrado sin doble entrada de datos.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Más visibilidad, menos trabajo y mayor control',
        lead: 'La publicación manual en portales consume entre 2 y 4 horas diarias de trabajo. Con Clasificados, ese tiempo se reduce a minutos y la calidad de las fichas mejora.',
        highlights: [
          { title: 'Publicación automática', description: 'Una vez en todos los portales' },
          { title: 'Inteligencia de precios', description: 'Comparativa de mercado en tiempo real' },
          { title: '40.000 vehículos/mes', description: 'El mayor volumen de automoción' },
          { title: 'Leads centralizados', description: 'Todos los portales en un buzón' },
        ],
        bullets: [
          'Portales integrados: Coches.net, Milanuncios, Wallapop, AutoScout24, Autocasion y más.',
          'Fotografías mejoradas: herramienta de edición de fotos integrada para eliminar fondos y mejorar el atractivo visual del vehículo.',
          'Descuentos negociados con los principales portales por volumen de publicaciones',
          'Alertas de vehículos con precio fuera de mercado para actuar rápido',
          'Rotación automática de destacados para maximizar la visibilidad',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo funciona Clasificados?',
        steps: [
          { title: 'Conexión de tu stock', description: 'Conectamos tu DMS, ERP o CRM para importar tu stock automáticamente. Configuramos las reglas de publicación y los portales objetivo.' },
          { title: 'Publicación automática', description: 'Tus vehículos se publican en todos los portales seleccionados con fichas optimizadas. Las bajas y modificaciones se sincronizan en tiempo real.' },
          { title: 'Gestión de leads y reporting', description: 'Todos los leads llegan a un único lugar. Informe semanal con rendimiento por portal, por vehículo y comparativa de mercado de precios.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Quieres publicar tu stock en todos los portales sin esfuerzo?',
        lead: 'Solicita una demo y te mostramos cómo Clasificados puede ahorrarte horas de trabajo cada semana y aumentar tu visibilidad online.',
      },
    ],
  },
  'crm4you': {
    subtitle: 'Gestiona tu actividad comercial de forma fluida, con información completa y sin pasos innecesarios',
    sections: [
      {
        type: 'features',
        title: 'El CRM para grupos de concesionarios',
        lead: 'El único CRM del sector diseñado para gestionar de forma centralizada múltiples ubicaciones, marcas y concesionarios. Optimiza el proceso comercial a nivel grupal con IA integrada que trabaja contigo.',
        items: [
          { title: 'Gestión centralizada de leads', description: 'Todos los leads de tu web, portales, Social Ads y llamadas telefónicas entran en un único punto. Nunca pierdas un lead por canal no monitorizado.', icon: 'inbox' },
          { title: 'Pipeline visual de ventas', description: 'Tablero Kanban adaptado al proceso de venta: Nuevo → Contactado → Visita → Prueba ruta → Oferta → Entrega. Cada etapa con sus métricas.', icon: 'view_kanban' },
          { title: 'Seguimiento automático', description: 'Secuencias de email y SMS automáticas para cada etapa del proceso. El CRM hace el seguimiento por ti cuando el asesor está ocupado.', icon: 'autorenew' },
          { title: 'Agenda integrada', description: 'Gestión de citas de venta y pruebas de ruta integrada en el CRM. Sincronización con Google Calendar y notificaciones automáticas al cliente.', icon: 'calendar_month' },
          { title: 'Informes de dirección', description: 'Dashboard de gestión con el rendimiento de cada asesor, tasa de conversión por canal, tiempo medio de cierre y previsión de ventas mensual.', icon: 'analytics' },
          { title: 'Integraciones nativas', description: 'Conectado con tus Servicios Web, Clasificados, Contact Center, WhatsApp Business y los principales portales de vehículos. Ecosistema cerrado y sin fugas de datos.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Un CRM que trabaja tanto para el asesor como para la dirección',
        lead: 'CRM4YOU tiene dos caras: la operativa (para el asesor de ventas) y la analítica (para el director comercial o gerente del concesionario).',
        highlights: [
          { title: 'Pipeline Kanban de ventas', description: 'Visual, adaptado a automoción' },
          { title: 'Automatización de seguimiento', description: 'Email y SMS automáticos por etapa' },
          { title: 'Gestión por asesor', description: 'Rendimiento individual medible' },
          { title: 'Ecosistema integrado', description: 'Web, portales, WhatsApp y Contact Center' },
        ],
        bullets: [
          'Para el asesor: vista de tareas pendientes, recordatorios automáticos, historial completo de cada lead y plantillas de comunicación.',
          'Para la dirección: rendimiento individual de cada asesor, conversión por fuente de lead, tiempo medio de cierre y forecast de ventas.',
          'App móvil para gestión en cualquier lugar y dispositivo',
          'Importación de datos desde tu DMS o CRM anterior sin pérdida de historial',
          'Roles y permisos configurables por concesionario o grupo',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo ponemos en marcha CRM4YOU?',
        steps: [
          { title: 'Configuración personalizada', description: 'Adaptamos el pipeline, los campos y los flujos de automatización a tu proceso de venta concreto. No te adaptas al CRM, el CRM se adapta a ti.' },
          { title: 'Migración e integración', description: 'Importamos tus datos actuales y conectamos todas tus fuentes de leads: web, portales, Social Ads y Contact Center en 5-7 días laborables.' },
          { title: 'Formación y activación', description: 'Formación presencial o remota para todo el equipo. Soporte dedicado los primeros 30 días para asegurar la adopción correcta del sistema.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Quieres ver CRM4YOU funcionando con tus datos?',
        lead: 'Solicita una demo personalizada y te mostramos cómo se vería CRM4YOU adaptado a tu concesionario en menos de 30 minutos.',
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
    subtitle: 'Conecta con tus clientes en tiempo real desde WhatsApp o desde tu web',
    sections: [
      {
        type: 'features',
        title: 'Comunicación ágil, estés donde estés',
        lead: 'Gestiona tus conversaciones desde el ordenador o desde la app móvil, con total control y sincronización con tu CRM. Responde a tus clientes en tiempo real, centraliza tus mensajes y mantén siempre la trazabilidad de cada contacto.',
        items: [
          { title: 'Multi-agente', description: 'Varios asesores atendiendo desde un mismo número de WhatsApp Business. Reparto automático de conversaciones y control del equipo.', icon: 'group' },
          { title: 'Notificaciones automáticas', description: 'Envía confirmaciones de cita de taller, avisos de vehículo listo, recordatorios de prueba de ruta y seguimiento post-venta de forma automática.', icon: 'notifications_active' },
          { title: 'Respuestas automáticas 24/7', description: 'Bot de primer contacto que responde fuera de horario, califica el lead y lo asigna al asesor correcto al inicio de la jornada.', icon: 'schedule' },
          { title: 'Plantillas aprobadas', description: 'Biblioteca de plantillas de mensaje pre-aprobadas por Meta para envíos masivos, campañas y notificaciones transaccionales.', icon: 'description' },
          { title: 'Métricas y reporting', description: 'Tiempo de respuesta, ratio de conversión por agente, volumen de conversaciones gestionadas y rendimiento por campaña.', icon: 'analytics' },
          { title: 'Integración con CRM', description: 'Cada conversación queda registrada en CRM4YOU con todo el historial. Sin doble entrada de datos.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'WhatsApp para cada momento del ciclo de compra',
        lead: 'Desde el primer contacto hasta el servicio postventa, Message automatiza y gestiona la comunicación en cada etapa del cliente.',
        highlights: [
          { title: 'Multi-agente en un número', description: 'Todo el equipo en un solo WhatsApp' },
          { title: 'Notificaciones automáticas', description: 'Taller, entregas y recordatorios' },
          { title: 'Bot 24/7', description: 'Nunca pierdas un lead fuera de horario' },
          { title: 'Métricas de equipo', description: 'Tiempo de respuesta y conversión' },
        ],
        bullets: [
          'Captación: botón de WhatsApp en tu web, fichas de vehículo y campañas de Meta Ads con clic-to-WhatsApp.',
          'Seguimiento de leads: secuencias de mensajes automáticos para contactar, recordar y reactivar leads fríos.',
          'Citas de taller: confirmación, recordatorio 24h antes y aviso de vehículo listo sin intervención humana.',
          'Satisfacción postventa: encuesta de satisfacción automática tras la entrega del vehículo.',
          'Campañas de reactivación de clientes inactivos con ofertas personalizadas',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo te ponemos en marcha?',
        steps: [
          { title: 'Alta y configuración', description: 'Activamos tu número de WhatsApp Business API, configuramos los agentes, los flujos automáticos y las plantillas de mensaje.' },
          { title: 'Integración con tus herramientas', description: 'Conectamos Message con tu CRM, web y campañas de publicidad. Todo sincronizado desde el primer día.' },
          { title: 'Formación y soporte', description: 'Formamos a tu equipo en el uso de la plataforma y te asignamos un gestor de cuenta para el seguimiento continuo.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Quieres gestionar WhatsApp como un profesional?',
        lead: 'Solicita una demo y te mostramos en 30 minutos cómo Message puede transformar la comunicación de tu concesionario.',
      },
    ],
  },
  'motorflash-mobile-tracking': {
    subtitle: 'La evolución del SMS con hasta un 300 % más de conversión que un mensaje tradicional',
    sections: [
      {
        type: 'features',
        title: '¿Para qué sirve Imagen avanzada + RCS en automoción?',
        lead: 'Más allá del SMS básico: combina imagen avanzada con IA y mensajería RCS (multimedia, segura, verificada) para crear comunicaciones que el cliente abre, lee y convierte.',
        items: [
          { title: 'Mensajería multimedia RCS', description: 'Envía imágenes, vídeos, carruseles y botones de acción directos al móvil del cliente. Como un SMS pero con experiencia de app nativa.', icon: 'chat' },
          { title: 'Imagen avanzada con IA', description: 'Mejoras automáticas de cada foto: fondos, iluminación, sombras, eliminación de reflejos. Tu vehículo se ve como en una revista.', icon: 'auto_awesome' },
          { title: 'Verificación de remitente', description: 'Tu marca aparece verificada en el móvil del cliente. Más confianza, más tasa de apertura, menos riesgo de phishing.', icon: 'verified' },
          { title: 'Personalización por cliente', description: 'Cada mensaje se adapta al cliente, al vehículo de interés y al momento del ciclo de compra. Mensajes únicos a escala.', icon: 'group' },
          { title: 'Reporting completo', description: 'Tasa de entrega, apertura, clics y conversión por campaña. Métricas reales para optimizar.', icon: 'analytics' },
          { title: 'Integración con CRM', description: 'Cada envío y respuesta se registra en CRM4YOU. Trazabilidad total de la conversación.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Control total desde la campa hasta la entrega',
        lead: 'Imagen avanzada + RCS resuelve los problemas de comunicación más habituales en concesionarios: tasa de apertura baja en SMS, fotos poco atractivas que no convierten, falta de personalización en envíos masivos.',
        highlights: [
          { title: '+300% conversión vs SMS', description: 'La diferencia entre texto plano y multimedia' },
          { title: 'IA mejorando cada foto', description: 'Calidad profesional automática' },
          { title: 'Verificación de marca', description: 'Tu logo aparece en el móvil del cliente' },
          { title: 'Plantillas dinámicas', description: 'Adaptadas a cada vehículo y cliente' },
        ],
        bullets: [
          'Promociones: campañas de captación con imágenes mejoradas de vehículos en oferta.',
          'Citas de taller: recordatorios visuales con tarjeta de cita y mapa al concesionario.',
          'Lanzamientos: presentación de nuevos modelos con vídeo y galería interactiva.',
          'Notificaciones de vehículo listo con foto del coche ya preparado',
          'Encuestas de satisfacción multimedia tras la entrega',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo funciona Imagen avanzada + RCS?',
        steps: [
          { title: 'Configuración del servicio', description: 'Damos de alta tu marca verificada en RCS y configuramos las plantillas de mensaje con tu identidad visual.' },
          { title: 'Mejora de imágenes con IA', description: 'Conectamos con tu DMS para procesar automáticamente las fotos de tu stock. La IA mejora cada imagen antes del envío.' },
          { title: 'Envío y medición', description: 'Lanzamos las campañas desde el panel o automatizadas desde el CRM. Medimos cada envío, apertura y clic.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Quieres saber dónde está cada vehículo de tu flota ahora mismo?',
        lead: 'Solicita información y te explicamos cómo Imagen avanzada + RCS puede mejorar el control y la seguridad de tu stock desde el primer día.',
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
          { title: 'Equipos especializados en SEO, SEA y Social', description: 'Contamos con un equipo experto en SEO, otro dedicado exclusivamente a SEA y un tercero centrado en Social Ads para potenciar tu negocio.', icon: 'group' },
          { title: 'Estrategia integral y optimización continua', description: 'Desarrollamos y analizamos campañas en SEO, SEA y redes sociales, optimizando cada acción para maximizar el rendimiento y generar más oportunidades de venta.', icon: 'autorenew' },
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
          { title: 'Tráfico orgánico SEO', description: 'Alta conversión · Sin coste por clic' },
          { title: 'Campañas SEM Google Ads', description: 'Foco en coste por lead real' },
          { title: 'Social Ads Meta / TikTok', description: 'Prospección a menor coste' },
          { title: 'Reporting en tiempo real', description: 'Métricas de negocio, no de vanidad' },
        ],
        bullets: [
          'SEO/SEM: clientes que buscan tu marca o tus vehículos. Conversión inmediata.',
          'Social Ads: prospectos que aún no te conocen. Conversión a medio plazo a menor coste.',
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
  'dealer': {
    subtitle: 'Gestión completa del vehículo de ocasión con IA integrada',
    sections: [
      {
        type: 'features',
        title: 'Gestión inteligente para grandes volúmenes de stock',
        lead: 'Crea, controla y publica tus vehículos desde una plataforma diseñada para concesionarios y grupos. Organiza tu inventario, mejora la calidad de tus anuncios y toma decisiones basadas en datos reales del mercado.',
        items: [
          { title: 'Equipamiento JATO + EUROTAX unificado', description: 'Cada vehículo se crea cruzando las dos bases de datos más fiables del sector — JATO Dynamics y EUROTAX — en una única ficha consolidada. Versión exacta, equipamiento serie + opcionales detallado, datos sin contradicciones. Adiós a fichas a medias o a contradicciones entre proveedores.', icon: 'merge_type' },
          { title: 'Creación y gestión de stock', description: 'Crea fichas completas de tus vehículos y gestiona toda la información desde un único entorno. Actualiza datos, añade fotos y controla el estado de cada coche de forma rápida y organizada.', icon: 'inventory_2' },
          { title: 'Control de calidad de anuncios', description: 'Asegura que cada vehículo se publica con la máxima calidad. Revisa equipamiento, versiones, precios y fotografías antes de lanzar el anuncio para publicaciones más atractivas y consistentes.', icon: 'verified' },
          { title: 'Análisis de precio y competitividad', description: 'Toma decisiones basadas en información real del mercado. Compara tu stock con el de la competencia, ajusta precios e identifica oportunidades de rotación para mejorar el rendimiento.', icon: 'sell' },
          { title: 'Creación flexible', description: 'Crea tus vehículos por matrícula, bastidor o búsqueda guiada por JATO, o delega el proceso en nuestro equipo con Creación Premium.', icon: 'tune' },
          { title: 'Importación automática desde DMS', description: 'Conectado nativamente con los principales DMS del mercado. Sincronización automática y bidireccional sin intervención manual.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Una gestión de vehículos más rápida, segura y adaptable',
        lead: 'Crea vehículos de forma manual, automática o delegada, y mantén tu stock siempre actualizado gracias a nuestras conexiones con DMS y plataformas de fotografía. Un proceso flexible que se adapta a la operativa de cada concesionario.',
        highlights: [
          { title: 'JATO + EUROTAX', description: 'Equipamiento unificado en cada vehículo' },
          { title: 'Control de calidad', description: 'Equipamiento, precios y fotos' },
          { title: 'Análisis de competitividad', description: 'Datos reales del mercado' },
          { title: 'Publicaciones con IA', description: 'Textos optimizados automáticamente' },
        ],
        bullets: [
          'JATO + EUROTAX unificados: cada vehículo lleva el equipamiento completo y consistente cruzando las dos bases de datos referencia del sector. Sin huecos, sin contradicciones.',
          'Tasación precisa y rápida: valoraciones fiables con datos de mercado, información técnica y verificaciones CARFAX.',
          'Control de calidad: revisamos equipamiento, imágenes y precios antes de publicar para asegurar anuncios coherentes en todos los portales.',
          'Generación de ofertas y perchas: activa campañas, destaca vehículos y mueve stock con herramientas diseñadas para potenciar la rotación.',
          'Integración directa con el Multipublicador para publicación inmediata en todos tus portales.',
        ],
      },
      {
        type: 'process',
        title: 'Cómo te ayudamos a llegar más lejos',
        steps: [
          { title: 'Tasación precisa y rápida', description: 'Obtén valoraciones fiables basadas en datos de mercado, información técnica y verificaciones CARFAX. Agiliza la entrada del vehículo al VO con mayor seguridad.' },
          { title: 'Control de calidad', description: 'Revisamos equipamiento, imágenes y precios antes de publicar para asegurar anuncios más completos, coherentes y atractivos en todos los portales.' },
          { title: 'Generación de ofertas y perchas', description: 'Crea ofertas y perchas de forma sencilla y centralizada. Activa campañas, destaca vehículos y mueve stock con herramientas diseñadas para potenciar la rotación.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Quieres vender tu stock más rápido y con más margen?',
        lead: 'Solicita una demo y te mostramos cómo Dealer puede transformar tu gestión de stock desde el primer mes de uso.',
      },
    ],
  },
  'lead-factory': {
    subtitle: 'Ahorra tiempo y céntrate en las ventas',
    sections: [
      {
        type: 'features',
        title: '¿Por qué Lead 5 Estrellas es diferente?',
        lead: 'No vendemos bases de datos. Captamos prospectos activos que están en el proceso de compra-venta de su vehículo.',
        items: [
          { title: 'Doble lead en un contacto', description: 'El vendedor de un coche es, casi siempre, también un comprador. Captamos ese momento de transición para ofrecerte el lead más valioso del mercado.', icon: 'star' },
          { title: 'Segmentación geográfica', description: 'España dividida en 7 zonas de exclusividad. Cada concesionario recibe los leads de su área de influencia, sin competencia dentro de su territorio.', icon: 'map' },
          { title: 'Entrega en tiempo real', description: 'El lead llega a tu CRM o email en el mismo momento en que el particular completa el formulario. Cero demora, máxima capacidad de reacción.', icon: 'schedule' },
          { title: 'Leads cualificados', description: 'Proceso de verificación que filtra los contactos falsos o de baja calidad. Solo recibes leads reales con datos de contacto verificados.', icon: 'verified' },
          { title: 'Reporting detallado', description: 'Dashboard con la fuente de cada lead, la conversión a visita y la conversión final a venta. Métricas reales para optimizar.', icon: 'analytics' },
          { title: 'Integración con tu CRM', description: 'Los leads llegan directamente a CRM4YOU o al CRM que utilices. Sin doble entrada de datos.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'De la captación a la venta en 3 pasos',
        lead: 'Nuestro sistema de captación multicanal garantiza un flujo constante de leads de alta calidad para tu concesionario, todos los días del año.',
        highlights: [
          { title: 'Particular vendedor', description: 'Quiere vender su coche y comprar otro' },
          { title: 'Zona geográfica exclusiva', description: '7 zonas en España sin solapamiento' },
          { title: 'Contacto inmediato', description: 'Lead en tiempo real con datos verificados' },
          { title: 'Doble oportunidad', description: 'Tasación VO + venta VN en un solo lead' },
        ],
        bullets: [
          'Captación multicanal: SEO, SEM, Social Ads y portales especializados para captar al particular en el momento de decisión.',
          'Cualificación automática: el sistema verifica los datos y filtra los contactos falsos antes de enviar el lead.',
          'Entrega inmediata: el lead llega a tu email, CRM o WhatsApp en tiempo real con todos los datos del vehículo y el contacto.',
          'Zonas de exclusividad para evitar la competencia interna entre concesionarios',
          'Precio por lead, sin suscripción mensual mínima ni permanencia',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo funciona Lead 5 Estrellas?',
        steps: [
          { title: 'Captación multicanal', description: 'Captamos particulares a través de SEO, SEM, Social Ads y portales especializados en el momento en que deciden vender su vehículo.' },
          { title: 'Cualificación y verificación', description: 'El sistema verifica los datos de contacto y filtra los leads de baja calidad. Solo leads reales y cualificados llegan a tu concesionario.' },
          { title: 'Entrega y seguimiento', description: 'El lead llega en tiempo real a tu CRM, email o WhatsApp. Seguimiento del estado de cada lead con reporting mensual de conversión.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Quieres leads de compradores de coches en tu zona?',
        lead: 'Consulta la disponibilidad de tu zona exclusiva y empieza a recibir leads cualificados desde el primer día.',
      },
    ],
  },
  'exportaciones': {
    subtitle: 'Tu stock, en todos los portales al instante',
    sections: [
      {
        type: 'features',
        title: 'Una sola herramienta, infinitas conexiones',
        lead: 'Olvídate de hojas de cálculo, logins y actualizaciones manuales. Centraliza la publicación de tu stock y decide qué vehículos mostrar, dónde y cuándo. Todo se sincroniza en segundos.',
        items: [
          { title: 'Conexión total con los portales', description: 'Publica tus vehículos en los principales portales de venta —Coches.net, Autocasión, AutoScout24, Wallapop y más— con una sola herramienta.', icon: 'rocket_launch' },
          { title: 'Publicación a medida', description: 'Decide qué vehículos se publican y dónde. Crea reglas manuales o automáticas y adapta tu estrategia según tus objetivos.', icon: 'tune' },
          { title: 'Optimización automática con IA', description: 'Integramos inteligencia artificial en el proceso de publicación: analiza y mejora los textos de equipamiento para generar anuncios más completos y atractivos en todos los portales.', icon: 'auto_awesome' },
          { title: 'Publicación personalizada', description: 'Elige qué vehículos publicar y dónde hacerlo, de forma manual o automática, con total flexibilidad.', icon: 'description' },
          { title: 'Control absoluto en tiempo real', description: 'Panel con el estado de cada anuncio en cada portal. Detecta y corrige errores antes de que afecten a las ventas.', icon: 'analytics' },
          { title: 'Soporte humano, no bots', description: 'Equipo dedicado en España que te atiende por teléfono, email o WhatsApp. Nada de chatbots automatizados.', icon: 'support_agent' },
        ],
      },
      {
        type: 'highlights',
        title: 'Da salida a tu stock sin mover un dedo',
        lead: 'Exportaciones funciona como una extensión de tu equipo comercial en toda Europa. Tú te encargas de tener el vehículo listo; nosotros nos encargamos de venderlo donde más valor tiene.',
        highlights: [
          { title: '15+ países europeos', description: 'Red de compradores profesionales' },
          { title: 'Portales internacionales', description: 'AutoScout24, Mobile.de, La Centrale' },
          { title: 'Precio de mercado en destino', description: 'Valoración real en el país comprador' },
          { title: 'Sin riesgo de impago', description: 'Compradores verificados que pagan al contado' },
        ],
        bullets: [
          'Stock de difícil rotación: vehículos diesel en España que tienen alta demanda en Alemania o Polonia. El mercado europeo absorbe lo que aquí no se vende.',
          'Sin riesgo: modelo de comisión sobre la venta. Solo pagas cuando el vehículo se ha vendido y cobrado.',
          'Acceso a compradores que pagan al contado, sin riesgo de impago',
          'Precios de mercado reales en el país destino, sin intermediarios adicionales',
          'Gestión completa de IVA intracomunitario y documentación de exportación',
        ],
      },
      {
        type: 'process',
        title: '¿Cómo funciona Exportaciones?',
        steps: [
          { title: 'Análisis de tu stock', description: 'Revisamos tu inventario e identificamos qué vehículos tienen mayor potencial de exportación y a qué mercados. Te presentamos un informe de oportunidades.' },
          { title: 'Publicación y negociación', description: 'Publicamos los vehículos seleccionados en los portales del país destino y contactamos a nuestra red de compradores. Negociamos el mejor precio en tu nombre.' },
          { title: 'Gestión y entrega', description: 'Coordinamos toda la documentación, el transporte y la entrega. Cobras el precio acordado una vez el vehículo llega a su destino y el comprador confirma la recepción.' },
        ],
      },
      {
        type: 'cta',
        title: '¿Tienes vehículos que no rotan? Véndelos en Europa.',
        lead: 'Comparte tu lista de stock con nosotros y te hacemos un análisis gratuito de las oportunidades de exportación para tu concesionario.',
      },
    ],
  },
  'motorflash-renting': {
    subtitle: 'Vídeos IA personalizados para retener y vender más a tus clientes de renting',
    sections: [
      {
        type: 'highlights',
        title: 'Cuando termina el renting, pierdes al cliente. Y la competencia ya le está llamando.',
        lead: 'Cada año, miles de clientes terminan su contrato sin renovar porque no han recibido una propuesta personalizada a tiempo. Tu equipo no llega a todos. Tus emails masivos se ignoran. MotorFlash Connect convierte ese final de contrato en una nueva venta, automáticamente, con un vídeo único por cliente.',
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
        lead: 'Además del flujo de fin de contrato, MotorFlash Connect incluye un motor para enviar vídeos personalizados en cualquier momento del año. Diseñas la campaña una vez y la plataforma la dispara automáticamente, personalizada para cada cliente.',
        items: [
          { title: 'Campañas estacionales', description: 'Neumáticos de invierno, revisión ITV, cambio de aceite, seguro a renovar. Vídeos automáticos en la fecha justa para cada cliente.', icon: 'event_repeat' },
          { title: 'Campañas de fecha fija', description: 'Black Friday, lanzamiento de un modelo nuevo, fin de año fiscal. Defines fecha y audiencia, la plataforma envía a todos con su nombre y datos.', icon: 'calendar_month' },
          { title: 'Campañas por audiencia', description: 'Define una base de datos concreta (clientes de cierta marca, cuota, antigüedad) y mándales una oferta exclusiva con vídeo personalizado.', icon: 'group' },
          { title: 'Integración con tu CRM/ERP', description: 'API REST y webhooks para sincronizar cartera, disparar campañas desde tu CRM y mandar respuestas automáticamente al lead correcto.', icon: 'integration_instructions' },
        ],
      },
      {
        type: 'cta',
        title: '30 minutos y te enseñamos un vídeo real con uno de tus clientes',
        lead: 'Demo personalizada: vídeo generado con un caso real de tu cartera (con tu autorización), panel de respuestas y métricas, integración con tu sistema actual y cálculo de ROI estimado. Modalidad SaaS sin permanencia, con plan piloto para validar antes de decidir.',
      },
    ],
  },
}

export const productContentBySlug = (slug: string): ProductContent | undefined =>
  productContent[slug]
