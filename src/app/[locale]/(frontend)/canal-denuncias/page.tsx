import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

type Locale = 'es' | 'ca' | 'en' | 'zh'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdBSffhShGrrt-93PgOjuXjMwXttcJmYh7-9Vhjr2lPJTpxpw/viewform?vc=0&c=0&w=1&flr=0'

interface CardCopy { icon: string; title: string; desc: string }
interface StepCopy { title: string; desc: string }

interface ChannelCopy {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title1: string
    titleAccent: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
  }
  who: {
    kicker: string
    title: string
    lead: string
    items: string[]
  }
  what: {
    kicker: string
    title: string
    lead: string
    cards: CardCopy[]
  }
  guarantees: {
    kicker: string
    title: string
    cards: CardCopy[]
  }
  how: {
    kicker: string
    title: string
    steps: StepCopy[]
  }
  legal: {
    kicker: string
    body: string
  }
  cta: {
    title: string
    lead: string
    button: string
    fallback: string
  }
}

const COPY: Record<Locale, ChannelCopy> = {
  es: {
    meta: {
      title: 'Canal de denuncias · Motorflash',
      description:
        'Canal ético de Motorflash Ibérica de Negocios, S.L. Reporta de forma confidencial cualquier irregularidad, incumplimiento o vulneración del código ético. Sin represalias.',
    },
    hero: {
      eyebrow: 'Ética empresarial · Cumplimiento',
      title1: 'Canal de',
      titleAccent: 'denuncias',
      lead: 'Un canal confidencial y permanente para reportar cualquier hecho o conducta que pueda suponer una irregularidad, incumplimiento normativo o vulneración de nuestro código ético. Disponible para empleados, colaboradores, proveedores, clientes y cualquier tercero relacionado con Motorflash.',
      ctaPrimary: 'Abrir el formulario',
      ctaSecondary: 'Cómo funciona',
    },
    who: {
      kicker: 'A quién va dirigido',
      title: 'Cualquier persona con vínculo con Motorflash',
      lead: 'Empleados, ex-empleados, personas en proceso de selección, proveedores, contratistas, clientes o cualquier tercero con una relación laboral o profesional con Motorflash Ibérica de Negocios, S.L.',
      items: [
        'Empleados actuales o antiguos y personas en proceso de selección',
        'Personas cuya relación laboral haya terminado o no haya comenzado aún',
        'Trabajadores/as por cuenta propia y accionistas',
        'Miembros del órgano de administración, dirección y supervisión',
        'Personas vinculadas a contratistas, subcontratistas y proveedores',
        'Terceros que faciliten información sobre una posible infracción',
      ],
    },
    what: {
      kicker: 'Qué se puede reportar',
      title: 'Materias cubiertas por el canal',
      lead: 'Puedes reportar cualquier hecho o conducta que pueda constituir un incumplimiento de la normativa aplicable o de nuestro código ético.',
      cards: [
        { icon: 'gavel', title: 'Incumplimiento normativo', desc: 'Infracciones del Derecho de la Unión Europea o infracciones penales o administrativas graves o muy graves del ordenamiento jurídico español.' },
        { icon: 'shield_person', title: 'Código ético y conducta', desc: 'Vulneración de nuestro código ético: acoso, discriminación, uso indebido de recursos, conflicto de intereses o cualquier otra irregularidad interna.' },
        { icon: 'account_balance', title: 'Fraude o corrupción', desc: 'Fraude financiero, sobornos, blanqueo de capitales, prácticas contrarias a la libre competencia o cualquier otra forma de corrupción.' },
        { icon: 'security', title: 'Protección de datos', desc: 'Tratamiento inadecuado de datos personales, brechas de seguridad no comunicadas o vulneración del RGPD y la LOPDGDD.' },
        { icon: 'health_and_safety', title: 'Salud, seguridad y medioambiente', desc: 'Incumplimientos en materia de prevención de riesgos laborales, seguridad de productos, salud pública o protección del medioambiente.' },
        { icon: 'work', title: 'Derechos laborales', desc: 'Vulneración de derechos laborales fundamentales, condiciones de trabajo, igualdad de trato o cualquier forma de discriminación.' },
      ],
    },
    guarantees: {
      kicker: 'Nuestro compromiso',
      title: 'Garantías del canal',
      cards: [
        { icon: 'lock', title: 'Confidencialidad', desc: 'La identidad del informante y de cualquier tercero mencionado en la comunicación queda protegida. Solo el responsable del sistema tiene acceso a los datos.' },
        { icon: 'block', title: 'No represalias', desc: 'Está prohibida cualquier forma de represalia, directa o indirecta, contra las personas que informen de buena fe. La empresa protege activamente al informante.' },
        { icon: 'balance', title: 'Imparcialidad y diligencia', desc: 'Todas las comunicaciones se analizan con imparcialidad. Se acusa recibo en 7 días y se responde en un plazo máximo de 3 meses desde la recepción.' },
      ],
    },
    how: {
      kicker: 'Cómo funciona',
      title: 'De la comunicación a la respuesta',
      steps: [
        { title: 'Envías la comunicación', desc: 'Rellena el formulario con los hechos, fechas y personas implicadas. Puedes hacerlo de forma nominativa o anónima (aportando un identificador para la comunicación posterior).' },
        { title: 'Recibimos y evaluamos', desc: 'El responsable del sistema acusa recibo en un plazo máximo de 7 días naturales y analiza la información de manera independiente e imparcial.' },
        { title: 'Se investiga y responde', desc: 'Se abren las diligencias necesarias, se solicitan aclaraciones si procede y se comunica el resultado en un plazo máximo de 3 meses desde la recepción de la comunicación.' },
      ],
    },
    legal: {
      kicker: 'Marco legal',
      body: 'Este canal cumple con la Ley 2/2023 de 20 de febrero, reguladora de la protección de las personas que informen sobre infracciones normativas y de lucha contra la corrupción, y con la Directiva (UE) 2019/1937 del Parlamento Europeo y del Consejo. El tratamiento de los datos personales se realiza conforme al RGPD y a la LOPDGDD, con la finalidad exclusiva de gestionar la comunicación recibida.',
    },
    cta: {
      title: '¿Quieres reportar una irregularidad?',
      lead: 'Rellenar el formulario te llevará unos minutos. Aporta todos los datos que consideres relevantes; cuanta más información, más rigurosa será la investigación.',
      button: 'Abrir el formulario',
      fallback: 'Si tienes problemas con el formulario, puedes contactar con nosotros en',
    },
  },

  ca: {
    meta: {
      title: 'Canal de denúncies · Motorflash',
      description:
        'Canal ètic de Motorflash Ibérica de Negocios, S.L. Reporta de manera confidencial qualsevol irregularitat, incompliment o vulneració del codi ètic. Sense represàlies.',
    },
    hero: {
      eyebrow: 'Ètica empresarial · Compliment',
      title1: 'Canal de',
      titleAccent: 'denúncies',
      lead: "Un canal confidencial i permanent per reportar qualsevol fet o conducta que pugui suposar una irregularitat, incompliment normatiu o vulneració del nostre codi ètic. Disponible per a empleats, col·laboradors, proveïdors, clients i qualsevol tercer relacionat amb Motorflash.",
      ctaPrimary: 'Obrir el formulari',
      ctaSecondary: 'Com funciona',
    },
    who: {
      kicker: 'A qui va dirigit',
      title: 'Qualsevol persona amb vincle amb Motorflash',
      lead: "Empleats, exempleats, persones en procés de selecció, proveïdors, contractistes, clients o qualsevol tercer amb relació laboral o professional amb Motorflash Ibérica de Negocios, S.L.",
      items: [
        'Empleats actuals o antics i persones en procés de selecció',
        'Persones la relació laboral de les quals hagi acabat o no hagi començat encara',
        'Treballadors/es per compte propi i accionistes',
        "Membres de l'òrgan d'administració, direcció i supervisió",
        'Persones vinculades a contractistes, subcontractistes i proveïdors',
        "Tercers que facilitin informació sobre una possible infracció",
      ],
    },
    what: {
      kicker: 'Què es pot reportar',
      title: 'Matèries cobertes pel canal',
      lead: "Pots reportar qualsevol fet o conducta que pugui constituir un incompliment de la normativa aplicable o del nostre codi ètic.",
      cards: [
        { icon: 'gavel', title: 'Incompliment normatiu', desc: "Infraccions del Dret de la Unió Europea o infraccions penals o administratives greus o molt greus de l'ordenament jurídic espanyol." },
        { icon: 'shield_person', title: 'Codi ètic i conducta', desc: "Vulneració del nostre codi ètic: assetjament, discriminació, ús indegut de recursos, conflicte d'interessos o qualsevol altra irregularitat interna." },
        { icon: 'account_balance', title: 'Frau o corrupció', desc: "Frau financer, suborns, blanqueig de capitals, pràctiques contràries a la lliure competència o qualsevol altra forma de corrupció." },
        { icon: 'security', title: 'Protecció de dades', desc: "Tractament inadequat de dades personals, bretxes de seguretat no comunicades o vulneració del RGPD i la LOPDGDD." },
        { icon: 'health_and_safety', title: 'Salut, seguretat i medi ambient', desc: "Incompliments en matèria de prevenció de riscos laborals, seguretat de productes, salut pública o protecció del medi ambient." },
        { icon: 'work', title: 'Drets laborals', desc: "Vulneració de drets laborals fonamentals, condicions de treball, igualtat de tracte o qualsevol forma de discriminació." },
      ],
    },
    guarantees: {
      kicker: 'El nostre compromís',
      title: 'Garanties del canal',
      cards: [
        { icon: 'lock', title: 'Confidencialitat', desc: "La identitat de l'informant i de qualsevol tercer esmentat a la comunicació queda protegida. Només el responsable del sistema té accés a les dades." },
        { icon: 'block', title: 'Sense represàlies', desc: "Està prohibida qualsevol forma de represàlia, directa o indirecta, contra les persones que informin de bona fe. L'empresa protegeix activament l'informant." },
        { icon: 'balance', title: 'Imparcialitat i diligència', desc: "Totes les comunicacions s'analitzen amb imparcialitat. S'acusa recepció en 7 dies i es respon en un termini màxim de 3 mesos des de la recepció." },
      ],
    },
    how: {
      kicker: 'Com funciona',
      title: 'De la comunicació a la resposta',
      steps: [
        { title: 'Envies la comunicació', desc: "Emplena el formulari amb els fets, dates i persones implicades. Pots fer-ho de manera nominativa o anònima (aportant un identificador per a la comunicació posterior)." },
        { title: 'Rebem i avaluem', desc: 'El responsable del sistema acusa recepció en un termini màxim de 7 dies naturals i analitza la informació de manera independent i imparcial.' },
        { title: "S'investiga i es respon", desc: "S'obren les diligències necessàries, es demanen aclariments si escau i es comunica el resultat en un termini màxim de 3 mesos des de la recepció de la comunicació." },
      ],
    },
    legal: {
      kicker: 'Marc legal',
      body: "Aquest canal compleix amb la Llei 2/2023 de 20 de febrer, reguladora de la protecció de les persones que informin sobre infraccions normatives i de lluita contra la corrupció, i amb la Directiva (UE) 2019/1937 del Parlament Europeu i del Consell. El tractament de les dades personals es fa conforme al RGPD i a la LOPDGDD, amb la finalitat exclusiva de gestionar la comunicació rebuda.",
    },
    cta: {
      title: 'Vols reportar una irregularitat?',
      lead: "Emplenar el formulari et portarà uns minuts. Aporta totes les dades que consideris rellevants; com més informació, més rigorosa serà la investigació.",
      button: 'Obrir el formulari',
      fallback: 'Si tens problemes amb el formulari, pots contactar amb nosaltres a',
    },
  },

  en: {
    meta: {
      title: 'Whistleblowing channel · Motorflash',
      description:
        "Motorflash Ibérica de Negocios, S.L.'s ethics channel. Report confidentially any irregularity, non-compliance or breach of the code of ethics. No retaliation.",
    },
    hero: {
      eyebrow: 'Business ethics · Compliance',
      title1: 'Whistleblowing',
      titleAccent: 'channel',
      lead: 'A confidential, permanent channel to report any fact or conduct that may constitute an irregularity, regulatory breach or violation of our code of ethics. Available to employees, collaborators, suppliers, customers and any third party related to Motorflash.',
      ctaPrimary: 'Open the form',
      ctaSecondary: 'How it works',
    },
    who: {
      kicker: 'Who it is for',
      title: 'Anyone connected to Motorflash',
      lead: 'Employees, former employees, applicants in a selection process, suppliers, contractors, customers or any third party with a labour or professional relationship with Motorflash Ibérica de Negocios, S.L.',
      items: [
        'Current or former employees and candidates in a selection process',
        'People whose employment has ended or has not yet started',
        'Self-employed workers and shareholders',
        'Members of the administrative, management and supervisory bodies',
        'People related to contractors, subcontractors and suppliers',
        'Third parties who provide information about a possible breach',
      ],
    },
    what: {
      kicker: 'What can be reported',
      title: 'Matters covered by the channel',
      lead: 'You can report any fact or conduct that may constitute a breach of applicable regulations or of our code of ethics.',
      cards: [
        { icon: 'gavel', title: 'Regulatory non-compliance', desc: 'Breaches of European Union law or serious or very serious criminal or administrative breaches of the Spanish legal system.' },
        { icon: 'shield_person', title: 'Code of ethics and conduct', desc: 'Violation of our code of ethics: harassment, discrimination, misuse of resources, conflict of interest or any other internal irregularity.' },
        { icon: 'account_balance', title: 'Fraud or corruption', desc: 'Financial fraud, bribery, money laundering, anti-competitive practices or any other form of corruption.' },
        { icon: 'security', title: 'Data protection', desc: 'Improper handling of personal data, unreported security breaches or violations of the GDPR and the Spanish LOPDGDD.' },
        { icon: 'health_and_safety', title: 'Health, safety and environment', desc: 'Non-compliance in occupational risk prevention, product safety, public health or environmental protection.' },
        { icon: 'work', title: 'Labour rights', desc: 'Violation of fundamental labour rights, working conditions, equal treatment or any form of discrimination.' },
      ],
    },
    guarantees: {
      kicker: 'Our commitment',
      title: 'Channel guarantees',
      cards: [
        { icon: 'lock', title: 'Confidentiality', desc: "The identity of the whistleblower and of any third party mentioned in the report is protected. Only the system officer has access to the data." },
        { icon: 'block', title: 'No retaliation', desc: 'Any form of retaliation, direct or indirect, against people reporting in good faith is prohibited. The company actively protects the whistleblower.' },
        { icon: 'balance', title: 'Impartiality and diligence', desc: 'All reports are analysed impartially. Receipt is acknowledged within 7 days and a response is provided within a maximum of 3 months from receipt.' },
      ],
    },
    how: {
      kicker: 'How it works',
      title: 'From report to response',
      steps: [
        { title: 'You submit the report', desc: 'Fill in the form with the facts, dates and people involved. You can do so under your name or anonymously (providing a reference for later communication).' },
        { title: 'We receive and assess it', desc: 'The system officer acknowledges receipt within a maximum of 7 calendar days and analyses the information independently and impartially.' },
        { title: 'It is investigated and answered', desc: 'The necessary enquiries are opened, clarifications are requested if applicable, and the outcome is communicated within a maximum of 3 months from receipt.' },
      ],
    },
    legal: {
      kicker: 'Legal framework',
      body: 'This channel complies with Spanish Law 2/2023 of 20 February, regulating the protection of persons who report regulatory infringements and the fight against corruption, and with Directive (EU) 2019/1937 of the European Parliament and of the Council. Personal data is processed in accordance with the GDPR and the LOPDGDD, exclusively to manage the received report.',
    },
    cta: {
      title: 'Do you want to report an irregularity?',
      lead: "Filling in the form will take a few minutes. Provide all the data you consider relevant; the more information, the more rigorous the investigation.",
      button: 'Open the form',
      fallback: "If you have issues with the form, you can contact us at",
    },
  },

  zh: {
    meta: {
      title: '举报渠道 · Motorflash',
      description: 'Motorflash Ibérica de Negocios, S.L. 的道德渠道。以保密方式报告任何违规、不合规或违反道德准则的行为。不会遭到报复。',
    },
    hero: {
      eyebrow: '商业道德 · 合规',
      title1: '举报',
      titleAccent: '渠道',
      lead: '一个保密且长期开放的渠道,用于举报任何可能构成违规、法规违反或违反我们道德准则的事实或行为。适用于员工、合作方、供应商、客户以及与 Motorflash 有关的任何第三方。',
      ctaPrimary: '打开表单',
      ctaSecondary: '如何运作',
    },
    who: {
      kicker: '面向对象',
      title: '与 Motorflash 有关的任何人',
      lead: '员工、前员工、正在应聘的人员、供应商、承包商、客户或与 Motorflash Ibérica de Negocios, S.L. 有劳动或职业关系的任何第三方。',
      items: [
        '在职或曾任员工,以及正在应聘的人员',
        '劳动关系已结束或尚未开始的人员',
        '自雇工作者与股东',
        '管理、领导与监督机构的成员',
        '与承包商、分包商及供应商相关的人员',
        '提供可能违规信息的第三方',
      ],
    },
    what: {
      kicker: '可报告的内容',
      title: '渠道覆盖的事项',
      lead: '您可以报告任何可能构成违反适用法规或违反我们道德准则的事实或行为。',
      cards: [
        { icon: 'gavel', title: '法规违反', desc: '违反欧盟法律,或西班牙法律体系中严重或非常严重的刑事或行政违规。' },
        { icon: 'shield_person', title: '道德与行为准则', desc: '违反我们的道德准则:骚扰、歧视、资源滥用、利益冲突或任何其他内部违规。' },
        { icon: 'account_balance', title: '欺诈或腐败', desc: '财务欺诈、贿赂、洗钱、反竞争行为或任何其他形式的腐败。' },
        { icon: 'security', title: '数据保护', desc: '个人数据处理不当、未报告的安全事件,或违反 GDPR 与西班牙 LOPDGDD 的规定。' },
        { icon: 'health_and_safety', title: '健康、安全与环境', desc: '在职业风险预防、产品安全、公共卫生或环境保护方面的违规。' },
        { icon: 'work', title: '劳工权益', desc: '违反基本劳工权益、工作条件、平等对待或任何形式的歧视。' },
      ],
    },
    guarantees: {
      kicker: '我们的承诺',
      title: '渠道保障',
      cards: [
        { icon: 'lock', title: '保密', desc: '举报人及其在报告中提到的任何第三方的身份均受到保护。只有系统负责人可访问数据。' },
        { icon: 'block', title: '禁止报复', desc: '禁止对善意举报者进行任何形式的直接或间接报复。公司会主动保护举报人。' },
        { icon: 'balance', title: '公正与尽职', desc: '所有报告均以公正的方式进行分析。在 7 天内予以确认,并在自收到之日起最多 3 个月内给予回复。' },
      ],
    },
    how: {
      kicker: '运作方式',
      title: '从报告到回复',
      steps: [
        { title: '您提交报告', desc: '在表单中填写事实、日期和涉及人员。您可以具名或匿名提交(提供一个用于后续沟通的标识符)。' },
        { title: '我们接收并评估', desc: '系统负责人在最多 7 个自然日内确认收到,并以独立、公正的方式分析信息。' },
        { title: '进行调查并回复', desc: '启动必要的调查程序,如需要则请求补充说明,并在自收到报告之日起最多 3 个月内告知结果。' },
      ],
    },
    legal: {
      kicker: '法律框架',
      body: '本渠道符合 2023 年 2 月 20 日西班牙第 2/2023 号法律(关于保护举报法规违规和反腐败的相关人员)以及欧洲议会和理事会指令 (EU) 2019/1937 的规定。个人数据的处理依据 GDPR 与 LOPDGDD 进行,唯一目的是处理所收到的报告。',
    },
    cta: {
      title: '想报告一项违规吗?',
      lead: '填写表单只需几分钟。请提供您认为相关的所有信息;信息越充分,调查越严谨。',
      button: '打开表单',
      fallback: '如果表单出现问题,您可以通过以下方式联系我们:',
    },
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = ((await getLocale()) as Locale) || 'es'
  const t = (COPY[locale] ?? COPY.es).meta
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: '/canal-denuncias' },
  }
}

