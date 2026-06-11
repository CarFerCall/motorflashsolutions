import Image from 'next/image'
import Link from 'next/link'
import { orderedProducts } from '@/catalog/products'

export function Footer() {
  const products = orderedProducts().slice(0, 6)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-outline-variant pt-20 pb-12">
      <div className="mf-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/images/logo-motorflash.png" alt="Motorflash" width={140} height={32} className="mb-4" style={{ height: 32, width: 'auto' }} />
            <p className="text-sm text-on-surface-variant">
              La solución 360 para marcas y concesionarios del motor. Tecnología con IA integrada desde 2007.
            </p>
            <div className="flex gap-3 mt-4">
              {['share', 'public'].map((icon) => (
                <a key={icon} href="#" className="w-12 h-12 rounded-xl border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">Productos</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/servicios/${p.slug}`} className="hover:text-primary transition-colors">{p.name}</Link>
                </li>
              ))}
              <li className="mt-2">
                <Link href="/servicios" className="font-bold text-on-surface hover:text-primary">Ver todos →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">La Compañía</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li><Link href="/compania" className="hover:text-primary transition-colors">Conócenos</Link></li>
              <li><Link href="/historias-de-exito" className="hover:text-primary transition-colors">Historias de éxito</Link></li>
              <li><Link href="/precios" className="hover:text-primary transition-colors">Precios</Link></li>
              <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">Sede Madrid</h5>
            <p className="text-sm text-on-surface-variant mb-3">
              Calle Basauri 17 – Edf. B, Bajo Izq. D<br />28023 Madrid, España
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container border border-outline-variant">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">ISO Certified 9001</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-12 pt-8 border-t border-outline-variant">
          <p className="text-xs text-on-surface-variant m-0">© {year} Motorflash Ibérica de Negocios S.L. Precise automotive technology.</p>
          <div className="flex gap-6 text-xs font-bold text-on-surface-variant">
            <a href="#" className="hover:text-primary">Privacidad</a>
            <a href="#" className="hover:text-primary">Cookies</a>
            <a href="#" className="hover:text-primary">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
