/**
 * Contingut ric per producte en català.
 * Mirroreig de product-content.es.ts amb les traduccions completes
 * dels 12 productes amb fitxa enriquida.
 */
import type { ProductContent } from './product-content'

export const productContent: Record<string, ProductContent> = {
  'portal-publicacion': {
    subtitle: 'El portal propi de VO del grup Motorflash',
    sections: [
      {
        type: 'features',
        title: 'Publica un cop, apareix a tots els portals',
        lead: "Oblida't de pujar els vehicles portal a portal. Amb Classificats, publiques un cop i el teu estoc apareix a tots els portals de manera automàtica.",
        items: [
          { title: 'Publicació automàtica multiportal', description: 'Un sol clic publica el teu vehicle a Coches.net, Milanuncios, Wallapop, AutoScout24 i altres portals líders. Estoc sempre sincronitzat.', icon: 'rocket_launch' },
          { title: 'Fitxes de vehicle optimitzades', description: 'Fitxes amb equipament complet (JATO/Eurotax), fotografies, preu, finançament i descripció generada automàticament per maximitzar conversió.', icon: 'description' },
          { title: 'Gestió de preus intel·ligent', description: 'Comparativa de preus de mercat en temps real. Alertes quan el teu preu està per sobre o per sota del mercat per prendre decisions ràpides.', icon: 'sell' },
          { title: 'Analítica de portals', description: 'Visites, leads i ràtio de conversió per vehicle i per portal. Identifica quins canals porten més clients i optimitza la teva inversió publicitària.', icon: 'analytics' },
          { title: 'Centralització de leads', description: "Tots els leads dels teus portals arriben al mateix lloc, sincronitzats amb el teu CRM. Sense pèrdua d'informació.", icon: 'inbox' },
          { title: 'Integració amb web i CRM', description: 'Connectat nativament amb CRM4YOU i la teva web Motorflash. Ecosistema tancat sense doble entrada de dades.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Més visibilitat, menys feina i més control',
        lead: 'La publicació manual als portals consumeix entre 2 i 4 hores diàries de feina. Amb Classificats, aquest temps es redueix a minuts i la qualitat de les fitxes millora.',
        highlights: [
          { title: 'Publicació automàtica', description: 'Un cop a tots els portals' },
          { title: 'Intel·ligència de preus', description: 'Comparativa de mercat en temps real' },
          { title: '40.000 vehicles/mes', description: "El major volum d'automoció" },
          { title: 'Leads centralitzats', description: 'Tots els portals en una bústia' },
        ],
        bullets: [
          'Portals integrats: Coches.net, Milanuncios, Wallapop, AutoScout24, Autocasion i més.',
          "Fotografies millorades: eina d'edició de fotos integrada per eliminar fons i millorar l'atractiu visual del vehicle.",
          'Descomptes negociats amb els principals portals per volum de publicacions',
          'Alertes de vehicles amb preu fora de mercat per actuar ràpidament',
          'Rotació automàtica de destacats per maximitzar la visibilitat',
        ],
      },
      {
        type: 'process',
        title: 'Com funciona Classificats?',
        steps: [
          { title: "Connexió del teu estoc", description: "Connectem el teu DMS, ERP o CRM per importar el teu estoc automàticament. Configurem les regles de publicació i els portals objectiu." },
          { title: 'Publicació automàtica', description: "Els teus vehicles es publiquen a tots els portals seleccionats amb fitxes optimitzades. Les baixes i modificacions es sincronitzen en temps real." },
          { title: 'Gestió de leads i reporting', description: 'Tots els leads arriben a un sol lloc. Informe setmanal amb rendiment per portal, per vehicle i comparativa de mercat de preus.' },
        ],
      },
      {
        type: 'cta',
        title: 'Vols publicar el teu estoc a tots els portals sense esforç?',
        lead: "Sol·licita una demo i et mostrem com Classificats pot estalviar-te hores de feina cada setmana i augmentar la teva visibilitat online.",
      },
    ],
  },
  'crm4you': {
    subtitle: "Gestiona la teva activitat comercial de manera fluida, amb informació completa i sense passos innecessaris",
    sections: [
      {
        type: 'features',
        title: 'El CRM per a grups de concessionaris',
        lead: "L'únic CRM del sector dissenyat per gestionar de manera centralitzada múltiples ubicacions, marques i concessionaris. Optimitza el procés comercial a nivell grupal amb IA integrada que treballa amb tu.",
        items: [
          { title: 'Gestió centralitzada de leads', description: 'Tots els leads de la teva web, portals, Social Ads i trucades telefòniques entren en un sol punt. No perdis mai un lead per canal no monitoritzat.', icon: 'inbox' },
          { title: 'Pipeline visual de vendes', description: 'Tauler Kanban adaptat al procés de venda: Nou → Contactat → Visita → Prova de ruta → Oferta → Entrega. Cada etapa amb les seves mètriques.', icon: 'view_kanban' },
          { title: 'Seguiment automàtic', description: "Seqüències de correu i SMS automàtiques per a cada etapa del procés. El CRM fa el seguiment per tu quan l'assessor està ocupat.", icon: 'autorenew' },
          { title: 'Agenda integrada', description: "Gestió de cites de venda i proves de ruta integrada al CRM. Sincronització amb Google Calendar i notificacions automàtiques al client.", icon: 'calendar_month' },
          { title: 'Informes de direcció', description: "Dashboard de gestió amb el rendiment de cada assessor, taxa de conversió per canal, temps mitjà de tancament i previsió de vendes mensual.", icon: 'analytics' },
          { title: 'Integracions natives', description: "Connectat amb els teus Serveis Web, Classificats, Contact Center, WhatsApp Business i els principals portals de vehicles. Ecosistema tancat i sense fuites de dades.", icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: "Un CRM que treballa tant per a l'assessor com per a la direcció",
        lead: "CRM4YOU té dues cares: l'operativa (per a l'assessor de vendes) i l'analítica (per al director comercial o gerent del concessionari).",
        highlights: [
          { title: 'Pipeline Kanban de vendes', description: "Visual, adaptat a automoció" },
          { title: 'Automatització de seguiment', description: 'Correu i SMS automàtics per etapa' },
          { title: 'Gestió per assessor', description: 'Rendiment individual mesurable' },
          { title: 'Ecosistema integrat', description: 'Web, portals, WhatsApp i Contact Center' },
        ],
        bullets: [
          "Per a l'assessor: vista de tasques pendents, recordatoris automàtics, historial complet de cada lead i plantilles de comunicació.",
          "Per a la direcció: rendiment individual de cada assessor, conversió per font de lead, temps mitjà de tancament i forecast de vendes.",
          'App mòbil per a gestió a qualsevol lloc i dispositiu',
          "Importació de dades des del teu DMS o CRM anterior sense pèrdua d'historial",
          'Rols i permisos configurables per concessionari o grup',
        ],
      },
      {
        type: 'process',
        title: 'Com posem en marxa CRM4YOU?',
        steps: [
          { title: 'Configuració personalitzada', description: "Adaptem el pipeline, els camps i els fluxos d'automatització al teu procés de venda concret. No t'adaptes al CRM, el CRM s'adapta a tu." },
          { title: 'Migració i integració', description: 'Importem les teves dades actuals i connectem totes les teves fonts de leads: web, portals, Social Ads i Contact Center en 5-7 dies laborables.' },
          { title: 'Formació i activació', description: 'Formació presencial o remota per a tot l\'equip. Suport dedicat els primers 30 dies per assegurar l\'adopció correcta del sistema.' },
        ],
      },
      {
        type: 'cta',
        title: 'Vols veure CRM4YOU funcionant amb les teves dades?',
        lead: 'Sol·licita una demo personalitzada i et mostrem com es veuria CRM4YOU adaptat al teu concessionari en menys de 30 minuts.',
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
  'motorflash-mobile-tracking': {
    subtitle: "L'evolució de l'SMS amb fins a un 300 % més de conversió que un missatge tradicional",
    sections: [
      {
        type: 'features',
        title: 'Per a què serveix Imatge avançada + RCS en automoció?',
        lead: "Més enllà de l'SMS bàsic: combina imatge avançada amb IA i missatgeria RCS (multimèdia, segura, verificada) per crear comunicacions que el client obre, llegeix i converteix.",
        items: [
          { title: 'Missatgeria multimèdia RCS', description: "Envia imatges, vídeos, carrusels i botons d'acció directes al mòbil del client. Com un SMS però amb experiència d'app nativa.", icon: 'chat' },
          { title: 'Imatge avançada amb IA', description: 'Millores automàtiques de cada foto: fons, il·luminació, ombres, eliminació de reflexos. El teu vehicle es veu com en una revista.', icon: 'auto_awesome' },
          { title: 'Verificació de remitent', description: 'La teva marca apareix verificada al mòbil del client. Més confiança, més taxa d\'obertura, menys risc de phishing.', icon: 'verified' },
          { title: 'Personalització per client', description: "Cada missatge s'adapta al client, al vehicle d'interès i al moment del cicle de compra. Missatges únics a escala.", icon: 'group' },
          { title: 'Reporting complet', description: "Taxa d'entrega, obertura, clics i conversió per campanya. Mètriques reals per optimitzar.", icon: 'analytics' },
          { title: 'Integració amb CRM', description: 'Cada enviament i resposta es registra a CRM4YOU. Traçabilitat total de la conversa.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Control total des de la campa fins a l\'entrega',
        lead: "Imatge avançada + RCS resol els problemes de comunicació més habituals en concessionaris: taxa d'obertura baixa en SMS, fotos poc atractives que no converteixen, manca de personalització en enviaments massius.",
        highlights: [
          { title: '+300% conversió vs SMS', description: 'La diferència entre text pla i multimèdia' },
          { title: 'IA millorant cada foto', description: 'Qualitat professional automàtica' },
          { title: 'Verificació de marca', description: 'El teu logo apareix al mòbil del client' },
          { title: 'Plantilles dinàmiques', description: 'Adaptades a cada vehicle i client' },
        ],
        bullets: [
          'Promocions: campanyes de captació amb imatges millorades de vehicles en oferta.',
          'Cites de taller: recordatoris visuals amb targeta de cita i mapa al concessionari.',
          'Llançaments: presentació de nous models amb vídeo i galeria interactiva.',
          'Notificacions de vehicle a punt amb foto del cotxe ja preparat',
          "Enquestes de satisfacció multimèdia després de l'entrega",
        ],
      },
      {
        type: 'process',
        title: 'Com funciona Imatge avançada + RCS?',
        steps: [
          { title: 'Configuració del servei', description: 'Donem d\'alta la teva marca verificada a RCS i configurem les plantilles de missatge amb la teva identitat visual.' },
          { title: "Millora d'imatges amb IA", description: 'Connectem amb el teu DMS per processar automàticament les fotos del teu estoc. La IA millora cada imatge abans de l\'enviament.' },
          { title: 'Enviament i mesurament', description: 'Llancem les campanyes des del panell o automatitzades des del CRM. Mesurem cada enviament, obertura i clic.' },
        ],
      },
      {
        type: 'cta',
        title: 'Vols saber on és cada vehicle de la teva flota ara mateix?',
        lead: "Sol·licita informació i t'expliquem com Imatge avançada + RCS pot millorar el control i la seguretat del teu estoc des del primer dia.",
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
          { title: 'Equips especialitzats en SEO, SEA i Social', description: 'Comptem amb un equip expert en SEO, un altre dedicat exclusivament a SEA i un tercer centrat en Social Ads per potenciar el teu negoci.', icon: 'group' },
          { title: 'Estratègia integral i optimització contínua', description: 'Desenvolupem i analitzem campanyes en SEO, SEA i xarxes socials, optimitzant cada acció per maximitzar el rendiment i generar més oportunitats de venda.', icon: 'autorenew' },
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
          { title: 'Trànsit orgànic SEO', description: 'Alta conversió · Sense cost per clic' },
          { title: 'Campanyes SEM Google Ads', description: 'Focus en cost per lead real' },
          { title: 'Social Ads Meta / TikTok', description: 'Prospecció a menor cost' },
          { title: 'Reporting en temps real', description: 'Mètriques de negoci, no de vanitat' },
        ],
        bullets: [
          'SEO/SEM: clients que busquen la teva marca o els teus vehicles. Conversió immediata.',
          'Social Ads: prospectes que encara no et coneixen. Conversió a mitjà termini a menor cost.',
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
  'dealer': {
    subtitle: "Gestió completa del vehicle d'ocasió amb IA integrada",
    sections: [
      {
        type: 'features',
        title: "Gestió intel·ligent per a grans volums d'estoc",
        lead: "Crea, controla i publica els teus vehicles des d'una plataforma dissenyada per a concessionaris i grups. Organitza el teu inventari, millora la qualitat dels teus anuncis i pren decisions basades en dades reals del mercat.",
        items: [
          { title: 'Equipament JATO + EUROTAX unificat', description: 'Cada vehicle es crea creuant les dues bases de dades més fiables del sector — JATO Dynamics i EUROTAX — en una única fitxa consolidada. Versió exacta, equipament sèrie + opcionals detallat, dades sense contradiccions. Adéu a fitxes a mitges o a contradiccions entre proveïdors.', icon: 'merge_type' },
          { title: "Creació i gestió d'estoc", description: "Crea fitxes completes dels teus vehicles i gestiona tota la informació des d'un sol entorn. Actualitza dades, afegeix fotos i controla l'estat de cada cotxe de manera ràpida i organitzada.", icon: 'inventory_2' },
          { title: "Control de qualitat d'anuncis", description: "Assegura't que cada vehicle es publica amb la màxima qualitat. Revisa equipament, versions, preus i fotografies abans de llançar l'anunci per a publicacions més atractives i consistents.", icon: 'verified' },
          { title: 'Anàlisi de preu i competitivitat', description: 'Pren decisions basades en informació real del mercat. Compara el teu estoc amb el de la competència, ajusta preus i identifica oportunitats de rotació per millorar el rendiment.', icon: 'sell' },
          { title: 'Creació flexible', description: "Crea els teus vehicles per matrícula, bastidor o cerca guiada per JATO, o delega el procés al nostre equip amb Creació Premium.", icon: 'tune' },
          { title: 'Importació automàtica des de DMS', description: 'Connectat nativament amb els principals DMS del mercat. Sincronització automàtica i bidireccional sense intervenció manual.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'Una gestió de vehicles més ràpida, segura i adaptable',
        lead: "Crea vehicles de manera manual, automàtica o delegada, i mantén el teu estoc sempre actualitzat gràcies a les nostres connexions amb DMS i plataformes de fotografia. Un procés flexible que s'adapta a l'operativa de cada concessionari.",
        highlights: [
          { title: 'JATO + EUROTAX', description: 'Equipament unificat a cada vehicle' },
          { title: 'Control de qualitat', description: 'Equipament, preus i fotos' },
          { title: 'Anàlisi de competitivitat', description: 'Dades reals del mercat' },
          { title: 'Publicacions amb IA', description: 'Textos optimitzats automàticament' },
        ],
        bullets: [
          'JATO + EUROTAX unificats: cada vehicle porta l\'equipament complet i consistent creuant les dues bases de dades referència del sector. Sense buits, sense contradiccions.',
          'Taxació precisa i ràpida: valoracions fiables amb dades de mercat, informació tècnica i verificacions CARFAX.',
          'Control de qualitat: revisem equipament, imatges i preus abans de publicar per assegurar anuncis coherents a tots els portals.',
          "Generació d'ofertes i perxes: activa campanyes, destaca vehicles i mou estoc amb eines dissenyades per potenciar la rotació.",
          'Integració directa amb el Multipublicador per a publicació immediata a tots els teus portals.',
        ],
      },
      {
        type: 'process',
        title: "Com t'ajudem a arribar més lluny",
        steps: [
          { title: 'Taxació precisa i ràpida', description: 'Obtén valoracions fiables basades en dades de mercat, informació tècnica i verificacions CARFAX. Agilitza l\'entrada del vehicle al VO amb més seguretat.' },
          { title: 'Control de qualitat', description: 'Revisem equipament, imatges i preus abans de publicar per assegurar anuncis més complets, coherents i atractius a tots els portals.' },
          { title: "Generació d'ofertes i perxes", description: 'Crea ofertes i perxes de manera senzilla i centralitzada. Activa campanyes, destaca vehicles i mou estoc amb eines dissenyades per potenciar la rotació.' },
        ],
      },
      {
        type: 'cta',
        title: 'Vols vendre el teu estoc més ràpidament i amb més marge?',
        lead: "Sol·licita una demo i et mostrem com Dealer pot transformar la teva gestió d'estoc des del primer mes d'ús.",
      },
    ],
  },
  'lead-factory': {
    subtitle: 'Estalvia temps i centra\'t en les vendes',
    sections: [
      {
        type: 'features',
        title: 'Per què Lead 5 Estrelles és diferent?',
        lead: "No venem bases de dades. Captem prospectes actius que estan en el procés de compravenda del seu vehicle.",
        items: [
          { title: 'Doble lead en un contacte', description: "El venedor d'un cotxe és, gairebé sempre, també un comprador. Captem aquest moment de transició per oferir-te el lead més valuós del mercat.", icon: 'star' },
          { title: 'Segmentació geogràfica', description: "Espanya dividida en 7 zones d'exclusivitat. Cada concessionari rep els leads de la seva àrea d'influència, sense competència dins del seu territori.", icon: 'map' },
          { title: 'Entrega en temps real', description: 'El lead arriba al teu CRM o correu en el mateix moment en què el particular completa el formulari. Zero demora, màxima capacitat de reacció.', icon: 'schedule' },
          { title: 'Leads qualificats', description: 'Procés de verificació que filtra els contactes falsos o de baixa qualitat. Només reps leads reals amb dades de contacte verificades.', icon: 'verified' },
          { title: 'Reporting detallat', description: 'Dashboard amb la font de cada lead, la conversió a visita i la conversió final a venda. Mètriques reals per optimitzar.', icon: 'analytics' },
          { title: 'Integració amb el teu CRM', description: 'Els leads arriben directament a CRM4YOU o al CRM que facis servir. Sense doble entrada de dades.', icon: 'sync_alt' },
        ],
      },
      {
        type: 'highlights',
        title: 'De la captació a la venda en 3 passos',
        lead: 'El nostre sistema de captació multicanal garanteix un flux constant de leads d\'alta qualitat per al teu concessionari, tots els dies de l\'any.',
        highlights: [
          { title: 'Particular venedor', description: 'Vol vendre el seu cotxe i comprar-ne un altre' },
          { title: 'Zona geogràfica exclusiva', description: '7 zones a Espanya sense solapament' },
          { title: 'Contacte immediat', description: 'Lead en temps real amb dades verificades' },
          { title: 'Doble oportunitat', description: 'Taxació VO + venda VN en un sol lead' },
        ],
        bullets: [
          'Captació multicanal: SEO, SEM, Social Ads i portals especialitzats per captar el particular en el moment de decisió.',
          "Qualificació automàtica: el sistema verifica les dades i filtra els contactes falsos abans d'enviar el lead.",
          'Entrega immediata: el lead arriba al teu correu, CRM o WhatsApp en temps real amb totes les dades del vehicle i el contacte.',
          "Zones d'exclusivitat per evitar la competència interna entre concessionaris",
          'Preu per lead, sense subscripció mensual mínima ni permanència',
        ],
      },
      {
        type: 'process',
        title: 'Com funciona Lead 5 Estrelles?',
        steps: [
          { title: 'Captació multicanal', description: 'Captem particulars a través de SEO, SEM, Social Ads i portals especialitzats al moment en què decideixen vendre el seu vehicle.' },
          { title: 'Qualificació i verificació', description: 'El sistema verifica les dades de contacte i filtra els leads de baixa qualitat. Només leads reals i qualificats arriben al teu concessionari.' },
          { title: 'Entrega i seguiment', description: 'El lead arriba en temps real al teu CRM, correu o WhatsApp. Seguiment de l\'estat de cada lead amb reporting mensual de conversió.' },
        ],
      },
      {
        type: 'cta',
        title: 'Vols leads de compradors de cotxes a la teva zona?',
        lead: 'Consulta la disponibilitat de la teva zona exclusiva i comença a rebre leads qualificats des del primer dia.',
      },
    ],
  },
  'exportaciones': {
    subtitle: "Importa el teu estoc, crea'l amb assistència i publica als principals portals · +1.000 clients publiquen cada dia amb nosaltres",
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
          "Diferenciador real: exportem els anuncis amb l'equipament extra de cada unitat perfectament desglossat — quelcom que la majoria de multipublicadors NO fa.",
          'Permanència mínima de 6 mesos. Sense sorpreses a la factura ni costos ocults.',
        ],
      },
      {
        type: 'features',
        title: "Importació i creació d'estoc a mida",
        lead: "Tres maneres de crear l'anunci segons el nivell de fiabilitat i temps que vulguis dedicar-li. Des de la creació manual a la creació premium per bastidor (VIN) amb equipament opcional inclòs automàticament.",
        items: [
          { title: 'Creació bàsica (manual)', description: "Tu crees l'anunci des d'una interfície intuïtiva basada en JATO: data de matriculació, tipus, marca, model, versió, combustible, portes, carrosseria, canvi i extres.", icon: 'edit_note' },
          { title: 'Creació avançada (per matrícula)', description: 'Introdueixes la matrícula i el sistema autocompleta les dades bàsiques. Només has de seleccionar versió i extres. Inclou la creació bàsica.', icon: 'directions_car' },
          { title: 'Creació premium (per VIN/bastidor)', description: 'Amb el bastidor obtenim automàticament tota la informació del vehicle inclosa la versió i els extres. Màxima fiabilitat al llistat. Inclou la creació avançada.', icon: 'verified' },
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
        lead: "Cada any, milers de clients acaben el seu contracte sense renovar perquè no han rebut una proposta personalitzada a temps. El teu equip no arriba a tots. Els teus correus massius s'ignoren. MotorFlash Connect converteix aquest final de contracte en una nova venda, automàticament, amb un vídeo únic per client.",
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
        lead: "A més del flux de final de contracte, MotorFlash Connect inclou un motor per enviar vídeos personalitzats en qualsevol moment de l'any. Dissenyes la campanya un cop i la plataforma la dispara automàticament, personalitzada per a cada client.",
        items: [
          { title: 'Campanyes estacionals', description: "Pneumàtics d'hivern, revisió ITV, canvi d'oli, assegurança a renovar. Vídeos automàtics a la data justa per a cada client.", icon: 'event_repeat' },
          { title: 'Campanyes de data fixa', description: 'Black Friday, llançament d\'un model nou, final d\'any fiscal. Defineixes data i audiència, la plataforma envia a tothom amb el seu nom i dades.', icon: 'calendar_month' },
          { title: 'Campanyes per audiència', description: "Defineix una base de dades concreta (clients d'una marca, quota, antiguitat) i envia'ls una oferta exclusiva amb vídeo personalitzat.", icon: 'group' },
          { title: 'Integració amb el teu CRM/ERP', description: 'API REST i webhooks per sincronitzar cartera, disparar campanyes des del teu CRM i enviar respostes automàticament al lead correcte.', icon: 'integration_instructions' },
        ],
      },
      {
        type: 'cta',
        title: "30 minuts i t'ensenyem un vídeo real amb un dels teus clients",
        lead: 'Demo personalitzada: vídeo generat amb un cas real de la teva cartera (amb la teva autorització), panell de respostes i mètriques, integració amb el teu sistema actual i càlcul de ROI estimat. Modalitat SaaS sense permanència, amb pla pilot per validar abans de decidir.',
      },
    ],
  },
}
