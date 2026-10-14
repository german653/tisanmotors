import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { VehiclePicker, useVehicle } from "@/components/vehicle-picker";
import { buttonClass } from "@/components/ui/button";
import { formatARS } from "@/lib/money";
import { useShop } from "@/lib/shop-store";
import { DELIVERY_LABEL, openWhatsApp, quoteText, type Delivery } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre"),
  phone: z.string().trim().min(8, "Ingresá un teléfono"),
  delivery: z.enum(["envio", "retiro", "instalacion"]),
});

type FormValues = z.infer<typeof schema>;

export function CartDrawer() {
  const open = useShop((state) => state.cartOpen);
  const setOpen = useShop((state) => state.setCartOpen);
  const cart = useShop((state) => state.cart);
  const setQty = useShop((state) => state.setQty);
  const removeLine = useShop((state) => state.removeLine);
  const clearCart = useShop((state) => state.clearCart);
  const addQuote = useShop((state) => state.addQuote);
  const { vehicle, draft, setVehicle } = useVehicle();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", delivery: "instalacion" },
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  if (!open) return null;

  const total = cart.reduce((sum, item) => sum + item.unitTransfer * item.qty, 0);

  function onSubmit(values: FormValues) {
    addQuote({
      name: values.name,
      phone: values.phone,
      delivery: values.delivery,
      vehicle,
      items: cart,
    });
    const text = quoteText({
      name: values.name,
      delivery: values.delivery,
      vehicle,
      lines: cart.map((item) => ({
        name: item.name,
        detail: item.detail,
        category: item.category,
        extras: item.extras,
      })),
    });
    openWhatsApp(text);
    clearCart();
    form.reset({ name: "", phone: "", delivery: values.delivery });
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-ink/70"
        aria-label="Cerrar carrito"
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute inset-y-0 right-0 flex w-full flex-col bg-graphite shadow-card sm:max-w-md"
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <h2 id="cart-title" className="text-base font-semibold">
            Pedido
          </h2>
          <button
            type="button"
            aria-label="Cerrar"
            className="inline-flex size-11 items-center justify-center text-platinum"
            onClick={() => setOpen(false)}
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {cart.length === 0 ? (
            <p className="text-sm text-mist">El carrito está vacío. Elegí un volante o un kit del catálogo.</p>
          ) : (
            <ul className="grid gap-4">
              {cart.map((item) => (
                <li key={item.lineId} className="grid gap-2 border-b border-line pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      {item.detail ? <p className="text-sm text-mist">{item.detail}</p> : null}
                      {item.extras.length > 0 ? (
                        <p className="text-sm text-mist">{item.extras.join(" · ")}</p>
                      ) : null}
                    </div>
                    <p className="text-sm tabular-nums">{formatARS(item.unitTransfer * item.qty)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex size-10 items-center justify-center border border-line"
                      onClick={() => setQty(item.lineId, item.qty - 1)}
                      aria-label="Restar"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm tabular-nums">{item.qty}</span>
                    <button
                      type="button"
                      className="inline-flex size-10 items-center justify-center border border-line"
                      onClick={() => setQty(item.lineId, item.qty + 1)}
                      aria-label="Sumar"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="ml-auto text-sm text-mist hover:text-snow"
                      onClick={() => removeLine(item.lineId)}
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 grid gap-3">
            <p className="text-xs tracking-wide text-mist uppercase">Vehículo</p>
            <VehiclePicker vehicle={draft} onChange={setVehicle} />
          </div>

          <form className="mt-6 grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <label className="grid gap-1 text-sm text-platinum">
              Nombre
              <input
                className="h-11 rounded-md border border-line bg-ink px-3 text-snow"
                {...form.register("name")}
              />
              {form.formState.errors.name ? (
                <span className="text-sm text-accent">{form.formState.errors.name.message}</span>
              ) : null}
            </label>
            <label className="grid gap-1 text-sm text-platinum">
              Teléfono
              <input
                className="h-11 rounded-md border border-line bg-ink px-3 text-snow"
                {...form.register("phone")}
              />
              {form.formState.errors.phone ? (
                <span className="text-sm text-accent">{form.formState.errors.phone.message}</span>
              ) : null}
            </label>
            <fieldset className="grid gap-2">
              <legend className="text-sm text-platinum">Entrega</legend>
              {(Object.keys(DELIVERY_LABEL) as Delivery[]).map((key) => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input type="radio" value={key} {...form.register("delivery")} />
                  {DELIVERY_LABEL[key]}
                </label>
              ))}
            </fieldset>
            <div className="flex items-end justify-between border-t border-line pt-4">
              <div>
                <p className="text-xs text-mist">Total transferencia</p>
                <p className="text-xl font-semibold tabular-nums">{formatARS(total)}</p>
              </div>
            </div>
            <button
              type="submit"
              disabled={cart.length === 0}
              className={buttonClass({ size: "lg", className: "w-full" })}
            >
              Confirmar y cotizar
            </button>
            <p className="text-xs leading-relaxed text-mist">
              Se abre WhatsApp con el detalle del pedido. No se cobra online.
            </p>
          </form>
        </div>
      </aside>
    </div>
  );
}
