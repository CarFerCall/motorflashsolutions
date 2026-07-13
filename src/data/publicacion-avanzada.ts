/**
 * Datos de demo para la página /publicacion-avanzada.
 *
 * Cada entrada representa una matrícula española con la ficha técnica
 * completa, colores, extras de fábrica y precio total. Portado del
 * fichero creacion_premium_demo.html que nos proporcionó negocio.
 */

export interface VehicleExtra {
  code: string
  desc: string
  precio: string
}

export interface VehiclePaint {
  code: string
  nombre: string
  tipo?: string
  precio?: string
  /** CSS background (gradient) que se usa como muestra de color. */
  sw: string
}

export interface VehicleData {
  marca: string
  modelo: string
  version: string
  kw: string
  cv: string
  comb: string
  eco: string
  ecoColor: string
  ecoBg: string
  ecoBorder: string
  puertas: string
  plazas: string
  cambio: string
  traccion: string
  cilindrada: string
  fab: string
  mat: string
  vin: string
  pintura: VehiclePaint
  extras: VehicleExtra[]
  total?: string
}

export const VEHICLE_DB: Record<string, VehicleData> = {
  '6784KBX': {
    marca:'Audi', modelo:'A7 Sportback', version:'55 TFSIe 270KW quattro S tronic',
    kw:'270', cv:'367', comb:'Híbrido enchufable', eco:'CERO', ecoColor:'#059669', ecoBg:'#d1fae5', ecoBorder:'#a7f3d0',
    puertas:'4/5', plazas:'5', cambio:'S tronic 7 vel.', traccion:'quattro integral', cilindrada:'1.984 cc',
    fab:'Enero 2021', mat:'14/03/2021', vin:'WAUZZZ4G3MN012847',
    pintura:{code:'6Y6Y',nombre:'Gris Daytona efecto perla',tipo:'PRL — Pintura efecto perla',precio:'1.223,65 €',sw:'linear-gradient(135deg,#8a8e99,#b3b7c3,#6e727d)'},
    extras:[
      {code:'1BL',desc:'Suspensión regulable con damper control',precio:'834,26 €'},
      {code:'6XL',desc:'Retrovisor exterior ajustable/abatible eléctricamente antideslumbrantes auto. con función memoria',precio:'117,53 €'},
      {code:'9ZE',desc:'Audi phone box',precio:'587,62 €'},
      {code:'CF6',desc:'Llantas de aleación Audi Sport 9J x 20, diseño de 5 brazos dobles titanio mate torneado brillante, neumáticos 255/40 R 20',precio:'1.939,99 €'},
      {code:'GS5',desc:'Botones operativos en negro brillante con respuesta háptica y óptica de aluminio ampliada',precio:'398,92 €'},
      {code:'PCC',desc:'Paquete de asistentes Tour sin sensor láser',precio:'2.350,50 €'},
      {code:'PIH',desc:'ISOFIX delantero con desactivación del airbag',precio:'94,36 €'},
      {code:'QE1',desc:'Paquete portaobjetos',precio:'94,36 €'},
      {code:'QQ2',desc:'Paquete de iluminación ambiente de contorno',precio:'294,64 €'},
      {code:'QR9',desc:'Reconocimiento de señales basado en cámara',precio:'235,05 €'},
      {code:'UF8',desc:'Audi music interface en parte trasera — 2 USBs adicionales',precio:'176,28 €'},
    ],
    total:'96.749,66 €'
  },
  '6804LSW': {
    marca:'Abarth', modelo:'500', version:'595 Turismo 1.4 16v T-Jet 121kW E6D',
    kw:'121', cv:'164', comb:'Gasolina', eco:'C', ecoColor:'#92400e', ecoBg:'#fef3c7', ecoBorder:'#fcd34d',
    puertas:'3', plazas:'5', cambio:'Manual 5 vel.', traccion:'Delantera', cilindrada:'1.368 cc',
    fab:'Enero 2022', mat:'08/01/2022', vin:'ZFA31200007123456',
    pintura:{code:'695',nombre:'Gris Record metalizado',tipo:'5DP — Pintura metalizada extraserie',precio:'650,00 €',sw:'linear-gradient(135deg,#7a7e85,#9fa3ab,#6c7078)'},
    extras:[
      {code:'230',desc:'Faros Bi-Xenon',precio:'860,00 €'},
      {code:'407',desc:'Cambio secuencial Abarth Competizione',precio:'1.950,00 €'},
      {code:'5BH',desc:'Levas de cambio en el volante',precio:'0,00 €'},
      {code:'6GD',desc:'Tapa de antena para el techo',precio:'165,00 €'},
    ], total:'30.424,70 €'
  },
  '6966MGJ': {
    marca:'SEAT', modelo:'Tarraco', version:'2.0 TDI 110kW St&Sp FR XL DSG',
    kw:'110', cv:'150', comb:'Diésel', eco:'C', ecoColor:'#92400e', ecoBg:'#fef3c7', ecoBorder:'#fcd34d',
    puertas:'5', plazas:'7', cambio:'DSG automático 7 vel.', traccion:'Delantera', cilindrada:'1.968 cc',
    fab:'03/03/2023', mat:'26/04/2023', vin:'VSSZZZ5FZP5000000',
    pintura:{code:'BOBO',nombre:'Gris Dolphin metalizado',tipo:'MET — Pintura metalizada',precio:'580,00 €',sw:'linear-gradient(135deg,#8a9099,#b0b8c1,#737b84)'},
    extras:[
      {code:'P7P',desc:'Tercera fila de asientos',precio:'849,99 €'},
      {code:'R3C',desc:'Seat Connect: Pack Safety & Services',precio:'0,00 €'},
      {code:'R3D',desc:'Seat Connect: Media & Internet services',precio:'0,00 €'},
      {code:'YW8',desc:'Extensión de garantía de 2 años (100.000 km)',precio:'500,00 €'},
    ], total:'49.099,99 €'
  },
  '1589MCW': {
    marca:'Mercedes-Benz', modelo:'Clase C', version:'C 200 d Berlina',
    kw:'120', cv:'163', comb:'Diésel', eco:'C', ecoColor:'#92400e', ecoBg:'#fef3c7', ecoBorder:'#fcd34d',
    puertas:'4', plazas:'5', cambio:'Automático 9G-Tronic', traccion:'Trasera', cilindrada:'1.993 cc',
    fab:'Diciembre 2022', mat:'31/12/2022', vin:'WDD2060082R000000',
    pintura:{code:'970',nombre:'Azul Espectral metalizado',tipo:'MET — Pintura metalizada',precio:'1.040,60 €',sw:'linear-gradient(135deg,#2a4a7f,#3d6aad,#1e3660)'},
    extras:[
      {code:'413',desc:'Techo corredizo panorámico',precio:'2.353,45 €'},
      {code:'840',desc:'Cristales calorífugos tintados oscuros',precio:'490,05 €'},
      {code:'H64',desc:'Elementos de adorno de estructura metálica',precio:'453,75 €'},
      {code:'P55',desc:'Paquete Night',precio:'108,90 €'},
      {code:'PYH',desc:'AMG Line',precio:'1.240,25 €'},
      {code:'PYO',desc:'Paquete Premium Plus (con P17 + 810)',precio:'7.096,65 €'},
    ], total:'60.536,65 €'
  },
  '6687MGF': {
    marca:'BMW', modelo:'Z4', version:'sDrive30i Automático',
    kw:'190', cv:'258', comb:'Gasolina', eco:'C', ecoColor:'#92400e', ecoBg:'#fef3c7', ecoBorder:'#fcd34d',
    puertas:'2', plazas:'2', cambio:'Automático 8 vel.', traccion:'Trasera', cilindrada:'1.998 cc',
    fab:'Abril 2023', mat:'16/04/2023', vin:'WBSYZ91090L000000',
    pintura:{code:'C1D',nombre:'Misano Blau metalizado',tipo:'C1D — Pintura metalizada Misano Blau',precio:'1.065,18 €',sw:'linear-gradient(135deg,#1a3a6e,#2d5fa8,#122952)'},
    extras:[
      {code:'1P3',desc:"Llantas 19'' aleación ligera M radios dobles (estilo 799 M) bicolor con neumáticos de diferentes dimensiones",precio:'1.124,36 €'},
      {code:'248',desc:'Volante calefactable',precio:'224,87 €'},
      {code:'2NH',desc:'Freno deportivo M',precio:'0,00 €'},
      {code:'2T4',desc:'Diferencial deportivo M',precio:'1.538,59 €'},
      {code:'302',desc:'Dispositivo de alarma',precio:'568,09 €'},
      {code:'322',desc:'Acceso confort',precio:'698,29 €'},
      {code:'430',desc:'Paquete de retrovisores interior y exteriores',precio:'366,89 €'},
      {code:'459',desc:'Reglaje de los asientos eléctrico con memoria',precio:'1.420,23 €'},
      {code:'494',desc:'Calefacción de los asientos delanteros',precio:'449,74 €'},
      {code:'4GQ',desc:'Cinturones de seguridad M',precio:'355,06 €'},
      {code:'4UR',desc:'Luz de ambiente',precio:'343,22 €'},
      {code:'552',desc:'Faros LED autoadaptables',precio:'1.408,40 €'},
      {code:'5AS',desc:'Driving Assistant',precio:'1.053,34 €'},
      {code:'610',desc:'BMW Head-Up Display',precio:'1.159,86 €'},
      {code:'688',desc:'Sistema de sonido surround Harman Kardon',precio:'473,41 €'},
      {code:'6NW',desc:'Sistema de telefonía con carga inalámbrica',precio:'473,41 €'},
      {code:'704',desc:'Suspensión deportiva M',precio:'461,58 €'},
      {code:'710',desc:'Volante M de cuero',precio:'260,37 €'},
      {code:'711',desc:'Asientos deportivos M para conductor y acompañante',precio:'650,93 €'},
      {code:'760',desc:'Shadow Line de brillo intenso BMW Individual',precio:'379,71 €'},
      {code:'7LF',desc:'Acabado M Sport',precio:'5.000,01 €'},
      {code:'7M9',desc:'Shadow Line de brillo intenso BMW Individual con contenido ampliado',precio:'237,32 €'},
    ], total:'78.012,99 €'
  },
  '9404LBG': {
    marca:'Porsche', modelo:'Cayenne Coupé', version:'S Coupé 440CV',
    kw:'324', cv:'440', comb:'Gasolina', eco:'C', ecoColor:'#92400e', ecoBg:'#fef3c7', ecoBorder:'#fcd34d',
    puertas:'5', plazas:'4', cambio:'Automático Tiptronic S 8 vel.', traccion:'AWD integral', cilindrada:'2.894 cc',
    fab:'Mayo 2020', mat:'11/05/2020', vin:'WP1ZZZ9YXLDA00000',
    pintura:{code:'0Q',nombre:'Blanco sólido',tipo:'LU — Color exterior sólido',precio:'0,00 €',sw:'linear-gradient(135deg,#e8e8e8,#ffffff,#d5d5d5)'},
    extras:[
      {code:'0M5',desc:'Depósito de combustible de 90 litros',precio:'135,75 €'},
      {code:'0P9',desc:'Sistema de escape deportivo con salidas de escape deportivas en color Negro',precio:'3.244,42 €'},
      {code:'1BK',desc:'Suspensión Neumática Adaptativa incluyendo Porsche Active Suspension Management (PASM)',precio:'2.436,71 €'},
      {code:'1D3',desc:'Sistema de remolque con bola (desplegable de forma eléctrica)',precio:'1.384,65 €'},
      {code:'1ZI',desc:'Sistema de Frenos Porsche Surface Coated Brake (PSCB)',precio:'3.393,75 €'},
      {code:'2ZF',desc:'Volante deportivo multifunción calefactable con aro de volante en Alcantara',precio:'495,49 €'},
      {code:'44J',desc:'Llantas GT Design de 22" en Platino (brillo satinado)',precio:'0,00 €'},
      {code:'4A3',desc:'Asientos delanteros calefactables',precio:'495,49 €'},
      {code:'5MH',desc:'Paquete interior en Carbono',precio:'1.859,78 €'},
      {code:'5ZF',desc:'Escudo Porsche en los reposacabezas delanteros y traseros',precio:'515,85 €'},
      {code:'6NN',desc:'Recubrimiento del techo en Alcantara',precio:'1.900,50 €'},
      {code:'7Y1',desc:'Asistente de cambio de carril',precio:'882,38 €'},
      {code:'8IS',desc:'Luces principales LED incl. Porsche Dynamic Light System Plus (PDLS)',precio:'1.018,12 €'},
      {code:'9VL',desc:'Sistema de sonido BOSE Surround Sound System',precio:'1.540,76 €'},
      {code:'9ZC',desc:'Compartimento para Smartphone',precio:'665,18 €'},
      {code:'GH3',desc:'Porsche Torque Vectoring Plus (PTV Plus)',precio:'1.696,88 €'},
      {code:'Q1J',desc:'Asientos delanteros deportivos adaptativos (18 posiciones, eléctricos) con paquete de memoria confort',precio:'2.267,02 €'},
      {code:'QQ1',desc:'Iluminación ambiente',precio:'461,55 €'},
      {code:'VW1',desc:'Cristales tintados',precio:'570,15 €'},
    ], total:'141.356,61 €'
  },
  '8909MWT': {
    marca:'Volvo', modelo:'S60', version:'Recharge T8 Plus Dark AWD Auto',
    kw:'228', cv:'309', comb:'Híbrido enchufable', eco:'CERO', ecoColor:'#059669', ecoBg:'#d1fae5', ecoBorder:'#a7f3d0',
    puertas:'4', plazas:'5', cambio:'Automático 8 vel.', traccion:'AWD integral', cilindrada:'1.969 cc',
    fab:'Octubre 2024', mat:'28/10/2024', vin:'YV1DZ82EDSA000000',
    pintura:{code:'717',nombre:'Negro Onyx metalizado',tipo:'MET001 — Pintura metalizada',precio:'968,00 €',sw:'linear-gradient(135deg,#1a1a1a,#2d2d2d,#111111)'},
    extras:[
      {code:'000010',desc:'Asiento del pasajero con regulación eléctrica',precio:'435,60 €'},
      {code:'000047',desc:'Asiento del conductor con regulación eléctrica y memoria',precio:'780,45 €'},
      {code:'000385',desc:'Asiento del pasajero con memoria',precio:'90,75 €'},
    ], total:'68.536,80 €'
  },
  '9717NCP': {
    marca:'BMW', modelo:'X6', version:'xDrive40i M Sport',
    kw:'280', cv:'380', comb:'Gasolina', eco:'C', ecoColor:'#92400e', ecoBg:'#fef3c7', ecoBorder:'#fcd34d',
    puertas:'5', plazas:'5', cambio:'Automático Steptronic 8 vel.', traccion:'xDrive integral', cilindrada:'2.998 cc',
    fab:'Junio 2025', mat:'02/06/2025', vin:'WBAKV61050L000000',
    pintura:{code:'300',nombre:'Alpine White sólido',tipo:'Color exterior sólido',precio:'0,00 €',sw:'linear-gradient(135deg,#e8e8e8,#ffffff,#d8d8d8)'},
    extras:[
      {code:'1MA',desc:'Sistema de escape deportivo M',precio:'0,00 €'},
      {code:'1PQ',desc:'Llantas M de 22" estilo 742 M de radios dobles con neumáticos de diferentes dimensiones',precio:'2.830,36 €'},
      {code:'33B',desc:'Paquete M Sport Pro',precio:'2.153,53 €'},
      {code:'3DN',desc:"Parrilla BMW 'Iconic Glow'",precio:'638,83 €'},
      {code:'402',desc:'Techo de cristal panorámico',precio:'2.427,54 €'},
      {code:'417',desc:'Persiana solar, ventanillas laterales traseras',precio:'406,10 €'},
      {code:'418',desc:'Paquete de maletero',precio:'529,16 €'},
      {code:'420',desc:'Acristalamiento de protección solar',precio:'638,83 €'},
      {code:'688',desc:'Sistema de sonido surround Harman Kardon',precio:'1.046,00 €'},
      {code:'7LK',desc:'Travel Paket',precio:'3.568,70 €'},
      {code:'7M9',desc:'Shadow Line M de brillo intenso con contenido ampliado',precio:'0,00 €'},
    ], total:'119.426,05 €'
  }
}

export const SAMPLE_PLATES = Object.keys(VEHICLE_DB)

export function findByPlate(raw: string): VehicleData | undefined {
  const normalized = raw.trim().toUpperCase().replace(/[\s\-·]/g, '')
  return VEHICLE_DB[normalized]
}
