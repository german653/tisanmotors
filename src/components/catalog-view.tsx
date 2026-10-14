import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { buttonClass } from "@/components/ui/button";
import { VehiclePicker, useVehicle } from "@/components/vehicle-picker";
import {
  CATEGORY_LABEL,
  fits,
  isCategory,
  mergeCatalog,
  vehicleLabel,
  type Category,
} from "@/lib/catalog";
import { useShop } from "@/lib/shop-store";

export function CatalogView({
  title,
  lede,
  category,
  query = "",
}: {
  title: string;
  lede: string;
  category?: Category;
  query?: string;
}) {
  const patches = useShop((state) => state.patches);
  const customProducts = useShop((state) => state.customProducts);
  const { vehicle, draft, setVehicle } = useVehicle();
  const needle = query.trim().toLowerCase();
  const products = mergeCatalog(patches, customProducts).filter((product) => {
    if (product.hidden) return false;
    if (category && product.category !== category) return false;
    if (!fits(product, vehicle)) return false;
    if (!needle) return true;
    return (
      product.name.toLowerCase().includes(needle) ||
      product.short.toLowerCase().includes(needle) ||
      CATEGORY_LABEL[product.category].toLowerCase().includes(needle)
    );
  });

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12">
      <div className="grid gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-platinum">{lede}</p>
      </div>
      <div className="grid gap-4 border border-line bg-graphite p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="text-sm text-platinum">
            {vehicle
              ? `Compatibles con ${vehicleLabel(vehicle)}`
              : "Sin filtro de vehículo: se muestra el catálogo completo."}
          </p>
          {vehicle ? (
            <button type="button" className={buttonClass({ variant: "ghost", size: "sm" })} onClick={() => setVehicle(null)}>
              Quitar vehículo
            </button>
          ) : null}
        </div>
        <VehiclePicker vehicle={draft} onChange={setVehicle} />
      </div>
      <div className="flex flex-wrap gap-2">
        <CategoryLink label="Todo" active={!category} />
        {(Object.keys(CATEGORY_LABEL) as Category[]).map((id) => (
          <CategoryLink key={id} label={CATEGORY_LABEL[id]} category={id} active={category === id} />
        ))}
      </div>
      {products.length === 0 ? (
        <p className="border border-line px-5 py-10 text-sm text-mist">
          No hay piezas compatibles con esa combinación. Probá otro año o sacá el filtro.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryLink({
  label,
  category,
  active,
}: {
  label: string;
  category?: Category;
  active: boolean;
}) {
  const className = active
    ? "inline-flex h-10 items-center border border-snow px-3 text-sm text-snow"
    : "inline-flex h-10 items-center border border-line px-3 text-sm text-platinum hover:text-snow";
  if (!category) {
    return (
      <Link to="/catalogo" className={className}>
        {label}
      </Link>
    );
  }
  if (category === "volantes") {
    return (
      <Link to="/volantes" className={className}>
        {label}
      </Link>
    );
  }
  if (category === "iluminacion") {
    return (
      <Link to="/iluminacion" className={className}>
        {label}
      </Link>
    );
  }
  return (
    <Link to="/catalogo" search={{ cat: category }} className={className}>
      {label}
    </Link>
  );
}

export function readCatalogSearch(search: Record<string, unknown>): {
  q?: string;
  cat?: Category;
} {
  const result: { q?: string; cat?: Category } = {};
  if (typeof search.q === "string" && search.q) result.q = search.q;
  if (isCategory(search.cat)) result.cat = search.cat;
  return result;
}
