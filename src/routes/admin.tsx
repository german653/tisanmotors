import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { z } from "zod";
import { buttonClass } from "@/components/ui/button";
import {
  CATEGORY_LABEL,
  IMAGE_LIBRARY,
  mergeCatalog,
  type Category,
  type Product,
} from "@/lib/catalog";
import { formatARS } from "@/lib/money";
import { useShop, type Appointment, type Quote, type QuoteStatus } from "@/lib/shop-store";
import { DELIVERY_LABEL } from "@/lib/whatsapp";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Gestión — TISAN MOTORS" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const TABS = ["Resumen", "Pedidos", "Turnos", "Clientes", "Productos", "Stock"] as const;
type Tab = (typeof TABS)[number];

const STATUS_LABEL: Record<QuoteStatus, string> = {
  pendiente: "Pendiente",
  preparacion: "En preparación",
  agendada: "Instalación agendada",
  completado: "Completado",
};

function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState<Tab>("Resumen");
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-ink text-snow">
      <header className="flex h-16 items-center justify-between border-b border-line px-5">
        <p className="text-sm font-semibold tracking-wide">TISAN · Gestión</p>
        <Link to="/" className="text-sm text-platinum hover:text-snow">
          Volver a la tienda
        </Link>
      </header>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8">
        <div className="flex gap-2 overflow-x-auto">
          {TABS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={
                tab === item
                  ? "h-10 shrink-0 border border-snow px-3 text-sm"
                  : "h-10 shrink-0 border border-line px-3 text-sm text-platinum"
              }
            >
              {item}
            </button>
          ))}
        </div>
        {mounted ? <AdminBody tab={tab} /> : <p className="text-sm text-mist">Cargando gestión…</p>}
        <p className="text-xs text-mist">
          Pedidos, turnos y cambios de catálogo de esta tienda quedan guardados en este navegador.
        </p>
      </div>
    </div>
  );
}

function AdminBody({ tab }: { tab: Tab }) {
  const quotes = useShop((state) => state.quotes);
  const appointments = useShop((state) => state.appointments);
  const views = useShop((state) => state.views);
  const patches = useShop((state) => state.patches);
  const customProducts = useShop((state) => state.customProducts);
  const products = mergeCatalog(patches, customProducts);

  if (tab === "Resumen") {
    return <Summary quotes={quotes} appointments={appointments} views={views} products={products} />;
  }
  if (tab === "Pedidos") return <Orders quotes={quotes} />;
  if (tab === "Turnos") return <Turns appointments={appointments} />;
  if (tab === "Clientes") return <Clients quotes={quotes} appointments={appointments} />;
  if (tab === "Productos") return <Products products={products} />;
  return <Stock products={products} />;
}

