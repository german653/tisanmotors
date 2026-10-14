import { b as vehicleLabel, s as SITE } from "./button-D7a_iUSo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-DdQ76FvK.js
var DELIVERY_LABEL = {
	envio: "Envío a domicilio",
	retiro: "Retiro en showroom",
	instalacion: "Solicitar turno de instalación en taller"
};
function quoteText(input) {
	const hasWheel = input.lines.some((line) => line.category === "volantes");
	const rows = [
		"Hola TISAN MOTORS 👋",
		"Quiero cotizar el siguiente equipamiento para mi auto:",
		`- Vehículo: ${vehicleLabel(input.vehicle)}`
	];
	for (const line of input.lines) {
		const asExtra = hasWheel && line.category !== "volantes";
		const prefix = asExtra ? "Adicional" : "Producto";
		const detail = line.detail ? ` (${line.detail})` : "";
		rows.push(`- ${prefix}: ${line.name}${detail}`);
		if (!asExtra) for (const extra of line.extras ?? []) rows.push(`- Adicional: ${extra}`);
	}
	rows.push(`- Opción: ${DELIVERY_LABEL[input.delivery]}`);
	rows.push(`- Nombre: ${input.name}`);
	return rows.join("\n");
}
function whatsAppUrl(text) {
	return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;
}
function openWhatsApp(text) {
	const url = whatsAppUrl(text);
	window.open(url, "_blank", "noopener,noreferrer");
	return url;
}
//#endregion
export { openWhatsApp as n, quoteText as r, DELIVERY_LABEL as t };
