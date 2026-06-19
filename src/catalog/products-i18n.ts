/**
 * Traducciones de los campos textuales del catálogo de productos.
 * La fuente de verdad sigue siendo `products.ts` (en español).
 * Aquí solo se traducen los campos visibles al usuario: `name`,
 * `menuLabel`, `tagline`, `heroTitle` e `intro`. Los demás campos
 * (slug, icon, highlight, placeholder, menuOrder) se mantienen
 * idénticos al original.
 */
import type { Product } from './products'

export type ProductLocale = 'es' | 'en' | 'zh'

export type ProductTranslation = Pick<Product, 'name' | 'menuLabel' | 'tagline' | 'heroTitle' | 'intro'>

export const productI18n: Record<ProductLocale, Record<string, ProductTranslation>> = {
  es: {},
  en: {
    dealer: {
      name: 'Dealer',
      menuLabel: 'Dealer / Stock',
      tagline: 'End-to-end smart used-vehicle management.',
      heroTitle: 'Your stock always under control, from creation to sale',
      intro: "Dealer is the smart used-vehicle management platform built for large and small stock volumes. Create, review and publish your stock from a single environment. Keep quality under control, analyse prices and improve the efficiency of the whole process.",
    },
    exportaciones: {
      name: 'Multipublisher',
      menuLabel: 'Multipublisher',
      tagline: 'Publish once, appear on every portal.',
      heroTitle: 'Publish your stock in one click. Maximum visibility.',
      intro: 'Publish on Coches.net, Autocasión, AutoScout24, Wallapop and more with 99% API integration with the main portals. Keep your stock up to date and gain time for what matters: selling.',
    },
    crm4you: {
      name: 'CRM4YOU',
      menuLabel: 'CRM4YOU',
      tagline: 'The CRM for dealership groups.',
      heroTitle: 'Turn every opportunity into a real sale',
      intro: 'CRM4YOU creates a complete sales experience: from stock creation to the sale. The only CRM in the sector built to centrally manage multiple locations, brands and dealerships. Custom processes, full traceability and AI to help you close more sales in less time.',
    },
    'contact-center': {
      name: 'Contact Center',
      menuLabel: 'Contact Center',
      tagline: 'Omnichannel service, total efficiency.',
      heroTitle: 'Omnichannel service, total efficiency',
      intro: 'Over 70,000 calls handled monthly. Our Contact Center answers, analyses and improves every conversation thanks to AI and the Quality Monitoring system that automatically scores performance and service.',
    },
    spyne: {
      name: 'Photocall AI (Spyne)',
      menuLabel: 'Photocall AI (Spyne)',
      tagline: 'AI photography and video for cars.',
      heroTitle: 'The AI solution for your vehicle catalogue',
      intro: 'AI solution to transform your images simply and quickly, delivering professional-quality results. Build 360° videos, remove backgrounds and generate vehicle listings that sell for you, straight from your phone.',
    },
    'motorflash-message': {
      name: 'WhatsApp Business',
      menuLabel: 'WhatsApp Business',
      tagline: 'Smart conversations with AI on WhatsApp.',
      heroTitle: 'Smart conversations, immediate service',
      intro: 'Your customers are already on WhatsApp, and you can be available anytime. With Message AI you handle real conversations, book appointments and follow up regardless of opening hours. Secure, connected to your CRM and fully GDPR-compliant.',
    },
    'motorflash-mobile-tracking': {
      name: 'Advanced Image + RCS',
      menuLabel: 'Advanced Image + RCS',
      tagline: 'AI photography and RCS messaging for your vehicles.',
      heroTitle: 'AI photography and next-gen messaging to showcase your vehicles',
      intro: 'AI-powered photo, video and automatic enhancement to showcase every vehicle. Combined with RCS: visual, secure, multimedia messaging that converts up to 300% more than a traditional SMS.',
    },
    ia: {
      name: 'Motorflash AI',
      menuLabel: 'Motorflash AI',
      tagline: 'Conversational AI for your dealership, 24/7.',
      heroTitle: 'Three AI solutions to talk to your customers',
      intro: "Transform your dealership's customer service with conversational AI. Capture leads, answer questions and book appointments with no human intervention, any time, on the channel your customer already uses.",
    },
    'soluciones-web': {
      name: 'Web Services',
      menuLabel: 'Web Services',
      tagline: 'Websites and marketplaces for dealerships: 3 tiers, from Única to Platinum.',
      heroTitle: 'Automotive websites and marketplaces, in 30 days',
      intro: '100% automotive website with 3 tiers (Platinum, Silver and Única). Real stock publication, self-managed CMS, finance calculator, payment gateway, SEO and analytics by default. 99.9% infrastructure, SSL, anti-DDoS and WAF included. Natively integrated with CRM4YOU, Contact Center, MF Message and CHATWEB MF.',
    },
    'marketing-digital': {
      name: 'Digital Marketing',
      menuLabel: 'Digital Marketing (SEO/SEA)',
      tagline: 'SEO, SEA and Social Ads aimed at selling cars.',
      heroTitle: 'Digital strategies to sell more cars',
      intro: 'We know the automotive market and that every dealership needs a different strategy. Our team combines marketing experience, analytics and technology to grow your visibility. We design custom SEO, SEA and Social Ads actions always aimed at the sale.',
    },
    'portal-publicacion': {
      name: 'Classifieds (Motorflash.com)',
      menuLabel: 'Classifieds (Motorflash.com)',
      tagline: 'Extra visibility on the Motorflash.com portal.',
      heroTitle: 'Extra visibility for your vehicles on Motorflash.com',
      intro: "Motorflash.com gives extra visibility to your vehicles. Tap into the qualified traffic of our automotive-specialised portal to boost your stock sales.",
    },
    'lead-factory': {
      name: 'Lead Exclusive',
      menuLabel: 'Lead Exclusive (5-Star)',
      tagline: 'Verified, filtered leads ready to convert.',
      heroTitle: 'Verified, filtered leads ready to become customers',
      intro: 'Receive only buyers with real purchase intent. Each lead goes through verification and qualification with a 0-100 score before reaching your sales team. More time closing sales, less time managing contacts that don\'t convert.',
    },
    'soluciones-fabricantes': {
      name: 'Manufacturer Solutions',
      menuLabel: 'Manufacturer Solutions',
      tagline: 'Technology for brands and dealership networks.',
      heroTitle: 'Tech solutions for manufacturers and brands',
      intro: 'End-to-end platform built for manufacturers that need to coordinate their dealer network, standardise listing quality and obtain consolidated brand-level metrics.',
    },
    'motorflash-connect': {
      name: 'MotorFlash Connect',
      menuLabel: 'MotorFlash Connect',
      tagline: 'Personalised AI videos to retain leasing customers.',
      heroTitle: 'Turn every end of leasing contract into a new sale',
      intro: 'MotorFlash Connect generates and sends personalised AI sales videos to every customer whose leasing is about to end. The customer receives a unique piece with their name, current car and up to 5 real proposals to renew, switch or keep the vehicle. Your team closes sales with zero manual work.',
    },
    apex: {
      name: 'Apex by Motorflash Solutions',
      menuLabel: 'Apex (All-in-one)',
      tagline: 'The all-in-one suite from Motorflash Solutions.',
      heroTitle: 'Apex: the all-in-one suite from Motorflash Solutions',
      intro: 'A single platform integrating publishing, stock management, CRM, conversational AI, contact center and unified reporting. Built for dealerships that want to consolidate their entire digital ecosystem in one tool.',
    },
  },
  zh: {
    dealer: {
      name: '经销商库存(Dealer)',
      menuLabel: '经销商库存(Dealer)',
      tagline: '端到端的智能二手车管理。',
      heroTitle: '从入库到成交,库存始终掌控',
      intro: 'Dealer 是面向大小库存的智能二手车管理平台。在统一环境中创建、审核与发布库存。掌控质量、分析价格,提升整个流程的效率。',
    },
    exportaciones: {
      name: '多平台发布器',
      menuLabel: '多平台发布器',
      tagline: '一次发布,全部门户上线。',
      heroTitle: '一键发布库存。最大化曝光。',
      intro: '在 Coches.net、Autocasión、AutoScout24、Wallapop 等门户发布,与主流门户达成 99% API 集成。库存始终保持最新,把时间留给真正重要的事情:卖车。',
    },
    crm4you: {
      name: 'CRM4YOU',
      menuLabel: 'CRM4YOU',
      tagline: '面向经销商集团的 CRM。',
      heroTitle: '把每一次机会转化为真实成交',
      intro: 'CRM4YOU 构建完整的销售体验:从入库到成交。业界唯一专为集中管理多门店、多品牌与多经销商而生的 CRM。定制流程、全程可追溯,辅以 AI 在更短时间内成交更多。',
    },
    'contact-center': {
      name: '客服中心',
      menuLabel: '客服中心',
      tagline: '全渠道服务,极致效率。',
      heroTitle: '全渠道服务,极致效率',
      intro: '每月处理超过 7 万通电话。我们的客服中心通过 AI 与 Quality Monitoring 自动评估业绩与服务,接待、分析并改进每一段对话。',
    },
    spyne: {
      name: 'AI 摄影棚(Spyne)',
      menuLabel: 'AI 摄影棚(Spyne)',
      tagline: '面向汽车的 AI 摄影与视频。',
      heroTitle: '为您的汽车目录而生的 AI 方案',
      intro: '快速、简便地将图像转换为专业品质的 AI 解决方案。在手机上即可创建 360° 视频、去除背景并生成会卖车的车辆详情页。',
    },
    'motorflash-message': {
      name: 'WhatsApp 企业版',
      menuLabel: 'WhatsApp 企业版',
      tagline: '在 WhatsApp 上由 AI 驱动的智能对话。',
      heroTitle: '智能对话,即时响应',
      intro: '客户已经在用 WhatsApp,您也可以随时在线。借助 Message AI 处理真实对话、预约并跟进,无需依赖工作时间。安全、与您的 CRM 互联,并 100% 符合 GDPR。',
    },
    'motorflash-mobile-tracking': {
      name: '高级图像 + RCS',
      menuLabel: '高级图像 + RCS',
      tagline: '为您的车辆而生的 AI 摄影与 RCS 消息。',
      heroTitle: 'AI 摄影与进化的消息,更好地展示您的车辆',
      intro: 'AI 摄影、视频与自动优化,以更具吸引力的方式呈现每辆车。叠加 RCS:可视、安全、多媒体的消息,转化率比传统短信高出 300%。',
    },
    ia: {
      name: 'Motorflash 人工智能',
      menuLabel: 'Motorflash 人工智能',
      tagline: '为您的经销店 7×24 提供对话式 AI。',
      heroTitle: '三种与客户对话的 AI 方案',
      intro: '用对话式 AI 重塑您经销店的客户服务。无需人工干预即可获取潜客、解答疑问、预约 —— 在客户已使用的渠道、随时进行。',
    },
    'soluciones-web': {
      name: '网站服务',
      menuLabel: '网站服务',
      tagline: '为经销商打造的网站与市场:从 Única 到 Platinum 三档。',
      heroTitle: '30 天交付的汽车网站与市场',
      intro: '100% 汽车行业的网站,提供 Platinum、Silver 与 Única 三档。真实库存发布、自管 CMS、融资计算器、支付网关、SEO 与分析默认集成。99.9% 基础设施、SSL、防 DDoS 与 WAF 全包。原生集成 CRM4YOU、Contact Center、MF Message 与 CHATWEB MF。',
    },
    'marketing-digital': {
      name: '数字营销',
      menuLabel: '数字营销(SEO/SEA)',
      tagline: '以卖车为目标的 SEO、SEA 与社交广告。',
      heroTitle: '帮您卖出更多车的数字策略',
      intro: '我们了解汽车市场,也清楚每家经销商需要不同的策略。我们的团队结合营销经验、分析与技术,助您提升业务可见度。我们定制的 SEO、SEA 与社交广告动作,始终以成交为目标。',
    },
    'portal-publicacion': {
      name: '分类信息(Motorflash.com)',
      menuLabel: '分类信息(Motorflash.com)',
      tagline: '在 Motorflash.com 门户上的额外曝光。',
      heroTitle: '在 Motorflash.com 为您的车辆带来额外曝光',
      intro: 'Motorflash.com 为您的车辆提供额外曝光。借助我们专注汽车行业门户的精准流量,加速您库存的销售。',
    },
    'lead-factory': {
      name: '独家潜客(Lead Exclusive)',
      menuLabel: '独家潜客(5 星)',
      tagline: '已核验、已筛选、可转化的潜客。',
      heroTitle: '已核验、已筛选、可转化为客户的潜客',
      intro: '仅接收真实购买意向的买家。每个潜客在进入您的销售团队前都会经过 0-100 评分的核验与筛选。把时间花在成交上,而不是无法转化的联系人上。',
    },
    'soluciones-fabricantes': {
      name: '主机厂解决方案',
      menuLabel: '主机厂解决方案',
      tagline: '面向品牌与经销网络的技术。',
      heroTitle: '面向主机厂与品牌的技术解决方案',
      intro: '为需要协调经销网络、统一发布质量、获取品牌层面整合指标的主机厂而生的完整平台。',
    },
    'motorflash-connect': {
      name: 'MotorFlash 互联',
      menuLabel: 'MotorFlash 互联',
      tagline: '留住租赁客户的个性化 AI 视频。',
      heroTitle: '把每一次租赁合同到期转化为新一笔成交',
      intro: 'MotorFlash Connect 为每位即将合同到期的租赁客户生成并发送个性化 AI 销售视频。客户收到含其姓名、当前车辆与最多 5 个真实方案(续约、换车或买断)的独一无二的作品。您的团队零手工即可成交。',
    },
    apex: {
      name: 'Apex 一体化套件',
      menuLabel: 'Apex(一体化)',
      tagline: 'Motorflash Solutions 的一体化套件。',
      heroTitle: 'Apex:Motorflash Solutions 的一体化套件',
      intro: '集发布、库存管理、CRM、对话式 AI、Contact Center 与统一报告于一身的单一平台。为希望将整个数字生态整合到一个工具中的经销商而生。',
    },
  },
}