function Summary({
  quotes,
  appointments,
  views,
  products,
}: {
  quotes: Quote[];
  appointments: Appointment[];
  views: Record<string, number>;
  products: Product[];
}) {
  const month = new Date().toISOString().slice(0, 7);
  const monthQuotes = quotes.filter((quote) => quote.createdAt.slice(0, 7) === month);
  const sales = monthQuotes
    .filter((quote) => quote.status === "completado" || quote.status === "preparacion")
    .reduce((sum, quote) => sum + quote.total, 0);
  const pendingTurns = appointments.filter((item) => item.status === "pendiente").length;
  const top = Object.entries(views)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([id, count]) => ({
      name: products.find((product) => product.id === id)?.name ?? id,
      count,
    }));
  const chart = useMemo(() => {
    const days: { label: string; count: number }[] = [];
    for (let index = 13; index >= 0; index -= 1) {
      const date = new Date();
      date.setHours(12, 0, 0, 0);
      date.setDate(date.getDate() - index);
      const key = date.toISOString().slice(0, 10);
      days.push({
        label: `${date.getDate()}/${date.getMonth() + 1}`,
        count: quotes.filter((quote) => quote.createdAt.slice(0, 10) === key).length,
      });
    }
    return days;
  }, [quotes]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Ventas del mes" value={formatARS(sales)} />
        <Kpi label="Cotizaciones iniciadas" value={String(monthQuotes.length)} />
        <Kpi label="Turnos pendientes" value={String(pendingTurns)} />
        <Kpi label="Productos activos" value={String(products.filter((product) => !product.hidden).length)} />
      </div>
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="border border-line bg-graphite p-5 lg:col-span-3">
          <h2 className="mb-4 text-sm font-medium text-platinum">Cotizaciones · 14 días</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chart}>
                <XAxis dataKey="label" stroke="var(--color-mist)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} stroke="var(--color-mist)" fontSize={12} tickLine={false} axisLine={false} width={28} />
                <Tooltip
                  cursor={{ fill: "var(--color-raised)" }}
                  contentStyle={{
                    background: "var(--color-ink)",
                    border: "1px solid var(--color-line)",
                    borderRadius: 6,
                    color: "var(--color-snow)",
                  }}
                />
                <Bar dataKey="count" fill="var(--color-platinum)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="border border-line bg-graphite p-5 lg:col-span-2">
          <h2 className="mb-4 text-sm font-medium text-platinum">Más consultados</h2>
          <ul className="grid gap-3">
            {top.map((item) => (
              <li key={item.name} className="flex items-center justify-between gap-3 text-sm">
                <span>{item.name}</span>
                <span className="tabular-nums text-mist">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line bg-graphite p-5">
      <p className="text-xs tracking-wide text-mist uppercase">{label}</p>
      <p className="mt-2 text-2xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}

function Orders({ quotes }: { quotes: Quote[] }) {
  const setQuoteStatus = useShop((state) => state.setQuoteStatus);
  const [filter, setFilter] = useState<QuoteStatus | "todos">("todos");
  const rows = quotes.filter((quote) => filter === "todos" || quote.status === filter);

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-2">
        {(["todos", "pendiente", "preparacion", "agendada", "completado"] as const).map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setFilter(status)}
            className={
              filter === status
                ? "h-10 border border-snow px-3 text-sm"
                : "h-10 border border-line px-3 text-sm text-platinum"
            }
          >
            {status === "todos" ? "Todos" : STATUS_LABEL[status]}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-graphite text-mist">
            <tr>
              <th className="px-3 py-3 font-medium">Pedido</th>
              <th className="px-3 py-3 font-medium">Cliente</th>
              <th className="px-3 py-3 font-medium">Vehículo</th>
              <th className="px-3 py-3 font-medium">Total</th>
              <th className="px-3 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((quote) => (
              <tr key={quote.id} className="border-t border-line">
                <td className="px-3 py-3">
                  <p className="font-medium">{quote.id}</p>
                  <p className="text-mist">{DELIVERY_LABEL[quote.delivery]}</p>
                </td>
                <td className="px-3 py-3">
                  <p>{quote.name}</p>
                  <p className="text-mist">{quote.phone}</p>
                </td>
                <td className="px-3 py-3">
                  {quote.vehicle
                    ? `${quote.vehicle.brand} ${quote.vehicle.model} ${quote.vehicle.year}`
                    : "—"}
                </td>
                <td className="px-3 py-3 tabular-nums">{formatARS(quote.total)}</td>
                <td className="px-3 py-3">
                  <select
                    className="h-10 rounded-md border border-line bg-ink px-2"
                    value={quote.status}
                    onChange={(event) => setQuoteStatus(quote.id, event.target.value as QuoteStatus)}
                  >
                    {(Object.keys(STATUS_LABEL) as QuoteStatus[]).map((status) => (
                      <option key={status} value={status}>
                        {STATUS_LABEL[status]}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Turns({ appointments }: { appointments: Appointment[] }) {
  const setAppointmentStatus = useShop((state) => state.setAppointmentStatus);
  return (
    <div className="overflow-x-auto border border-line">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead className="bg-graphite text-mist">
          <tr>
            <th className="px-3 py-3 font-medium">Turno</th>
            <th className="px-3 py-3 font-medium">Cliente</th>
            <th className="px-3 py-3 font-medium">Cuando</th>
            <th className="px-3 py-3 font-medium">Estado</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((item) => (
            <tr key={item.id} className="border-t border-line">
              <td className="px-3 py-3">
                <p className="font-medium">{item.id}</p>
                <p className="text-mist">{item.service}</p>
              </td>
              <td className="px-3 py-3">
                <p>{item.name}</p>
                <p className="text-mist">{item.vehicle}</p>
              </td>
              <td className="px-3 py-3 tabular-nums">
                {item.date} · {item.slot}
              </td>
              <td className="px-3 py-3">
                <select
                  className="h-10 rounded-md border border-line bg-ink px-2"
                  value={item.status}
                  onChange={(event) =>
                    setAppointmentStatus(item.id, event.target.value as Appointment["status"])
                  }
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="agendada">Agendada</option>
                  <option value="completado">Completado</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Clients({ quotes, appointments }: { quotes: Quote[]; appointments: Appointment[] }) {
  const map = new Map<string, { name: string; phone: string; vehicles: Set<string>; orders: number }>();
  for (const quote of quotes) {
    const key = quote.phone;
    const current = map.get(key) ?? { name: quote.name, phone: quote.phone, vehicles: new Set<string>(), orders: 0 };
    current.orders += 1;
    if (quote.vehicle) {
      current.vehicles.add(`${quote.vehicle.brand} ${quote.vehicle.model} ${quote.vehicle.year}`);
    }
    map.set(key, current);
  }
  for (const turn of appointments) {
    const current = map.get(turn.phone) ?? {
      name: turn.name,
      phone: turn.phone,
      vehicles: new Set<string>(),
      orders: 0,
    };
    if (turn.vehicle) current.vehicles.add(turn.vehicle);
    map.set(turn.phone, current);
  }
  const rows = [...map.values()];

  return (
    <div className="overflow-x-auto border border-line">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-graphite text-mist">
          <tr>
            <th className="px-3 py-3 font-medium">Cliente</th>
            <th className="px-3 py-3 font-medium">Teléfono</th>
            <th className="px-3 py-3 font-medium">Vehículos</th>
            <th className="px-3 py-3 font-medium">Pedidos</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.phone} className="border-t border-line">
              <td className="px-3 py-3">{row.name}</td>
              <td className="px-3 py-3">{row.phone}</td>
              <td className="px-3 py-3 text-platinum">{[...row.vehicles].join(" · ") || "—"}</td>
              <td className="px-3 py-3 tabular-nums">{row.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const productSchema = z.object({
  name: z.string().trim().min(3, "Nombre corto"),
  category: z.enum(["volantes", "iluminacion", "performance", "detailing"]),
  price: z.number().positive("Precio inválido"),
  transferPrice: z.number().positive("Precio inválido"),
  stock: z.number().int().min(0),
  image: z.string().min(1),
});

type ProductForm = z.infer<typeof productSchema>;

function Products({ products }: { products: Product[] }) {
  const patchProduct = useShop((state) => state.patchProduct);
  const addCustomProduct = useShop((state) => state.addCustomProduct);
  const removeCustomProduct = useShop((state) => state.removeCustomProduct);
  const customProducts = useShop((state) => state.customProducts);
  const form = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "performance",
      price: 50000,
      transferPrice: 46000,
      stock: 1,
      image: IMAGE_LIBRARY[0].src,
    },
  });

  function onCreate(values: ProductForm) {
    const slug = values.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const id = `custom-${slug}-${Date.now()}`;
    addCustomProduct({
      id,
      slug: id,
      name: values.name,
      short: values.name,
      description: values.name,
      category: values.category,
      image: values.image,
      price: values.price,
      transferPrice: Math.min(values.transferPrice, values.price),
      stock: values.stock,
      badges: ["Instalación opcional"],
      configurable: values.category === "volantes",
      baseConfig:
        values.category === "volantes"
          ? { grip: "micro", stitch: "negro", badge: "gti", extras: [] }
          : undefined,
      fitment: "all",
      specs: [{ label: "Origen", value: "Alta de taller" }],
    });
    form.reset();
  }

  return (
    <div className="grid gap-6">
      <form className="grid gap-3 border border-line bg-graphite p-5 sm:grid-cols-2" onSubmit={form.handleSubmit(onCreate)}>
        <h2 className="text-sm font-medium text-platinum sm:col-span-2">Nuevo producto</h2>
        <input className={inputClass} placeholder="Nombre" {...form.register("name")} />
        <select className={inputClass} {...form.register("category")}>
          {(Object.keys(CATEGORY_LABEL) as Category[]).map((id) => (
            <option key={id} value={id}>
              {CATEGORY_LABEL[id]}
            </option>
          ))}
        </select>
        <input className={inputClass} type="number" placeholder="Precio lista" {...form.register("price", { valueAsNumber: true })} />
        <input className={inputClass} type="number" placeholder="Transferencia" {...form.register("transferPrice", { valueAsNumber: true })} />
        <input className={inputClass} type="number" placeholder="Stock" {...form.register("stock", { valueAsNumber: true })} />
        <select className={inputClass} {...form.register("image")}>
          {IMAGE_LIBRARY.map((image) => (
            <option key={image.src} value={image.src}>
              {image.label}
            </option>
          ))}
        </select>
        {form.formState.errors.name ? (
          <p className="text-sm text-accent sm:col-span-2">{form.formState.errors.name.message}</p>
        ) : null}
        <button type="submit" className={buttonClass({ className: "sm:col-span-2 sm:w-fit" })}>
          Dar de alta
        </button>
      </form>
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-graphite text-mist">
            <tr>
              <th className="px-3 py-3 font-medium">Producto</th>
              <th className="px-3 py-3 font-medium">Lista</th>
              <th className="px-3 py-3 font-medium">Transferencia</th>
              <th className="px-3 py-3 font-medium">Stock</th>
              <th className="px-3 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                custom={customProducts.some((item) => item.id === product.id)}
                onPatch={(patch) => patchProduct(product.id, patch)}
                onRemove={() => removeCustomProduct(product.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductRow({
  product,
  custom,
  onPatch,
  onRemove,
}: {
  product: Product;
  custom: boolean;
  onPatch: (patch: { name?: string; price?: number; transferPrice?: number; stock?: number; hidden?: boolean }) => void;
  onRemove: () => void;
}) {
  const [price, setPrice] = useState(String(product.price));
  const [transfer, setTransfer] = useState(String(product.transferPrice));
  const [stock, setStock] = useState(String(product.stock));

  return (
    <tr className="border-t border-line">
      <td className="px-3 py-3">
        <p className={product.hidden ? "text-mist" : "font-medium"}>{product.name}</p>
        <p className="text-mist">{CATEGORY_LABEL[product.category]}</p>
      </td>
      <td className="px-3 py-3">
        <input className="h-10 w-28 rounded-md border border-line bg-ink px-2 tabular-nums" value={price} onChange={(event) => setPrice(event.target.value)} />
      </td>
      <td className="px-3 py-3">
        <input className="h-10 w-28 rounded-md border border-line bg-ink px-2 tabular-nums" value={transfer} onChange={(event) => setTransfer(event.target.value)} />
      </td>
      <td className="px-3 py-3">
        <input className="h-10 w-20 rounded-md border border-line bg-ink px-2 tabular-nums" value={stock} onChange={(event) => setStock(event.target.value)} />
      </td>
      <td className="px-3 py-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={buttonClass({ variant: "quiet", size: "sm" })}
            onClick={() =>
              onPatch({
                price: Number(price) || product.price,
                transferPrice: Number(transfer) || product.transferPrice,
                stock: Number(stock) || 0,
              })
            }
          >
            Guardar
          </button>
          <button
            type="button"
            className={buttonClass({ variant: "ghost", size: "sm" })}
            onClick={() => onPatch({ hidden: !product.hidden })}
          >
            {product.hidden ? "Mostrar" : "Ocultar"}
          </button>
          {custom ? (
            <button type="button" className={buttonClass({ variant: "ghost", size: "sm" })} onClick={onRemove}>
              Eliminar
            </button>
          ) : null}
        </div>
      </td>
    </tr>
  );
}

function Stock({ products }: { products: Product[] }) {
  const low = products.filter((product) => !product.hidden && product.stock <= 2);
  return (
    <div className="grid gap-3">
      <h2 className="text-lg font-semibold">Alertas de stock</h2>
      {low.length === 0 ? (
        <p className="text-sm text-mist">No hay insumos por debajo de 3 unidades.</p>
      ) : (
        <ul className="grid gap-3">
          {low.map((product) => (
            <li key={product.id} className="flex items-center justify-between gap-3 border border-line px-4 py-3">
              <div>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-sm text-accent">{product.stock === 0 ? "Sin stock" : `Quedan ${product.stock}`}</p>
              </div>
              <p className="text-sm text-mist">{CATEGORY_LABEL[product.category]}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const inputClass = "h-11 rounded-md border border-line bg-ink px-3 text-sm text-snow";