export default async function CanalDenunciasPage() {
  const locale = ((await getLocale()) as Locale) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-20 md:py-24">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255,128,0,0.08), transparent 55%)' }} />
        <div className="mf-container max-w-4xl">
          <span className="inline-flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>shield</span>
            {t.hero.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5">
            {t.hero.title1} <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-3xl">{t.hero.lead}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 hover:gap-3 transition-all shadow-lg shadow-primary/30"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 border border-outline text-on-surface px-6 py-3 rounded-full text-sm font-bold hover:bg-surface-container transition-colors"
            >
              {t.hero.ctaSecondary}
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quién puede usarlo */}
      <section className="bg-surface-container-low border-y border-outline-variant py-20">
        <div className="mf-container max-w-4xl">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>groups</span>
            {t.who.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.who.title}</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">{t.who.lead}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {t.who.items.map((item) => (
              <li key={item} className="flex gap-3 items-start p-4 rounded-2xl border border-outline-variant bg-white">
                <span className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5" style={{ fontSize: 20 }}>check_circle</span>
                <span className="text-sm text-on-surface leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Qué se puede reportar */}
      <section className="bg-white py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>report</span>
            {t.what.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.what.title}</h2>
          <p className="text-on-surface-variant max-w-3xl mb-10 leading-relaxed">{t.what.lead}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.what.cards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantías */}
      <section className="bg-surface-container-low border-y border-outline-variant py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>verified_user</span>
            {t.guarantees.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-10">{t.guarantees.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.guarantees.cards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="bg-white py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>flowchart</span>
            {t.how.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-10">{t.how.title}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.how.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-outline-variant bg-white p-6 relative">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Marco legal */}
      <section className="bg-surface-container-low border-y border-outline-variant py-16">
        <div className="mf-container max-w-3xl">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>gavel</span>
            {t.legal.kicker}
          </span>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mt-4">{t.legal.body}</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-20 md:py-24">
        <div className="mf-container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">{t.cta.title}</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">{t.cta.lead}</p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary/40"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>open_in_new</span>
            {t.cta.button}
          </a>
          <p className="text-xs text-on-surface-variant mt-6">
            {t.cta.fallback} <Link href="/contacto" className="text-primary underline hover:no-underline">/contacto</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
