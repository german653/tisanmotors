import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { PriceTag } from "@/components/price-tag";
import { SiteShell } from "@/components/site-shell";
import { buttonClass } from "@/components/ui/button";
import { useVehicle } from "@/components/vehicle-picker";
import {
  BADGES,
  configLabel,
  EXTRAS,
  extraLabels,
  fits,
  GRIPS,
  mergeCatalog,
  priced,
  stockBadges,
  STITCHES,
  vehicleLabel,
  type WheelConfig,
} from "@/lib/catalog";
import { useShop } from "@/lib/shop-store";

export const Route = createFileRoute("/producto/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${params.slug.replaceAll("-", " ")} — TISAN MOTORS` }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const patches = useShop((state) => state.patches);
  const customProducts = useShop((state) => state.customProducts);
  const trackView = useShop((state) => state.trackView);
  const addLine = useShop((state) => state.addLine);
  const { vehicle } = useVehicle();
  const product = mergeCatalog(patches, customProducts).find((item) => item.slug === slug);

  useEffect(() => {
    if (product) trackView(product.id);
  }, [product, trackView]);

  if (!product || product.hidden) {
    return (
      <SiteShell>
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-20">
          <h1 className="text-3xl font-semibold">Producto no disponible</h1>
          <Link to="/catalogo" className="text-sm text-platinum hover:text-snow">
            Volver al catálogo
          </Link>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <ProductBody
        productId={product.id}
        onAdd={(config) => {
          const prices = priced(product, config);
          if (product.stock < 1) {
            toast("Sin stock por ahora");
            return;
          }
          addLine({
            productId: product.id,
            name: product.name,
            detail: config ? configLabel(config) : undefined,
            extras: config ? extraLabels(config) : [],
            category: product.category,
            qty: 1,
            unitList: prices.list,
            unitTransfer: prices.transfer,
            config,
          });
          toast("Agregado al pedido");
        }}
      />
    </SiteShell>
  );
}

function ProductBody({
  productId,
  onAdd,
}: {
  productId: string;
  onAdd: (config?: WheelConfig) => void;
}) {
  const patches = useShop((state) => state.patches);
  const customProducts = useShop((state) => state.customProducts);
  const { vehicle } = useVehicle();
  const product = mergeCatalog(patches, customProducts).find((item) => item.id === productId);
  const [config, setConfig] = useState<WheelConfig | undefined>(product?.baseConfig);

  useEffect(() => {
    setConfig(product?.baseConfig);
  }, [product]);

  if (!product) return null;

  const prices = priced(product, config);
  const compatible = fits(product, vehicle);

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2">
      <div className="bg-well p-2 shadow-card">
        <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
      </div>
      <div className="grid content-start gap-6">
        <div className="flex flex-wrap gap-2">
          {stockBadges(product).map((badge) => (
            <span key={badge} className="border border-line px-2 py-1 text-xs text-platinum">
              {badge}
            </span>
          ))}
        </div>
        <div className="grid gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
          <p className="text-base leading-relaxed text-platinum">{product.description}</p>
        </div>
        <PriceTag list={prices.list} transfer={prices.transfer} />
        {vehicle ? (
          <p className={compatible ? "text-sm text-platinum" : "text-sm text-accent"}>
            {compatible
              ? `Compatible con ${vehicleLabel(vehicle)}.`
              : `No figura como compatible con ${vehicleLabel(vehicle)}.`}
          </p>
        ) : (
          <p className="text-sm text-mist">Seleccioná tu vehículo en la barra para confirmar el calce.</p>
        )}

        {product.configurable && config ? (
          <div className="grid gap-5 border border-line p-5">
            <OptionGroup
              legend="Material de agarre"
              options={GRIPS}
              value={config.grip}
              onChange={(grip) => setConfig({ ...config, grip })}
            />
            <OptionGroup
              legend="Color de costura"
              options={STITCHES}
              value={config.stitch}
              onChange={(stitch) => setConfig({ ...config, stitch })}
            />
            <OptionGroup
              legend="Insignia"
              options={BADGES}
              value={config.badge}
              onChange={(badge) => setConfig({ ...config, badge })}
            />
            <fieldset className="grid gap-2">
              <legend className="text-sm text-platinum">Agregados opcionales</legend>
              {EXTRAS.map((extra) => {
                const checked = config.extras.includes(extra.id);
                return (
                  <label key={extra.id} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          const extras = checked
                            ? config.extras.filter((id) => id !== extra.id)
                            : [...config.extras, extra.id];
                          setConfig({ ...config, extras });
                        }}
                      />
                      {extra.label}
                    </span>
                  </label>
                );
              })}
            </fieldset>
          </div>
        ) : null}

        <button
          type="button"
          className={buttonClass({ size: "lg" })}
          onClick={() => onAdd(product.configurable ? config : undefined)}
        >
          {product.configurable ? "Agregar personalización" : "Agregar al pedido"}
        </button>

        <dl className="grid gap-3 border-t border-line pt-5">
          {product.specs.map((spec) => (
            <div key={spec.label} className="grid grid-cols-2 gap-3 text-sm">
              <dt className="text-mist">{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function OptionGroup<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: readonly { id: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-sm text-platinum">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option.id === value;
          return (
            <label
              key={option.id}
              className={
                active
                  ? "inline-flex h-10 cursor-pointer items-center border border-snow px-3 text-sm"
                  : "inline-flex h-10 cursor-pointer items-center border border-line px-3 text-sm text-platinum"
              }
            >
              <input
                type="radio"
                className="sr-only"
                name={legend}
                checked={active}
                onChange={() => onChange(option.id)}
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
