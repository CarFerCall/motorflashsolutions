import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'

type LocaleKey = 'es' | 'en' | 'zh'

interface SpyneCopy {
  badge: string
  title1: string
  titleAccent: string
  heroLead: string
  ctaDemo: string
  ctaServices: string
  marketEyebrow: string
  marketTitle: string
  marketStats: { v: string; l: string }[]
  marketSource: string
  capsEyebrow: string
  capsTitle: string
  bigCardTitle: string
  bigCardDesc: string
  beforeLabel: string
  afterLabel: string
  spinTitle: string
  spinDesc: string
  spinTag: string
  coherenceTitle: string
  coherenceDesc: string
  retouchTitle: string
  retouchDesc: string
  retouchBullets: string[]
  realEyebrow: string
  realTitle: string
  realLead: string
  realBullets: { icon: string; t: string }[]
  realFootnote: string
  spinFootnote: string
  featuresEyebrow: string
  featuresTitle: string
  featuresLead: string
  features: { i: string; t: string; d: string }[]
  channelsEyebrow: string
  channelsTitle: string
  channelsLead: string
  channels: { i: string; t: string; d: string }[]
  stats: { v: string; l: string; primary?: boolean }[]
  ctaTitle: string
  ctaLead: string
  setupLabel: string
  galleryLabel: string
  spinLabel: string
  customLabel: string
  ctaButton: string
}

