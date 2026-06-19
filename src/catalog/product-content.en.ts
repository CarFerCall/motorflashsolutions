/**
 * Rich product content — English translations.
 * Mirrors `product-content.es.ts` and falls back to Spanish for any
 * slug not present here (see product-content.ts).
 */
import type { ProductContent } from './product-content'

export const productContent: Record<string, ProductContent> = {
  'portal-publicacion': {
    subtitle: "Motorflash Group's own used vehicle portal",
    sections: [
      {
        type: 'features',
        title: 'Publish once, appear on every portal',
        lead: "Forget uploading vehicles portal by portal. With Classifieds, you publish once and your stock appears on every portal automatically.",
        items: [
          { title: 'Automatic multi-portal publishing', description: 'One click publishes your vehicle on Coches.net, Milanuncios, Wallapop, AutoScout24 and other leading portals. Stock always in sync.', icon: 'rocket_launch' },
          { title: 'Optimised vehicle listings', description: 'Listings with full trim data (JATO/Eurotax), photos, price, financing and automatically generated copy to maximise conversion.', icon: 'description' },
          { title: 'Smart price management', description: 'Real-time market price comparison. Alerts when your price is above or below market so you can act fast.', icon: 'sell' },
          { title: 'Portal analytics', description: 'Visits, leads and conversion rate per vehicle and per portal. See which channels bring more buyers and optimise your ad spend.', icon: 'analytics' },
          { title: 'Centralised leads', description: 'Every portal lead lands in the same place, synced with your CRM. No information lost.', icon: 'inbox' },
          { title: 'Native web + CRM integration', description: 'Plugs natively into CRM4YOU and your Motorflash website. A closed ecosystem with no duplicate data entry.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'More visibility, less work and greater control',
        lead: 'Publishing manually across portals eats 2 to 4 hours a day. With Classifieds, that becomes minutes — and listing quality goes up.',
        highlights: [
          { title: 'Automatic publishing', description: 'Once, across every portal' },
          { title: 'Price intelligence', description: 'Real-time market comparison' },
          { title: '40,000 vehicles/month', description: 'The largest automotive volume' },
          { title: 'Centralised leads', description: 'Every portal in one inbox' },
        ],
        bullets: [
          'Integrated portals: Coches.net, Milanuncios, Wallapop, AutoScout24, Autocasion and more.',
          'Enhanced photos: built-in editor to remove backgrounds and boost the visual appeal of each vehicle.',
          'Negotiated discounts on the main portals based on your publication volume.',
          'Alerts on vehicles priced outside the market so you can act fast.',
          'Automatic rotation of featured ads to maximise visibility.',
        ],
      },
      {
        type: 'process',
        title: 'How does Classifieds work?',
        steps: [
          { title: 'Stock connection', description: 'We connect your DMS, ERP or CRM to import your stock automatically. We set up publishing rules and the target portals.' },
          { title: 'Automatic publishing', description: 'Your vehicles publish on every selected portal with optimised listings. Removals and edits sync in real time.' },
          { title: 'Lead management and reporting', description: 'Every lead lands in one place. Weekly report with portal performance, per-vehicle results and market pricing comparison.' },
        ],
      },
      {
        type: 'cta',
        title: 'Want to publish your stock on every portal effortlessly?',
        lead: "Book a demo and we'll show how Classifieds can save you hours every week and grow your online reach.",
      },
    ],
  },
  'crm4you': {
    subtitle: 'Run your sales operation smoothly, with full context and no unnecessary steps',
    sections: [
      {
        type: 'features',
        title: 'The CRM for dealership groups',
        lead: 'The only CRM in the sector built to centrally manage multiple locations, brands and dealerships. Optimise the sales process at group level with built-in AI working alongside you.',
        items: [
          { title: 'Centralised lead management', description: "Every lead from your website, portals, social ads and phone calls lands in one place. Never lose a lead to an unmonitored channel.", icon: 'inbox' },
          { title: 'Visual sales pipeline', description: 'Kanban board tailored to the sales process: New → Contacted → Visit → Test drive → Offer → Delivery. Metrics at every stage.', icon: 'view_kanban' },
          { title: 'Automatic follow-up', description: 'Automated email and SMS sequences for every stage. The CRM follows up for you when the sales rep is busy.', icon: 'autorenew' },
          { title: 'Built-in calendar', description: 'Sales meetings and test drives managed inside the CRM. Google Calendar sync and automatic customer notifications.', icon: 'calendar_month' },
          { title: 'Management dashboards', description: "Live dashboard with each rep's performance, conversion by channel, average time to close and monthly sales forecast.", icon: 'analytics' },
          { title: 'Native integrations', description: 'Plugs into your Motorflash Web, Classifieds, Contact Center, WhatsApp Business and the main vehicle portals. A closed ecosystem with no data leaks.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'A CRM that works for the rep and for management',
        lead: 'CRM4YOU has two sides: operational (for the sales rep) and analytical (for the commercial director or dealership manager).',
        highlights: [
          { title: 'Kanban sales pipeline', description: 'Visual, tailored to automotive' },
          { title: 'Automated follow-up', description: 'Stage-based email and SMS' },
          { title: 'Per-rep tracking', description: 'Individual performance measurable' },
          { title: 'Integrated ecosystem', description: 'Web, portals, WhatsApp and Contact Center' },
        ],
        bullets: [
          "Rep view: pending tasks, automatic reminders, full lead history and communication templates.",
          "Management view: individual rep performance, conversion by lead source, average time to close and sales forecast.",
          'Mobile app for managing leads anywhere, on any device.',
          'Import data from your DMS or previous CRM without losing history.',
          'Roles and permissions configurable by dealership or group.',
        ],
      },
      {
        type: 'process',
        title: 'How do we roll out CRM4YOU?',
        steps: [
          { title: 'Custom setup', description: 'We tailor the pipeline, fields and automation flows to your specific sales process. You don\'t adapt to the CRM — the CRM adapts to you.' },
          { title: 'Migration and integration', description: 'We import your current data and connect every lead source: web, portals, social ads and Contact Center in 5-7 business days.' },
          { title: 'Training and go-live', description: 'On-site or remote training for the whole team. Dedicated support for the first 30 days to ensure adoption.' },
        ],
      },
      {
        type: 'cta',
        title: 'Want to see CRM4YOU running on your own data?',
        lead: "Request a personalised demo and we'll show how CRM4YOU looks tailored to your dealership in under 30 minutes.",
      },
    ],
  },
  'contact-center': {
    subtitle: 'Handle calls, chats and messages from a single platform connected to your CRM',
    sections: [
      {
        type: 'features',
        title: 'Total control, attention that converts',
        lead: 'Handle calls, chats and messages from a single environment. Our voice AI answers and qualifies leads in real time, while the Quality Monitoring system scores every conversation.',
        items: [
          { title: 'Inbound and outbound calls', description: 'We answer incoming calls and run outbound campaigns to contact and qualify every lead in under 5 minutes.', icon: 'support_agent' },
          { title: 'Lead qualification', description: 'Our automotive specialists detect interest level, vehicle sought, purchase timeline and budget for every lead.', icon: 'verified' },
          { title: 'Calendar management', description: "We book visits and test drives directly into your reps' calendars. Your sales team receives leads with the appointment already confirmed.", icon: 'calendar_month' },
          { title: 'Email and SMS campaigns', description: 'Multi-channel sequences that complement phone outreach: follow-up emails, reminder SMS and appointment confirmations.', icon: 'chat' },
          { title: 'Live reporting', description: 'Dashboard with campaign performance, contact rate, conversion to visit and close. Real metrics for real decisions.', icon: 'analytics' },
          { title: 'Automotive-specialist team', description: "Agents trained specifically for the automotive sector. They know what they're talking about and how to qualify each lead correctly.", icon: 'group' },
        ],
      },
      {
        type: 'highlights',
        title: 'Leads handled on time convert dramatically more',
        lead: 'Response time is the most critical factor in automotive lead conversion. Leads contacted in under 5 minutes convert up to 9x more.',
        highlights: [
          { title: '<5-minute contact', description: 'Best response time in the sector' },
          { title: 'Qualified lead + appointment', description: 'Your reps only handle confirmed visits' },
          { title: '70,000 calls/month', description: 'Automotive scale, proven' },
          { title: 'Specialist agents', description: 'They know the automotive sector' },
        ],
        bullets: [
          'Contact under 5 minutes: your lead is called before they have time to reach the competition.',
          'Controlled persistence: up to 6 contact attempts per lead with optimised pauses to maximise contact rate.',
          'Friction-free scaling: absorb lead peaks without growing headcount. Pay per managed lead.',
          'Every call recorded for quality control and training.',
          'Direct CRM integration with no duplicate data entry.',
        ],
      },
      {
        type: 'process',
        title: 'How do we work with you?',
        steps: [
          { title: 'Service setup', description: "We define together the call scripts, qualification criteria and the integration with your CRM and reps' calendars." },
          { title: 'Activation and lead management', description: 'As soon as a lead arrives, our team contacts them in under 5 minutes and follows up as needed until contact is made.', },
          { title: 'Hand-off and follow-up', description: 'The qualified lead with appointment lands in your CRM. Weekly report with results and conversion metrics for your dealership.' },
        ],
      },
      {
        type: 'cta',
        title: 'Want no lead left uncalled?',
        lead: "Request a tailored proposal and we'll explain how Contact Center can lift your conversion rate from the first month.",
      },
    ],
  },
  'spyne': {
    subtitle: 'The AI solution for your vehicle catalogue — formerly Carlens',
    sections: [
      {
        type: 'highlights',
        title: '95% of dealerships publish online. And 40% of buyers decide without ever setting foot in the dealership.',
        lead: "Your photos are your sales force. Doing them well the traditional way takes time, money and a professional photographer. Photocall AI removes those three barriers at once: anyone at the dealership can produce professional-grade photos and videos right from the lot.",
        highlights: [
          { title: '95%', description: 'Of dealerships publish their stock online' },
          { title: '40%', description: "Of buyers don't see the car in person before deciding" },
          { title: '4.2 websites', description: 'Visited by a buyer before choosing a vehicle' },
          { title: '+150', description: 'AI features available between detection and transformation' },
        ],
        bullets: [
          'Cost: no professional photographer, studio or gear needed.',
          'Skill: on-screen guidance and AI cover the technical side for you.',
          'Time: snap, automatic processing and instant publication across your channels.',
        ],
      },
      {
        type: 'features',
        title: 'Images and videos that convert',
        lead: 'Cloud AI + mobile app. Any salesperson at the dealership takes the photo, AI handles the rest: professional background, reflections, lighting, plate, angle… all automatic, with consistent results on every vehicle.',
        items: [
          { title: 'Automatic background swap', description: "AI detects the car, cuts it out and replaces the background with a professional one, a virtual studio or your dealership's custom background with your logo.", icon: 'wallpaper' },
          { title: 'Turntable platform generation', description: 'Automatically generates a platform/floor under the car so it looks studio-shot, even if photographed in the parking lot.', icon: 'view_in_ar' },
          { title: 'Interactive 360° Spin video', description: '360° videos showing the vehicle from every angle. The buyer spins the car from their phone — more time on the listing, more conversion.', icon: 'rotate_90_degrees_ccw' },
          { title: 'Reflection and shadow correction', description: 'Identifies and removes reflections from bodywork and glass, adjusts shadows and improves lighting so every photo looks hand-edited.', icon: 'auto_fix_high' },
          { title: 'Smart licence-plate cover', description: "Replaces the plate with a clean one, hides it or covers it with the dealership's logo. GDPR-compliant without manual steps.", icon: 'directions_car' },
          { title: 'Window tinting and interior view', description: 'Tints windows for a uniform look or covers what shows through them (people, other cars, walls) — focus stays on the vehicle.', icon: 'blur_on' },
          { title: 'Tilt and angle correction', description: 'Automatically detects and corrects the car tilt and perspective so every catalogue photo has the same framing.', icon: 'straighten' },
          { title: '+50 automatic AI detections', description: 'Identifies reflections, exposure, blur, cropped images, position angle, distance, car type, tones, tyres and mud on wheels — continuous quality audit.', icon: 'auto_awesome' },
          { title: 'Embedded dealership logo', description: "Your brand on the background and on the plate without looking edited. Coherent catalogue across every portal.", icon: 'verified' },
          { title: 'Interior photo enhancement', description: 'Corrects interior tilt, covers exteriors visible through windows and improves cabin lighting.', icon: 'airline_seat_recline_normal' },
          { title: 'Resolution and focus upgrade', description: 'Raises sharpness and focus on old or low-resolution images. Automatic audit of the historical catalogue.', icon: 'high_quality' },
          { title: 'Per-portal size resizing', description: 'Automatically generates every size variant required by each portal (Coches.net, AutoScout24, social, your website…).', icon: 'aspect_ratio' },
        ],
      },
      {
        type: 'highlights',
        title: '5 ways to integrate Photocall AI into your dealership',
        lead: 'Choose the channel that best fits your processes. They work in parallel: someone takes photos with the app while the system pulls DMS photos via API.',
        highlights: [
          { title: 'iOS / Android app', description: 'Anyone can take photos, no training needed' },
          { title: 'Carlens360 console', description: 'Web panel with all your photos and projects' },
          { title: 'API and DMS integration', description: 'Upload the whole inventory automatically' },
          { title: 'SDK', description: 'Embed the photo flow in your own app' },
        ],
        bullets: [
          'Carlens App: simple on iOS and Android, step-by-step guidance for each vehicle angle.',
          'Carlens360 Console: web access to every photo, project and AI configuration.',
          'API: refresh the whole inventory from your DMS without manual intervention.',
          'SDK: embed the capture flow in the dealership or manufacturer app.',
          'DMS integration: we plug into your existing workflow — dealership → web provider → portal.',
        ],
      },
      {
        type: 'process',
        title: 'From photo to publication in minutes',
        steps: [
          { title: 'Capture with the app', description: 'The rep opens the Carlens App, scans the vehicle and follows on-screen guidance to capture every angle. No studio, no tripod, no photographer.' },
          { title: 'Automatic AI processing', description: 'Images upload to the cloud. AI applies the +100 configured transformations (background, reflections, plate, logo, 360° video) and audits quality with +50 automatic detections.' },
          { title: 'Synchronised publishing', description: 'The vehicle, its final photos and the 360° video publish on your website, on Coches.net, AutoScout24 and in your DMS. No rework, no channel mismatches.' },
        ],
      },
      {
        type: 'cta',
        title: 'Want to see your catalogue transformed with AI?',
        lead: 'Live demo with real photos from your stock processed live. Set-up from €150, processing from €4 per gallery of up to 40 photos (€5.50 with Spin 360° included).',
      },
    ],
  },
  'motorflash-message': {
    subtitle: 'WhatsApp for automotive businesses · AI-first · from €20/user/month · 4-week pilot',
    sections: [
      {
        type: 'highlights',
        title: 'A lead loses value minute by minute',
        lead: 'Around 75% of buyers buy from the first dealership that responds — speed is the single biggest conversion lever. MF Message is the only WhatsApp platform built specifically for automotive businesses: dashboard, coexistence, conversational AI and routing at group scale.',
        highlights: [
          { title: '60%', description: 'Conversion if you respond in under 1 minute' },
          { title: '65%', description: 'Of form leads receive no reply within 24 hours' },
          { title: '25-42%', description: 'Of phone leads are never handled effectively' },
          { title: 'From €20', description: 'Per user/month — 6-8× cheaper than enterprise CX competitors' },
        ],
        bullets: [
          'A lead loses effectiveness 30 minutes after being handed over for handling.',
          'Vertical portals launched WhatsApp as a web chat: basic bot, no transfer to sales, no analytics, no closure tracking.',
          'MF Message fills that gap: real enterprise WhatsApp with AI, coexistence and routing across hundreds of dealerships.',
          'AI-first, multi-agent platform with dashboard and SLA under control from day 1.',
        ],
      },
      {
        type: 'features',
        title: 'The 5 keys of MF Message',
        lead: "What WhatsApp Business doesn't offer — and what even enterprise CX platforms have not adapted to the automotive sector.",
        items: [
          { title: 'Dashboard and data analytics', description: 'Live KPIs (total conversations, transferred, attended on time, lost), waiting times and SLA per channel/group/slot, activity per team and agent, conversation tagging with status and custom labels, Excel export.', icon: 'analytics' },
          { title: 'Coexistence · no barriers', description: 'No Meta templates, no 24-hour window: your team writes freely in natural language. Connects to the WhatsApp Business lines your salespeople already use, and everything stays logged in the panel and your CRM in the background.', icon: 'sync' },
          { title: 'Two different architectures', description: 'A) One master number → many businesses: routing by brand, geography, model or campaign (Das WeltAuto case: 200+ dealerships under one number). B) Many businesses → many lines: ideal for portals reselling the platform to their dealers.', icon: 'account_tree' },
          { title: 'Conversational AI in production', description: 'First response line: qualifies leads, books visits, optimises the conversation 24/7 and only escalates to human when judgment is needed. Multilingual, NLP with intent/entity/sentiment, prompt editable from the tool itself.', icon: 'smart_toy' },
          { title: 'API · the connector that unifies all four', description: 'A single bidirectional hub connecting customers (WhatsApp direct, portal leads, web CTA), agent workspace, salespeople and your CRM. End-to-end GDPR compliance and real-time delivery.', icon: 'hub' },
          { title: 'Automotive-specific platform', description: 'Built to close sales in the automotive sector: customer states (In conversation → Buying → Financing → After-sales) synced with the CRM, templates and routing ready for the dealership.', icon: 'verified' },
        ],
      },
      {
        type: 'highlights',
        title: 'Coexistence: 0 barriers, 0 blocks',
        lead: 'Connect MF Message to the WhatsApp Business app the salesperson already has on their phone (company line). Every chat flows to the panel and CRM in the background, with the rep installing nothing. Works with the accounts the team already uses, not a generic web chat.',
        highlights: [
          { title: 'No Meta templates', description: 'Free natural-language text · no prior blocks' },
          { title: 'No 24-hour window', description: 'Conversations never close · reply whenever needed' },
          { title: 'No template costs', description: 'Leverage the Business line you already have' },
          { title: 'Full CRM traceability', description: 'Every message synced · centralised moderation panel' },
        ],
        bullets: [
          'Connect → Sync → Work as usual: the rep keeps chatting natively.',
          'Compatible with the company line (using a personal number for work is forbidden in Spain).',
          'Use the contacts already on the phone, no migrations.',
          'Central panel with KPIs and SLA per agent, group and time slot.',
        ],
      },
      {
        type: 'features',
        title: 'AI in production — your first tireless agent',
        lead: 'MF Message AI handles incoming conversations end to end and only escalates when human judgment is needed. Operational today on real accounts with per-client metrics available on request.',
        items: [
          { title: 'Instant 24/7 response', description: 'First response in under a second. No customer waits, night or weekend.', icon: 'bolt' },
          { title: 'Multilingual NLP', description: 'Intent, entity and sentiment extracted from the full group conversation history. Natural conversation in multiple languages.', icon: 'translate' },
          { title: 'Automatic lead qualification', description: 'Vehicle, budget, geography and intent extracted and pushed to the CRM. AI books visits and reserves test drives.', icon: 'fact_check' },
          { title: 'Smooth hand-off to humans', description: 'When the deal matures, AI transfers to the rep with full context. No repetitions, no information loss.', icon: 'forward_to_inbox' },
          { title: 'Search across the whole database', description: 'Queries your whole stock to give the customer maximum available information. Every query runs anonymised and GDPR-compliant.', icon: 'search' },
          { title: 'Editable prompt + feedback loop', description: 'Tune AI behaviour from the tool itself with behaviour blocks. Comment on responses to correct and train it: continuously improves.', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: 'Real case · Das WeltAuto',
        lead: 'Volkswagen Group certified used-vehicle operations in Spain runs its entire WhatsApp business through MF Message: a single front door for all of Spain and automatic routing to the right dealership.',
        highlights: [
          { title: '200+', description: 'Dealerships under one master number' },
          { title: '1', description: 'Customer-facing number for all of Spain' },
          { title: '5', description: 'Business units routed (sales, service, parts, admin, after-sales)' },
          { title: '288', description: 'Dealerships with group-level dashboards' },
        ],
        bullets: [
          'Every WhatsApp query routes to the correct dealership and business unit, automatically.',
          'Total visibility from HQ · group dashboards across 288 dealerships and 5 business units.',
          'Complete conversation history in the CRM, even when dealerships change: customer data stays at group level.',
          'GDPR-compliant by design · every consent time-stamped · every interaction auditable.',
        ],
      },
      {
        type: 'highlights',
        title: 'Pricing built to undercut the market',
        lead: 'Transparent, modular and with Meta traffic passed through at cost. No hidden margins. Enterprise CX platforms start at €132-169 per user — MF Message starts at €20.',
        highlights: [
          { title: 'From €20/user/month', description: 'Unified license: WhatsApp Business + Coexistence. Console, campaigns, analytics and GDPR included.' },
          { title: '€132-169 the competition', description: 'Zendesk $169 · Salesforce $165 · Twilio Flex $150 · Intercom $132 · 6-8× more expensive than MF before add-ons.' },
          { title: 'AI · €150/month + €0.08/conv.', description: 'All included: LLM, orchestration and continuous improvement. One license, one price per conversation.' },
          { title: 'Meta traffic at cost', description: '≈ €0.0509/outbound conversation when using a marketing template · no markup.' },
        ],
        bullets: [
          'Volume discounts from 100 / 250 active users.',
          'Enterprise SLA and dedicated customer success included.',
          'Up to €6.50 per additional agent batch.',
          'Entry-level pricing is indicative · final pricing tailored to volume and project scope.',
        ],
      },
      {
        type: 'process',
        title: 'From discovery session to group rollout',
        steps: [
          { title: 'Discovery session (60 min)', description: 'Workshop with your sales operations + IT team to map your current WhatsApp presence, dealership response flows and the points where leads are lost today.' },
          { title: 'Pilot in 4 weeks', description: 'We connect 3-5 dealerships and validate Coexistence + routing + AI + end-to-end CRM sync. Tests with real conversations in production.' },
          { title: 'Phased group rollout', description: 'Progressive rollout by brand, region and business unit, co-led by Motorflash. Team onboarding and active metrics from day 1.' },
        ],
      },
      {
        type: 'cta',
        title: "Let's build what's next · bring WhatsApp to your operation, at group scale",
        lead: 'Book the 60-minute discovery session with our team. In 4 weeks you have a pilot in production with 3-5 dealerships and, if it fits, a group rollout plan. Direct contact: Andrés Tejero · info@motorflash.com · +34 913 728 790.',
      },
    ],
  },
  'motorflash-mobile-tracking': {
    subtitle: 'The evolution of SMS, with up to 300% more conversion than a traditional message',
    sections: [
      {
        type: 'features',
        title: 'What are Advanced Image + RCS for in automotive?',
        lead: 'Beyond basic SMS: combines AI-enhanced images with RCS messaging (multimedia, secure, verified) to create communications that the customer opens, reads and converts.',
        items: [
          { title: 'RCS multimedia messaging', description: "Send images, videos, carousels and action buttons straight to the customer's phone. Like SMS, but with a native-app experience.", icon: 'chat' },
          { title: 'AI-enhanced images', description: 'Automatic improvements to every photo: backgrounds, lighting, shadows, reflection removal. Your vehicle looks magazine-grade.', icon: 'auto_awesome' },
          { title: 'Sender verification', description: "Your brand appears verified on the customer's phone. More trust, more opens, less phishing risk.", icon: 'verified' },
          { title: 'Per-customer personalisation', description: 'Every message adapts to the customer, the vehicle of interest and their buying-cycle moment. Unique messages at scale.', icon: 'group' },
          { title: 'Full reporting', description: 'Delivery, open, click and conversion rate per campaign. Real metrics to optimise.', icon: 'analytics' },
          { title: 'CRM integration', description: 'Every send and reply logs in CRM4YOU. Complete conversation traceability.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Full control from the lot to delivery',
        lead: 'Advanced Image + RCS solves the most common communication issues at dealerships: low SMS open rates, unappealing photos that don\'t convert, lack of personalisation in mass sends.',
        highlights: [
          { title: '+300% conversion vs SMS', description: 'The difference between plain text and multimedia' },
          { title: 'AI improving every photo', description: 'Automatic professional quality' },
          { title: 'Brand verification', description: "Your logo appears on the customer's phone" },
          { title: 'Dynamic templates', description: 'Tailored to each vehicle and customer' },
        ],
        bullets: [
          'Promos: lead-capture campaigns with enhanced photos of vehicles on offer.',
          'Service appointments: visual reminders with appointment card and map to the dealership.',
          'Launches: new model presentation with video and interactive gallery.',
          'Vehicle-ready notifications with a photo of the car already prepared.',
          'Post-delivery multimedia satisfaction surveys.',
        ],
      },
      {
        type: 'process',
        title: 'How do Advanced Image + RCS work?',
        steps: [
          { title: 'Service setup', description: 'We register your verified brand in RCS and configure message templates with your visual identity.' },
          { title: 'AI image enhancement', description: 'We connect to your DMS to process stock photos automatically. AI enhances every image before sending.' },
          { title: 'Send and measure', description: 'Launch campaigns from the panel or automate them from the CRM. We measure every send, open and click.' },
        ],
      },
      {
        type: 'cta',
        title: 'Want to know where every vehicle in your fleet is right now?',
        lead: "Request info and we'll explain how Advanced Image + RCS can improve control and stock security from day one.",
      },
    ],
  },
  'ia': {
    subtitle: 'AI on WhatsApp, web chat and voice — available 24/7',
    sections: [
      {
        type: 'features',
        title: 'Conversational AI tailored to each channel',
        lead: 'Every channel has its own behaviour and its own customer profile. Our AI solutions are designed specifically for WhatsApp, web and voice, maximising conversion at every touchpoint.',
        items: [
          { title: 'AI on WhatsApp', description: 'A direct, familiar channel: the customer already uses WhatsApp, no friction, no download. Free, natural conversation available 24/7 to capture leads, answer questions and send vehicle information.', icon: 'chat' },
          { title: 'Web chat with closed flow', description: 'Embedded in your website: engages users while they browse. Ideal for specific tasks like forms, bookings, FAQs or quotes. Guides the customer step by step toward conversion.', icon: 'edit_note' },
          { title: 'Voice AI', description: 'Smart voice assistant for booking appointments, answering quick questions or completing processes started in chat. Handles after-hours calls so no lead is left unanswered.', icon: 'support_agent' },
          { title: 'Available 24/7', description: "AI answers on holidays, at night and on weekends. No lead goes unanswered because of opening hours. More sales opportunities with no extra headcount.", icon: 'schedule' },
          { title: 'Continuous relationship and follow-up', description: 'AI keeps the conversation thread across multiple days. Reactivates cold leads, schedules reminders and follows the customer through to the sale.', icon: 'autorenew' },
          { title: 'CRM and systems integration', description: 'Every conversation logs to CRM4YOU. AI knows your stock, prices and vehicle availability in real time.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'The channel makes the difference in conversion',
        lead: 'Not every AI channel has the same reach or the same follow-up potential. Understanding the differences helps you pick the most profitable mix for your dealership.',
        highlights: [
          { title: 'AI on WhatsApp', description: 'Familiar channel · post-visit follow-up' },
          { title: 'Closed-flow web chat', description: 'Ideal for bookings, FAQs and quotes' },
          { title: 'Voice AI', description: 'Appointments and questions resolved by voice 24/7' },
          { title: 'Leads to the CRM', description: 'No duplicate entry, full history' },
        ],
        bullets: [
          "Reach: WhatsApp meets the customer where they already are; web chat only works while they're on your site.",
          "Conversation: WhatsApp AI handles free-form questions; web chat follows predefined flows.",
          'Follow-up: WhatsApp lets you re-engage days later; web chat ends when the tab closes.',
          'WhatsApp feels closer and inspires more trust than a generic web chat.',
          'Web chat is ideal for structured processes: bookings, quotes or FAQs.',
        ],
      },
      {
        type: 'process',
        title: 'How does Motorflash AI work?',
        steps: [
          { title: 'We set up your channel', description: 'We define together the AI channel or channels best suited to your business: WhatsApp, web chat or voice. We set up conversation flows and integrate them with your CRM.' },
          { title: 'AI handles and qualifies', description: 'AI converses naturally with your customers, answers questions, captures contact data and detects each prospect\'s interest level in real time.' },
          { title: 'Qualified lead to your team', description: 'Leads with higher purchase intent are passed to the sales team with the full conversation history. Your rep steps in at the right moment.' },
        ],
      },
      {
        type: 'cta',
        title: 'Is your dealership losing leads outside opening hours?',
        lead: 'Switch on conversational AI and start capturing and qualifying leads 24 hours a day — without growing your headcount.',
      },
    ],
  },
  'soluciones-web': {
    subtitle: 'Optimised to sell, fast performance and full management autonomy',
    sections: [
      {
        type: 'features',
        title: 'Your digital storefront, fully under control',
        lead: 'Manage content, promotions and stock from the same panel. Performance, design and ease of use to drive online results.',
        items: [
          { title: '100% automotive website', description: 'Everything a dealership needs: stock, leads, leasing, valuations and more, with a smooth, professional user experience.', icon: 'language' },
          { title: 'Lead-generation design', description: 'UX/UI built to convert visits into contacts: smart forms, payment gateways and custom sections to showcase your offers.', icon: 'trending_up' },
          { title: 'AI-powered self-management', description: 'Create and update content, landing pages and forms with our AI-powered CMS for a smoother workflow.', icon: 'auto_awesome' },
          { title: 'Built to convert in two clicks', description: 'Conversion-focused structure with smart forms and integrated payment gateways.', icon: 'verified' },
          { title: 'SEO-optimised', description: 'Automatic structured-data markup, dynamic sitemap, A+ Core Web Vitals and SEO-friendly architecture from day one.', icon: 'trending_up' },
          { title: 'Sector-specific CMS', description: 'No external plugins. Everything a dealership needs natively integrated: stock, leads, valuations, forms and reporting.', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: '10 advantages that set us apart',
        lead: 'Our technology integrates the most complete databases in the sector, so your website is the most informative — and the one that converts best.',
        highlights: [
          { title: 'JATO/Eurotax database', description: 'Full trim data automatically' },
          { title: 'Automatic manufacturer feeds', description: 'Stock always up to date' },
          { title: 'Finance calculator', description: 'Cash and financing built in' },
          { title: 'Online valuation form', description: 'Capture used-vehicle sales leads' },
        ],
        bullets: [
          'Integration with JATO and Eurotax databases for complete trim data.',
          'Automatic manufacturer stock feeds (Audi, BMW, Mercedes, VW...).',
          'Built-in cash and financing calculator.',
          'Valuation and test-drive request forms.',
          'Workshop calendar and tyre calculator.',
        ],
      },
      {
        type: 'process',
        title: 'How does it work?',
        steps: [
          { title: 'Free consultation', description: 'We audit your current site and the competition, then define the project together that best fits your business.' },
          { title: '30-day build', description: 'Our team develops your website on proprietary tech. You stay informed of progress at every step.' },
          { title: 'Launch and support', description: 'Three-hour CMS training, initial SEO configured and go-live. Ongoing support included.' },
        ],
      },
      {
        type: 'cta',
        title: 'Ready to refresh your automotive website?',
        lead: "Request your free consultation today — we'll prepare a no-strings audit of your current site.",
      },
    ],
  },
  'marketing-digital': {
    subtitle: 'Boost visibility, connect with your customers and sell more online',
    sections: [
      {
        type: 'features',
        title: 'Smart strategies, real results',
        lead: 'The Motorflash Digital Marketing team combines experience and technology to design custom, measurable campaigns. Strategies tailored to the automotive sector, built to make an impact and grow your sales.',
        items: [
          { title: 'Automotive specialisation', description: 'We understand the needs and quirks of the automotive market, which lets us design digital strategies tailored to every dealership or used-vehicle business.', icon: 'verified' },
          { title: 'Dedicated SEO, SEA and Social teams', description: 'We have an SEO team, an SEA-only team and a third team focused on Social Ads to grow your business.', icon: 'group' },
          { title: 'Holistic strategy and continuous optimisation', description: 'We build and analyse SEO, SEA and social campaigns, optimising every action to maximise performance and generate more sales opportunities.', icon: 'autorenew' },
          { title: 'Measurable performance', description: 'See the key data of your campaigns from a clean, visual panel. Assess every action and make decisions based on real results.', icon: 'analytics' },
          { title: 'A team that works alongside you', description: 'We are not another agency. We work shoulder to shoulder with your sales team, adjusting campaigns to your dealership\'s actual funnel.', icon: 'support_agent' },
          { title: 'Custom campaigns', description: 'Every action is tailored to your brand, your stock and your sales target. Nothing generic — everything bespoke.', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: 'Traffic that searches for you vs traffic that discovers you',
        lead: 'Not all traffic has the same value or the same moment in the buying journey. Our strategy combines both to maximise short- and long-term results.',
        highlights: [
          { title: 'Organic SEO traffic', description: 'High conversion · No CPC' },
          { title: 'SEM campaigns (Google Ads)', description: 'Focus on real cost per lead' },
          { title: 'Social Ads (Meta / TikTok)', description: 'Prospecting at lower cost' },
          { title: 'Live reporting', description: 'Business metrics, not vanity metrics' },
        ],
        bullets: [
          'SEO/SEM: customers searching for your brand or your vehicles. Immediate conversion.',
          'Social Ads: prospects who don\'t know you yet. Mid-term conversion at lower cost.',
          'Full-funnel tracking: visit → lead → call → sale.',
          'Monthly reporting with real business metrics, no vanity numbers.',
          'Continuous optimisation based on data, not guesswork.',
        ],
      },
      {
        type: 'process',
        title: 'How do we work?',
        steps: [
          { title: 'Free audit', description: 'We analyse your website, current traffic, the competition and improvement opportunities. No cost, no strings.' },
          { title: 'Action plan', description: 'We design a tailored strategy with measurable goals, priority channels and recommended budget.' },
          { title: 'Execution and reporting', description: 'We implement, measure and continuously optimise. Monthly report with real results.' },
        ],
      },
      {
        type: 'cta',
        title: "Isn't your website generating enough leads?",
        lead: "Request your free audit and we'll tell you exactly what's going wrong — and how to fix it.",
      },
    ],
  },
  'dealer': {
    subtitle: 'Complete used-vehicle management with built-in AI',
    sections: [
      {
        type: 'features',
        title: 'Smart management for large stock volumes',
        lead: 'Create, control and publish your vehicles from a platform designed for dealerships and groups. Organise your inventory, raise listing quality and make data-driven decisions backed by real market data.',
        items: [
          { title: 'Unified JATO + EUROTAX trim data', description: 'Every vehicle is created cross-referencing the two most reliable databases in the sector — JATO Dynamics and EUROTAX — into a single consolidated record. Exact version, detailed standard and optional equipment, no contradictions. Goodbye to half-filled listings or inconsistent supplier data.', icon: 'merge_type' },
          { title: 'Stock creation and management', description: 'Create full vehicle listings and manage all the information from a single place. Update data, add photos and monitor the state of each car quickly and in order.', icon: 'inventory_2' },
          { title: 'Listing quality control', description: 'Make sure every vehicle is published at top quality. Review trim, versions, prices and photos before launching the ad — more attractive, more consistent listings.', icon: 'verified' },
          { title: 'Price and competitiveness analysis', description: 'Make decisions backed by real market data. Compare your stock with the competition, adjust prices and find rotation opportunities to improve performance.', icon: 'sell' },
          { title: 'Flexible creation', description: 'Create vehicles by plate, VIN or JATO-guided search, or delegate the process to our team with Premium Creation.', icon: 'tune' },
          { title: 'Automatic import from your DMS', description: 'Plugs natively into the main DMS in the market. Automatic, two-way sync with no manual intervention.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Faster, safer and more adaptable vehicle management',
        lead: 'Create vehicles manually, automatically or delegated, and keep stock always up to date thanks to our DMS and photography platform connections. A flexible process that adapts to every dealership.',
        highlights: [
          { title: 'JATO + EUROTAX', description: 'Unified trim on every vehicle' },
          { title: 'Quality control', description: 'Trim, prices and photos' },
          { title: 'Competitiveness analysis', description: 'Real market data' },
          { title: 'AI-powered listings', description: 'Automatically optimised copy' },
        ],
        bullets: [
          'JATO + EUROTAX unified: each vehicle carries the full, consistent trim by cross-referencing the two sector reference databases. No gaps, no contradictions.',
          'Accurate, fast valuation: reliable appraisals with market data, technical info and CARFAX verification.',
          'Quality control: we review trim, images and prices before publishing to ensure coherent listings across portals.',
          'Offers and bundles generation: launch campaigns, feature vehicles and move stock with tools built to drive rotation.',
          'Direct integration with the Multipublisher for immediate publication across every portal.',
        ],
      },
      {
        type: 'process',
        title: 'How we help you go further',
        steps: [
          { title: 'Accurate, fast valuation', description: 'Get reliable appraisals based on market data, technical info and CARFAX verifications. Speed up the used-vehicle intake safely.' },
          { title: 'Quality control', description: 'We review trim, images and prices before publishing to deliver more complete, coherent and attractive ads across portals.' },
          { title: 'Offers and bundles', description: 'Create offers and bundles easily and centrally. Launch campaigns, feature vehicles and move stock with tools built for rotation.' },
        ],
      },
      {
        type: 'cta',
        title: 'Want to sell your stock faster, with better margins?',
        lead: "Request a demo and we'll show how Dealer can transform your stock management from the first month.",
      },
    ],
  },
  'lead-factory': {
    subtitle: 'Save time and focus on closing sales',
    sections: [
      {
        type: 'features',
        title: 'Why is 5-Star Lead different?',
        lead: "We don't sell databases. We capture active prospects in the middle of buying and selling their vehicle.",
        items: [
          { title: 'Double lead in one contact', description: "The seller of a car is, more often than not, also a buyer. We capture that transition moment to give you the most valuable lead in the market.", icon: 'star' },
          { title: 'Geographic segmentation', description: 'Spain divided into 7 exclusive zones. Every dealership receives leads from its influence area, with no competition within its territory.', icon: 'map' },
          { title: 'Real-time delivery', description: 'The lead arrives at your CRM or email the moment the individual submits the form. Zero delay, maximum reactivity.', icon: 'schedule' },
          { title: 'Qualified leads', description: 'Verification process filters out fake or low-quality contacts. You only receive real leads with verified contact data.', icon: 'verified' },
          { title: 'Detailed reporting', description: 'Dashboard with every lead source, visit conversion and final conversion to sale. Real metrics to optimise.', icon: 'analytics' },
          { title: 'CRM integration', description: 'Leads land directly in CRM4YOU or whichever CRM you use. No duplicate data entry.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'From capture to sale in 3 steps',
        lead: 'Our multi-channel capture system delivers a steady flow of high-quality leads to your dealership, every day of the year.',
        highlights: [
          { title: 'Private seller', description: 'Wants to sell their car and buy another' },
          { title: 'Exclusive geographic zone', description: '7 non-overlapping zones in Spain' },
          { title: 'Immediate contact', description: 'Real-time lead with verified data' },
          { title: 'Double opportunity', description: 'Used-vehicle appraisal + new-vehicle sale in one lead' },
        ],
        bullets: [
          'Multi-channel capture: SEO, SEM, Social Ads and specialised portals to reach the seller at the decision moment.',
          'Automatic qualification: the system verifies data and filters fake contacts before delivering the lead.',
          'Immediate delivery: the lead arrives at your email, CRM or WhatsApp in real time with all vehicle and contact data.',
          'Exclusive zones to avoid internal competition between dealerships.',
          'Pay-per-lead with no minimum monthly subscription or commitment.',
        ],
      },
      {
        type: 'process',
        title: 'How does 5-Star Lead work?',
        steps: [
          { title: 'Multi-channel capture', description: 'We capture private sellers via SEO, SEM, Social Ads and specialised portals at the moment they decide to sell their vehicle.' },
          { title: 'Qualification and verification', description: 'The system verifies contact data and filters low-quality leads. Only real, qualified leads reach your dealership.' },
          { title: 'Delivery and follow-up', description: 'The lead arrives in real time at your CRM, email or WhatsApp. Lead-status tracking with monthly conversion reporting.' },
        ],
      },
      {
        type: 'cta',
        title: 'Want leads from car buyers in your area?',
        lead: 'Check the availability of your exclusive zone and start receiving qualified leads from day one.',
      },
    ],
  },
  'exportaciones': {
    subtitle: 'Import your stock, create it with assistance and publish on the leading portals · +1,000 clients publish daily with us',
    sections: [
      {
        type: 'highlights',
        title: 'From simple imports to advanced creation and enriched publication',
        lead: 'Motorflash offers reliability and flexibility at every step. Monitor your inventory with intuitive dashboards, adjust prices to the market in real time and publish your vehicles on the leading portals with enriched information to stand out from the competition. All designed to save time and maximise results.',
        highlights: [
          { title: '+1,000', description: 'Customers publishing daily with our Multipublisher' },
          { title: '+2,500', description: 'Stock exports per day from our platform' },
          { title: '+150', description: 'Native DMS integrations · Ad Hoc services for specific cases' },
          { title: '1M', description: 'Vehicles exported per month to sector portals' },
        ],
        bullets: [
          'Connected to the main vertical portals in Spain (Coches.net, Sumauto, Coches.com, Autocasión, AutoScout24, Wallapop) and Motorflash.com.',
          'Real differentiator: we export listings with each vehicle\'s extra trim perfectly broken out — something most multipublishers do NOT do.',
          'Minimum commitment of 6 months. No invoice surprises and no hidden costs.',
        ],
      },
      {
        type: 'features',
        title: 'Stock import and creation tailored to you',
        lead: 'Three ways to create the listing depending on the reliability and time you want to invest. From manual creation to VIN-based premium creation with optional equipment included automatically.',
        items: [
          { title: 'Basic creation (manual)', description: 'You create the listing from an intuitive JATO-based interface: registration date, type, make, model, version, fuel, doors, body, gearbox and extras.', icon: 'edit_note' },
          { title: 'Advanced creation (by plate)', description: 'Enter the plate and the system auto-fills the basics. You only pick version and extras. Includes basic creation.', icon: 'directions_car' },
          { title: 'Premium creation (by VIN)', description: 'With the VIN we automatically pull every vehicle detail including version and extras. Maximum reliability in the listing. Includes advanced creation.', icon: 'verified' },
          { title: 'Delegated creation by Motorflash', description: 'If you prefer, let our expert team create your listings for you. Save time and gain reliability without distracting your team.', icon: 'support_agent' },
          { title: 'Integration with +150 DMS', description: 'Plugged into most of the DMS in the market: Keyloop, Autoline, Aswin, Incadea, Pymecar, Nextlane, Quiter, Bee2link, Inventario.pro… Plus Ad Hoc services for specific needs.', icon: 'hub' },
          { title: 'Automatic photo import', description: 'Integration with multiple platforms to pull vehicle photos automatically and keep stock always up to date.', icon: 'photo_library' },
          { title: 'Carlens 360 · visual customisation', description: 'Personalise the photos of your listings without needing a photo studio. Save time and raise the visual quality of your catalogue.', icon: 'auto_fix_high' },
          { title: 'Watermarks', description: 'Create watermarks for your campaigns or we manage the ones you provide. Your brand visible on every published photo.', icon: 'branding_watermark' },
        ],
      },
      {
        type: 'features',
        title: 'Dealer: manage your stock like a pro',
        lead: 'All your inventory information summarised in an intuitive dashboard. Compare prices with the market in real time, appraise vehicles instantly and calculate financing for your customers directly from the listing.',
        items: [
          { title: 'Intuitive stock dashboard', description: 'Stock age, days without price change and price analysis on a single screen. Spot at a glance which vehicles need to move.', icon: 'dashboard' },
          { title: 'Estimated price vs market', description: 'Instant comparison of your vehicle prices with similar units listed on the main Spanish portals.', icon: 'price_check' },
          { title: 'Built-in appraiser', description: 'Get a recommended buy/sell price for any vehicle by entering just the plate. Real market data, no opinions.', icon: 'calculate' },
          { title: 'Market temperature', description: 'See which models are hot at any moment and adjust your stock and pricing strategy.', icon: 'thermostat' },
          { title: 'Finance calculator', description: 'Built-in calculators with Banco Santander, CaixaBank, Cetelem and more. Offer customers the best monthly payment from the listing itself.', icon: 'account_balance' },
          { title: 'Custom bundles and offers', description: 'Generate bundles and tailored offers per customer from the vehicle listing in one click.', icon: 'description' },
        ],
      },
      {
        type: 'features',
        title: 'Exports: publish where it pays off, with enriched information',
        lead: 'You decide which vehicles go to each portal: bulk, selective or mixed publication. Gateway to the main vertical car-trading portals in Spain and a centralised dashboard to control it all.',
        items: [
          { title: 'Bulk, selective or mixed publication', description: 'Choose which listings to export to each portal. Maximum flexibility — you set the per-portal strategy.', icon: 'tune' },
          { title: 'Enriched listing', description: 'Unlike other multipublishers, we export each listing with each unit\'s extra trim perfectly broken out. Your ads stand out.', icon: 'auto_awesome' },
          { title: 'Gateways with the main portals', description: 'Coches.net, Sumauto, Coches.com, Autocasión, AutoScout24, Wallapop and more. One tool, every portal.', icon: 'sync_alt' },
          { title: 'Exports dashboard', description: 'Global control and visualisation of stock per portal. You always know which vehicle is published where and in which state.', icon: 'monitoring' },
          { title: 'Motorflash.com included', description: 'Your stock also publishes on motorflash.com with the first 10 monthly leads free, included on every tier.', icon: 'language' },
          { title: 'Unlimited accounts per portal', description: 'Coches.net, Sumauto and vertical portals with unlimited accounts from the S tier upwards. One fee for the whole network, not per account.', icon: 'all_inclusive' },
        ],
      },
      {
        type: 'process',
        title: 'In 2 weeks you are publishing with the Multipublisher',
        steps: [
          { title: 'Contract signing and kick-off', description: 'We sign the contract and get started. In the initial session we collect your portal account details and store information.' },
          { title: 'Account and store creation', description: 'We set up your Multipublisher account, stores and users to fit your structure.' },
          { title: 'Stock import', description: 'We connect your DMS or load the initial Excel and bring all your stock into the system. From there, data syncs automatically.' },
          { title: 'Exports and go-live', description: 'We activate exports to the relevant portals. Optionally, we run a stock qualification pass to raise listing quality from day one.' },
        ],
      },
      {
        type: 'cta',
        title: 'How many vehicles do you publish per month?',
        lead: "Tell us the size of your stock and we'll show a real case from a group your size. In 30 minutes you know which tier fits and what you'd pay.",
      },
    ],
  },
  'motorflash-connect': {
    subtitle: 'Personalised AI videos to retain and sell more to your leasing customers',
    sections: [
      {
        type: 'highlights',
        title: "When the leasing ends, you lose the customer. And the competition is already calling them.",
        lead: "Every year, thousands of customers end their contract without renewing because they didn't receive a personalised proposal in time. Your team can't reach everyone. Mass emails get ignored. MotorFlash Connect turns that contract end into a new sale, automatically, with a unique video per customer.",
        highlights: [
          { title: '100%', description: 'Of your portfolio contacted with a personalised video' },
          { title: '×5', description: 'Response rate vs traditional sales email' },
          { title: '0', description: 'Manual creation work: AI generates everything' },
          { title: 'White-label', description: 'Your logo, your colours, your domain. The customer sees your brand, not ours' },
        ],
        bullets: [
          "Zero customers lost to sales overflow: the platform reaches 100% of the portfolio, not just the ones your team can call.",
          'Recover leads that slipped through the cracks: AI fires the video on the optimal date before contract end.',
          'Multi-organisation: if you have several dealerships or brokers, each with their own branding and configuration on a single platform.',
        ],
      },
      {
        type: 'features',
        title: 'A unique video per customer, generated by AI in minutes',
        lead: 'Each customer receives a personalised piece with their name, their current car, their monthly payment and up to 5 real proposals to renew, switch model, upgrade or buy the vehicle. All with a single click to respond.',
        items: [
          { title: 'Natural AI voice in Spanish', description: "Voices selectable and tunable per organisation (powered by ElevenLabs). Greets the customer by name with a natural tone — from sober to friendly and dynamic, matching your brand.", icon: 'record_voice_over' },
          { title: 'Up to 5 real proposals per customer', description: 'Renew with the same new model, switch to another brand model, upgrade, renew with reduced terms or buy the car cash or financed. You define them, AI personalises them.', icon: 'tune' },
          { title: 'One-click reply buttons', description: 'The customer opens the video, sees the options and clicks the one they like. Zero friction, zero forms, zero discovery calls.', icon: 'ads_click' },
          { title: '100% white-label branding', description: "Your logo, your corporate colours, your domain. The customer never sees 'MotorFlash' anywhere — they see your organisation in every frame.", icon: 'palette' },
          { title: 'Multi-channel: email and WhatsApp', description: 'The video arrives by email, WhatsApp or both, depending on the customer\'s preferences. More open opportunities, more replies.', icon: 'forward_to_inbox' },
          { title: 'Multi-tenant and GDPR', description: 'Each organisation has its own isolated space. Customer data on European servers, GDPR compliance guaranteed, independent branding and configuration.', icon: 'shield' },
        ],
      },
      {
        type: 'process',
        title: 'From portfolio to closed sale in 4 steps',
        steps: [
          { title: 'Import your portfolio', description: 'Upload an Excel with your customers and active leases, or connect your ERP via REST API. The platform reads customer data (name, email, phone), current car (make, model, plate, monthly payment) and contract-end dates.' },
          { title: 'Configure your proposals', description: 'For each customer or customer type you define up to 5 specific offers with monthly payment, model and photos: renew, switch to another model, upgrade, reduce mileage, buy cash or financed.' },
          { title: 'The platform sends the video', description: 'When X days remain to contract end (you decide how many), the system generates the AI voice, composes the video with your branding and sends it by email and/or WhatsApp. Your team touches nothing.' },
          { title: 'Close the sale', description: 'The customer replies in one click. Your rep instantly receives an email + CRM notification with the chosen option and customer data. They call already knowing what the customer wants.' },
        ],
      },
      {
        type: 'features',
        title: 'Beyond leasing end: a campaign engine all year round',
        lead: 'On top of the contract-end flow, MotorFlash Connect includes an engine to send personalised videos at any point in the year. You design the campaign once and the platform fires it automatically, personalised for each customer.',
        items: [
          { title: 'Seasonal campaigns', description: 'Winter tyres, MOT/ITV inspection, oil change, insurance renewal. Automatic videos on the right date for each customer.', icon: 'event_repeat' },
          { title: 'Fixed-date campaigns', description: 'Black Friday, new model launch, fiscal year end. You set the date and audience, the platform sends with each customer\'s name and data.', icon: 'calendar_month' },
          { title: 'Audience-based campaigns', description: 'Define a specific database (customers of a certain brand, payment range, age) and send them an exclusive offer with personalised video.', icon: 'group' },
          { title: 'CRM/ERP integration', description: 'REST API and webhooks to sync portfolio, trigger campaigns from your CRM and forward replies automatically to the right lead.', icon: 'integration_instructions' },
        ],
      },
      {
        type: 'cta',
        title: "30 minutes and we'll show you a real video with one of your customers",
        lead: 'Personalised demo: video generated with a real case from your portfolio (with your authorisation), reply panel and metrics, integration with your current system and estimated ROI calculation. SaaS model with no commitment and a pilot plan to validate before deciding.',
      },
    ],
  },
}
