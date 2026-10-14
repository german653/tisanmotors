import { Link } from "@tanstack/react-router";
import { Instagram, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { VehiclePicker, useVehicle } from "@/components/vehicle-picker";
import { SITE, vehicleLabel } from "@/lib/catalog";
import { cn } from "@/lib/cn";
import { useShop } from "@/lib/shop-store";
import { openWhatsApp } from "@/lib/whatsapp";

const LINKS = [
  { to: "/catalogo", label: "Catálogo" },
  { to: "/volantes", label: "Volantes" },
  { to: "/iluminacion", label: "Iluminación LED" },
  { to: "/instalacion", label: "Agendar instalación" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { vehicle, draft, setVehicle } = useVehicle();
  const count = useShop((state) => state.cart.reduce((sum, item) => sum + item.qty, 0));
  const setCartOpen = useShop((state) => state.setCartOpen);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src="/brand/logo.png" alt="TISAN" className="h-10 w-auto" />
        </Link>
        <nav className="ml-4 hidden items-center gap-5 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-platinum transition-colors duration-200 hover:text-snow"
              activeProps={{ className: "text-sm text-snow" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex size-11 items-center justify-center text-platinum hover:text-snow"
          >
            <Instagram className="size-5" />
          </a>
          <button
            type="button"
            aria-label="WhatsApp"
            className="inline-flex size-11 items-center justify-center text-platinum hover:text-snow"
            onClick={() =>
              openWhatsApp(
                vehicle
                  ? `Hola TISAN MOTORS, quiero cotizar equipamiento para mi ${vehicleLabel(vehicle)}.`
                  : "Hola TISAN MOTORS, quiero cotizar equipamiento para mi vehículo.",
              )
            }
          >
            <WhatsAppIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Abrir carrito"
            className="relative inline-flex size-11 items-center justify-center text-platinum hover:text-snow"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute top-1 right-1 flex h-5 min-w-5 items-center justify-center bg-accent px-1 text-xs text-snow tabular-nums">
                {count}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-platinum lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div className="hidden border-t border-line lg:block">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <p className="w-28 shrink-0 text-xs tracking-wide text-mist uppercase">Tu vehículo</p>
          <div className="min-w-0 flex-1">
            <VehiclePicker vehicle={draft} onChange={setVehicle} />
          </div>
        </div>
      </div>
      <div className={cn("border-t border-line lg:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-5">
          <nav className="grid gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex h-11 items-center text-base text-snow"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-3">
            <p className="text-xs tracking-wide text-mist uppercase">Tu vehículo</p>
            <VehiclePicker vehicle={draft} onChange={setVehicle} />
          </div>
        </div>
      </div>
    </header>
  );
}