const COPY: Record<LocaleKey, SpyneCopy> = {
  es: {
    badge: 'POWERED BY CARLENS · SPYNE AI',
    title1: 'Vende antes con ',
    titleAccent: 'Photocall IA',
    heroLead: 'El 40% de los compradores deciden sin ver el coche. Transforma fotos de aparcamiento en imágenes de estudio profesional con +150 funcionalidades de IA. Sin estudio, sin fotógrafo, sin esperas.',
    ctaDemo: 'PROBAR DEMO GRATIS',
    ctaServices: 'VER TODOS LOS SERVICIOS',
    marketEyebrow: 'EL MERCADO HOY',
    marketTitle: 'Tus fotos son tu mejor comercial — la mayoría de clientes ya no ve el coche',
    marketStats: [
      { v: '95%', l: 'De concesionarios publica su stock online' },
      { v: '40%', l: 'De compradores decide sin ver el coche en persona' },
      { v: '4,2', l: 'Webs visita un comprador antes de decidir' },
    ],
    marketSource: 'Fuente: Google Research · Cox Automotive',
    capsEyebrow: 'CAPACIDADES PRINCIPALES',
    capsTitle: 'Una sola herramienta. Todo el trabajo del fotógrafo, en automático.',
    bigCardTitle: 'Sustitución de fondos y plataforma giratoria',
    bigCardDesc: 'La IA detecta el vehículo, lo recorta y reemplaza el fondo por uno profesional o el tuyo personalizado. Además genera la plataforma bajo el coche para que parezca tomado en estudio. Arrastra el divisor para comparar.',
    beforeLabel: 'Antes',
    afterLabel: 'Después',
    spinTitle: 'Vídeo Spin 360°',
    spinDesc: 'Vídeos interactivos generados automáticamente. El comprador gira el coche desde su móvil — más tiempo en ficha y más conversión.',
    spinTag: 'EXPERIENCIA INTERACTIVA',
    coherenceTitle: 'Coherencia profesional en todo el stock',
    coherenceDesc: 'Misma calidad, mismo encuadre, mismos fondos. Tu catálogo se ve impecable en cada portal sin depender del operario que hizo la foto.',
    retouchTitle: 'Retoque automático de reflejos, sombras y matrículas',
    retouchDesc: 'Corrige reflejos en carrocería y cristales, genera sombras realistas, cubre la matrícula con tu logo y tinta las lunas. RGPD cumplido sin pasos manuales.',
    retouchBullets: ['SOMBRAS Y REFLEJOS GENERADOS', 'MATRÍCULA SUSTITUIBLE', 'TINTADO DE LUNAS', 'LOGO INCRUSTADO EN FONDO'],
    realEyebrow: 'EJEMPLO REAL',
    realTitle: 'Pruébalo tú: gira el vehículo 360°',
    realLead: 'Lo mismo que verán tus compradores en la ficha. Pincha y arrastra para girarlo. Esta es una toma real procesada con Photocall IA, con plataforma giratoria generada y hotspots interactivos.',
    realBullets: [
      { icon: 'rotate_360', t: 'Vista completa desde cualquier ángulo' },
      { icon: 'touch_app', t: 'Hotspots con detalles del coche' },
      { icon: 'smartphone', t: 'Funciona igual en móvil y desktop' },
    ],
    realFootnote: 'Si el visor tarda en cargar, dale un par de segundos: descarga los frames del coche.',
    spinFootnote: 'Visor 360° servido por Photocall IA · arrastra para girar',
    featuresEyebrow: '+150 FUNCIONALIDADES DE IA',
    featuresTitle: '+100 transformaciones y +50 detecciones automáticas',
    featuresLead: 'Cada foto pasa por una pipeline de IA que la audita, la corrige y la transforma. Estos son algunos ejemplos de lo que hace por ti, automáticamente.',
    features: [
      { i: 'wallpaper', t: 'Sustitución de fondos', d: 'Reemplaza el fondo por estudio virtual o el tuyo personalizado.' },
      { i: 'view_in_ar', t: 'Plataforma giratoria', d: 'Genera la plataforma/suelo bajo el coche en automático.' },
      { i: 'rotate_90_degrees_ccw', t: 'Vídeo Spin 360°', d: 'Vídeos interactivos para que el comprador gire el coche.' },
      { i: 'auto_fix_high', t: 'Reflejos y sombras', d: 'Corrige reflejos en carrocería y cristales, ajusta sombras.' },
      { i: 'directions_car', t: 'Cobertura de matrícula', d: 'Sustitúyela, ocúltala o cúbrela con el logo.' },
      { i: 'blur_on', t: 'Tintado de lunas', d: 'Cubre las ventanas o lo que se ve a través de ellas.' },
      { i: 'straighten', t: 'Corrección de inclinación', d: 'Ajusta el ángulo y perspectiva del vehículo.' },
      { i: 'auto_awesome', t: '+50 detecciones', d: 'Tipo de coche, neumáticos, barro, daños, exposición, desenfoque…' },
      { i: 'verified', t: 'Logo incrustado', d: 'Tu marca en el fondo y en la matrícula sin que se note.' },
      { i: 'airline_seat_recline_normal', t: 'Mejora de interior', d: 'Corrige interior y cubre exteriores visibles por las ventanas.' },
      { i: 'high_quality', t: 'Mejora de resolución', d: 'Auditoría automática de fotos antiguas, más nitidez y enfoque.' },
      { i: 'aspect_ratio', t: 'Ajuste por portal', d: 'Variantes de tamaño para cada portal y red social.' },
    ],
    channelsEyebrow: '5 FORMAS DE INTEGRARLO',
    channelsTitle: 'Funciona con tu workflow actual. No al revés.',
    channelsLead: 'Elige el canal o usa varios en paralelo: alguien hace fotos con la app mientras el sistema sube las del DMS por API.',
    channels: [
      { i: 'smartphone', t: 'App iOS / Android', d: 'Guía paso a paso para hacer las fotos desde el aparcamiento.' },
      { i: 'monitor', t: 'Consola Carlens360', d: 'Panel web con todas tus fotos, proyectos y reglas de IA.' },
      { i: 'api', t: 'API', d: 'Sube el inventario completo automáticamente desde tu DMS.' },
      { i: 'integration_instructions', t: 'SDK', d: 'Empotra el flujo en tu propia app de fabricante o grupo.' },
      { i: 'sync_alt', t: 'Integración DMS', d: 'Nos enchufamos a tu workflow: concesionario → web → portal.' },
    ],
    stats: [
      { v: '+150', l: 'FUNCIONALIDADES IA', primary: true },
      { v: '5x', l: 'MÁS CLICS EN PORTAL' },
      { v: 'segundos', l: 'POR FOTO PROCESADA' },
      { v: '+30%', l: 'CONVERSIÓN A LEAD' },
    ],
    ctaTitle: '¿Listo para profesionalizar tu inventario?',
    ctaLead: 'Únete a los concesionarios que ya usan Photocall IA para dominar el mercado digital.',
    setupLabel: 'Set up',
    galleryLabel: 'Galería',
    spinLabel: 'Con Spin 360°',
    customLabel: 'Fondo personalizado',
    ctaButton: 'Solicitar Demo Personalizada',
  },
  en: {
    badge: 'POWERED BY CARLENS · SPYNE AI',
    title1: 'Sell sooner with ',
    titleAccent: 'Photocall AI',
    heroLead: "40% of buyers decide without seeing the car. Turn parking-lot photos into pro studio shots with 150+ AI features. No studio, no photographer, no waiting.",
    ctaDemo: 'TRY A FREE DEMO',
    ctaServices: 'VIEW ALL SERVICES',
    marketEyebrow: 'THE MARKET TODAY',
    marketTitle: 'Your photos are your best salesperson — most customers no longer see the car',
    marketStats: [
      { v: '95%', l: 'Of dealerships publish stock online' },
      { v: '40%', l: 'Of buyers decide without seeing the car in person' },
      { v: '4.2', l: 'Websites a buyer visits before deciding' },
    ],
    marketSource: 'Source: Google Research · Cox Automotive',
    capsEyebrow: 'MAIN CAPABILITIES',
    capsTitle: 'One tool. All the photographer’s work, automated.',
    bigCardTitle: 'Background swap and turntable platform',
    bigCardDesc: 'AI detects the vehicle, cuts it out and swaps the background for a professional or your custom one. It also generates the platform under the car so it looks studio-shot. Drag the divider to compare.',
    beforeLabel: 'Before',
    afterLabel: 'After',
    spinTitle: 'Spin 360° video',
    spinDesc: 'Interactive videos generated automatically. The buyer spins the car from their phone — more time on the listing and more conversion.',
    spinTag: 'INTERACTIVE EXPERIENCE',
    coherenceTitle: 'Professional consistency across stock',
    coherenceDesc: "Same quality, same framing, same backgrounds. Your catalogue looks impeccable on every portal regardless of who took the photo.",
    retouchTitle: 'Automatic retouching of reflections, shadows and plates',
    retouchDesc: "Corrects reflections on body and glass, generates realistic shadows, covers the plate with your logo and tints windows. GDPR-compliant, no manual steps.",
    retouchBullets: ['SHADOWS & REFLECTIONS GENERATED', 'REPLACEABLE PLATE', 'WINDOW TINTING', 'LOGO EMBEDDED IN BACKGROUND'],
    realEyebrow: 'REAL EXAMPLE',
    realTitle: 'Try it: spin the vehicle 360°',
    realLead: "The same view your buyers see on the listing. Click and drag to rotate. This is a real photo processed with Photocall AI, with a generated turntable and interactive hotspots.",
    realBullets: [
      { icon: 'rotate_360', t: 'Full view from every angle' },
      { icon: 'touch_app', t: 'Hotspots with car details' },
      { icon: 'smartphone', t: 'Works the same on mobile and desktop' },
    ],
    realFootnote: 'If the viewer takes a second to load, give it a moment: it downloads the car frames.',
    spinFootnote: '360° viewer served by Photocall AI · drag to rotate',
    featuresEyebrow: '+150 AI FEATURES',
    featuresTitle: '+100 transformations and +50 automatic detections',
    featuresLead: 'Every photo runs through an AI pipeline that audits, corrects and transforms it. Here are a few examples of what it does for you, automatically.',
    features: [
      { i: 'wallpaper', t: 'Background swap', d: 'Swap the background for a virtual studio or your custom one.' },
      { i: 'view_in_ar', t: 'Turntable platform', d: 'Generates the platform/floor under the car automatically.' },
      { i: 'rotate_90_degrees_ccw', t: 'Spin 360° video', d: 'Interactive videos so the buyer can rotate the car.' },
      { i: 'auto_fix_high', t: 'Reflections and shadows', d: 'Corrects reflections on body and glass, adjusts shadows.' },
      { i: 'directions_car', t: 'Licence plate cover', d: 'Replace it, hide it or cover with the logo.' },
      { i: 'blur_on', t: 'Window tinting', d: 'Cover the windows or what shows through them.' },
      { i: 'straighten', t: 'Tilt correction', d: 'Adjust the vehicle angle and perspective.' },
      { i: 'auto_awesome', t: '+50 detections', d: 'Car type, tyres, mud, damage, exposure, blur…' },
      { i: 'verified', t: 'Embedded logo', d: 'Your brand on the background and plate, seamlessly.' },
      { i: 'airline_seat_recline_normal', t: 'Interior enhancement', d: 'Corrects interior and covers exteriors visible through windows.' },
      { i: 'high_quality', t: 'Resolution upgrade', d: 'Automatic audit of old photos for sharpness and focus.' },
      { i: 'aspect_ratio', t: 'Per-portal sizing', d: 'Size variants for each portal and social network.' },
    ],
    channelsEyebrow: '5 WAYS TO INTEGRATE',
    channelsTitle: 'Works with your current workflow. Not the other way around.',
    channelsLead: "Choose a channel or run several in parallel: someone snaps photos with the app while the system imports DMS photos via API.",
    channels: [
      { i: 'smartphone', t: 'iOS / Android app', d: 'Step-by-step guidance to shoot from the lot.' },
      { i: 'monitor', t: 'Carlens360 console', d: 'Web panel with every photo, project and AI rule.' },
      { i: 'api', t: 'API', d: 'Upload the whole inventory automatically from your DMS.' },
      { i: 'integration_instructions', t: 'SDK', d: 'Embed the flow in your manufacturer or group app.' },
      { i: 'sync_alt', t: 'DMS integration', d: 'We plug into your workflow: dealership → web → portal.' },
    ],
    stats: [
      { v: '+150', l: 'AI FEATURES', primary: true },
      { v: '5x', l: 'MORE PORTAL CLICKS' },
      { v: 'seconds', l: 'PER PROCESSED PHOTO' },
      { v: '+30%', l: 'LEAD CONVERSION' },
    ],
    ctaTitle: 'Ready to professionalise your inventory?',
    ctaLead: 'Join the dealerships already using Photocall AI to dominate the digital market.',
    setupLabel: 'Set-up',
    galleryLabel: 'Gallery',
    spinLabel: 'With Spin 360°',
    customLabel: 'Custom background',
    ctaButton: 'Request a personalised demo',
  },
  zh: {
    badge: 'POWERED BY CARLENS · SPYNE AI',
    title1: '用 ',
    titleAccent: 'Photocall AI',
    heroLead: '40% 的买家在未看到车辆前就做出决定。借助 150+ AI 功能,将停车场照片转化为专业影棚级图像。无需影棚、摄影师与等待。',
    ctaDemo: '免费试用演示',
    ctaServices: '查看所有服务',
    marketEyebrow: '当前的市场',
    marketTitle: '您的照片就是最好的销售 —— 大多数客户不再看车',
    marketStats: [
      { v: '95%', l: '在线发布库存的经销商' },
      { v: '40%', l: '未亲自看车即作决定的买家' },
      { v: '4.2', l: '买家决策前浏览的网站数量' },
    ],
    marketSource: '来源:Google Research · Cox Automotive',
    capsEyebrow: '主要能力',
    capsTitle: '一个工具,完成摄影师的全部工作,自动化。',
    bigCardTitle: '背景替换与转盘平台',
    bigCardDesc: 'AI 识别车辆并替换背景为专业图像或您的自定义图像。它还在车底生成平台,呈现影棚效果。拖动分隔条进行对比。',
    beforeLabel: '之前',
    afterLabel: '之后',
    spinTitle: 'Spin 360° 视频',
    spinDesc: '自动生成的互动视频。买家可用手机旋转车辆 —— 详情页停留更久、转化更高。',
    spinTag: '互动体验',
    coherenceTitle: '库存间的一致专业感',
    coherenceDesc: '相同质量、相同取景、相同背景。无论由谁拍摄,您的目录在所有门户上看起来都完美。',
    retouchTitle: '自动修整反光、阴影与车牌',
    retouchDesc: '修正车身与玻璃反光、生成真实阴影、用您 Logo 覆盖车牌并为玻璃加色。无需手动步骤即合规 GDPR。',
    retouchBullets: ['生成阴影与反光', '可替换车牌', '玻璃加色', 'Logo 嵌入背景'],
    realEyebrow: '真实示例',
    realTitle: '试一试:旋转车辆 360°',
    realLead: '与买家在详情页看到的一致。点击并拖动旋转。这是一张经由 Photocall AI 处理的真实图像,生成了转盘平台与互动热点。',
    realBullets: [
      { icon: 'rotate_360', t: '任意角度全方位查看' },
      { icon: 'touch_app', t: '车辆细节的热点' },
      { icon: 'smartphone', t: '移动与桌面端体验一致' },
    ],
    realFootnote: '若播放器需要稍等,请耐心一下:正在下载车辆帧。',
    spinFootnote: '由 Photocall AI 提供的 360° 播放器 · 拖动旋转',
    featuresEyebrow: '+150 项 AI 功能',
    featuresTitle: '+100 项变换与 +50 项自动检测',
    featuresLead: '每张照片都经过 AI 流水线的审计、修正与变换。以下是它为您自动完成的部分示例。',
    features: [
      { i: 'wallpaper', t: '背景替换', d: '将背景替换为虚拟影棚或您的自定义背景。' },
      { i: 'view_in_ar', t: '转盘平台', d: '自动在车下生成平台/地面。' },
      { i: 'rotate_90_degrees_ccw', t: 'Spin 360° 视频', d: '让买家旋转车辆的互动视频。' },
      { i: 'auto_fix_high', t: '反光与阴影', d: '修正车身与玻璃反光,调整阴影。' },
      { i: 'directions_car', t: '车牌覆盖', d: '替换、隐藏或用 Logo 覆盖。' },
      { i: 'blur_on', t: '玻璃加色', d: '遮盖玻璃或透过玻璃可见的内容。' },
      { i: 'straighten', t: '倾斜校正', d: '调整车辆角度与透视。' },
      { i: 'auto_awesome', t: '+50 项检测', d: '车型、轮胎、泥渍、损伤、曝光、模糊……' },
      { i: 'verified', t: '嵌入 Logo', d: '在背景与车牌上无缝呈现您的品牌。' },
      { i: 'airline_seat_recline_normal', t: '内饰增强', d: '修正内饰并遮盖透过车窗可见的外景。' },
      { i: 'high_quality', t: '分辨率提升', d: '对旧照片进行自动审查,提升清晰度与对焦。' },
      { i: 'aspect_ratio', t: '按门户调整尺寸', d: '为每个门户与社交平台提供尺寸变体。' },
    ],
    channelsEyebrow: '5 种集成方式',
    channelsTitle: '配合您的现有流程。而不是反过来。',
    channelsLead: '选择某一渠道或并行使用多种:有人用 App 拍照,同时系统通过 API 从 DMS 导入照片。',
    channels: [
      { i: 'smartphone', t: 'iOS / Android 应用', d: '在停车场也能逐步引导拍摄。' },
      { i: 'monitor', t: 'Carlens360 控制台', d: '通过 Web 管理所有照片、项目与 AI 规则。' },
      { i: 'api', t: 'API', d: '从您的 DMS 自动上传整个库存。' },
      { i: 'integration_instructions', t: 'SDK', d: '将流程嵌入到您的厂商或集团应用中。' },
      { i: 'sync_alt', t: 'DMS 集成', d: '接入您的工作流:经销店 → 网站 → 门户。' },
    ],
    stats: [
      { v: '+150', l: 'AI 功能', primary: true },
      { v: '5x', l: '门户点击量' },
      { v: '秒', l: '处理每张照片所需时间' },
      { v: '+30%', l: '潜客转化率' },
    ],
    ctaTitle: '准备好让您的库存更专业了吗?',
    ctaLead: '加入已经在用 Photocall AI 占据数字市场的经销商。',
    setupLabel: '建置',
    galleryLabel: '画廊',
    spinLabel: '含 Spin 360°',
    customLabel: '自定义背景',
    ctaButton: '申请定制演示',
  },
}

