/**
 * 产品详情内容 — 简体中文翻译。
 * 与 product-content.es.ts 对应;如某产品无翻译,则回退至西班牙语。
 */
import type { ProductContent } from './product-content'

export const productContent: Record<string, ProductContent> = {
  'portal-publicacion': {
    subtitle: 'Motorflash 集团自有的二手车发布门户',
    sections: [
      {
        type: 'features',
        title: '一次发布,同步上线全部门户',
        lead: '告别逐个门户上传车辆。使用 Clasificados,发布一次,您的库存就会自动出现在所有门户网站上。',
        items: [
          { title: '自动多门户发布', description: '一键将车辆发布到 Coches.net、Milanuncios、Wallapop、AutoScout24 等主流门户。库存始终同步。', icon: 'rocket_launch' },
          { title: '优化的车辆详情页', description: '完整配置(JATO/Eurotax)、照片、价格、融资和自动生成的描述,最大化转化率。', icon: 'description' },
          { title: '智能价格管理', description: '实时市场价格对比。当价格高于或低于市场时立即提醒,帮助您快速决策。', icon: 'sell' },
          { title: '门户数据分析', description: '按车辆和门户分析访问量、潜在客户和转化率。识别表现最佳的渠道,优化广告投入。', icon: 'analytics' },
          { title: '潜在客户集中管理', description: '来自所有门户的潜在客户都汇集到同一处,并与 CRM 同步。零信息丢失。', icon: 'inbox' },
          { title: '网站与 CRM 原生集成', description: '与 CRM4YOU 和您的 Motorflash 网站原生连接。封闭生态,无需重复录入数据。', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: '更高曝光、更少工作量、更强掌控',
        lead: '门户的手工发布每天消耗 2 到 4 小时。使用 Clasificados,这段时间缩短为几分钟,同时车辆详情质量大幅提升。',
        highlights: [
          { title: '自动发布', description: '一次发布,同步全部门户' },
          { title: '价格智能分析', description: '实时市场对比' },
          { title: '每月 40,000 辆', description: '汽车行业最大体量' },
          { title: '潜在客户集中', description: '所有门户共用一个收件箱' },
        ],
        bullets: [
          '已集成门户:Coches.net、Milanuncios、Wallapop、AutoScout24、Autocasion 等。',
          '增强的照片:内置编辑工具,去除背景并提升车辆视觉吸引力。',
          '凭借发布量,与主流门户洽谈了批量折扣。',
          '价格偏离市场的车辆提醒,助您快速反应。',
          '自动轮换精选展示,最大化曝光。',
        ],
      },
      {
        type: 'process',
        title: 'Clasificados 如何运作?',
        steps: [
          { title: '连接您的库存', description: '我们对接您的 DMS、ERP 或 CRM,自动导入库存。设置发布规则和目标门户。' },
          { title: '自动发布', description: '车辆以优化后的详情页发布到所选门户。下架和修改实时同步。' },
          { title: '潜在客户管理与报告', description: '所有潜在客户汇集到同一处。每周报告涵盖各门户表现、按车辆数据和市场价格对比。' },
        ],
      },
      {
        type: 'cta',
        title: '想轻松将库存发布到所有门户吗?',
        lead: '申请演示,我们向您展示 Clasificados 如何每周为您节省数小时工作并提升在线曝光。',
      },
    ],
  },
  'crm4you': {
    subtitle: '流畅地管理销售活动,信息完整、流程精简',
    sections: [
      {
        type: 'features',
        title: '为经销商集团而生的 CRM',
        lead: '业界唯一专为集中管理多个门店、品牌和经销商而设计的 CRM。借助内置 AI,在集团层面优化销售流程。',
        items: [
          { title: '潜在客户集中管理', description: '来自网站、门户、社交广告和电话的所有潜在客户汇集到一处。绝不再因渠道失监而漏掉任何客户。', icon: 'inbox' },
          { title: '可视化销售管道', description: '为销售流程量身打造的看板:新客户 → 已联系 → 到店 → 试驾 → 报价 → 交付。每个阶段都有指标。', icon: 'view_kanban' },
          { title: '自动跟进', description: '每个阶段都有自动化邮件和短信序列。当顾问忙碌时,CRM 替您跟进。', icon: 'autorenew' },
          { title: '集成日程', description: '销售约见和试驾日程在 CRM 内统一管理。同步 Google 日历并自动通知客户。', icon: 'calendar_month' },
          { title: '管理层报告', description: '管理仪表板呈现每位顾问的业绩、按渠道的转化率、平均成交时间和当月销售预测。', icon: 'analytics' },
          { title: '原生集成', description: '与您的 Web、Clasificados、Contact Center、WhatsApp Business 以及主流车辆门户原生互通。封闭生态,数据零泄漏。', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: '兼顾顾问与管理层的 CRM',
        lead: 'CRM4YOU 有两面:面向销售顾问的操作面和面向商务总监或店总的分析面。',
        highlights: [
          { title: '看板销售管道', description: '可视化、专为汽车行业打造' },
          { title: '自动化跟进', description: '按阶段自动发送邮件和短信' },
          { title: '按顾问管理', description: '个人业绩可衡量' },
          { title: '一体化生态', description: 'Web、门户、WhatsApp 与 Contact Center' },
        ],
        bullets: [
          '顾问视图:待办任务、自动提醒、每个潜在客户的完整历史和通讯模板。',
          '管理层视图:每位顾问的业绩、按潜在客户来源的转化率、平均成交时间和销售预测。',
          '随时随地、跨设备管理的移动应用。',
          '从您原有的 DMS 或 CRM 导入数据,不丢失历史记录。',
          '可按经销店或集团配置角色与权限。',
        ],
      },
      {
        type: 'process',
        title: '我们如何启用 CRM4YOU?',
        steps: [
          { title: '定制化配置', description: '我们根据您具体的销售流程定制管道、字段和自动化流程。不是您去适应 CRM,而是 CRM 适应您。' },
          { title: '迁移与集成', description: '5–7 个工作日内导入您的现有数据并连接所有潜在客户来源:网站、门户、社交广告和 Contact Center。' },
          { title: '培训与启用', description: '为全员提供线下或远程培训。前 30 天专属支持,确保系统正确落地。' },
        ],
      },
      {
        type: 'cta',
        title: '想用您的真实数据体验 CRM4YOU 吗?',
        lead: '申请定制演示,我们在 30 分钟内向您展示量身定制的 CRM4YOU。',
      },
    ],
  },
  'contact-center': {
    subtitle: '在与 CRM 互联的统一平台上,管理电话、聊天与消息',
    sections: [
      {
        type: 'features',
        title: '全面掌控,带来转化的服务',
        lead: '在统一环境中处理电话、聊天和消息。语音 AI 实时接听并筛选潜在客户,Quality Monitoring 系统则自动分析并评分每一段对话。',
        items: [
          { title: '呼入与呼出电话', description: '我们接听呼入电话,并执行呼出活动,在 5 分钟内联系并筛选您的每位潜在客户。', icon: 'support_agent' },
          { title: '潜在客户筛选', description: '专注汽车行业的专业坐席判断兴趣程度、意向车型、购买时间和预算。', icon: 'verified' },
          { title: '日程管理', description: '我们直接将到店和试驾安排到顾问的日程中。销售人员收到的潜在客户已带有确认预约。', icon: 'calendar_month' },
          { title: '邮件与短信活动', description: '多渠道沟通序列辅助电话工作:跟进邮件、提醒短信和预约确认。', icon: 'chat' },
          { title: '实时报告', description: '仪表板呈现每个活动的表现、接触率、到店转化率和成交率。用真实数据做决策。', icon: 'analytics' },
          { title: '汽车专业团队', description: '专为汽车行业培训的坐席。他们清楚要对客户说什么,以及如何正确筛选每位潜在客户。', icon: 'group' },
        ],
      },
      {
        type: 'highlights',
        title: '及时跟进的潜在客户,转化率成倍增长',
        lead: '响应时间是汽车潜在客户转化中最关键的因素。5 分钟内联系的客户转化率高达 9 倍。',
        highlights: [
          { title: '< 5 分钟联系', description: '行业最佳响应时间' },
          { title: '已筛选并带预约', description: '顾问只接待已确认的到店' },
          { title: '每月 70,000 通电话', description: '汽车行业可证明的规模' },
          { title: '专业坐席', description: '熟悉汽车行业' },
        ],
        bullets: [
          '5 分钟内联系:在潜在客户来得及联系竞争对手之前,我们就主动拨通电话。',
          '可控的持续联络:每位潜在客户最多 6 次尝试,间隔经过优化以最大化接通率。',
          '无摩擦扩展:无需扩编即可吸收潜在客户高峰。按管理客户量付费。',
          '所有通话录音,用于质量控制和培训。',
          '与您的 CRM 直接集成,无需重复录入数据。',
        ],
      },
      {
        type: 'process',
        title: '我们如何与您协作?',
        steps: [
          { title: '服务配置', description: '我们与您共同定义通话脚本、筛选标准,以及与您的 CRM 和顾问日程的集成方式。' },
          { title: '启用并管理潜在客户', description: '一旦有潜在客户到达,我们的团队在 5 分钟内联系,并按需多次尝试直至建立联系。' },
          { title: '交付与跟进', description: '已筛选并带预约的潜在客户进入您的 CRM。每周报告呈现成果和您经销店的转化指标。' },
        ],
      },
      {
        type: 'cta',
        title: '不希望任何潜在客户被遗漏吗?',
        lead: '申请定制方案,我们说明 Contact Center 如何从第一个月起就提升您的转化率。',
      },
    ],
  },
  'spyne': {
    subtitle: '面向您的汽车目录的 AI 解决方案 — 原 Carlens',
    sections: [
      {
        type: 'highlights',
        title: '95% 的经销商在线发布,40% 的买家在未踏入展厅前就做出决定',
        lead: '照片就是您的销售力。传统方式拍好照片耗时、耗钱并需要专业摄影师。Photocall AI 一举去除这三大障碍:经销店任何员工都能在停车场拍出专业级的照片和视频。',
        highlights: [
          { title: '95%', description: '经销商在线发布库存' },
          { title: '40%', description: '买家在做决定前未亲自看车' },
          { title: '4.2 个网站', description: '买家选车前会浏览的网站数量' },
          { title: '+150', description: '识别与变换相关的 AI 功能数量' },
        ],
        bullets: [
          '成本:省去专业摄影师、影棚和器材。',
          '技能:屏幕指引和 AI 替您完成技术细节。',
          '时间:拍照、自动处理,即时发布至各渠道。',
        ],
      },
      {
        type: 'features',
        title: '能带来转化的图片和视频',
        lead: '云端 AI + 移动应用。经销店任意销售拍照,AI 负责其余:专业背景、反光、光线、车牌、角度……全部自动完成,每辆车结果一致。',
        items: [
          { title: '自动替换背景', description: 'AI 识别车辆并替换背景为专业图像、虚拟影棚或带您 Logo 的经销店专属背景。', icon: 'wallpaper' },
          { title: '生成转盘平台', description: '自动在车下方生成平台/地面,即便在停车场拍摄,也呈现影棚效果。', icon: 'view_in_ar' },
          { title: '互动式 360° 旋转视频', description: '展示车辆全方位视频。买家可用手机旋转车辆 — 详情页停留更久,转化更高。', icon: 'rotate_90_degrees_ccw' },
          { title: '反光与阴影修正', description: '识别并去除车身和玻璃上的反光,调整阴影与光线,使每张照片如同手工精修。', icon: 'auto_fix_high' },
          { title: '智能车牌遮盖', description: '用干净的车牌替换、隐藏或用经销店 Logo 覆盖。无需手动处理即合规 GDPR。', icon: 'directions_car' },
          { title: '玻璃遮罩与内部视野', description: '统一遮盖车窗,或遮挡透过窗户可见的人、车、墙体 — 焦点始终在车辆上。', icon: 'blur_on' },
          { title: '倾斜与角度修正', description: '自动检测并修正车辆倾斜与透视,让目录中的所有照片框景一致。', icon: 'straighten' },
          { title: '+50 项 AI 自动检测', description: '识别反光、曝光、模糊、裁切、位置角度、距离、车型、色调、轮胎与车轮泥渍 — 持续的质量审查。', icon: 'auto_awesome' },
          { title: '嵌入经销店 Logo', description: '将您的品牌融入背景与车牌,毫无修饰痕迹。所有门户的目录始终一致。', icon: 'verified' },
          { title: '内饰照片增强', description: '修正内饰倾斜、遮挡透过车窗可见的外景并改善车内光线。', icon: 'airline_seat_recline_normal' },
          { title: '分辨率与对焦增强', description: '提升旧照片或低分辨率图像的清晰度。对历史目录进行自动审查。', icon: 'high_quality' },
          { title: '按门户调整尺寸', description: '自动生成各门户所需的全部尺寸变体(Coches.net、AutoScout24、社交、您的网站……)。', icon: 'aspect_ratio' },
        ],
      },
      {
        type: 'highlights',
        title: '将 Photocall AI 接入经销店的 5 种方式',
        lead: '选择最契合您流程的渠道。多种方式可并行:有人用 App 拍照,系统同时通过 API 从 DMS 拉取照片。',
        highlights: [
          { title: 'iOS / Android 应用', description: '任何人都能拍,无需培训' },
          { title: 'Carlens360 控制台', description: '通过 Web 管理所有照片和项目' },
          { title: 'API 与 DMS 集成', description: '自动上传整个库存' },
          { title: 'SDK', description: '将拍照流程嵌入您的应用' },
        ],
        bullets: [
          'Carlens App:iOS 与 Android 上简单易用,逐角度逐步引导拍摄。',
          'Carlens360 控制台:通过 Web 访问所有照片、项目和 AI 配置。',
          'API:无需人工干预即可从您的 DMS 更新整个库存。',
          'SDK:在经销店或制造商的应用中嵌入采集流程。',
          'DMS 集成:接入您现有的工作流 — 经销店 → 网站服务商 → 门户。',
        ],
      },
      {
        type: 'process',
        title: '从拍照到发布,只需几分钟',
        steps: [
          { title: '使用 App 拍照', description: '销售打开 Carlens App,扫描车辆并按屏幕指引拍摄各角度。无需影棚、三脚架或摄影师。' },
          { title: 'AI 自动处理', description: '图像上传至云端。AI 应用配置好的 100+ 项变换(背景、反光、车牌、Logo、360° 视频),并通过 50+ 项自动检测进行质量审查。' },
          { title: '同步发布', description: '车辆、最终照片和 360° 视频发布到您的网站、Coches.net、AutoScout24 和 DMS。无返工、各渠道一致。' },
        ],
      },
      {
        type: 'cta',
        title: '想看看用 AI 转换后的目录吗?',
        lead: '我们为您演示真实库存照片的实时处理。建置费 150 € 起,每画廊(最多 40 张照片)4 € 起(含 Spin 360° 为 5.50 €)。',
      },
    ],
  },
  'motorflash-message': {
    subtitle: '面向汽车行业的 WhatsApp · AI 优先 · 20 €/用户/月起 · 4 周试点',
    sections: [
      {
        type: 'highlights',
        title: '潜在客户的价值,分秒间流失',
        lead: '约 75% 的买家会从第一个回应的经销商处购车 — 速度是最大的转化杠杆。MF Message 是唯一专为汽车行业打造的 WhatsApp 平台:仪表板、共存模式、对话式 AI 和集团级路由。',
        highlights: [
          { title: '60%', description: '1 分钟内响应可获得的转化率' },
          { title: '65%', description: '24 小时内未获回复的表单潜在客户比例' },
          { title: '25-42%', description: '电话潜在客户未被有效处理的比例' },
          { title: '20 € 起', description: '每用户/月 — 比 CX 企业版便宜 6-8 倍' },
        ],
        bullets: [
          '潜在客户在被分配后 30 分钟即丧失大部分有效性。',
          '主流垂直门户将 WhatsApp 作为网页聊天上线:基础机器人,不能转人工,无分析、无成交追踪。',
          'MF Message 填补这一空白:真正的企业级 WhatsApp,具备 AI、共存模式与跨数百家经销商的路由能力。',
          'AI 优先、多坐席平台,从第 1 天起即可在仪表板与 SLA 上掌控全局。',
        ],
      },
      {
        type: 'features',
        title: 'MF Message 的 5 大要点',
        lead: 'WhatsApp Business 无法提供的,而企业级 CX 平台也未针对汽车行业进行适配的能力。',
        items: [
          { title: '仪表板与数据分析', description: '实时 KPI(总对话数、转接、按时接待、丢失)、按渠道/组/时段的等待时间与 SLA、按团队和坐席的活动、对话状态与自定义标签、Excel 导出。', icon: 'analytics' },
          { title: '共存 · 零障碍', description: '无 Meta 模板、无 24 小时窗口:团队可用自然语言自由编写。连接销售已在使用的 WhatsApp Business 线路,后台自动同步到面板和 CRM。', icon: 'sync' },
          { title: '两种不同架构', description: 'A) 一个主号码 → 多业务:按品牌、地理、车型或活动路由(Das WeltAuto 案例:200+ 经销商共用一个号码)。B) 多业务 → 多线路:适合将平台转售给经销商的门户。', icon: 'account_tree' },
          { title: '上线运行的对话式 AI', description: '一线应答:筛选潜在客户、预约到店、24/7 优化对话,只在需要判断时转人工。多语种、具备意图/实体/情感的 NLP,工具内可编辑提示词。', icon: 'smart_toy' },
          { title: 'API · 串联四方的连接器', description: '一个双向中枢连接客户(WhatsApp、门户潜在客户、网页 CTA)、坐席工作台、销售与您的 CRM。端到端 GDPR 合规、实时传输。', icon: 'hub' },
          { title: '面向汽车行业的平台', description: '为汽车成交而生:与 CRM 同步的客户状态(对话中 → 购买中 → 融资 → 售后)、可直接用于经销商的模板与路由。', icon: 'verified' },
        ],
      },
      {
        type: 'highlights',
        title: '共存模式:零障碍、零阻塞',
        lead: '将 MF Message 与销售手机上已使用的 WhatsApp Business 应用(企业线)对接。每段对话后台流入面板与 CRM,销售无需安装任何东西。基于团队已在使用的账号,而非通用网页聊天。',
        highlights: [
          { title: '无 Meta 模板', description: '自由的自然语言文本 · 零事前限制' },
          { title: '无 24 小时窗口', description: '对话永不关闭 · 随时回复' },
          { title: '无模板费用', description: '复用您已有的 Business 线路' },
          { title: '完整 CRM 追溯', description: '每条消息同步 · 集中审核面板' },
        ],
        bullets: [
          '连接 → 同步 → 像往常一样工作:销售继续原生方式沟通。',
          '兼容企业线路(在西班牙,私号用于工作是被禁止的)。',
          '使用手机中已有的联系人,无需迁移。',
          '中央面板,按坐席、组与时段呈现 KPI 与 SLA。',
        ],
      },
      {
        type: 'features',
        title: '上线运行的 AI — 您不知疲倦的第一位坐席',
        lead: 'MF Message AI 从头到尾处理入站对话,只在需要人工判断时升级。今天已在真实账户中运行,可应需求提供按客户的指标。',
        items: [
          { title: '24/7 即时响应', description: '首响应不到一秒。无论夜晚或周末,客户都不需等待。', icon: 'bolt' },
          { title: '多语种 NLP', description: '从集团对话历史中抽取意图、实体与情感。多语种自然对话。', icon: 'translate' },
          { title: '自动潜客筛选', description: '车型、预算、地理与意向自动抽取并送入 CRM。AI 预约到店和试驾。', icon: 'fact_check' },
          { title: '流畅的人工接手', description: '机会成熟时,AI 携全部上下文将客户转交销售。无重复、无信息丢失。', icon: 'forward_to_inbox' },
          { title: '检索整个数据库', description: '查询您的全部库存,为客户提供最完整的信息。每次查询匿名执行,符合 GDPR。', icon: 'search' },
          { title: '可编辑提示词 + 反馈循环', description: '工具内通过行为模块调优 AI 行为。对回答进行点评以纠错和训练:持续改进。', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: '真实案例 · Das WeltAuto',
        lead: '大众集团在西班牙的认证二手车业务全部通过 MF Message 运营 WhatsApp:面向全国的唯一入口与自动路由到对应经销商。',
        highlights: [
          { title: '200+', description: '共用同一主号码的经销商' },
          { title: '1', description: '面向全西班牙客户的对外号码' },
          { title: '5', description: '路由的业务单元(销售、服务、配件、行政、售后)' },
          { title: '288', description: '具备集团级面板的经销商' },
        ],
        bullets: [
          '每条 WhatsApp 咨询自动路由到正确的经销商与业务单元。',
          '总部完全可视化 · 跨 288 家经销商和 5 个业务单元的集团级面板。',
          'CRM 中保留完整对话历史,即使更换经销商:客户数据保留在集团层面。',
          '设计上符合 GDPR · 每次同意都有时间戳 · 每次交互均可审计。',
        ],
      },
      {
        type: 'highlights',
        title: '定价旨在击败市场',
        lead: '透明、模块化,Meta 流量按成本透传。无隐性加价。企业级 CX 平台每用户 132-169 € 起 — MF Message 自 20 € 起。',
        highlights: [
          { title: '20 €/用户/月起', description: '统一许可:WhatsApp Business + 共存。控制台、活动、分析与 GDPR 全部包含。' },
          { title: '竞品 132-169 €', description: 'Zendesk 169 $ · Salesforce 165 $ · Twilio Flex 150 $ · Intercom 132 $ · 在加购组件前已比 MF 贵 6-8 倍。' },
          { title: 'AI · 150 €/月 + 0.08 €/对话', description: '全部包含:LLM、编排与持续改进。一份许可、按对话计费。' },
          { title: 'Meta 流量按成本计', description: '若使用营销模板,出站对话约 0.0509 €/条 · 不加价。' },
        ],
        bullets: [
          '100 / 250 活跃用户起享受批量折扣。',
          '包含企业级 SLA 与专属客户成功管理。',
          '每批新增坐席最高 6.50 €。',
          '入门价为参考 · 最终价格按规模与项目范围定制。',
        ],
      },
      {
        type: 'process',
        title: '从发现会到集团级部署',
        steps: [
          { title: '发现会(60 分钟)', description: '与您的商务运营 + IT 团队进行工作坊,梳理当前的 WhatsApp 现状、经销商响应流程,以及今天潜在客户流失的环节。' },
          { title: '4 周完成试点', description: '连接 3-5 家经销商,端到端验证共存、路由、AI 与 CRM 同步。基于生产环境真实对话测试。' },
          { title: '集团内分阶段部署', description: '按品牌、地区和业务单元分阶段推广,由 Motorflash 共同主导。从第 1 天起进行团队入门并启用指标。' },
        ],
      },
      {
        type: 'cta',
        title: '共建下一步 · 让 WhatsApp 在集团规模上为您的业务服务',
        lead: '与我们预约 60 分钟的发现会。4 周内即可在 3-5 家经销商上线试点,如契合再制定集团部署计划。直接联系:Andrés Tejero · info@motorflash.com · +34 913 728 790。',
      },
    ],
  },
  'ia': {
    subtitle: 'WhatsApp、网页聊天与语音上的 AI — 24/7 可用',
    sections: [
      {
        type: 'features',
        title: '为每个渠道定制的对话式 AI',
        lead: '每个渠道有各自的行为与客户画像。我们的 AI 解决方案专为 WhatsApp、网页和语音设计,在每个触点上最大化转化。',
        items: [
          { title: 'WhatsApp 上的 AI', description: '直接而熟悉的渠道:客户已在用 WhatsApp,无门槛、无需下载。24/7 自由自然的对话,获取潜在客户、解答疑问、发送车辆信息。', icon: 'chat' },
          { title: '封闭流程的网页聊天', description: '嵌入您的网站,在浏览时即捕获用户。适合表单、预约、FAQ 或报价等具体任务。一步步引导客户走向转化。', icon: 'edit_note' },
          { title: '语音 AI', description: '智能语音助手,用于预约、解答简单问题,或完成在聊天中已发起的流程。在非工作时间接听电话,不漏接任何潜在客户。', icon: 'support_agent' },
          { title: '7×24 不间断', description: 'AI 在节假日、夜间和周末持续服务。绝不因非工作时段而漏掉客户。无需扩编即可获取更多销售机会。', icon: 'schedule' },
          { title: '持续的客户关系跟进', description: 'AI 跨多日保持对话连续性。激活沉睡客户、设置提醒,陪伴客户直到成交。', icon: 'autorenew' },
          { title: '与 CRM 及系统集成', description: '每段对话都记录到 CRM4YOU。AI 实时了解您的库存、价格与可售性。', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: '渠道决定了转化',
        lead: '并非所有 AI 渠道触达范围与跟进能力相同。理解差异有助于为您的经销店挑选最高效的组合。',
        highlights: [
          { title: 'WhatsApp 上的 AI', description: '熟悉的渠道 · 到店后跟进' },
          { title: '封闭流程的网页聊天', description: '适合预约、FAQ 和报价' },
          { title: '语音 AI', description: '24/7 用语音处理预约与疑问' },
          { title: '潜在客户进入 CRM', description: '无重复录入,完整历史' },
        ],
        bullets: [
          '触达:WhatsApp 在客户已在的地方触达;网页聊天只在浏览您的网站时有效。',
          '对话:WhatsApp 上的 AI 理解自由提问;网页聊天遵循预设流程。',
          '跟进:WhatsApp 允许数日后再次联系;网页聊天在用户关闭页签后即结束。',
          'WhatsApp 比通用网页聊天更亲近,信任感更强。',
          '网页聊天非常适合结构化流程:预约、报价或 FAQ。',
        ],
      },
      {
        type: 'process',
        title: 'Motorflash 的 AI 如何工作?',
        steps: [
          { title: '配置您的渠道', description: '我们与您确定最适合的 AI 渠道:WhatsApp、网页聊天或语音。配置对话流程并与您的 CRM 集成。' },
          { title: 'AI 接待并筛选', description: 'AI 与客户自然对话、解答疑问、收集联系方式,实时识别每位潜在客户的兴趣程度。' },
          { title: '已筛选潜客交付团队', description: '购买意向最高的潜在客户连同完整对话历史一并交给销售。顾问在最佳时刻入场。' },
        ],
      },
      {
        type: 'cta',
        title: '您的经销店是否在非工作时段流失了客户?',
        lead: '启用对话式 AI,在不增加人手的情况下,开始 24 小时获取并筛选潜在客户。',
      },
    ],
  },
  'soluciones-web': {
    subtitle: '为销售而生,性能出众,完全自主管理',
    sections: [
      {
        type: 'features',
        title: '您的数字门面,一切尽在掌握',
        lead: '在同一面板上管理内容、促销与库存。性能、设计与易用性合力推动您的线上业绩。',
        items: [
          { title: '100% 汽车行业的网站', description: '涵盖经销店所需的一切:库存、潜客、租赁、估值等,呈现流畅且专业的用户体验。', icon: 'language' },
          { title: '面向获客的设计', description: 'UX/UI 旨在将访问转化为联系:智能表单、支付网关与突出报价的定制板块。', icon: 'trending_up' },
          { title: '由 AI 加持的自管理', description: '使用我们带 AI 的 CMS 创建并更新内容、落地页和表单,让管理更顺畅。', icon: 'auto_awesome' },
          { title: '两步即可转化', description: '面向转化的结构,集成智能表单与支付网关。', icon: 'verified' },
          { title: 'SEO 优化', description: '自动结构化数据标记、动态站点地图、A+ 级 Core Web Vitals 与从第一天即 SEO 友好的架构。', icon: 'trending_up' },
          { title: '为行业定制的 CMS', description: '无外部插件。库存、潜客、估值、表单与报告原生集成。', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: '让我们脱颖而出的 10 大优势',
        lead: '我们集成行业最完整的数据库,让您的网站既最具信息量,又最能转化。',
        highlights: [
          { title: 'JATO/Eurotax 数据库', description: '自动获得完整配置' },
          { title: '厂商自动数据流', description: '库存始终最新' },
          { title: '融资计算器', description: '一次性与分期付款集成' },
          { title: '在线估值表单', description: '获取二手车销售潜客' },
        ],
        bullets: [
          '集成 JATO 与 Eurotax 数据库,提供完整车辆配置。',
          '厂商库存自动数据流(Audi、BMW、Mercedes、VW……)。',
          '内置一次性与分期付款计算器。',
          '估值表单与试驾申请。',
          '维修日程与轮胎计算器。',
        ],
      },
      {
        type: 'process',
        title: '如何运作?',
        steps: [
          { title: '免费咨询', description: '分析您当前的网站、竞品,并与您共同定义最适合您业务的项目。' },
          { title: '30 天交付', description: '我们的团队基于自有技术开发您的网站,全程同步进度。' },
          { title: '上线与支持', description: '3 小时 CMS 培训、初始 SEO 配置与上线。提供持续支持。' },
        ],
      },
      {
        type: 'cta',
        title: '准备好刷新您的汽车行业网站了吗?',
        lead: '今天申请免费咨询,我们为您准备一份不带承诺的当前网站审计。',
      },
    ],
  },
  'marketing-digital': {
    subtitle: '提升可见度、连接客户,在线上卖出更多',
    sections: [
      {
        type: 'features',
        title: '聪明的策略,真实的结果',
        lead: 'Motorflash 数字营销团队结合经验与技术,打造可衡量的定制化活动。为汽车行业量身定制的策略,旨在产生影响并提升销量。',
        items: [
          { title: '聚焦汽车行业', description: '我们熟悉汽车市场的需求与特性,为每家经销店或二手车企业打造合适的数字策略。', icon: 'verified' },
          { title: '专注 SEO、SEA 与 Social 的团队', description: '我们设有 SEO 团队、专注 SEA 的团队,以及聚焦 Social Ads 的第三支团队,合力推动您的业务。', icon: 'group' },
          { title: '整体策略与持续优化', description: '我们设计并分析 SEO、SEA 与社交活动,优化每一项动作以最大化业绩并创造更多销售机会。', icon: 'autorenew' },
          { title: '可衡量的业绩', description: '通过清晰的可视化面板查看活动核心数据。评估每一项动作并基于真实数据决策。', icon: 'analytics' },
          { title: '与您并肩工作的团队', description: '我们不只是另一家代理。我们紧贴您的销售团队,根据经销店实际漏斗调整活动。', icon: 'support_agent' },
          { title: '定制化活动', description: '每个动作都贴合您的品牌、库存与销售目标。拒绝通用,只做量身定制。', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: '主动搜索 vs. 被动发现',
        lead: '不同流量价值不同,购买时机也各异。我们的策略将两者结合,兼顾短期与长期。',
        highlights: [
          { title: 'SEO 自然流量', description: '高转化 · 无点击成本' },
          { title: 'SEM Google Ads', description: '聚焦真实潜客成本' },
          { title: 'Meta / TikTok Social Ads', description: '更低成本的前期触达' },
          { title: '实时报告', description: '业务指标,不是虚荣指标' },
        ],
        bullets: [
          'SEO/SEM:正在搜索您品牌或车辆的客户。即时转化。',
          'Social Ads:尚不了解您的潜客。以更低成本中期转化。',
          '完整漏斗追踪:访问 → 潜客 → 通话 → 成交。',
          '每月报告聚焦真实业务指标,而非虚荣数据。',
          '基于数据而非猜测的持续优化。',
        ],
      },
      {
        type: 'process',
        title: '我们如何工作?',
        steps: [
          { title: '免费审计', description: '分析您的网站、当前流量、竞品与改进机会。无费用、无承诺。' },
          { title: '行动计划', description: '设计有可衡量目标、优先渠道与建议预算的定制策略。' },
          { title: '执行与报告', description: '实施、衡量并持续优化。每月提供真实业绩报告。' },
        ],
      },
      {
        type: 'cta',
        title: '您的网站没能产生足够的潜在客户吗?',
        lead: '申请免费审计,我们告诉您问题出在哪以及如何解决。',
      },
    ],
  },
  'dealer': {
    subtitle: '集成 AI 的二手车整体管理',
    sections: [
      {
        type: 'features',
        title: '面向大库存量的智能管理',
        lead: '在专为经销店与集团设计的平台上创建、掌控并发布您的车辆。组织库存、提升广告质量,并基于真实市场数据做出决策。',
        items: [
          { title: '统一的 JATO + EUROTAX 配置', description: '每辆车都交叉引用业界最可靠的 JATO Dynamics 与 EUROTAX 两大数据库,形成一份合并后的详细记录。版本精准、标配与选装明细完整、数据无矛盾。告别残缺或不一致的车辆信息。', icon: 'merge_type' },
          { title: '库存创建与管理', description: '在统一环境中创建完整车辆信息并管理。快速、有序地更新数据、添加照片并掌控每辆车的状态。', icon: 'inventory_2' },
          { title: '广告质量控制', description: '确保每辆车以最高质量发布。发布前审查配置、版本、价格和照片,呈现更具吸引力、更一致的广告。', icon: 'verified' },
          { title: '价格与竞争力分析', description: '基于真实市场数据做决策。将库存与竞品对比、调整价格并发现周转机会,以提升业绩。', icon: 'sell' },
          { title: '灵活创建', description: '可按车牌、车架号或 JATO 引导式搜索创建车辆;也可使用 Premium Creation 交由我们的团队完成。', icon: 'tune' },
          { title: '从 DMS 自动导入', description: '与主流 DMS 原生对接。自动且双向同步,无需人工干预。', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: '更快、更稳、更灵活的车辆管理',
        lead: '可手动、自动或委托创建车辆,并通过我们与 DMS 和摄影平台的连接保持库存始终最新。一套灵活的流程,适应每家经销店的运营。',
        highlights: [
          { title: 'JATO + EUROTAX', description: '每辆车都有统一配置' },
          { title: '质量控制', description: '配置、价格与照片' },
          { title: '竞争力分析', description: '真实市场数据' },
          { title: '由 AI 优化的广告', description: '自动优化文案' },
        ],
        bullets: [
          'JATO + EUROTAX 统一:每辆车都基于两大行业基准数据库形成完整一致的配置。无空缺、无矛盾。',
          '精准且快速的估值:依据市场数据、技术资料与 CARFAX 校验的可靠估值。',
          '质量控制:在发布前审查配置、图片与价格,保证在各门户上的广告一致连贯。',
          '生成促销与组合方案:启动活动、突出特色车辆,借助为周转设计的工具加速流通。',
          '与 Multipublicador 直接对接,瞬时发布到所有门户。',
        ],
      },
      {
        type: 'process',
        title: '我们如何助您走得更远',
        steps: [
          { title: '精准且快速的估值', description: '基于市场数据、技术资料与 CARFAX 校验获得可靠估值。让二手车入库更高效、更安全。' },
          { title: '质量控制', description: '发布前审查配置、图片与价格,在各门户上输出更完整、连贯且具吸引力的广告。' },
          { title: '促销与组合', description: '简单且集中地创建促销与组合。启动活动、突出特色车辆,借助为周转设计的工具加速流通。' },
        ],
      },
      {
        type: 'cta',
        title: '想以更高利润、更快速度卖出库存吗?',
        lead: '申请演示,我们展示 Dealer 如何在使用第一个月就改变您的库存管理。',
      },
    ],
  },
  'lead-factory': {
    subtitle: '节省时间,专注成交',
    sections: [
      {
        type: 'features',
        title: 'Lead 5 Estrellas 有何不同?',
        lead: '我们不卖数据库。我们捕获正在出售自己车辆并准备购车的活跃潜客。',
        items: [
          { title: '一次接触,双重潜客', description: '一辆车的卖家,几乎总是潜在买家。我们捕获这一过渡时刻,为您提供市场上最有价值的潜客。', icon: 'star' },
          { title: '按地域细分', description: '将西班牙划分为 7 个独占区域。每家经销店仅在自己影响范围内接收潜客,区域内零内部竞争。', icon: 'map' },
          { title: '实时交付', description: '在客户提交表单的同一时刻,潜客进入您的 CRM 或邮箱。零延迟,最大反应力。', icon: 'schedule' },
          { title: '已筛选的潜客', description: '通过验证流程过滤虚假或低质量联系人。您只收到真实且联系信息可核验的潜客。', icon: 'verified' },
          { title: '详尽的报告', description: '面板显示每个潜客的来源、到店转化与最终成交转化。用真实数据持续优化。', icon: 'analytics' },
          { title: '与 CRM 集成', description: '潜客直接进入 CRM4YOU 或您所用的 CRM。无需重复录入。', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: '3 步走完从获客到成交',
        lead: '我们的多渠道获客系统每天为您的经销店提供高质量潜客的稳定流量。',
        highlights: [
          { title: '个人卖家', description: '想卖掉自己的车,再买一辆' },
          { title: '独占地域', description: '西班牙 7 区无重叠' },
          { title: '即时联系', description: '实时潜客,数据已核验' },
          { title: '双重机会', description: '一次潜客同时含二手车估值与新车销售' },
        ],
        bullets: [
          '多渠道获客:SEO、SEM、Social Ads 与专业门户,在决策时刻捕获个人卖家。',
          '自动筛选:系统在交付前验证数据并过滤虚假联系人。',
          '即时交付:潜客实时进入您的邮箱、CRM 或 WhatsApp,附带车辆与联系信息。',
          '通过独占区域避免经销店间的内部竞争。',
          '按潜客计价,无最低月订阅、无绑定。',
        ],
      },
      {
        type: 'process',
        title: 'Lead 5 Estrellas 如何运作?',
        steps: [
          { title: '多渠道获客', description: '通过 SEO、SEM、Social Ads 与专业门户,在个人卖家决定出售车辆的瞬间触达。' },
          { title: '筛选与验证', description: '系统验证联系数据并过滤低质量潜客。只有真实且已筛选的潜客进入您的经销店。' },
          { title: '交付与跟进', description: '潜客实时到达您的 CRM、邮箱或 WhatsApp。月度跟踪与转化报告。' },
        ],
      },
      {
        type: 'cta',
        title: '想要您所在区域的购车潜客吗?',
        lead: '查询您所在独占区域的可用性,从第一天起即开始接收筛选后的潜客。',
      },
    ],
  },
  'exportaciones': {
    subtitle: '导入库存、辅助创建并发布到主流门户 · 每天 +1,000 家客户与我们一同发布',
    sections: [
      {
        type: 'highlights',
        title: '从简单导入到高级创建与丰富化发布',
        lead: 'Motorflash 在每一步都提供可靠性与灵活性。用直观的仪表板监控库存,实时按市场调整价格,以丰富信息在主流门户上发布,从竞争中脱颖而出。一切都为节省时间和最大化业绩而设计。',
        highlights: [
          { title: '+1,000', description: '每天用 Multipublicador 发布的客户' },
          { title: '+2,500', description: '我们平台每天的库存导出量' },
          { title: '+150', description: '与市场上 DMS 的原生集成 · 针对特殊场景提供 Ad Hoc 服务' },
          { title: '1M', description: '每月向行业门户导出的车辆数' },
        ],
        bullets: [
          '已对接西班牙主流垂直门户(Coches.net、Sumauto、Coches.com、Autocasión、AutoScout24、Wallapop)及 Motorflash.com。',
          '真正的差异点:我们在导出广告时,会按车完整呈现选装配置 — 绝大多数 multipublicador 并不做。',
          '最短承诺期 6 个月。账单无意外,亦无隐形成本。',
        ],
      },
      {
        type: 'features',
        title: '按需的库存导入与创建',
        lead: '按您愿投入的精度与时间提供三种创建方式。从手动创建到按车架号 (VIN) 的高级创建,选装配置自动并入。',
        items: [
          { title: '基础创建(手动)', description: '基于 JATO 的直观界面手工创建:登记日期、类型、品牌、车型、版本、燃料、车门、车身、变速箱与额外配置。', icon: 'edit_note' },
          { title: '高级创建(按车牌)', description: '输入车牌,系统自动填充基础数据,您只需选择版本和额外配置。包含基础创建。', icon: 'directions_car' },
          { title: '高级创建(按 VIN)', description: '通过车架号自动获取车辆全部信息,包含版本与额外配置。最高可靠性,包含按车牌创建。', icon: 'verified' },
          { title: '由 Motorflash 代为创建', description: '愿意的话,可委托我们的专家团队为您创建广告。节省时间、提升可靠性,同时不分散您的团队。', icon: 'support_agent' },
          { title: '与 150+ DMS 集成', description: '与市场上大部分 DMS 对接:Keyloop、Autoline、Aswin、Incadea、Pymecar、Nextlane、Quiter、Bee2link、Inventario.pro……以及针对特殊需求的 Ad Hoc 服务。', icon: 'hub' },
          { title: '自动导入图片', description: '与多个平台集成,自动拉取车辆图像并保持库存始终最新。', icon: 'photo_library' },
          { title: 'Carlens 360 · 视觉定制', description: '无需 photocall 即可个性化广告照片。节省时间,提升目录视觉质量。', icon: 'auto_fix_high' },
          { title: '水印', description: '为您的活动创建水印,或处理您提供的水印。让您的品牌在每张照片上可见。', icon: 'branding_watermark' },
        ],
      },
      {
        type: 'features',
        title: 'Dealer:像专业人士一样管理库存',
        lead: '将库存全部信息汇总在直观的仪表板上。实时与市场对比价格、即时估值,并在车辆详情页内为客户计算融资。',
        items: [
          { title: '直观的库存仪表板', description: '库存年限、未调价天数与价格分析集中呈现。一眼判断哪辆车需要加速周转。', icon: 'dashboard' },
          { title: '预估价 vs. 市场', description: '即时将您的价格与西班牙主流门户上同类在售单位对比。', icon: 'price_check' },
          { title: '内置估值器', description: '仅输入车牌即可获得任何车辆的买/卖推荐价格。来自真实市场,而非主观看法。', icon: 'calculate' },
          { title: '市场温度', description: '查看哪些车型当下走俏,据此调整库存与定价策略。', icon: 'thermostat' },
          { title: '融资计算器', description: '与 Banco Santander、CaixaBank、Cetelem 等集成。直接在详情页内为客户提供最佳月供方案。', icon: 'account_balance' },
          { title: '个性化的组合与报价', description: '在车辆详情页一键生成针对每位客户的组合与报价。', icon: 'description' },
        ],
      },
      {
        type: 'features',
        title: '导出:在您选择的地方发布,信息更丰富',
        lead: '由您决定每辆车进入哪个门户:批量、选择性或混合发布。与西班牙主流垂直二手车门户对接,并在集中式仪表板掌控全局。',
        items: [
          { title: '批量、选择性或混合发布', description: '决定哪些车发布至每个门户。最大灵活度 — 由您按门户定义策略。', icon: 'tune' },
          { title: '广告内容丰富化', description: '与其他 multipublicador 不同,我们在导出广告时按每辆车呈现选装配置的明细。让广告脱颖而出。', icon: 'auto_awesome' },
          { title: '与主流门户的网关', description: 'Coches.net、Sumauto、Coches.com、Autocasión、AutoScout24、Wallapop 及更多。一个工具,覆盖所有门户。', icon: 'sync_alt' },
          { title: '导出仪表板', description: '集中查看与控制各门户的库存。随时了解每辆车在哪里发布、处于何种状态。', icon: 'monitoring' },
          { title: '含 motorflash.com', description: '您的库存也将发布至 motorflash.com,所有套餐每月包含前 10 条潜客免费。', icon: 'language' },
          { title: '每个门户内不限账户', description: 'S 档及以上,Coches.net、Sumauto 与垂直门户提供不限账户。统一计费覆盖全网络,而非按账户计费。', icon: 'all_inclusive' },
        ],
      },
      {
        type: 'process',
        title: '2 周内即用 Multipublicador 开始发布',
        steps: [
          { title: '签署合同与启动', description: '我们签署合同并启动项目。在首次会议中收集门户账户与门店详情。' },
          { title: '账户与门店创建', description: '为您开通 Multipublicador 账户,按您的架构配置门店与用户。' },
          { title: '导入库存', description: '对接您的 DMS 或上传初始 Excel,将全部库存接入系统。此后数据自动同步。' },
          { title: '导出与启动', description: '按需启用门户导出。可选地,先做一次库存清洗,从第一天就提升广告质量。' },
        ],
      },
      {
        type: 'cta',
        title: '您每月发布多少辆车?',
        lead: '告诉我们您的库存规模,我们为您展示同规模集团的真实案例。30 分钟内您就能知道适合哪个档位以及成本几何。',
      },
    ],
  },
  'motorflash-connect': {
    subtitle: '通过个性化 AI 视频留住租赁客户并卖出更多',
    sections: [
      {
        type: 'highlights',
        title: '租赁结束时,您失去了客户。竞争对手已经在打他们的电话。',
        lead: '每年都有数千名客户在合同到期时未续约,只因没能及时收到个性化方案。您的团队覆盖不到所有人;群发邮件被忽略。Fleet Manager 自动将合同终点转化为新一笔成交,且每位客户都收到唯一的视频。',
        highlights: [
          { title: '100%', description: '您的客户群均通过个性化视频触达' },
          { title: '×5', description: '相较传统销售邮件的回复率' },
          { title: '0', description: '人工创建工作:由 AI 完成一切' },
          { title: '白标', description: '您的 Logo、配色与域名。客户看到的是您的品牌,而非我们' },
        ],
        bullets: [
          '不再因销售运力溢出而流失客户:平台触达 100% 的客户群,而非仅团队能拨打的部分。',
          '夺回因延误而流失的潜客:AI 在合同结束前的最佳日期触发视频。',
          '多组织支持:如果您有多家经销店或代理,可在同一平台上各自维护品牌与配置。',
        ],
      },
      {
        type: 'features',
        title: '每位客户独有的视频,AI 在几分钟内生成',
        lead: '每位客户都会收到一段个性化作品,包含其姓名、当前车辆、月供及最多 5 个真实方案:续约、换车、升级或买断现有车辆。一键即可作出回应。',
        items: [
          { title: '自然的西班牙语 AI 语音', description: '可按组织选择并调节语音(由 ElevenLabs 提供支持)。以自然语气称呼客户姓名 — 从沉稳到亲切动感,依您的品牌而定。', icon: 'record_voice_over' },
          { title: '最多 5 个真实方案/客户', description: '以同款新车续约、换为同品牌其他车型、升级、以更优条件续约或现金/分期买断。由您定义,AI 个性化。', icon: 'tune' },
          { title: '一键回复按钮', description: '客户打开视频、看到选项并点击其感兴趣的一项。零摩擦、零表单、零摸底通话。', icon: 'ads_click' },
          { title: '100% 白标品牌', description: '您的 Logo、配色与域名。客户在任何画面都看不到 "MotorFlash",看到的只有您的组织。', icon: 'palette' },
          { title: '多渠道:邮件与 WhatsApp', description: '视频按客户偏好通过邮件、WhatsApp 或两者送达。更多打开机会,更多回复。', icon: 'forward_to_inbox' },
          { title: '多租户与 GDPR', description: '每个组织拥有隔离空间。客户数据存放在欧洲服务器,保证 GDPR 合规,品牌与配置相互独立。', icon: 'shield' },
        ],
      },
      {
        type: 'process',
        title: '4 步走完从客户群到成交',
        steps: [
          { title: '导入您的客户群', description: '上传含客户与活跃租赁的 Excel,或通过 REST API 连接您的 ERP。平台读取客户(姓名、邮箱、电话)、当前车辆(品牌、车型、车牌、月供)与合同到期信息。' },
          { title: '配置您的方案', description: '为每位客户或客户类型定义最多 5 项含月供、车型与图片的具体报价:续约、换车型、升级、降低里程、现金/分期买断。' },
          { title: '平台发送视频', description: '在距合同结束 X 天时(由您决定),系统生成 AI 语音、合成您品牌风格的视频,通过邮件与/或 WhatsApp 发送。您的团队无需操作。' },
          { title: '完成成交', description: '客户一键回复。您的销售即时收到邮件 + CRM 通知,显示客户选项与数据。带着已知的偏好直接打电话。' },
        ],
      },
      {
        type: 'features',
        title: '不仅是租赁结束:全年通用的活动引擎',
        lead: '除合同结束流程外,Fleet Manager 还提供随时发送个性化视频的引擎。您一次设计活动,平台自动按每位客户个性化触发。',
        items: [
          { title: '季节性活动', description: '冬季轮胎、ITV/年检、机油更换、保险续保。AI 在合适日期为每位客户自动发送视频。', icon: 'event_repeat' },
          { title: '固定日期活动', description: '黑五、新车上市、财年末。定义日期与受众,平台为每位客户附上其姓名与数据进行发送。', icon: 'calendar_month' },
          { title: '基于受众的活动', description: '定义具体数据库(某品牌、月供或年限客户),向其发送带个性化视频的专属报价。', icon: 'group' },
          { title: '与 CRM/ERP 集成', description: '提供 REST API 与 webhooks,用于同步客户群、由 CRM 触发活动并自动将回复推送至对应潜客。', icon: 'integration_instructions' },
        ],
      },
      {
        type: 'cta',
        title: '30 分钟,带您观看用您的真实客户生成的视频',
        lead: '个性化演示:在您授权下基于客户群的真实案例生成视频、回复面板与指标、与现有系统集成,以及预估 ROI 测算。SaaS 模式无强制承诺,提供试点计划以便您决策。',
      },
    ],
  },
}
