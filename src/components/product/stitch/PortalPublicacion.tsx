import Image from 'next/image'
import Link from 'next/link'

export function PortalPublicacion() {
  const productSlug = 'portal-publicacion'

  return (
    <div className="font-display text-on-surface">
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="mf-container grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              PORTAL PROPIO MOTORFLASH.COM
            </span>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              Donde el stock se convierte en <span className="text-primary">ventas reales.</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-8 max-w-xl">
              Aprovecha el ecosistema líder en el sector automotriz. No solo publicas; posicionas tu inventario frente a una audiencia altamente cualificada que busca exactamente lo que tú ofreces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_10px_20px_rgba(255,128,0,0.2)] transition-all">
                Publicar Inventario
                <span className="material-symbols-outlined">trending_up</span>
              </Link>
              <Link href="/servicios" className="inline-block px-8 py-4 border border-outline-variant text-on-surface font-bold rounded-xl hover:bg-surface-container-high transition-all">
                Ver Estadísticas
              </Link>
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

      {/* Stats */}
      <section className="bg-surface-container-low py-20 border-y border-outline-variant/30">
        <div className="mf-container grid md:grid-cols-4 gap-8">
          {[
            { icon: 'groups', v: '+2.5M', l: 'Visitas Mensuales' },
            { icon: 'search', v: '15M', l: 'Búsquedas de Stock' },
            { icon: 'timer', v: '4.2min', l: 'Tiempo de Sesión' },
            { icon: 'verified', v: '98%', l: 'Leads Cualificados' },
          ].map((s) => (
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

      {/* Bento Advantages */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Ventajas de Publicar en Motorflash</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Nuestro portal propio es la pieza central que conecta tu stock con los mayores hubs de tráfico automotriz en España.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 bg-surface-container-low p-10 rounded-2xl border border-outline-variant relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <span className="material-symbols-outlined">visibility</span>
                  <span className="text-xs font-bold uppercase tracking-widest">VISIBILIDAD EXTRA</span>
                </div>
                <h3 className="text-xl md:text-headline-lg font-medium mb-4">Alcance Multicanal Instantáneo</h3>
                <p className="text-on-surface-variant text-lg max-w-md">
                  Tu anuncio no solo vive en Motorflash. Se distribuye automáticamente a través de nuestra red de partners y feeds exclusivos, garantizando un 40% más de impresiones que en portales genéricos.
                </p>
              </div>
              <div aria-hidden className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
            </div>

            <div className="col-span-12 md:col-span-4 bg-white p-10 rounded-2xl border border-outline-variant shadow-sm">
              <div className="flex items-center gap-3 text-primary mb-6">
                <span className="material-symbols-outlined">psychology</span>
                <span className="text-xs font-bold uppercase tracking-widest">MOTORFLASH IA</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Optimización con IA</h3>
              <p className="text-sm text-on-surface-variant">
                Analizamos las tendencias de búsqueda en tiempo real para sugerirte cambios en el precio o descripción que aumenten tus clics.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white p-10 rounded-2xl border border-outline-variant shadow-sm">
              <div className="flex items-center gap-3 text-primary mb-6">
                <span className="material-symbols-outlined">hub</span>
                <span className="text-xs font-bold uppercase tracking-widest">CRM INTEGRADO</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Control Total en CRM4YOU</h3>
              <p className="text-sm text-on-surface-variant">
                Gestiona cada lead que entra desde el portal directamente en tu CRM, sin pérdidas de datos ni esperas.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 p-10 rounded-2xl text-white" style={{ background: 'linear-gradient(135deg, #ff8000 0%, #ff9e40 100%)' }}>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl md:text-headline-lg font-bold mb-2">Tráfico que Convierte</h3>
                  <p className="opacity-95 max-w-sm">
                    Nuestros usuarios tienen una intención de compra un 35% superior a la media del mercado, centrada en producto de stock profesional.
                  </p>
                </div>
                <div className="hidden lg:block opacity-30">
                  <span className="material-symbols-outlined" style={{ fontSize: 120 }}>bar_chart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-low">
        <div className="mf-container">
          <div className="bg-white rounded-[2rem] p-12 lg:p-20 border border-outline-variant flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
            <div aria-hidden className="absolute w-80 h-80 bg-primary opacity-10" style={{ right: -80, bottom: -80, filter: 'blur(100px)' }} />
            <div className="flex-1 text-center lg:text-left z-10">
              <h2 className="text-3xl md:text-display-lg font-semibold mb-6 leading-tight">¿Listo para dominar el mercado digital?</h2>
              <p className="text-on-surface-variant text-lg mb-10 max-w-xl">
                Únete a los más de 3.500 concesionarios que ya confían en la red Motorflash para mover su inventario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={`/contacto?servicio=${productSlug}`} className="inline-block px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                  Solicitar Demo
                </Link>
                <Link href={`/contacto?servicio=${productSlug}`} className="inline-block px-10 py-5 border border-outline text-on-surface font-bold rounded-2xl hover:bg-surface-container-high transition-all">
                  Hablar con un experto
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm space-y-6">
                {[
                  { icon: 'bolt', t: 'Publicación Ultra-Rápida', d: 'Sync en menos de 5 minutos' },
                  { icon: 'ads_click', t: 'Leads Exclusivos', d: 'Sin competencia en tus propios leads' },
                  { icon: 'monitoring', t: 'Analytics Avanzado', d: 'Métricas de rendimiento por vehículo' },
                ].map((f) => (
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
