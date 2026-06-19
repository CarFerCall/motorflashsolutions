import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

type LocaleKey = 'es' | 'ca' | 'en' | 'zh'

interface PpCopy {
  badge: string
  title1: string
  titleAccent: string
  heroLead: string
  ctaPrimary: string
  ctaSecondary: string
  stats: { icon: string; v: string; l: string }[]
  advantagesTitle: string
  advantagesLead: string
  visEyebrow: string
  visTitle: string
  visDesc: string
  aiEyebrow: string
  aiTitle: string
  aiDesc: string
  crmEyebrow: string
  crmTitle: string
  crmDesc: string
  trafficTitle: string
  trafficDesc: string
  finalCtaTitle: string
  finalCtaLead: string
  finalCtaPrimary: string
  finalCtaSecondary: string
  benefits: { icon: string; t: string; d: string }[]
}

const COPY: Record<LocaleKey, PpCopy> = {
  es: {
    badge: 'PORTAL PROPIO MOTORFLASH.COM',
    title1: 'Donde el stock se convierte en ',
    titleAccent: 'ventas reales.',
    heroLead: 'Aprovecha el ecosistema líder en el sector automotriz. No solo publicas; posicionas tu inventario frente a una audiencia altamente cualificada que busca exactamente lo que tú ofreces.',
    ctaPrimary: 'Publicar Inventario',
    ctaSecondary: 'Ver Estadísticas',
    stats: [
      { icon: 'groups', v: '+2.5M', l: 'Visitas Mensuales' },
      { icon: 'search', v: '15M', l: 'Búsquedas de Stock' },
      { icon: 'timer', v: '4.2min', l: 'Tiempo de Sesión' },
      { icon: 'verified', v: '98%', l: 'Leads Cualificados' },
    ],
    advantagesTitle: 'Ventajas de Publicar en Motorflash',
    advantagesLead: 'Nuestro portal propio es la pieza central que conecta tu stock con los mayores hubs de tráfico automotriz en España.',
    visEyebrow: 'VISIBILIDAD EXTRA',
    visTitle: 'Alcance Multicanal Instantáneo',
    visDesc: 'Tu anuncio no solo vive en Motorflash. Se distribuye automáticamente a través de nuestra red de partners y feeds exclusivos, garantizando un 40% más de impresiones que en portales genéricos.',
    aiEyebrow: 'MOTORFLASH IA',
    aiTitle: 'Optimización con IA',
    aiDesc: 'Analizamos las tendencias de búsqueda en tiempo real para sugerirte cambios en el precio o descripción que aumenten tus clics.',
    crmEyebrow: 'CRM INTEGRADO',
    crmTitle: 'Control Total en CRM4YOU',
    crmDesc: 'Gestiona cada lead que entra desde el portal directamente en tu CRM, sin pérdidas de datos ni esperas.',
    trafficTitle: 'Tráfico que Convierte',
    trafficDesc: 'Nuestros usuarios tienen una intención de compra un 35% superior a la media del mercado, centrada en producto de stock profesional.',
    finalCtaTitle: '¿Listo para dominar el mercado digital?',
    finalCtaLead: 'Únete a los más de 3.500 concesionarios que ya confían en la red Motorflash para mover su inventario.',
    finalCtaPrimary: 'Solicitar Demo',
    finalCtaSecondary: 'Hablar con un experto',
    benefits: [
      { icon: 'bolt', t: 'Publicación Ultra-Rápida', d: 'Sync en menos de 5 minutos' },
      { icon: 'ads_click', t: 'Leads Exclusivos', d: 'Sin competencia en tus propios leads' },
      { icon: 'monitoring', t: 'Analytics Avanzado', d: 'Métricas de rendimiento por vehículo' },
    ],
  },
  ca: {
    badge: 'PORTAL PROPI MOTORFLASH.COM',
    title1: "On l'estoc es converteix en ",
    titleAccent: 'vendes reals.',
    heroLead: "Aprofita l'ecosistema líder al sector automotriu. No només publiques; posiciones el teu inventari davant d'una audiència altament qualificada que busca exactament el que ofereixes.",
    ctaPrimary: 'Publicar Inventari',
    ctaSecondary: 'Veure Estadístiques',
    stats: [
      { icon: 'groups', v: '+2.5M', l: 'Visites Mensuals' },
      { icon: 'search', v: '15M', l: "Cerques d'Estoc" },
      { icon: 'timer', v: '4.2min', l: 'Temps de Sessió' },
      { icon: 'verified', v: '98%', l: 'Leads Qualificats' },
    ],
    advantagesTitle: 'Avantatges de Publicar a Motorflash',
    advantagesLead: "El nostre portal propi és la peça central que connecta el teu estoc amb els majors hubs de trànsit automotriu a Espanya.",
    visEyebrow: 'VISIBILITAT EXTRA',
    visTitle: 'Abast Multicanal Instantani',
    visDesc: "El teu anunci no només viu a Motorflash. Es distribueix automàticament a través de la nostra xarxa de partners i feeds exclusius, garantint un 40% més d'impressions que en portals genèrics.",
    aiEyebrow: 'MOTORFLASH IA',
    aiTitle: 'Optimització amb IA',
    aiDesc: 'Analitzem les tendències de cerca en temps real per suggerir-te canvis al preu o descripció que augmentin els teus clics.',
    crmEyebrow: 'CRM INTEGRAT',
    crmTitle: 'Control Total a CRM4YOU',
    crmDesc: 'Gestiona cada lead que entra des del portal directament al teu CRM, sense pèrdues de dades ni esperes.',
    trafficTitle: 'Trànsit que Converteix',
    trafficDesc: "Els nostres usuaris tenen una intenció de compra un 35% superior a la mitjana del mercat, centrada en producte d'estoc professional.",
    finalCtaTitle: 'Llest per dominar el mercat digital?',
    finalCtaLead: "Uneix-te als més de 3.500 concessionaris que ja confien en la xarxa Motorflash per moure el seu inventari.",
    finalCtaPrimary: 'Sol·licita Demo',
    finalCtaSecondary: 'Parla amb un expert',
    benefits: [
      { icon: 'bolt', t: 'Publicació Ultra-Ràpida', d: 'Sync en menys de 5 minuts' },
      { icon: 'ads_click', t: 'Leads Exclusius', d: 'Sense competència als teus propis leads' },
      { icon: 'monitoring', t: 'Analytics Avançat', d: 'Mètriques de rendiment per vehicle' },
    ],
  },
  en: {
    badge: 'PROPRIETARY PORTAL MOTORFLASH.COM',
    title1: 'Where stock turns into ',
    titleAccent: 'real sales.',
    heroLead: 'Tap into the leading automotive ecosystem. You don\'t just publish — you position your inventory in front of a highly qualified audience looking for exactly what you offer.',
    ctaPrimary: 'Publish inventory',
    ctaSecondary: 'See stats',
    stats: [
      { icon: 'groups', v: '+2.5M', l: 'Monthly visits' },
      { icon: 'search', v: '15M', l: 'Stock searches' },
      { icon: 'timer', v: '4.2 min', l: 'Average session time' },
      { icon: 'verified', v: '98%', l: 'Qualified leads' },
    ],
    advantagesTitle: 'Advantages of publishing on Motorflash',
    advantagesLead: 'Our proprietary portal is the centrepiece connecting your stock with the largest automotive traffic hubs in Spain.',
    visEyebrow: 'EXTRA VISIBILITY',
    visTitle: 'Instant multi-channel reach',
    visDesc: "Your listing doesn't only live on Motorflash. It distributes automatically across our partner network and exclusive feeds, delivering 40% more impressions than generic portals.",
    aiEyebrow: 'MOTORFLASH AI',
    aiTitle: 'AI optimisation',
    aiDesc: 'We analyse search trends in real time to suggest price or description changes that lift your clicks.',
    crmEyebrow: 'INTEGRATED CRM',
    crmTitle: 'Full control in CRM4YOU',
    crmDesc: 'Manage every lead coming in from the portal directly in your CRM, with no data loss or delays.',
    trafficTitle: 'Traffic that converts',
    trafficDesc: 'Our users have 35% higher purchase intent than the market average, focused on professional stock.',
    finalCtaTitle: 'Ready to dominate the digital market?',
    finalCtaLead: "Join the 3,500+ dealerships that already trust the Motorflash network to move their inventory.",
    finalCtaPrimary: 'Request a demo',
    finalCtaSecondary: 'Talk to an expert',
    benefits: [
      { icon: 'bolt', t: 'Ultra-fast publishing', d: 'Sync in under 5 minutes' },
      { icon: 'ads_click', t: 'Exclusive leads', d: 'No competition on your own leads' },
      { icon: 'monitoring', t: 'Advanced analytics', d: 'Performance metrics per vehicle' },
    ],
  },
  zh: {
    badge: '自有门户 MOTORFLASH.COM',
    title1: '让库存转化为 ',
    titleAccent: '真实销售。',
    heroLead: '把握行业领先的汽车生态。您不只是发布,而是将库存呈现在高度精准、正在寻找您所提供产品的受众面前。',
    ctaPrimary: '发布库存',
    ctaSecondary: '查看数据',
    stats: [
      { icon: 'groups', v: '+2.5M', l: '月访问量' },
      { icon: 'search', v: '15M', l: '库存搜索量' },
      { icon: 'timer', v: '4.2 分钟', l: '平均会话时长' },
      { icon: 'verified', v: '98%', l: '已筛选潜客' },
    ],
    advantagesTitle: '在 Motorflash 发布的优势',
    advantagesLead: '我们的自有门户是连接您库存与西班牙最大汽车流量枢纽的核心。',
    visEyebrow: '额外曝光',
    visTitle: '即时多渠道覆盖',
    visDesc: '您的广告不只存在于 Motorflash。它会自动分发至我们的合作网络与专属数据流,带来比通用门户多 40% 的曝光。',
    aiEyebrow: 'MOTORFLASH AI',
    aiTitle: 'AI 优化',
    aiDesc: '我们实时分析搜索趋势,建议价格或描述调整以提升您的点击。',
    crmEyebrow: '集成 CRM',
    crmTitle: '在 CRM4YOU 中全面掌控',
    crmDesc: '通过门户进入的每个潜客直接在 CRM 中管理,无数据丢失、无延迟。',
    trafficTitle: '转化型流量',
    trafficDesc: '我们的用户购买意向高于市场平均水平 35%,聚焦专业库存。',
    finalCtaTitle: '准备好主宰数字市场了吗?',
    finalCtaLead: '加入已有 3,500+ 家信赖 Motorflash 网络来运转其库存的经销商。',
    finalCtaPrimary: '申请演示',
    finalCtaSecondary: '与专家对话',
    benefits: [
      { icon: 'bolt', t: '极速发布', d: '5 分钟内同步' },
      { icon: 'ads_click', t: '独占潜客', d: '您的潜客不被同业争夺' },
      { icon: 'monitoring', t: '高级分析', d: '按车辆的业绩指标' },
    ],
  },
}

