import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SiteShell } from "@/components/site-shell";
import { buttonClass } from "@/components/ui/button";
import { SITE, vehicleLabel } from "@/lib/catalog";
import { useShop } from "@/lib/shop-store";
import { openWhatsApp } from "@/lib/whatsapp";
import { useVehicle } from "@/components/vehicle-picker";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre"),
  phone: z.string().trim().min(8, "Ingresá un teléfono"),
  vehicle: z.string().trim().min(3, "Indicá el vehículo"),
  date: z.string().min(1, "Elegí una fecha"),
  slot: z.string().min(1, "Elegí un horario"),
  service: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

const SLOTS = ["10:00", "12:00", "15:00", "17:00"];

export const Route = createFileRoute("/instalacion")({
  head: () => ({
    meta: [
      { title: "Instalación — TISAN MOTORS" },
      {
        name: "description",
        content: "Reservá un turno para colocar volante o kit LED en el showroom de Villa Crespo.",
      },
    ],
  }),
  component: InstallPage,
});

function InstallPage() {
  const addAppointment = useShop((state) => state.addAppointment);
  const { vehicle } = useVehicle();
  const [done, setDone] = useState<string | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      vehicle: vehicle ? vehicleLabel(vehicle) : "",
      date: "",
      slot: "10:00",
      service: "Colocación de volante",
    },
  });

  function onSubmit(values: FormValues) {
    const entry = addAppointment(values);
    setDone(entry.id);
    openWhatsApp(
      [
        "Hola TISAN MOTORS 👋",
        "Quiero reservar un turno de instalación:",
        `- Nombre: ${values.name}`,
        `- Vehículo: ${values.vehicle}`,
        `- Servicio: ${values.service}`,
        `- Fecha: ${values.date} ${values.slot}`,
      ].join("\n"),
    );
    form.reset({ ...values, name: "", phone: "" });
  }

  return (
    <SiteShell>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-2">
        <div className="grid content-start gap-5">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Instalación en taller</h1>
          <p className="text-base leading-relaxed text-platinum">
            El volante se coloca en el showroom. Se desconecta la batería, se respeta el airbag de
            origen, se verifican los comandos del aro y se hace una prueba corta antes de entregar el
            auto. El kit LED se canaliza por pisaderas y consola, sin intervenir la red del airbag.
          </p>
          <dl className="grid gap-4 text-sm">
            <div>
              <dt className="text-mist">Dirección</dt>
              <dd>{SITE.address}</dd>
            </div>
            <div>
              <dt className="text-mist">Horario</dt>
              <dd>{SITE.hours}</dd>
            </div>
            <div>
              <dt className="text-mist">Duración habitual</dt>
              <dd>Volante: 90 minutos. Kit LED: 2 horas. Combinado: media jornada.</dd>
            </div>
          </dl>
        </div>
        <form className="grid gap-4 border border-line bg-graphite p-5" onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="text-lg font-semibold">Reservar turno</h2>
          <Field label="Nombre" error={form.formState.errors.name?.message}>
            <input className={inputClass} {...form.register("name")} />
          </Field>
          <Field label="Teléfono" error={form.formState.errors.phone?.message}>
            <input className={inputClass} {...form.register("phone")} />
          </Field>
          <Field label="Vehículo" error={form.formState.errors.vehicle?.message}>
            <input className={inputClass} {...form.register("vehicle")} />
          </Field>
          <Field label="Servicio" error={form.formState.errors.service?.message}>
            <select className={inputClass} {...form.register("service")}>
              <option>Colocación de volante</option>
              <option>Kit LED</option>
              <option>Kit LED + volante</option>
            </select>
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Fecha" error={form.formState.errors.date?.message}>
              <input type="date" className={inputClass} {...form.register("date")} />
            </Field>
            <Field label="Horario" error={form.formState.errors.slot?.message}>
              <select className={inputClass} {...form.register("slot")}>
                {SLOTS.map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </Field>
          </div>
          <button type="submit" className={buttonClass({ size: "lg" })}>
            Solicitar turno
          </button>
          {done ? (
            <p className="text-sm text-platinum">
              Turno {done} registrado. Si WhatsApp no se abrió, escribinos al {SITE.phoneDisplay}.
            </p>
          ) : (
            <p className="text-xs text-mist">El turno queda pendiente hasta que el taller lo confirme.</p>
          )}
        </form>
      </div>
    </SiteShell>
  );
}

const inputClass = "h-11 w-full rounded-md border border-line bg-ink px-3 text-sm text-snow";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1 text-sm text-platinum">
      {label}
      {children}
      {error ? <span className="text-accent">{error}</span> : null}
    </label>
  );
}
