import Image from 'next/image'
import Link from 'next/link'

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
              <span className="text-primary text-xs font-bold uppercase tracking-widest">POWERED BY SPYNE AI</span>
            </div>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              Vende antes con <span className="text-primary">Photocall IA</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-xl">
              El 40% de los compradores deciden sin ver el coche. Transforma fotos mediocres en imágenes de concesionario premium de forma automática.
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

      {/* Bento Grid */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between group border border-outline-variant shadow-sm">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>wallpaper</span>
                  <h3 className="text-xl font-medium">Eliminación de Fondos</h3>
                </div>
                <p className="text-sm text-on-surface-variant mb-8">
                  Nuestra IA detecta el vehículo y sustituye fondos ruidosos por entornos de estudio limpios y profesionales en milisegundos.
                </p>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-inner bg-surface-container-low">
                <Image src="/images/products/spyne-background-removal.png" alt="Comparativa eliminación de fondos" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/90 p-2 rounded-full backdrop-blur-md shadow-lg">
                    <span className="material-symbols-outlined text-white">compare</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-surface-container p-8 rounded-2xl border border-outline-variant flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">bolt</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Velocidad Extrema</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Procesa inventarios completos en minutos. Reduce el tiempo de publicación de stock hasta en un 80%.
              </p>
              <div className="w-full h-1.5 bg-outline-variant rounded-full mt-auto overflow-hidden">
                <div className="w-4/5 h-full bg-primary rounded-full" />
              </div>
              <span className="mt-4 text-[10px] text-primary font-bold uppercase tracking-widest">RENDIMIENTO OPTIMIZADO</span>
            </div>

            <div className="md:col-span-4 bg-surface-container-high p-8 rounded-2xl border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">verified_user</span>
              <h3 className="text-xl font-medium mb-4">Genera Confianza</h3>
              <p className="text-sm text-on-surface-variant">
                El 40% de tus clientes no verá el coche antes de comprarlo. Una imagen profesional es tu mejor comercial.
              </p>
            </div>

            <div className="md:col-span-8 glass-card p-8 rounded-2xl flex items-center gap-6 border border-primary/10 shadow-sm">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">Retoque de Ventanas y Sombras</h3>
                <p className="text-sm text-on-surface-variant mb-6">
                  Corrección inteligente de reflejos en cristales y generación de sombras realistas para una integración perfecta en el nuevo entorno.
                </p>
                <ul className="space-y-3">
                  {['SOMBRAS DINÁMICAS', 'REFLEJOS CONTROLADOS', 'LIMPIEZA DE MATRÍCULAS'].map((t) => (
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

      {/* Stats */}
      <section className="py-20 border-y border-outline-variant bg-surface-container-low">
        <div className="mf-container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: '40%', l: 'VENTA 100% ONLINE', primary: true },
            { v: '5x', l: 'MÁS CLICS' },
            { v: '2.4s', l: 'PROCESADO POR FOTO' },
            { v: '+30%', l: 'CONVERSIÓN LEAD' },
          ].map((s) => (
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
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-6">¿Listo para profesionalizar tu inventario?</h2>
          <p className="text-lg text-on-surface-variant mb-10">
            Únete a cientos de concesionarios que ya utilizan Photocall IA de Spyne para dominar el mercado digital.
          </p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all">
            Solicitar Demo Personalizada
          </Link>
        </div>
      </section>
    </div>
  )
}
