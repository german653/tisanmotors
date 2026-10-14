import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div className="grid gap-3">
          <img src="/brand/logo.png" alt="" className="h-10 w-auto" />
          <p className="max-w-xs text-sm leading-relaxed text-mist">
            Volantes, iluminación y accesorios con compatibilidad declarada. Taller en Villa Crespo.
          </p>
        </div>
        <div className="grid content-start gap-2 text-sm">
          <p className="text-xs tracking-wide text-mist uppercase">Tienda</p>
          <Link to="/catalogo" className="text-platinum hover:text-snow">
            Catálogo
          </Link>
          <Link to="/volantes" className="text-platinum hover:text-snow">
            Volantes
          </Link>
          <Link to="/iluminacion" className="text-platinum hover:text-snow">
            Iluminación LED
          </Link>
          <Link to="/instalacion" className="text-platinum hover:text-snow">
            Instalación
          </Link>
        </div>
        <div className="grid content-start gap-2 text-sm">
          <p className="text-xs tracking-wide text-mist uppercase">Showroom</p>
          <p className="text-platinum">{SITE.address}</p>
          <p className="text-platinum">{SITE.hours}</p>
          <p className="text-platinum">{SITE.phoneDisplay}</p>
          <a href={`mailto:${SITE.email}`} className="text-platinum hover:text-snow">
            {SITE.email}
          </a>
          <Link to="/admin" className="pt-3 text-mist hover:text-snow">
            Gestión
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs leading-relaxed text-mist">
          Los emblemas de los fabricantes se muestran para indicar compatibilidad. TISAN MOTORS es un
          taller independiente.
        </p>
      </div>
    </footer>
  );
}