export async function Spyne() {
  const productSlug = 'spyne'
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
          <div className="w-full h-full opacity-60">
            <Image src="/images/products/spyne-hero.png" alt="High-end vehicle" fill className="object-cover" sizes="100vw" />
          </div>
        </div>
        <div className="mf-container relative z-20">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">{t.badge}</span>
            </div>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              {t.title1}<span className="text-primary">{t.titleAccent}</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-xl">{t.heroLead}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">{t.ctaDemo}</Link>
              <Link href="/servicios" className="border border-outline text-on-surface px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-colors">{t.ctaServices}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mercado */}
      <section className="py-20 bg-white">
        <div className="mf-container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">{t.marketEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mt-3">{t.marketTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.marketStats.map((s) => (
              <div key={s.l} className="bg-surface-container-low rounded-2xl p-8 text-center border border-outline-variant">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{s.v}</div>
                <p className="text-sm text-on-surface-variant">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant text-center mt-6 opacity-70">{t.marketSource}</p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="mf-container">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">{t.capsEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mt-3">{t.capsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between group border border-outline-variant shadow-sm bg-white">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>wallpaper</span>
                  <h3 className="text-xl font-medium">{t.bigCardTitle}</h3>
                </div>
                <p className="text-sm text-on-surface-variant mb-8">{t.bigCardDesc}</p>
              </div>
              <BeforeAfterSlider
                beforeSrc="/images/products/spyne-after.jpg"
                afterSrc="/images/products/spyne-before.jpg"
                beforeAlt="Original vehicle photo at the dealership"
                afterAlt="Same photo processed with AI"
                beforeLabel={t.beforeLabel}
                afterLabel={t.afterLabel}
              />
            </div>

            <div className="md:col-span-5 bg-surface-container p-8 rounded-2xl border border-outline-variant flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">rotate_90_degrees_ccw</span>
              </div>
              <h3 className="text-xl font-medium mb-4">{t.spinTitle}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{t.spinDesc}</p>
              <div className="w-full h-1.5 bg-outline-variant rounded-full mt-auto overflow-hidden">
                <div className="w-4/5 h-full bg-primary rounded-full" />
              </div>
              <span className="mt-4 text-[10px] text-primary font-bold uppercase tracking-widest">{t.spinTag}</span>
            </div>

            <div className="md:col-span-4 bg-surface-container-high p-8 rounded-2xl border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">verified_user</span>
              <h3 className="text-xl font-medium mb-4">{t.coherenceTitle}</h3>
              <p className="text-sm text-on-surface-variant">{t.coherenceDesc}</p>
            </div>

            <div className="md:col-span-8 glass-card p-8 rounded-2xl flex items-center gap-6 border border-primary/10 shadow-sm bg-white">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">{t.retouchTitle}</h3>
                <p className="text-sm text-on-surface-variant mb-6">{t.retouchDesc}</p>
                <ul className="space-y-3">
                  {t.retouchBullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[11px] text-primary font-bold uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm font-bold">check_circle</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo 360° */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">{t.realEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.realTitle}</h2>
              <p className="text-on-surface-variant mb-6">{t.realLead}</p>
              <ul className="space-y-3 mb-6">
                {t.realBullets.map((b) => (
                  <li key={b.t} className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{b.icon}</span>
                    <span className="font-medium">{b.t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-on-surface-variant">{t.realFootnote}</p>
            </div>

            <div className="lg:col-span-8">
              <div className="relative rounded-3xl overflow-hidden border border-outline-variant shadow-xl bg-surface-container-low" style={{ aspectRatio: '16 / 10' }}>
                <iframe
                  src="https://assets.spyne.ai/360?sku_id=007070db15154b07ad6c88eb1e64d2d6&showHotspot=true"
                  className="absolute inset-0 w-full h-full"
                  title="Photocall AI 360°"
                  loading="lazy"
                  allow="fullscreen; accelerometer; gyroscope"
                  allowFullScreen
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant text-center mt-3 opacity-70">{t.spinFootnote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* +150 funcionalidades */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">{t.featuresEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.featuresTitle}</h2>
            <p className="text-on-surface-variant">{t.featuresLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.features.map((f) => (
              <div key={f.t} className="bg-surface-container-low border border-outline-variant rounded-xl p-5 hover:border-primary/40 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl mb-3 block">{f.i}</span>
                <p className="font-semibold text-sm mb-1">{f.t}</p>
                <p className="text-xs text-on-surface-variant leading-snug">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canales */}
      <section className="py-24 bg-surface-container-low">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">{t.channelsEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.channelsTitle}</h2>
            <p className="text-on-surface-variant">{t.channelsLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {t.channels.map((c) => (
              <div key={c.t} className="bg-white border border-outline-variant rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{c.i}</span>
                </div>
                <p className="font-semibold text-sm mb-1">{c.t}</p>
                <p className="text-xs text-on-surface-variant leading-snug">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-outline-variant bg-surface-container-low">
        <div className="mf-container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {t.stats.map((s) => (
            <div key={s.l}>
              <div className={`text-4xl md:text-5xl font-bold ${s.primary ? 'text-primary' : 'text-on-surface'}`}>{s.v}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-5">
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-6">{t.ctaTitle}</h2>
          <p className="text-lg text-on-surface-variant mb-4">{t.ctaLead}</p>
          <div className="inline-flex flex-wrap items-center gap-x-6 gap-y-2 justify-center mb-10 text-sm text-on-surface-variant">
            <span><strong>{t.setupLabel}</strong> desde 150 €</span>
            <span className="opacity-30">·</span>
            <span><strong>{t.galleryLabel}</strong> desde 4 €</span>
            <span className="opacity-30">·</span>
            <span><strong>{t.spinLabel}</strong> 5,50 €</span>
            <span className="opacity-30">·</span>
            <span><strong>{t.customLabel}</strong> 300 €</span>
          </div>
          <div>
            <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all">{t.ctaButton}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