export async function PortalPublicacion() {
  const productSlug = 'portal-publicacion'
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <div className="font-display text-on-surface">
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="mf-container grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">{t.badge}</span>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              {t.title1}<span className="text-primary">{t.titleAccent}</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-8 max-w-xl">{t.heroLead}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_10px_20px_rgba(255,128,0,0.2)] transition-all">
                {t.ctaPrimary}
                <span className="material-symbols-outlined">trending_up</span>
              </Link>
              <Link href="/servicios" className="inline-block px-8 py-4 border border-outline-variant text-on-surface font-bold rounded-xl hover:bg-surface-container-high transition-all">{t.ctaSecondary}</Link>
            </div>
          </div>
          <div className="relative group">
            <div aria-hidden className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30 overflow-hidden aspect-video shadow-xl">
              <Image src="/images/products/clasificados-hero.png" alt="Motorflash Ecosystem" width={800} height={450} className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 border-y border-outline-variant/30">
        <div className="mf-container grid md:grid-cols-4 gap-8">
          {t.stats.map((s) => (
            <div key={s.l} className="text-center p-8 rounded-2xl bg-white border border-outline-variant/50 shadow-sm">
              <div className="text-primary mb-2">
                <span className="material-symbols-outlined text-4xl">{s.icon}</span>
              </div>
              <div className="text-3xl md:text-headline-lg font-bold">{s.v}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.advantagesTitle}</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">{t.advantagesLead}</p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 bg-surface-container-low p-10 rounded-2xl border border-outline-variant relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <span className="material-symbols-outlined">visibility</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{t.visEyebrow}</span>
                </div>
                <h3 className="text-xl md:text-headline-lg font-medium mb-4">{t.visTitle}</h3>
                <p className="text-on-surface-variant text-lg max-w-md">{t.visDesc}</p>
              </div>
              <div aria-hidden className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
            </div>

            <div className="col-span-12 md:col-span-4 bg-white p-10 rounded-2xl border border-outline-variant shadow-sm">
              <div className="flex items-center gap-3 text-primary mb-6">
                <span className="material-symbols-outlined">psychology</span>
                <span className="text-xs font-bold uppercase tracking-widest">{t.aiEyebrow}</span>
              </div>
              <h3 className="text-xl font-medium mb-4">{t.aiTitle}</h3>
              <p className="text-sm text-on-surface-variant">{t.aiDesc}</p>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white p-10 rounded-2xl border border-outline-variant shadow-sm">
              <div className="flex items-center gap-3 text-primary mb-6">
                <span className="material-symbols-outlined">hub</span>
                <span className="text-xs font-bold uppercase tracking-widest">{t.crmEyebrow}</span>
              </div>
              <h3 className="text-xl font-medium mb-4">{t.crmTitle}</h3>
              <p className="text-sm text-on-surface-variant">{t.crmDesc}</p>
            </div>

            <div className="col-span-12 md:col-span-8 p-10 rounded-2xl text-white" style={{ background: 'linear-gradient(135deg, #ff8000 0%, #ff9e40 100%)' }}>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl md:text-headline-lg font-bold mb-2">{t.trafficTitle}</h3>
                  <p className="opacity-95 max-w-sm">{t.trafficDesc}</p>
                </div>
                <div className="hidden lg:block opacity-30">
                  <span className="material-symbols-outlined" style={{ fontSize: 120 }}>bar_chart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="mf-container">
          <div className="bg-white rounded-[2rem] p-12 lg:p-20 border border-outline-variant flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
            <div aria-hidden className="absolute w-80 h-80 bg-primary opacity-10" style={{ right: -80, bottom: -80, filter: 'blur(100px)' }} />
            <div className="flex-1 text-center lg:text-left z-10">
              <h2 className="text-3xl md:text-display-lg font-semibold mb-6 leading-tight">{t.finalCtaTitle}</h2>
              <p className="text-on-surface-variant text-lg mb-10 max-w-xl">{t.finalCtaLead}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={`/contacto?servicio=${productSlug}`} className="inline-block px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/20">{t.finalCtaPrimary}</Link>
                <Link href={`/contacto?servicio=${productSlug}`} className="inline-block px-10 py-5 border border-outline text-on-surface font-bold rounded-2xl hover:bg-surface-container-high transition-all">{t.finalCtaSecondary}</Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm space-y-6">
                {t.benefits.map((f) => (
                  <div key={f.t} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">{f.icon}</span>
                    </div>
                    <div>
                      <div className="font-bold">{f.t}</div>
                      <div className="text-sm text-on-surface-variant">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
