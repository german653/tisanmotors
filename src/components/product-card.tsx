import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { PriceTag } from "@/components/price-tag";
import { buttonClass } from "@/components/ui/button";
import { priced, stockBadges, type Product } from "@/lib/catalog";
import { useShop } from "@/lib/shop-store";

export function ProductCard({ product }: { product: Product }) {
  const addLine = useShop((state) => state.addLine);
  const prices = priced(product, product.baseConfig);
  const badges = stockBadges(product);

  function add() {
    if (product.stock < 1) {
      toast("Sin stock por ahora");
      return;
    }
    addLine({
      productId: product.id,
      name: product.name,
      detail: undefined,
      extras: [],
      category: product.category,
      qty: 1,
      unitList: prices.list,
      unitTransfer: prices.transfer,
    });
    toast("Agregado al carrito");
  }

  return (
    <article className="flex flex-col bg-graphite shadow-card">
      <Link to="/producto/$slug" params={{ slug: product.slug }} className="bg-well p-2">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full rounded-md object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="border border-line px-2 py-1 text-xs tracking-wide text-platinum"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="grid gap-1">
          <h3 className="text-base font-semibold leading-snug">
            <Link to="/producto/$slug" params={{ slug: product.slug }} className="hover:text-platinum">
              {product.name}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-mist">{product.short}</p>
        </div>
        <PriceTag list={prices.list} transfer={prices.transfer} compact />
        <div className="mt-auto">
          {product.configurable ? (
            <Link
              to="/producto/$slug"
              params={{ slug: product.slug }}
              className={buttonClass({ variant: "primary", size: "md", className: "w-full" })}
            >
              Personalizar
            </Link>
          ) : (
            <button type="button" onClick={add} className={buttonClass({ className: "w-full" })}>
              Agregar
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
