import { SITE, vehicleLabel, type Category, type Vehicle } from "@/lib/catalog";

export type Delivery = "envio" | "retiro" | "instalacion";

export const DELIVERY_LABEL: Record<Delivery, string> = {
  envio: "Envío a domicilio",
  retiro: "Retiro en showroom",
  instalacion: "Solicitar turno de instalación en taller",
};

export type QuoteLine = {
  name: string;
  detail?: string;
  category: Category;
  extras?: string[];
};

export function quoteText(input: {
  vehicle: Vehicle | null;
  lines: QuoteLine[];
  delivery: Delivery;
  name: string;
}) {
  const hasWheel = input.lines.some((line) => line.category === "volantes");
  const rows = [
    "Hola TISAN MOTORS 👋",
    "Quiero cotizar el siguiente equipamiento para mi auto:",
    `- Vehículo: ${vehicleLabel(input.vehicle)}`,
  ];
  for (const line of input.lines) {
    const asExtra = hasWheel && line.category !== "volantes";
    const prefix = asExtra ? "Adicional" : "Producto";
    const detail = line.detail ? ` (${line.detail})` : "";
    rows.push(`- ${prefix}: ${line.name}${detail}`);
    if (!asExtra) {
      for (const extra of line.extras ?? []) {
        rows.push(`- Adicional: ${extra}`);
      }
    }
  }
  rows.push(`- Opción: ${DELIVERY_LABEL[input.delivery]}`);
  rows.push(`- Nombre: ${input.name}`);
  return rows.join("\n");
}

export function whatsAppUrl(text: string) {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(text: string) {
  const url = whatsAppUrl(text);
  window.open(url, "_blank", "noopener,noreferrer");
  return url;
}
