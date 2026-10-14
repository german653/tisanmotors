import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SiteShell } from "@/components/site-shell";
import { buttonClass } from "@/components/ui/button";
import { SITE } from "@/lib/catalog";
import { openWhatsApp } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre"),
  phone: z.string().trim().min(8, "Ingresá un teléfono"),
  message: z.string().trim().min(8, "Contanos qué necesitás"),
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — TISAN MOTORS" },
      { name: "description", content: "Showroom TISAN MOTORS en Villa Crespo. WhatsApp, horarios y mapa." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    openWhatsApp(
      ["Hola TISAN MOTORS 👋", `Soy ${values.name} (${values.phone}).`, values.message].join("\n"),
    );
    form.reset();
  }

  return (
    <SiteShell>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2">
        <div className="grid content-start gap-6">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contacto y showroom</h1>
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
              <dt className="text-mist">WhatsApp</dt>
              <dd>{SITE.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="text-mist">Correo</dt>
              <dd>
                <a className="hover:text-platinum" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </dd>
            </div>
          </dl>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <label className="grid gap-1 text-sm text-platinum">
              Nombre
              <input className={inputClass} {...form.register("name")} />
              {form.formState.errors.name ? (
                <span className="text-accent">{form.formState.errors.name.message}</span>
              ) : null}
            </label>
            <label className="grid gap-1 text-sm text-platinum">
              Teléfono
              <input className={inputClass} {...form.register("phone")} />
              {form.formState.errors.phone ? (
                <span className="text-accent">{form.formState.errors.phone.message}</span>
              ) : null}
            </label>
            <label className="grid gap-1 text-sm text-platinum">
              Mensaje
              <textarea rows={4} className="rounded-md border border-line bg-ink px-3 py-2 text-sm text-snow" {...form.register("message")} />
              {form.formState.errors.message ? (
                <span className="text-accent">{form.formState.errors.message.message}</span>
              ) : null}
            </label>
            <button type="submit" className={buttonClass({ size: "lg" })}>
              Escribir por WhatsApp
            </button>
          </form>
        </div>
        <div className="overflow-hidden shadow-card">
          <iframe
            title="Mapa del showroom TISAN MOTORS"
            src={SITE.mapSrc}
            className="h-96 w-full grayscale invert"
            loading="lazy"
          />
        </div>
      </div>
    </SiteShell>
  );
}

const inputClass = "h-11 rounded-md border border-line bg-ink px-3 text-sm text-snow";
