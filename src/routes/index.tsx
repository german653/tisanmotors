import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { SiteShell } from "@/components/site-shell";
import { buttonClass } from "@/components/ui/button";
import { VehiclePicker, useVehicle } from "@/components/vehicle-picker";
import { WhatsAppIcon } from "@/components/icons";
import { fits, mergeCatalog, vehicleLabel } from "@/lib/catalog";
import { useShop } from "@/lib/shop-store";
import { openWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TISAN MOTORS — Equipamiento premium" },
      {
        name: "description",
        content:
          "Equipamiento y personalización premium para tu vehículo. Volantes deportivos, kits LED y accesorios con compatibilidad plug and play.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const patches = useShop((state) => state.patches);
  const customProducts = useShop((state) => state.customProducts);
  const { vehicle, draft, setVehicle } = useVehicle();
  const products = mergeCatalog(patches, customProducts)
    .filter((product) => !product.hidden && fits(product, vehicle))
    .slice(0, 3);

  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-2 lg:py-20">
        <div className="grid gap-6">
          <p className="text-xs font-medium tracking-widest text-mist uppercase">TISAN MOTORS</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Equipamiento y personalización premium para tu vehículo
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-platinum">
            Compatibilidad exacta por marca, modelo y año. Volantes con terminación artesanal e
            iluminación ambiental lista para instalar.
          </p>
          <p className="flex items-center gap-2 text-sm text-platinum">
            <span className="h-2 w-2 bg-accent" aria-hidden />
            Garantía de calidad · Compatibilidad plug & play
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/catalogo" className={buttonClass({ size: "lg" })}>
              Explorar catálogo
            </Link>
            <button
              type="button"
              className={buttonClass({ variant: "secondary", size: "lg" })}
              onClick={() =>
                openWhatsApp(
                  vehicle
                    ? `Hola TISAN MOTORS, quiero cotizar equipamiento para mi ${vehicleLabel(vehicle)}.`
                    : "Hola TISAN MOTORS, quiero cotizar equipamiento para mi vehículo.",
                )
              }
            >
              <WhatsAppIcon className="size-4" />
              Cotizar por WhatsApp
            </button>
          </div>
        </div>
        <div className="bg-well p-2 shadow-card">
          <div className="relative">
            <img
              src="/products/volante-gti-negro.png"
              alt="Volante deportivo VW GTI en cuero microperforado"
              className="aspect-[4/5] w-full object-cover"
            />
            <dl className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2">
              {[
                ["Aro", "Deportivo"],
                ["Cuero", "Microperforado"],
                ["Airbag", "Se conserva"],
                ["Calce", "Plug & play"],
              ].map(([label, value]) => (
                <div key={label} className="bg-ink/90 px-3 py-2">
                  <dt className="text-xs text-mist">{label}</dt>
                  <dd className="text-sm text-snow">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-graphite">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-10">
          <div className="grid gap-2">
            <h2 className="text-2xl font-semibold">Compatibilidad por vehículo</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-platinum">
              Elegí marca, modelo y año. El catálogo muestra solo lo que calza en ese auto.
            </p>
          </div>
          <VehiclePicker vehicle={draft} onChange={setVehicle} />
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/catalogo" className={buttonClass({ variant: "primary" })}>
              Ver compatibles
            </Link>
            <p className="text-sm text-mist">
              {vehicle ? vehicleLabel(vehicle) : "Todavía no hay un vehículo seleccionado."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14">
        <h2 className="text-2xl font-semibold">Categorías</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/volantes" className="grid gap-2 border border-line bg-graphite p-5 transition-colors duration-200 hover:border-platinum">
            <h3 className="text-lg font-semibold">Volantes</h3>
            <p className="text-sm leading-relaxed text-mist">
              Línea GTI, clásicos de tres rayos y acabado plata. Costura y emblema a elección.
            </p>
          </Link>
          <Link to="/iluminacion" className="grid gap-2 border border-line bg-graphite p-5 transition-colors duration-200 hover:border-platinum">
            <h3 className="text-lg font-semibold">Iluminación LED</h3>
            <p className="text-sm leading-relaxed text-mist">
              Kits de 48 LED con control por aplicación y por el audio del estéreo.
            </p>
          </Link>
          <Link
            to="/catalogo"
            search={{ cat: "performance" }}
            className="grid gap-2 border border-line bg-graphite p-5 transition-colors duration-200 hover:border-platinum"
          >
            <h3 className="text-lg font-semibold">Performance</h3>
            <p className="text-sm leading-relaxed text-mist">
              Levas de cambio y pomos de cuero para cerrar el puesto de manejo.
            </p>
          </Link>
          <Link
            to="/catalogo"
            search={{ cat: "detailing" }}
            className="grid gap-2 border border-line bg-graphite p-5 transition-colors duration-200 hover:border-platinum"
          >
            <h3 className="text-lg font-semibold">Detailing</h3>
            <p className="text-sm leading-relaxed text-mist">
              Cuidado del cuero del aro y del habitáculo, para usar en casa.
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Selección</h2>
          <Link to="/catalogo" className="text-sm text-platinum hover:text-snow">
            Ver todo
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-3">
          {[
            ["Compatibilidad declarada", "Cada volante indica modelo y rango de años. Si no calza, no aparece."],
            ["Terminación de taller", "Cuero, costura y emblema se definen antes de armar el pedido."],
            ["Instalación con airbag", "En el showroom se coloca, se controla el airbag y se prueba el mando."],
          ].map(([title, text]) => (
            <div key={title} className="grid gap-2">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-mist">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-graphite">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-2">
            <h2 className="text-2xl font-semibold">Instalación en showroom</h2>
            <p className="max-w-xl text-sm leading-relaxed text-platinum">
              Av. Warnes 2240, Villa Crespo. Turnos de mañana y tarde para colocar volante o kit LED.
            </p>
          </div>
          <Link to="/instalacion" className={buttonClass({ size: "lg" })}>
            Agendar instalación
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
