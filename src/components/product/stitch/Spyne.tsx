import Image from 'next/image'
import Link from 'next/link'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'

export function Spyne() {
  const productSlug = 'spyne'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
          <div className="w-full h-full opacity-60">
            <Image src="/images/products/spyne-hero.png" alt="Vehículo de alta gama" fill className="object-cover" sizes="100vw" />
          </div>
        </div>
        <div className="mf-container relative z-20">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">POWERED BY CARLENS · SPYNE AI</span>
            </div>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              Vende antes con <span className="text-primary">Photocall IA</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-xl">
              El 40% de los compradores deciden sin ver el coche. Transforma fotos de aparcamiento en imágenes de estudio profesional con +150 funcionalidades de IA. Sin estudio, sin fotógrafo, sin esperas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">
                PROBAR DEMO GRATIS
              </Link>
              <Link href="/servicios" className="border border-outline text-on-surface px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-colors">
                VER TODOS LOS SERVICIOS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mercado / por qué importa */}
      <section className="py-20 bg-white">
        <div className="mf-container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">EL MERCADO HOY</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mt-3">
              Tus fotos son tu mejor comercial — la mayoría de clientes ya no ve el coche
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { v: '95%', l: 'De concesionarios publica su stock online' },
              { v: '40%', l: 'De compradores decide sin ver el coche en persona' },
              { v: '4,2', l: 'Webs visita un comprador antes de decidir' },
            ].map((s) => (
              <div key={s.l} className="bg-surface-container-low rounded-2xl p-8 text-center border border-outline-variant">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{s.v}</div>
                <p className="text-sm text-on-surface-variant">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant text-center mt-6 opacity-70">Fuente: Google Research · Cox Automotive</p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="mf-container">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">CAPACIDADES PRINCIPALES</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mt-3">
              Una sola herramienta. Todo el trabajo del fotógrafo, en automático.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between group border border-outline-variant shadow-sm bg-white">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>wallpaper</span>
                  <h3 className="text-xl font-medium">Sustitución de fondos y plataforma giratoria</h3>
                </div>
                <p className="text-sm text-on-surface-variant mb-8">
                  La IA detecta el vehículo, lo recorta y reemplaza el fondo por uno profesional o el tuyo personalizado. Además genera la plataforma bajo el coche para que parezca tomado en estudio. Arrastra el divisor para comparar.
                </p>
              </div>
              <BeforeAfterSlider
                beforeSrc="/images/products/spyne-after.jpg"
                afterSrc="/images/products/spyne-before.jpg"
                beforeAlt="Foto original del vehículo tomada en el concesionario"
                afterAlt="Misma foto procesada con IA: fondo de estudio y plataforma giratoria"
                beforeLabel="Antes"
                afterLabel="Después"
              />
            </div>

            <div className="md:col-span-5 bg-surface-container p-8 rounded-2xl border border-outline-variant flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">rotate_90_degrees_ccw</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Vídeo Spin 360°</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Vídeos interactivos generados automáticamente. El comprador gira el coche desde su móvil — más tiempo en ficha y más conversión.
              </p>
              <div className="w-full h-1.5 bg-outline-variant rounded-full mt-auto overflow-hidden">
                <div className="w-4/5 h-full bg-primary rounded-full" />
              </div>
              <span className="mt-4 text-[10px] text-primary font-bold uppercase tracking-widest">EXPERIENCIA INTERACTIVA</span>
            </div>

            <div className="md:col-span-4 bg-surface-container-high p-8 rounded-2xl border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">verified_user</span>
              <h3 className="text-xl font-medium mb-4">Coherencia profesional en todo el stock</h3>
              <p className="text-sm text-on-surface-variant">
                Misma calidad, mismo encuadre, mismos fondos. Tu catálogo se ve impecable en cada portal sin depender del operario que hizo la foto.
              </p>
            </div>

            <div className="md:col-span-8 glass-card p-8 rounded-2xl flex items-center gap-6 border border-primary/10 shadow-sm bg-white">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">Retoque automático de reflejos, sombras y matrículas</h3>
                <p className="text-sm text-on-surface-variant mb-6">
                  Corrige reflejos en carrocería y cristales, genera sombras realistas, cubre la matrícula con tu logo y tinta las lunas. RGPD cumplido sin pasos manuales.
                </p>
                <ul className="space-y-3">
                  {['SOMBRAS Y REFLEJOS GENERADOS', 'MATRÍCULA SUSTITUIBLE', 'TINTADO DE LUNAS', 'LOGO INCRUSTADO EN FONDO'].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[11px] text-primary font-bold uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm font-bold">check_circle</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* +150 funcionalidades en detalle */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">+150 FUNCIONALIDADES DE IA</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">
              +100 transformaciones y +50 detecciones automáticas
            </h2>
            <p className="text-on-surface-variant">
              Cada foto pasa por una pipeline de IA que la audita, la corrige y la transforma. Estos son algunos ejemplos de lo que hace por ti, automáticamente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
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
            ].map((f) => (
              <div key={f.t} className="bg-surface-container-low border border-outline-variant rounded-xl p-5 hover:border-primary/40 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl mb-3 block">{f.i}</span>
                <p className="font-semibold text-sm mb-1">{f.t}</p>
                <p className="text-xs text-on-surface-variant leading-snug">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 canales de uso */}
      <section className="py-24 bg-surface-container-low">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">5 FORMAS DE INTEGRARLO</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">
              Funciona con tu workflow actual. No al revés.
            </h2>
            <p className="text-on-surface-variant">
              Elige el canal o usa varios en paralelo: alguien hace fotos con la app mientras el sistema sube las del DMS por API.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { i: 'smartphone', t: 'App iOS / Android', d: 'Guía paso a paso para hacer las fotos desde el aparcamiento.' },
              { i: 'monitor', t: 'Consola Carlens360', d: 'Panel web con todas tus fotos, proyectos y reglas de IA.' },
              { i: 'api', t: 'API', d: 'Sube e inventario completo automáticamente desde tu DMS.' },
              { i: 'integration_instructions', t: 'SDK', d: 'Empotra el flujo en tu propia app de fabricante o grupo.' },
              { i: 'sync_alt', t: 'Integración DMS', d: 'Nos enchufamos a tu workflow: concesionario → web → portal.' },
            ].map((c) => (
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

      {/* Stats / impacto */}
      <section className="py-20 border-y border-outline-variant bg-surface-container-low">
        <div className="mf-container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: '+150', l: 'FUNCIONALIDADES IA', primary: true },
            { v: '5x', l: 'MÁS CLICS EN PORTAL' },
            { v: 'segundos', l: 'POR FOTO PROCESADA' },
            { v: '+30%', l: 'CONVERSIÓN A LEAD' },
          ].map((s) => (
            <div key={s.l}>
              <div className={`text-4xl md:text-5xl font-bold ${s.primary ? 'text-primary' : 'text-on-surface'}`}>{s.v}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA con pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-5">
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-6">¿Listo para profesionalizar tu inventario?</h2>
          <p className="text-lg text-on-surface-variant mb-4">
            Únete a los concesionarios que ya usan Photocall IA para dominar el mercado digital.
          </p>
          <div className="inline-flex flex-wrap items-center gap-x-6 gap-y-2 justify-center mb-10 text-sm text-on-surface-variant">
            <span><strong>Set up</strong> desde 150 €</span>
            <span className="opacity-30">·</span>
            <span><strong>Galería</strong> desde 4 € (hasta 40 fotos)</span>
            <span className="opacity-30">·</span>
            <span><strong>Con Spin 360°</strong> 5,50 €</span>
            <span className="opacity-30">·</span>
            <span><strong>Fondo personalizado</strong> 300 €</span>
          </div>
          <div>
            <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all">
              Solicitar Demo Personalizada
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
