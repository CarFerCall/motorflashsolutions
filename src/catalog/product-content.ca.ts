/**
 * Contingut ric per producte en català.
 * Mirroreig de product-content.es.ts amb les traduccions completes
 * dels 12 productes amb fitxa enriquida.
 */
import type { ProductContent } from './product-content'

export const productContent: Record<string, ProductContent> = {
  motorchat: {
    subtitle: "La IA de Motorflash que atén els teus xats de Coches.net, Wallapop i Milanuncios a l'instant",
    sections: [
      {
        type: 'highlights',
        title: 'El problema que t\'està costant vendes',
        lead: 'Pagues per ser als portals líders… però el retorn es perd pel camí. Motor-Chat converteix cada missatge en una oportunitat real.',
        highlights: [
          { title: '24/7', description: "Atenció sense descans — també fora d'horari comercial" },
          { title: '0', description: 'Xats sense resposta · cap client es queda sense contestar' },
          { title: 'Immediata', description: "Contesta al mateix moment en què t'escriuen" },
          { title: 'CRM', description: 'El lead entra directe a la teva eina, llest per vendre' },
        ],
        bullets: [
          'Inverteixes als portals, però els leads no arriben: pagues per visibilitat a Coches.net i Wallapop i els missatges s\'acumulen sense convertir-se en oportunitats reals.',
          'Una persona atenent tots els comptes, a mà: algú del teu equip amb tots els comptes oberts tot el dia, responent un a un. Hores perdudes i respostes que arriben tard.',
          'Resultat: menys leads, atenció lenta i el teu equip atrapat gestionant portals en comptes de vendre.',
        ],
      },
      {
        type: 'features',
        title: 'Motor-Chat atén per tu, a l\'instant',
        lead: 'Un agent d\'IA connectat a Coches.net, Wallapop i Milanuncios que respon, qualifica i entrega el lead al teu CRM.',
        items: [
          { title: 'Respon a l\'instant', description: "Resposta immediata mitjançant conversa en temps real, a qualsevol hora. Sense torns ni horaris.", icon: 'bolt' },
          { title: 'Demana les dades i genera el lead', description: "Qualifica el client i recull la informació clau (vehicle d'interès, intenció, contacte) en una conversa natural.", icon: 'contact_page' },
          { title: "L'envia al teu CRM", description: 'El lead entra directe a la teva eina comercial llest per vendre. Sense transvasaments manuals ni doble entrada de dades.', icon: 'sync_alt' },
          { title: 'Coches.net · Wallapop · Milanuncios', description: 'Connectat als principals portals del sector. Un sol agent que atén tots els teus comptes en paral·lel.', icon: 'hub' },
          { title: 'Panell real de gestió', description: "Dashboard amb l'estat de cada conversa, leads generats per portal i mètriques de rendiment.", icon: 'analytics' },
          { title: "Sense corba d'aprenentatge", description: 'Motor-Chat es connecta als teus comptes existents de portals i al teu CRM actual. Zero configuració manual.', icon: 'settings' },
        ],
      },
      {
        type: 'highlights',
        title: 'El que canvia al teu negoci',
        lead: 'Més leads captats, menys temps de resposta i menys gestió manual. Motor-Chat et retorna les hores que avui perds als portals.',
        highlights: [
          { title: '+ Més leads', description: 'Captats i qualificats · el volum puja perquè cap xat es queda sense resposta' },
          { title: '− Menys temps', description: 'De resposta al client · contesta al segon, al mateix moment en què escriu' },
          { title: '− Menys gestió', description: 'Manual dels portals · el teu equip deixa de perseguir missatges i se centra en vendre' },
          { title: '× 0 Xats perduts', description: "Cap client sense resposta · atenció garantida 24/7" },
        ],
        bullets: [
          'Motor-Chat treballa 24 hores, 7 dies a la setmana, sense descans ni vacances.',
          'Cada conversa queda registrada, qualificada i auditable des del panell.',
          'Compatible amb qualsevol CRM del mercat mitjançant integració estàndard.',
        ],
      },
      {
        type: 'cta',
        title: 'Deixa que Motor-Chat gestioni per tu',
        lead: 'Sol·licita la teva demo i t\'ensenyem com Motor-Chat respon els teus xats i omple el teu CRM de leads des del primer dia.',
      },
    ],
  },
  'contact-center': {
    subtitle: 'Gestiona trucades, xats i missatges des d\'una sola plataforma connectada amb el teu CRM',
    sections: [
      {
        type: 'features',
        title: 'Control total, atenció que converteix',
        lead: 'Gestiona trucades, xats i missatges des d\'un sol entorn. La nostra IA de veu atén i qualifica leads en temps real, mentre el sistema de Quality Monitoring analitza i puntua cada conversa.',
        items: [
          { title: 'Trucades inbound i outbound', description: "Atenem les trucades entrants i fem campanyes de trucades sortints per contactar i qualificar tots els teus leads en menys de 5 minuts.", icon: 'support_agent' },
          { title: 'Qualificació de leads', description: "Els nostres agents especialitzats en automoció detecten el nivell d'interès, el vehicle buscat, el termini de compra i el pressupost de cada lead.", icon: 'verified' },
          { title: "Gestió d'agenda", description: "Concertem visites i proves de ruta directament a l'agenda dels teus assessors. Els teus comercials reben el lead ja amb cita confirmada.", icon: 'calendar_month' },
          { title: 'Campanyes de correu i SMS', description: 'Seqüències de comunicació multicanal que complementen la gestió telefònica: correus de seguiment, SMS de recordatori i confirmació de cites.', icon: 'chat' },
          { title: 'Reporting en temps real', description: 'Dashboard amb el rendiment de cada campanya, taxa de contactabilitat, conversió a visita i tancament. Mètriques reals per prendre decisions.', icon: 'analytics' },
          { title: 'Equip especialitzat en automoció', description: 'Agents formats específicament en el sector del motor. Saben de què parlen al client i com qualificar correctament cada lead.', icon: 'group' },
        ],
      },
      {
        type: 'highlights',
        title: 'El lead gestionat a temps multiplica la conversió',
        lead: "El temps de resposta és el factor més crític en la conversió de leads d'automoció. Els leads contactats en menys de 5 minuts converteixen fins a 9 vegades més.",
        highlights: [
          { title: 'Contacte en <5 minuts', description: 'El millor temps de resposta del sector' },
          { title: 'Lead qualificat amb cita', description: "El teu assessor només atén visites confirmades" },
          { title: '70.000 trucades/mes', description: "Experiència a escala en automoció" },
          { title: 'Agents especialitzats', description: "Coneixen el sector de l'automoció" },
        ],
        bullets: [
          "Contacte en menys de 5 minuts: el teu lead és trucat abans que tingui temps de contactar amb la competència.",
          "Persistència controlada: fins a 6 intents de contacte per lead amb pauses optimitzades per maximitzar la taxa de contacte.",
          "Escala sense fricció: absorbeix pics de leads sense necessitat d'ampliar la teva plantilla. Pagues per lead gestionat.",
          'Gravació de totes les trucades per a control de qualitat i formació',
          'Integració directa amb el teu CRM sense doble entrada de dades',
        ],
      },
      {
        type: 'process',
        title: 'Com treballem amb tu?',
        steps: [
          { title: 'Configuració del servei', description: "Definim amb tu els scripts de trucada, els criteris de qualificació i la integració amb el teu CRM i agenda d'assessors." },
          { title: 'Activació i gestió de leads', description: "Tan aviat com arriba un lead, el nostre equip el contacta en menys de 5 minuts i realitza els intents necessaris fins a establir contacte." },
          { title: 'Entrega i seguiment', description: 'El lead qualificat i amb cita arriba al teu CRM. Informe setmanal amb resultats i mètriques de conversió del teu concessionari.' },
        ],
      },
      {
        type: 'cta',
        title: 'Vols que cap lead es quedi sense trucar?',
        lead: 'Sol·licita una proposta personalitzada i t\'expliquem com Contact Center pot augmentar la teva taxa de conversió des del primer mes.',
      },
    ],
  },
  'spyne': {
    subtitle: "La solució d'IA per als teus catàlegs de cotxes — abans Carlens",
    sections: [
      {
        type: 'highlights',
        title: 'El 95% dels concessionaris publica online. I el 40% dels compradors decideix sense trepitjar el concessionari.',
        lead: "Les teves fotos són la teva força de venda. Fer-les bé amb el mètode tradicional costa temps, diners i un fotògraf professional. Photocall IA elimina aquestes tres barreres d'un cop: qualsevol persona del concessionari pot generar fotos i vídeos de qualitat professional des de l'aparcament.",
        highlights: [
          { title: '95%', description: 'De concessionaris publiquen el seu estoc online' },
          { title: '40%', description: "De compradors no arriben a veure el cotxe en persona abans de decidir" },
          { title: '4,2 webs', description: "On entra un comprador abans de triar vehicle" },
          { title: '+150', description: "Funcionalitats d'IA disponibles entre detecció i transformació" },
        ],
        bullets: [
          "Costos: t'estalvies fotògraf professional, estudi i equipament.",
          "Experiència: la guia en pantalla i la IA cobreixen la part tècnica per tu.",
          'Temps: foto al cotxe, processat automàtic i publicació a l\'instant als teus canals.',
        ],
      },
      {
        type: 'features',
        title: 'Imatges i vídeos que converteixen',
        lead: "IA al núvol + app mòbil. Qualsevol comercial del concessionari fa la foto, la IA fa la resta: fons professional, reflexos, il·luminació, matrícula, angle… Tot automàtic i amb resultat consistent a cada vehicle.",
        items: [
          { title: 'Substitució automàtica de fons', description: "La IA detecta el cotxe, retalla i reemplaça el fons per un de professional, un estudi virtual o el fons personalitzat del teu concessionari amb el teu logo.", icon: 'wallpaper' },
          { title: 'Generació de plataforma giratòria', description: 'Genera automàticament la plataforma/terra sota el cotxe perquè sembli pres en estudi, fins i tot si la foto es va fer al parking.', icon: 'view_in_ar' },
          { title: 'Vídeo Spin 360° interactiu', description: 'Crea vídeos 360° que mostren el vehicle des de tots els angles. El comprador gira el cotxe des del seu mòbil — més temps a la fitxa, més conversió.', icon: 'rotate_90_degrees_ccw' },
          { title: "Correcció de reflexos i ombres", description: "Identifica i elimina reflexos en carrosseria i vidres, ajusta ombres i millora la il·luminació perquè cada foto llueixi com editada a mà.", icon: 'auto_fix_high' },
          { title: 'Cobertura intel·ligent de matrícula', description: 'Substitueix la matrícula per una de neta, l\'oculta o la cobreix amb el logo del concessionari. RGPD complert sense passos manuals.', icon: 'directions_car' },
          { title: 'Tintat de vidres i visió interior', description: 'Cobreix finestres per a imatge homogènia o tapa el que es veu a través (gent, altres cotxes, parets) — el focus sempre al vehicle.', icon: 'blur_on' },
          { title: "Correcció d'inclinació i angle", description: "Detecta i corregeix automàticament la inclinació del cotxe i la perspectiva perquè totes les fotos del catàleg tinguin el mateix enquadrament.", icon: 'straighten' },
          { title: '+50 deteccions automàtiques amb IA', description: 'Identifica reflexos, exposició, desenfocament, imatges retallades, angle de posició, distància, tipus de cotxe, tons, pneumàtics i fang a les rodes — auditoria contínua de la qualitat.', icon: 'auto_awesome' },
          { title: 'Logo del concessionari incrustat', description: 'La teva marca al fons i a la matrícula sense que es noti edició. Catàleg coherent a tots els portals.', icon: 'verified' },
          { title: "Millora de fotos d'interior", description: 'Corregeix la inclinació interior, cobreix exteriors visibles per les finestres i millora la il·luminació de l\'habitacle.', icon: 'airline_seat_recline_normal' },
          { title: 'Millora de resolució i enfocament', description: "Apuja la nitidesa i l'enfocament d'imatges antigues o de baixa resolució. Auditoria automàtica del catàleg històric.", icon: 'high_quality' },
          { title: 'Reajust de mides per portal', description: 'Genera automàticament totes les variants de mida que demana cada portal (Coches.net, AutoScout24, xarxes socials, la teva web…).', icon: 'aspect_ratio' },
        ],
      },
      {
        type: 'highlights',
        title: "5 maneres d'integrar Photocall IA al teu concessionari",
        lead: 'Tu tries el canal que millor encaixa amb els teus processos. Funcionen en paral·lel: algú fa fotos amb l\'app mentre el sistema fica les del DMS per API.',
        highlights: [
          { title: 'App iOS / Android', description: 'Fa fotos qualsevol, sense formació tècnica' },
          { title: 'Consola Carlens360', description: 'Panell web amb totes les teves fotos i projectes' },
          { title: 'API i integració DMS', description: "Puja tot l'inventari automàticament" },
          { title: 'SDK', description: 'Encasta el flux de fotos a la teva app' },
        ],
        bullets: [
          'Carlens App: senzilla a iOS i Android, guia pas a pas per a cada angle del vehicle.',
          "Consola Carlens360: accés web a totes les teves fotos, projectes i configuracions d'IA.",
          'API: actualitza l\'inventari complet des del teu DMS sense intervenció manual.',
          "SDK: embebeix el flux de captura a l'app del concessionari o del fabricant.",
          'Integració DMS: ens connectem al workflow que ja tens — concessionari → proveïdor web → portal.',
        ],
      },
      {
        type: 'process',
        title: 'De la foto a la publicació en minuts',
        steps: [
          { title: "Captura amb l'app", description: "El comercial obre la Carlens App, escaneja el vehicle i segueix la guia en pantalla per capturar tots els angles. Sense estudi, sense trípode, sense fotògraf." },
          { title: 'Processat automàtic amb IA', description: "Les imatges pugen al núvol. La IA aplica les +100 transformacions configurades (fons, reflexos, matrícula, logo, vídeo 360°) i audita la qualitat amb +50 deteccions automàtiques." },
          { title: 'Publicació sincronitzada', description: 'El vehicle, les seves fotos finals i el vídeo 360° es publiquen a la teva web, a Coches.net, AutoScout24 i al teu DMS. Sense re-feina i sense diferències entre canals.' },
        ],
      },
      {
        type: 'cta',
        title: 'Vols veure el teu catàleg transformat amb IA?',
        lead: 'T\'ensenyem una demo amb fotos reals del teu estoc processades en directe. Set up des de 150 €, processat des de 4 € per galeria de fins a 40 fotos (5,50 € amb Spin 360° inclòs).',
      },
    ],
  },
  'motorflash-message': {
    subtitle: "WhatsApp per a empreses de l'automòbil · IA primer · des de 20 €/usuari/mes · pilot de 4 setmanes",
    sections: [
      {
        type: 'highlights',
        title: 'El valor del lead es deteriora minut a minut',
        lead: "Prop del 75 % dels compradors compren al primer concessionari que respon — la rapidesa és la palanca de conversió més gran. MF Message és l'única plataforma de WhatsApp dissenyada específicament per a empreses de l'automòbil: dashboard, coexistència, IA conversacional i enrutament a escala de grup.",
        highlights: [
          { title: '60 %', description: 'Conversió si respons en menys d\'1 minut' },
          { title: '65 %', description: 'Dels leads de formulari no reben resposta en 24 hores' },
          { title: '25-42 %', description: "Dels leads telefònics no s'atenen eficaçment mai" },
          { title: 'Des de 20 €', description: 'Per usuari/mes — 6-8× més barat que la competència CX' },
        ],
        bullets: [
          "Un lead perd la seva eficàcia 30 minuts després d'enviar-se per a la seva gestió.",
          "Els portals verticals van llançar WhatsApp com a xat web: bot bàsic, sense transferència a comercial, sense analítica, sense traçabilitat de tancament.",
          "MF Message resol aquest buit: WhatsApp empresarial real amb IA, coexistència i enrutament entre centenars de concessionaris.",
          'IA primer, plataforma multi-agent amb dashboard i SLA sota control des del dia 1.',
        ],
      },
      {
        type: 'features',
        title: 'Les 5 claus de MF Message',
        lead: "El que WhatsApp Business no ofereix — i el que ni tan sols les plataformes CX empresarials han adaptat al sector de l'automòbil.",
        items: [
          { title: 'Dashboard i analítica de dades', description: 'KPIs en directe (converses totals, transferides, ateses a temps, perdudes), temps d\'espera i SLA per canal/grup/franja, activitat per equip i agent, etiquetatge de converses amb estat i etiquetes personalitzades, exportació a Excel.', icon: 'analytics' },
          { title: 'Coexistència · sense barreres', description: "Sense plantilles de Meta, sense finestra de 24 hores: el teu equip escriu lliurement en llenguatge natural. Connecta amb les línies WhatsApp Business que els teus comercials ja fan servir, i tot queda registrat al panell i al teu CRM en segon pla.", icon: 'sync' },
          { title: 'Dues arquitectures diferents', description: 'A) Un número mestre → molts negocis: enrutament per marca, geografia, model o campanya (cas Das WeltAuto: 200+ concessionaris sota un número). B) Molts negocis → moltes línies: ideal per a portals que revenen la plataforma als seus dealers.', icon: 'account_tree' },
          { title: 'IA conversacional en producció', description: "Primera línia de resposta: qualifica leads, concerta visites, optimitza la conversa 24/7 i només escala a humà quan cal criteri. Multilingüe, NLP amb intenció/entitat/sentiment, prompt editable des de la mateixa eina.", icon: 'smart_toy' },
          { title: 'API · el connector que unifica els quatre', description: 'Un únic hub bidireccional que connecta clients (WhatsApp directe, leads de portals, CTA web), espai d\'agents, comercials i el teu CRM. Compliment RGPD d\'extrem a extrem i entrega en temps real.', icon: 'hub' },
          { title: 'Plataforma específica per a automoció', description: 'Dissenyada per tancar vendes al sector del motor: estats del client (En conversa → Compra → Finançament → Postvenda) sincronitzats amb el CRM, plantilles i enrutament a punt per a concessionari.', icon: 'verified' },
        ],
      },
      {
        type: 'highlights',
        title: 'Coexistència: 0 barreres, 0 bloquejos',
        lead: "Connecta MF Message amb l'app de WhatsApp Business que el comercial ja té al seu telèfon (línia d'empresa). Cada xat flueix al panell i al CRM en segon pla, sense que el comercial hagi d'instal·lar res. Funciona amb els comptes que ja fa servir l'equip, no amb un xat web genèric.",
        highlights: [
          { title: 'Sense plantilles de Meta', description: 'Text lliure en llenguatge natural · sense bloquejos previs' },
          { title: 'Sense finestra de 24 h', description: "Les converses no es tanquen mai · respon quan calgui" },
          { title: 'Sense costos de plantilla', description: "Aprofita la línia Business que ja tens" },
          { title: 'Traçabilitat total al CRM', description: 'Cada missatge sincronitzat · panell de moderació centralitzat' },
        ],
        bullets: [
          "Connectar → Sincronitzar → Treballar com sempre: el comercial continua xatejant de manera nativa.",
          "Compatible amb la línia d'empresa (un número personal està prohibit a Espanya per a ús professional).",
          'Fa servir els contactes que ja tens al telèfon, sense migracions.',
          'Panell central amb KPIs i SLA per agent, grup i franja horària.',
        ],
      },
      {
        type: 'features',
        title: 'IA en producció — el teu primer agent incansable',
        lead: "La IA de MF Message gestiona converses entrants de principi a fi i només escala quan es requereix criteri humà. Operativa avui en comptes reals amb mètriques per client disponibles sota petició.",
        items: [
          { title: 'Resposta instantània 24/7', description: 'Primera resposta en menys d\'un segon. Cap client espera, ni de nit ni en cap de setmana.', icon: 'bolt' },
          { title: 'NLP multilingüe', description: 'Intenció, entitat i sentiment extrets de l\'historial complet de conversa a nivell de grup. Conversa natural en diversos idiomes.', icon: 'translate' },
          { title: 'Qualificació de leads automàtica', description: 'Vehicle, pressupost, geografia i intenció s\'extreuen i s\'envien al CRM. La IA concerta visites i reserva proves de conducció.', icon: 'fact_check' },
          { title: 'Traspàs fluid a l\'humà', description: 'Quan l\'operació madura, la IA transfereix al comercial amb tot el context. Sense repeticions, sense pèrdua d\'informació.', icon: 'forward_to_inbox' },
          { title: 'Cerca a tota la base de dades', description: "Consulta tot el teu estoc per donar al client la informació màxima disponible. Cada consulta s'executa de manera anonimitzada i conforme amb el RGPD.", icon: 'search' },
          { title: 'Prompt editable + retroalimentació', description: 'Ajusta el comportament de la IA des de la mateixa eina amb blocs de comportament. Comenta les respostes per corregir-la i entrenar-la: millora contínuament.', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: 'Cas real · Das WeltAuto',
        lead: "L'operació de vehicles d'ocasió certificats del Grup Volkswagen a Espanya gestiona tot el seu negoci de WhatsApp a través de MF Message: una única porta d'entrada per a tota Espanya i enrutament automàtic al concessionari adequat.",
        highlights: [
          { title: '200+', description: 'Concessionaris sota un únic número mestre' },
          { title: '1', description: "Número de cara al client per a tota Espanya" },
          { title: '5', description: 'Unitats de negoci enrutades (vendes, servei, recanvis, administració, postvenda)' },
          { title: '288', description: 'Concessionaris amb panell a nivell de grup' },
        ],
        bullets: [
          'Cada consulta de WhatsApp s\'enruta al concessionari i unitat de negoci adequats, automàticament.',
          'Visibilitat total des de la central · panells a nivell de grup en els 288 concessionaris i 5 unitats de negoci.',
          "Historial complet de converses al CRM, fins i tot quan canvien els concessionaris: les dades del client romanen al grup.",
          "Conforme amb el RGPD per disseny · cada consentiment amb marca temporal · cada interacció auditable.",
        ],
      },
      {
        type: 'highlights',
        title: 'Preus dissenyats per superar el mercat',
        lead: 'Transparent, modular i amb el trànsit de Meta repercutit a cost. Sense marges ocults. Les plataformes CX empresarials arrenquen a 132-169 € per usuari — MF Message arrenca a 20 €.',
        highlights: [
          { title: 'Des de 20 €/usuari/mes', description: 'Llicència unificada: WhatsApp Business + Coexistència. Consola, campanyes, analítica i RGPD inclosos.' },
          { title: '132-169 € la competència', description: 'Zendesk 169 $ · Salesforce 165 $ · Twilio Flex 150 $ · Intercom 132 $ · 6-8× més car que MF abans de complements.' },
          { title: 'IA · 150 €/mes + 0,08 €/conv.', description: 'Tot inclòs: LLM, orquestració i millora contínua. Una llicència, un preu per conversa.' },
          { title: 'Trànsit Meta a cost', description: '≈ 0,0509 €/conversa sortint si fas servir plantilla de màrqueting · sense recàrrec.' },
        ],
        bullets: [
          "Descomptes per volum a partir de 100 / 250 usuaris actius.",
          'SLA empresarials i gestió d\'èxit dedicada inclosos.',
          'Fins a 6,50 € per lot d\'agents addicionals.',
          "Preus d'entrada orientatius · preu final adaptat al volum i a l'abast del projecte.",
        ],
      },
      {
        type: 'process',
        title: 'De la sessió de descobriment al desplegament de grup',
        steps: [
          { title: 'Sessió de descobriment (60 min)', description: "Taller amb el teu equip d'operacions comercials + IT per mapejar la teva presència actual a WhatsApp, els fluxos de resposta del concessionari i els punts on es perden leads avui." },
          { title: 'Pilot en 4 setmanes', description: "Connectem 3-5 concessionaris i validem Coexistència + enrutament + IA + sincronització amb CRM d'extrem a extrem. Proves amb converses reals en producció." },
          { title: 'Desplegament per fases al grup', description: "Implantació progressiva per marques, regions i unitats de negoci, co-liderada per Motorflash. Onboarding de l'equip i mètriques actives des del primer dia." },
        ],
      },
      {
        type: 'cta',
        title: 'Construïm el que ve · porta WhatsApp a la teva operació, a escala de grup',
        lead: 'Reserva la sessió de descobriment de 60 minuts amb el nostre equip. En 4 setmanes tens pilot en producció amb 3-5 concessionaris i, si encaixa, pla de desplegament de grup. Contacte directe: Andrés Tejero · info@motorflash.com · +34 913 728 790.',
      },
    ],
  },
  'ia': {
    subtitle: 'IA a WhatsApp, Xat web i Veu — disponibles 24/7',
    sections: [
      {
        type: 'features',
        title: 'IA conversacional adaptada a cada canal',
        lead: 'Cada canal té el seu propi comportament i el seu propi tipus de client. Les nostres solucions d\'IA estan dissenyades específicament per a WhatsApp, web i veu, maximitzant la conversió a cada punt de contacte.',
        items: [
          { title: 'IA a WhatsApp', description: 'Canal directe i familiar: el client ja fa servir WhatsApp, sense barreres ni descàrrega. Conversa lliure, natural i disponible 24/7 per captar leads, respondre dubtes i enviar informació del vehicle.', icon: 'chat' },
          { title: 'Xat web amb flux tancat', description: "Integrat a la teva web: capta l'usuari mentre navega. Ideal per a tasques concretes com formularis, reserves, FAQs o cotitzacions. Guia el client pas a pas cap a la conversió.", icon: 'edit_note' },
          { title: 'IA de Veu', description: "Assistent de veu intel·ligent per concertar cites, resoldre dubtes ràpids o completar processos iniciats per xat. Atén trucades fora d'horari sense deixar cap lead sense resposta.", icon: 'support_agent' },
          { title: 'Disponible 24/7 sense descans', description: "La IA atén en festius, a la nit i en caps de setmana. Cap lead es queda sense resposta per fora d'horari. Més oportunitats de venda, sense cost addicional de personal.", icon: 'schedule' },
          { title: 'Relació i seguiment continu', description: 'La IA manté el fil de la conversa al llarg de diversos dies. Reactiva leads freds, concerta recordatoris i segueix el client fins a la venda.', icon: 'autorenew' },
          { title: 'Integració amb el teu CRM i sistemes', description: "Cada conversa queda registrada a CRM4YOU. La IA coneix l'estoc, els preus i la disponibilitat dels teus vehicles en temps real.", icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'El canal marca la diferència en la conversió',
        lead: "No tots els canals d'IA tenen el mateix abast ni les mateixes possibilitats de seguiment. Entendre les diferències t'ajuda a triar la combinació més rendible per al teu concessionari.",
        highlights: [
          { title: 'IA a WhatsApp', description: 'Canal familiar · Seguiment post-visita' },
          { title: 'Xat web amb flux tancat', description: 'Ideal per a reserves, FAQs i cotitzacions' },
          { title: 'IA de Veu', description: 'Cites i dubtes resolts per veu 24/7' },
          { title: 'Leads al CRM', description: "Sense doble entrada, historial complet" },
        ],
        bullets: [
          'Abast: WhatsApp arriba al client on ja és; el xat web només funciona mentre navega per la teva pàgina.',
          "Conversa: la IA de WhatsApp entén preguntes lliures; el xat web segueix fluxos predefinits.",
          "Seguiment: WhatsApp permet reprendre el contacte dies després; el xat web acaba quan l'usuari tanca la pestanya.",
          'WhatsApp és més proper i genera més confiança que un xat web genèric',
          'El xat web és ideal per a processos estructurats: reserves, cotitzacions o FAQs',
        ],
      },
      {
        type: 'process',
        title: "Com funciona la IA de Motorflash?",
        steps: [
          { title: 'Configurem el teu canal', description: "Definim amb tu el canal o canals d'IA més adequats per al teu negoci: WhatsApp, xat web o veu. Configurem els fluxos de conversa i els integrem amb el teu CRM." },
          { title: 'La IA atén i qualifica', description: "La intel·ligència artificial conversa amb els teus clients de manera natural, respon dubtes, capta dades de contacte i detecta el nivell d'interès de cada prospecte en temps real." },
          { title: 'Lead qualificat al teu equip', description: 'Els leads amb més intenció de compra es traslladen a l\'equip de vendes amb l\'historial de conversa complet. El teu assessor entra en acció al millor moment.' },
        ],
      },
      {
        type: 'cta',
        title: "El teu concessionari perd leads fora d'horari d'atenció?",
        lead: "Activa la IA conversacional i comença a captar i qualificar leads les 24 hores, sense ampliar la teva plantilla.",
      },
    ],
  },
  'soluciones-web': {
    subtitle: 'Optimitzada per vendre, rendiment ràpid i total autonomia de gestió',
    sections: [
      {
        type: 'features',
        title: "El teu aparador digital, amb tot sota control",
        lead: "Gestiona contingut, promocions i estoc des d'un mateix panell. Rendiment, disseny i facilitat d'ús per impulsar els teus resultats online.",
        items: [
          { title: 'Web 100 % automoció', description: "Inclou tot el que un concessionari necessita: gestió d'estoc, leads, rènting, taxacions i més, amb una experiència d'usuari fluida i professional.", icon: 'language' },
          { title: 'Disseny optimitzat per generar leads', description: 'UX/UI pensat per convertir visites en contactes: formularis intel·ligents, passarel·les de pagament i seccions personalitzades per destacar les teves ofertes.', icon: 'trending_up' },
          { title: 'Autogestionable amb IA', description: 'Crea i actualitza els teus continguts, landings i formularis amb el nostre CMS potenciat per intel·ligència artificial per a una gestió més fluida.', icon: 'auto_awesome' },
          { title: 'Dissenyada per convertir en dos clics', description: 'Estructura orientada a la conversió, amb formularis intel·ligents i passarel·les de pagament integrades.', icon: 'verified' },
          { title: 'Optimitzada per a SEO', description: 'Marcatge de dades estructurades automàtic, sitemap dinàmic, velocitat Core Web Vitals A+ i arquitectura SEO friendly des del primer dia.', icon: 'trending_up' },
          { title: 'CMS propi pensat per al sector', description: 'Sense plugins externs. Tot el que necessita un concessionari integrat nativament: estoc, leads, taxacions, formularis i reporting.', icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: '10 avantatges que ens diferencien de la competència',
        lead: 'La nostra tecnologia integra les bases de dades més completes del sector perquè la teva web sigui la més informativa i la que millor converteix.',
        highlights: [
          { title: 'Base de dades JATO/Eurotax', description: 'Equipament complet automàtic' },
          { title: 'Feeds automàtics de fabricant', description: "Estoc sempre actualitzat" },
          { title: 'Calculadora financera', description: 'Comptat i finançament integrats' },
          { title: 'Formulari de taxació online', description: 'Capta leads de venda de VO' },
        ],
        bullets: [
          'Integració amb bases de dades JATO i Eurotax per a equipament complet',
          "Feeds automàtics d'estoc de fabricant (Audi, BMW, Mercedes, VW...)",
          'Calculadora financera de comptat i finançament integrada',
          'Formulari de taxació i sol·licitud de prova de ruta',
          'Agenda de taller i calculadora de pneumàtics',
        ],
      },
      {
        type: 'process',
        title: 'Com funciona?',
        steps: [
          { title: 'Consultoria gratuïta', description: "Analitzem la teva web actual, la teva competència i definim junts el projecte que millor s'adapta al teu negoci." },
          { title: 'Desenvolupament en 30 dies', description: "El nostre equip desenvolupa la teva web amb tecnologia pròpia. T'informem en tot moment del progrés." },
          { title: 'Llançament i suport', description: 'Formació de 3 hores al CMS, SEO inicial configurat i posada en marxa. Suport continu inclòs.' },
        ],
      },
      {
        type: 'cta',
        title: "Llesta per renovar la teva web d'automoció?",
        lead: "Sol·licita la teva consultoria gratuïta avui i et preparem una anàlisi sense compromís de la teva web actual.",
      },
    ],
  },
  'marketing-digital': {
    subtitle: 'Impulsa la teva visibilitat, connecta amb els teus clients i ven més online',
    sections: [
      {
        type: 'features',
        title: 'Estratègies intel·ligents, resultats reals',
        lead: "L'equip de Marketing Digital de Motorflash combina experiència i tecnologia per dissenyar campanyes personalitzades i mesurables. Estratègies adaptades al sector de l'automoció, pensades per generar impacte i augmentar les teves vendes.",
        items: [
          { title: 'Especialització en automoció', description: 'Coneixem les necessitats i particularitats del mercat del motor, cosa que ens permet dissenyar estratègies digitals adaptades a cada concessionari o empresa de compravenda.', icon: 'verified' },
          { title: 'Equips especialitzats en GEO, SEA i Social', description: "Un equip expert en GEO (el nou SEO, visibilitat a Google i als cercadors IA), un altre dedicat exclusivament a SEA i un tercer centrat en Social Ads per potenciar el teu negoci.", icon: 'group' },
          { title: 'Estratègia integral i optimització contínua', description: 'Desenvolupem i analitzem campanyes en GEO, SEA i xarxes socials, optimitzant cada acció per maximitzar el rendiment i generar més oportunitats de venda.', icon: 'autorenew' },
          { title: 'GEO · el nou SEO', description: "El SEO evoluciona: GEO (Generative Engine Optimization) substitueix el SEO tradicional. Inclou tot el SEO tècnic de sempre — arquitectura, contingut, autoritat — i afegeix l'optimització per a Google AI Overviews, ChatGPT, Perplexity i Gemini. Quan un comprador et busca a Google o li pregunta a la IA per concessionaris, la teva marca apareix.", icon: 'auto_awesome' },
          { title: "SEA a l'avantguarda amb Google Ads", description: "Treballem amb les últimes novetats de Google Ads per a automoció: Vehicle Ads (anuncis de vehicles a Google Search i Maps), conversions offline per mesurar vendes reals al concessionari, Business Agent for leads i totes les novetats que Google llança per al sector. No esperem que s'estabilitzin: provem i desplegem des del dia 1.", icon: 'bolt' },
          { title: 'Social Ads · Meta i TikTok', description: 'Prospecció a Meta i TikTok amb creatives ajustades al motor, targeting sectorial i mesurament de conversió real fins al tancament. Abast a compradors que encara no et busquen activament.', icon: 'share' },
          { title: 'Rendiment mesurable', description: "Visualitza les dades més importants de les teves campanyes des d'un panell clar i visual. Avalua l'impacte de cada acció i pren decisions basades en resultats reals.", icon: 'analytics' },
          { title: 'Un equip que treballa amb tu', description: "No som una agència més. Treballem enganxats al teu equip comercial, ajustant les campanyes segons el funnel real del teu concessionari.", icon: 'support_agent' },
          { title: 'Campanyes personalitzades', description: "Cada acció s'adapta a la teva marca, el teu estoc i el teu objectiu de venda. Res genèric: tot a mida.", icon: 'tune' },
        ],
      },
      {
        type: 'highlights',
        title: 'Trànsit que et busca vs. trànsit que et descobreix',
        lead: 'No tot el trànsit té el mateix valor ni el mateix moment de compra. La nostra estratègia combina ambdós tipus per maximitzar resultats a curt i llarg termini.',
        highlights: [
          { title: 'Trànsit orgànic GEO', description: 'Google + cercadors IA · sense cost per clic' },
          { title: 'Campanyes SEA amb Google Ads', description: 'Vehicle Ads, conversions offline, Business Agent' },
          { title: 'Social Ads Meta / TikTok', description: 'Prospecció a menor cost' },
          { title: 'Reporting en temps real', description: 'Mètriques de negoci, no de vanitat' },
        ],
        bullets: [
          "GEO / SEA: clients que busquen la teva marca o els teus vehicles a Google o li pregunten a la IA. Conversió immediata a qualsevol motor de cerca.",
          'Social Ads: prospectes que encara no et coneixen. Conversió a mitjà termini a menor cost.',
          "SEA a l'avantguarda: Vehicle Ads, conversions offline i Business Agent for leads — totes les novetats de Google, des del dia 1.",
          'Seguiment del funnel complet: visita → lead → trucada → venda',
          'Reporting mensual amb mètriques reals de negoci, no de vanitat',
          'Optimització contínua basada en dades, no en suposicions',
        ],
      },
      {
        type: 'process',
        title: 'Com treballem?',
        steps: [
          { title: 'Auditoria gratuïta', description: "Analitzem la teva web, el trànsit actual, la competència i les oportunitats de millora. Sense cost ni compromís." },
          { title: "Pla d'acció", description: 'Dissenyem una estratègia personalitzada amb objectius mesurables, canals prioritaris i pressupost recomanat.' },
          { title: 'Execució i reporting', description: 'Implementem, mesurem i optimitzem contínuament. Informe mensual amb resultats reals.' },
        ],
      },
      {
        type: 'cta',
        title: 'La teva web no genera prou leads?',
        lead: "Sol·licita la teva auditoria gratuïta i et diem exactament què està fallant i com solucionar-ho.",
      },
    ],
  },
  'lead-factory': {
    subtitle: "Captació de leads amb intenció de compra real · Qualificats o sense qualificar",
    sections: [
      {
        type: 'highlights',
        title: "D'on vénen els leads?",
        lead: "Dues fonts de trànsit complementàries que alimenten el canal: trànsit orgànic SEO i la major base d'estoc i inventari del mercat.",
        highlights: [
          { title: '70.000+', description: 'Vehicles publicats al portal Motorflash.com' },
          { title: '17.000+', description: 'Concessionaris treballant amb Motorflash.com' },
          { title: '120.000', description: 'Visites orgàniques mensuals al portal' },
          { title: 'SEO', description: "Posicionament per marca, model i intenció de compra" },
        ],
        bullets: [
          "SEO orgànic qualificat: posicionament per marca i model (Audi A4, Q3, Q5…) i per cerques amb intenció de compra (\"Citroen ocasió Barcelona\").",
          "Portal Motorflash: la major base d'estoc i inventari del mercat, amb trànsit orgànic especialitzat en automoció.",
          "Lead d'alta qualitat: l'usuari arriba buscant comprar, no navegant per curiositat.",
        ],
      },
      {
        type: 'features',
        title: 'Dues modalitats, una promesa',
        lead: "Tria el nivell de qualificació que millor encaixi amb el teu equip comercial. Només pagues pels leads entregats — sense cost d'inversió publicitària.",
        items: [
          { title: 'Qualificat', description: "Filtrat pel nostre sistema d'scoring: només entreguem leads que superen el llindar mínim de qualificació. Màxima qualitat per al teu equip comercial.", icon: 'verified' },
          { title: 'Prospect (sense qualificar)', description: "Mateix origen de trànsit, sense filtre d'scoring. Major volum, qualificació a càrrec del teu equip comercial. Sense duplicats ni repetits.", icon: 'inventory' },
          { title: 'Sense inversió publicitària', description: 'No pagues per clics ni per campanyes: només pagues pel que reps. Model escalable segons la capacitat de gestió del teu equip.', icon: 'savings' },
          { title: 'Entregable complet', description: 'Cada prospect arriba amb nom, telèfon, email, vehicle d\'interès (marca i model), intenció de compra (termini i urgència) i ubicació (província i ciutat).', icon: 'contact_page' },
          { title: 'Filtre de qualitat', description: 'Només el 70 % dels leads generats passa el filtre inicial. Només t\'entreguem els que són prospect vàlids.', icon: 'filter_alt' },
          { title: 'Contacte calent', description: 'La immediatesa és clau: contactar en calent multiplica la conversió. Enviem el lead al moment perquè actuïs amb la màxima informació.', icon: 'schedule' },
        ],
      },
      {
        type: 'process',
        title: "Sistema d'scoring · 6 variables",
        steps: [
          { title: 'Intenció de compra', description: "Menys d'1 mes · 1-3 mesos · 3+ mesos. El termini previst de compra impacta directament en l'scoring." },
          { title: 'Encaix del vehicle', description: 'Escala d\'1 a 5 sobre el model buscat. Com millor encaixi amb el teu estoc, més alt el score.' },
          { title: "Confirmació d'ubicació", description: "Província i ciutat de la concessió. Confirma que el comprador es pot desplaçar al teu punt de venda." },
          { title: 'Interès a visitar', description: 'Disponibilitat real per acudir al concessionari. Filtra els que només són en fase d\'exploració.' },
          { title: 'Vehicle a canvi', description: 'Possible part del pagament amb el seu cotxe actual. Doble oportunitat: taxació VO + venda VN.' },
          { title: 'Forma de pagament', description: 'Finançat · Al comptat · Per definir. Aporta context sobre la capacitat i velocitat de tancament.' },
        ],
      },
      {
        type: 'highlights',
        title: 'Cas client real',
        lead: "Resultats reals d'un concessionari després de la implementació del canal Exclusive. Puntuació mitjana obtinguda: 55/100.",
        highlights: [
          { title: '230', description: 'Cotxes publicats · inventari actiu al portal' },
          { title: '92', description: 'Prospectes generats pel canal Exclusive' },
          { title: '22', description: "Leads qualificats que superen el llindar d'scoring" },
          { title: '9 %', description: 'Ràtio de conversió de lead a venda · 2 vendes tancades' },
        ],
        bullets: [
          "2 operacions convertides en facturació real sobre un total de 22 leads qualificats.",
          "Puntuació mitjana dels leads: 55/100 sobre les 6 variables de l'scoring.",
          "Model escalable: a més volum publicat, més generació de leads.",
        ],
      },
      {
        type: 'cta',
        title: 'Parlem dels teus leads',
        lead: "T'ajudem a definir el model de generació de trànsit que millor s'adapta al teu concessionari. Consulta amb el nostre equip comercial la modalitat i el volum adequats per a la teva operació.",
      },
    ],
  },
  dealer: {
    subtitle: "Gestió intel·ligent del VO + multipublicació a +16 portals · Importa, crea amb assistència i publica des d'una sola plataforma · +1.000 clients publiquen cada dia amb nosaltres",
    sections: [
      {
        type: 'highlights',
        title: "Des d'una importació senzilla fins a la creació avançada i la publicació enriquida",
        lead: 'Motorflash t\'ofereix fiabilitat i flexibilitat a cada pas. Supervisa el teu inventari amb dashboards intuïtius, ajusta preus al mercat en temps real i publica els teus vehicles als principals portals amb informació enriquida per destacar davant la competència. Tot, dissenyat per estalviar temps i maximitzar resultats.',
        highlights: [
          { title: '+1.000', description: 'Clients publicant diàriament amb el nostre Multipublicador' },
          { title: '+2.500', description: 'Exportacions d\'estoc cada dia des de la nostra plataforma' },
          { title: '+150', description: 'Importacions natives amb els DMS del mercat · serveis Ad Hoc per a casos específics' },
          { title: '1M', description: 'Vehicles exportats al mes a portals del sector' },
        ],
        bullets: [
          'Connectat amb els principals portals verticals a Espanya (Coches.net, Sumauto, Coches.com, Autocasión, AutoScout24, Wallapop) i amb Motorflash.com.',
          "Únics al mercat en verificar la versió i els extres de cada anunci per VIN — la resta de multipublicadors estimen per matrícula; nosaltres publiquem dades verificades del fabricant.",
          'Permanència mínima de 6 mesos. Sense sorpreses a la factura ni costos ocults.',
        ],
      },
      {
        type: 'spotlight',
        badge: 'Únics al mercat',
        title: 'Creació Premium per VIN: verifiquem versió i extres a cada anunci',
        lead: "Som l'únic multipublicador del mercat capaç d'identificar automàticament la versió exacta i l'equipament opcional real de cada vehicle a partir del bastidor (VIN). La resta de multipublicadors estimen per matrícula; nosaltres publiquem dades verificades del fabricant — amb la fiabilitat que això aporta a la teva fitxa, al teu SEO al portal i a la conversió.",
        bullets: [
          "Versió i variant exactes per VIN — sense errors d'interpretació.",
          'Extres i equipament opcional detectats i desglossats un a un.',
          'Anuncis amb fiabilitat de fàbrica: menys devolucions, menys disputes.',
          "Màxima densitat d'informació per posicionar millor a cada portal.",
        ],
        icon: 'verified',
        badgeIcon: 'workspace_premium',
      },
      {
        type: 'features',
        title: "Importació i creació d'estoc a mida",
        lead: "Quatre modes de creació de l'anunci segons el nivell de fiabilitat i temps que vulguis dedicar-li. La Creació Premium per VIN — el nostre diferenciador — et dona la versió i els extres exactes de cada unitat sense que moguis un dit.",
        items: [
          { title: 'Creació Premium (per VIN) · Únics al mercat', description: "Introduïm el bastidor i obtenim automàticament la versió exacta i l'equipament opcional real d'aquesta unitat concreta. Cap altre multipublicador del mercat ho fa: mentre la competència estima per matrícula, tu publiques dades verificades del fabricant. Inclou la creació avançada.", icon: 'workspace_premium' },
          { title: 'Creació avançada (per matrícula)', description: 'Introdueixes la matrícula i el sistema autocompleta les dades bàsiques. Només has de seleccionar versió i extres. Inclou la creació bàsica.', icon: 'directions_car' },
          { title: 'Creació bàsica (manual)', description: "Tu crees l'anunci des d'una interfície intuïtiva basada en JATO: data de matriculació, tipus, marca, model, versió, combustible, portes, carrosseria, canvi i extres.", icon: 'edit_note' },
          { title: 'Creació delegada a Motorflash', description: "Si ho prefereixes, deixa que el nostre equip d'experts creï els teus anuncis per tu. Estalvies temps i guanyes fiabilitat sense desviar el teu equip.", icon: 'support_agent' },
          { title: 'Integració amb +150 DMS', description: 'Connectats amb la majoria dels DMS del mercat: Keyloop, Autoline, Aswin, Incadea, Pymecar, Nextlane, Quiter, Bee2link, Inventario.pro… Més serveis Ad Hoc per a necessitats específiques.', icon: 'hub' },
          { title: 'Importació automàtica de fotos', description: 'Integració amb múltiples plataformes per portar automàticament les imatges dels vehicles i mantenir l\'estoc sempre actualitzat.', icon: 'photo_library' },
          { title: 'Carlens 360 · personalització visual', description: 'Personalitza les fotografies de les teves publicacions sense necessitat de photocall. Estalvia temps i millora la qualitat visual del teu catàleg.', icon: 'auto_fix_high' },
          { title: "Marques d'aigua", description: "Crea marques d'aigua per a les teves campanyes o gestionem les que tu ens facilitis. La teva marca visible a cada foto publicada.", icon: 'branding_watermark' },
        ],
      },
      {
        type: 'features',
        title: "Dealer: gestiona el teu estoc com un professional",
        lead: "Tota la informació del teu inventari resumida en un dashboard intuïtiu. Compara preus amb el mercat en temps real, taxa vehicles a l'instant i calcula finançament per als teus clients des de la pròpia fitxa.",
        items: [
          { title: "Dashboard intuïtiu d'estoc", description: "Antiguitat d'estoc, dies sense canvi de preu i anàlisi de preu en una sola pantalla. Detecta d'un cop d'ull quins vehicles cal moure.", icon: 'dashboard' },
          { title: 'Preu estimat vs. mercat', description: "Comparativa instantània del preu dels teus vehicles amb el d'unitats similars anunciades als principals portals espanyols.", icon: 'price_check' },
          { title: 'Taxador integrat', description: 'Rep un preu recomanat de compra i venda per a qualsevol vehicle introduint només la matrícula. Mercat real, sense opinions.', icon: 'calculate' },
          { title: 'Temperatura de mercat', description: 'Visualitza quins models són calents en cada moment i ajusta la teva estratègia d\'estoc i preus.', icon: 'thermostat' },
          { title: 'Calculadora de finançament', description: 'Calculadores integrades amb Banco Santander, CaixaBank, Cetelem i més. Ofereix als teus clients la millor quota des de la pròpia fitxa.', icon: 'account_balance' },
          { title: 'Perxes i ofertes personalitzades', description: 'Genera perxes i ofertes a mida per a cada client des de la fitxa del vehicle, en un clic.', icon: 'description' },
        ],
      },
      {
        type: 'features',
        title: "Exportacions: publica on t'interessi, amb la informació enriquida",
        lead: 'Decideixes tu quins vehicles van a cada portal: publicació massiva, selectiva o mixta. Passarel·la amb els principals portals verticals de compravenda a Espanya i dashboard centralitzat per controlar-ho tot.',
        items: [
          { title: 'Publicació massiva, selectiva o mixta', description: "Tria quines publicacions vols que s'exportin a cada portal. Màxima flexibilitat — tu decideixes l'estratègia portal a portal.", icon: 'tune' },
          { title: "Enriquiment de l'anunci", description: "A diferència d'altres multipublicadors, exportem cada anunci amb l'equipament extra de cada unitat perfectament desglossat. Els teus anuncis destaquen davant la competència.", icon: 'auto_awesome' },
          { title: 'Passarel·les amb els principals portals', description: 'Coches.net, Sumauto, Coches.com, Autocasión, AutoScout24, Wallapop i més. Una sola eina, tots els portals.', icon: 'sync_alt' },
          { title: "Dashboard d'exportacions", description: "Control i visualització global de l'estoc a cada portal. Saps en cada moment quin vehicle està publicat on i en quin estat.", icon: 'monitoring' },
          { title: 'Motorflash.com inclòs', description: 'El teu estoc també es publica a motorflash.com amb els 10 primers leads gratis al mes inclosos en qualsevol tarifa.', icon: 'language' },
          { title: 'Comptes il·limitats a cada portal', description: 'Coches.net, Sumauto i portals verticals amb comptes il·limitats en els tier S endavant. Una tarifa per tota la xarxa, no per compte.', icon: 'all_inclusive' },
        ],
      },
      {
        type: 'process',
        title: 'En 2 setmanes estàs publicant amb Multipublicador',
        steps: [
          { title: 'Signatura de contracte i kickoff', description: 'Signem el contracte i arrenquem. A la sessió inicial recollim les dades dels teus comptes en portals i els detalls de les teves botigues.' },
          { title: 'Creació de compte i botigues', description: 'Donem d\'alta el teu compte a Multipublicador, configurem les botigues i els usuaris segons la teva estructura.' },
          { title: "Importació d'estoc", description: "Connectem el teu DMS o pugem l'Excel inicial i portem tot el teu estoc al sistema. A partir d'aquí les dades es sincronitzen automàticament." },
          { title: 'Exportacions i arrencada', description: "Activem les exportacions als portals que toqui. Opcionalment, fem una passada de qualificació d'estoc per pujar la qualitat dels anuncis des del dia 1." },
        ],
      },
      {
        type: 'cta',
        title: 'Quants vehicles publiques al mes?',
        lead: "Explica'ns la mida del teu estoc i et mostrem un cas real d'un grup de la teva mida. En 30 minuts saps quin tier encaixa amb tu i quant pagaries.",
      },
    ],
  },
  'motorflash-connect': {
    subtitle: 'Vídeos IA personalitzats per retenir i vendre més als teus clients de rènting',
    sections: [
      {
        type: 'highlights',
        title: 'Quan acaba el rènting, perds el client. I la competència ja l\'està trucant.',
        lead: "Cada any, milers de clients acaben el seu contracte sense renovar perquè no han rebut una proposta personalitzada a temps. El teu equip no arriba a tots. Els teus correus massius s'ignoren. Fleet Manager converteix aquest final de contracte en una nova venda, automàticament, amb un vídeo únic per client.",
        highlights: [
          { title: '100%', description: 'De la teva cartera contactada amb vídeo personalitzat' },
          { title: '×5', description: 'Taxa de resposta vs. correu comercial tradicional' },
          { title: '0', description: 'Feina manual de creació: la IA ho genera tot' },
          { title: 'White-label', description: 'El teu logo, els teus colors, el teu domini. El client veu la teva marca, no la nostra' },
        ],
        bullets: [
          'Zero clients perduts per desbordament comercial: la plataforma arriba al 100% de la cartera, no només a qui el teu equip pot trucar.',
          "Recuperes leads que s'escapaven per no arribar a temps: la IA dispara el vídeo a la data òptima abans del final de contracte.",
          'Multi-organització: si tens diversos concessionaris o brokers, cadascun amb el seu branding i configuració en una sola plataforma.',
        ],
      },
      {
        type: 'features',
        title: 'Un vídeo únic per client, generat per IA en minuts',
        lead: 'Cada client rep una peça personalitzada amb el seu nom, el seu cotxe actual, la seva quota i fins a 5 propostes reals per renovar, canviar de model, pujar de gamma o comprar el vehicle. Tot amb un sol clic per respondre.',
        items: [
          { title: 'Veu IA natural en català/castellà', description: 'Veus seleccionables i ajustables per organització (powered by ElevenLabs). Saluda el client pel seu nom amb un to natural — des de sobri fins a proper i dinàmic, segons la teva marca.', icon: 'record_voice_over' },
          { title: 'Fins a 5 propostes reals per client', description: 'Renovar amb el mateix model nou, canviar a un altre de la marca, pujar de gamma, renovar amb condicions reduïdes o comprar el cotxe al comptat o finançat. Tu les defineixes, la IA les personalitza.', icon: 'tune' },
          { title: 'Botons de resposta amb un clic', description: 'El client obre el vídeo, veu les opcions i prem la que li interessa. Zero fricció, zero formularis, zero trucades prèvies per descobrir què vol.', icon: 'ads_click' },
          { title: 'Branding 100% white-label', description: 'El teu logo, els teus colors corporatius, el teu domini. El client no veu "MotorFlash" enlloc — veu la teva organització a cada frame.', icon: 'palette' },
          { title: 'Multi-canal: correu i WhatsApp', description: 'El vídeo arriba per correu, per WhatsApp o per tots dos, segons les preferències del client. Més oportunitats d\'obertura, més respostes.', icon: 'forward_to_inbox' },
          { title: 'Multi-tenant i RGPD', description: 'Cada organització té el seu espai aïllat. Dades del client en servidors europeus, compliment RGPD garantit, branding i configuració independents.', icon: 'shield' },
        ],
      },
      {
        type: 'process',
        title: 'De la cartera a la venda tancada en 4 passos',
        steps: [
          { title: 'Importes la teva cartera', description: 'Puja un Excel amb els teus clients i rèntings actius, o connecta el teu ERP per API REST. La plataforma llegeix les dades del client (nom, correu, telèfon), del cotxe actual (marca, model, matrícula, quota) i les dates de final de contracte.' },
          { title: 'Configures les teves propostes', description: 'Per a cada client o tipus de client defineixes fins a 5 ofertes concretes amb quota, model i fotos: renovar, canviar a un altre model, pujar de gamma, reduir quilometratge, comprar al comptat o finançat.' },
          { title: 'La plataforma envia el vídeo', description: "Quan falten X dies per al final de contracte (tu decideixes quants), el sistema genera la veu IA, compon el vídeo amb el teu branding i l'envia per correu i/o WhatsApp. El teu equip no toca res." },
          { title: 'Tanques la venda', description: "El client respon amb un clic. El teu comercial rep a l'instant un correu + notificació al CRM amb l'opció triada i les dades del client. Truca ja sabent què li interessa." },
        ],
      },
      {
        type: 'features',
        title: 'Més enllà del final de rènting: motor de campanyes tot l\'any',
        lead: "A més del flux de final de contracte, Fleet Manager inclou un motor per enviar vídeos personalitzats en qualsevol moment de l'any. Dissenyes la campanya un cop i la plataforma la dispara automàticament, personalitzada per a cada client.",
        items: [
          { title: 'Campanyes estacionals', description: "Pneumàtics d'hivern, revisió ITV, canvi d'oli, assegurança a renovar. Vídeos automàtics a la data justa per a cada client.", icon: 'event_repeat' },
          { title: 'Campanyes de data fixa', description: 'Black Friday, llançament d\'un model nou, final d\'any fiscal. Defineixes data i audiència, la plataforma envia a tothom amb el seu nom i dades.', icon: 'calendar_month' },
          { title: 'Campanyes per audiència', description: "Defineix una base de dades concreta (clients d'una marca, quota, antiguitat) i envia'ls una oferta exclusiva amb vídeo personalitzat.", icon: 'group' },
          { title: 'Integració amb el teu CRM/ERP', description: 'API REST i webhooks per sincronitzar cartera, disparar campanyes des del teu CRM i enviar respostes automàticament al lead correcte.', icon: 'integration_instructions' },
        ],
      },
      {
        type: 'showcase',
        eyebrow: 'AIXÍ HO CONTROLES TU',
        title: "Mètriques de l'embut en temps real.",
        lead: "Panell d'administració amb enviaments, entregues, obertures, clics, visualitzacions i respostes per període. Veus l'embut complet — des del correu enviat fins a la resposta del client — i saps exactament quines campanyes funcionen i on afinar.",
        bullets: [
          "KPIs per rang de dates: vídeos generats, correus oberts, respostes, rebots.",
          "Embut de conversió: enviat → entregat → obert → clic → vist → resposta.",
          "Vista de tots els vídeos generats amb estat, canal, client i vehicle.",
        ],
        imageSrc: '/images/products/fleet-manager-dashboard.png',
        imageAlt: "Dashboard de Fleet Manager amb KPIs de final de rènting: vídeos generats, obertures, respostes i embut de conversió",
        imagePosition: 'left',
      },
      {
        type: 'cta',
        title: "30 minuts i t'ensenyem un vídeo real amb un dels teus clients",
        lead: 'Demo personalitzada: vídeo generat amb un cas real de la teva cartera (amb la teva autorització), panell de respostes i mètriques, integració amb el teu sistema actual i càlcul de ROI estimat. Modalitat SaaS sense permanència, amb pla pilot per validar abans de decidir.',
      },
    ],
  },
  apex: {
    subtitle: "El CRM per a concessionaris que centralitza inventari, leads i multipublicació en una sola plataforma · Alta en 24 h, sense permanència",
    sections: [
      {
        type: 'highlights',
        title: 'Una sola plataforma per a tot el que fa el teu concessionari',
        lead: 'Tres pilars connectats: inventari, comunicació i operació. Sense tecleig doble, sense copiar i enganxar entre eines.',
        highlights: [
          { title: 'Inventari', description: 'Estoc viu, preus, fotos i fitxes tècniques' },
          { title: 'Comunicació', description: 'Tots els leads i missatges en una sola bústia' },
          { title: 'Operació', description: "Del lead al contracte sense sortir de l'eina" },
          { title: '24 h', description: 'Alta operativa · sense permanència obligatòria' },
        ],
        bullets: [
          'Alta per matrícula o VIN amb fitxa tècnica autocompletada.',
          'Multipublicació a +16 portals en un sol clic.',
          'Històric de vendes i preu de mercat integrats.',
          'Factura electrònica (Règim General i REBU) i contracte amb firma digital inclosos.',
        ],
      },
      {
        type: 'process',
        title: 'De la matrícula al contracte signat',
        steps: [
          { title: '01 · Matrícula', description: 'Teclegues la matrícula o el bastidor. Apex porta fitxa tècnica, equipament de sèrie i extres automàticament.' },
          { title: '02 · Estoc viu', description: 'Puges fotos, ajustes preu. El vehicle queda a inventari, llest per publicar.' },
          { title: '03 · +16 portals', description: 'Multipublicació a Facilitea, Wallapop, Coches.net, Motorflash, Tikcars i més. Un sol botó.' },
          { title: '04 · Inbox', description: 'Missatges, leads i trucades de tots els portals en una única safata. Pipeline Kanban.' },
          { title: '05 · Tancament', description: "Cita, contracte signat digital, factura electrònica. Tot a Apex, sense sortir de l'eina." },
        ],
      },
      {
        type: 'features',
        title: 'Tot el que necessita el teu concessionari, ja integrat',
        lead: "Quatre àrees funcionals, tots els mòduls connectats entre si. Les dades no surten d'Apex.",
        items: [
          { title: 'Inventari', description: 'Estoc, multipublicació a +16 portals, històric de vendes, taxacions amb valoració automàtica i alta per matrícula o VIN amb fitxa tècnica autocompletada.', icon: 'inventory_2' },
          { title: 'Leads i Xat', description: 'Inbox unificat, pipeline Kanban, Xat Center amb Wallapop i Coches.net integrats, captació a Wallapop, ofertes comercials i campanyes amb seguiment.', icon: 'forum' },
          { title: 'Venda', description: 'Clients (persones físiques i jurídiques), calendari integrat de cites, contractes de compravenda amb firma digital, factura electrònica (Règim General i REBU) i lloc web del concessionari inclòs.', icon: 'point_of_sale' },
          { title: 'Operació', description: 'Multiubicacions per a grups amb diverses seus, multisocietats (multi-CIF), reports amb KPIs fiscal i estoc, auditoria (qui va fer què i quan), usuaris amb permisos granulars.', icon: 'account_tree' },
          { title: 'Multipublicació', description: 'Coches.net, Wallapop, AutoScout24, Coches.com, Autocasión, Carwow, Carnovo, Motorflash, Motos.net, km77, Motor.es, Tikcars, Motoreto, Maxterauto, Gremi Motor, Facilitea… Estoc sincronitzat en temps real: venut a Apex, retirat de tots els portals.', icon: 'share' },
          { title: 'Xat Center', description: 'Unifiques converses de Wallapop i Coches.net amb xat integrat. Un sol agent atén tots els canals en paral·lel.', icon: 'chat' },
        ],
      },
      {
        type: 'highlights',
        title: 'Pensat per a grups amb diverses societats',
        lead: 'Cada CIF, cada seu, cada equip al seu lloc. Sense encreuaments de dades entre societats del mateix grup.',
        highlights: [
          { title: 'Multisocietats', description: 'Operació multi-CIF: cada societat amb la seva facturació, estoc i leads independents' },
          { title: 'Permisos granulars', description: 'Un comercial de Barcelona només veu els seus propis leads i el seu estoc' },
          { title: 'Credencials xifrades', description: 'Cada compte de portal amb les seves pròpies claus, emmagatzemades amb xifratge' },
          { title: 'Auditoria completa', description: 'Registre de qui va fer què, quan i sobre quin registre' },
        ],
        bullets: [
          'Exemple real: un grup amb Societat A (BMW/MINI Madrid), Societat B (Audi/VW València) i Societat C (Multimarca Sevilla) opera amb estoc, leads i xats propis i independents a cadascuna.',
          "Reports consolidats a nivell de grup amb KPIs fiscals, d'estoc i de rendiment comercial.",
          'Account manager i SLA dedicats al pla Enterprise per a grups amb +120 vehicles.',
        ],
      },
      {
        type: 'cta',
        title: 'Una demo de 30 minuts sobre el teu estoc real',
        lead: "Ens expliques la teva operativa actual i t'ensenyem com quedaria a Apex amb el teu propi inventari. Sense compromís ni instal·lacions. contacto@apexcrm.es · apexcrm.es · +34 655 85 25 70",
      },
    ],
  },
}
