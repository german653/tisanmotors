import { i as __toESM } from "../_runtime.mjs";
import { q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as vehicleLabel, l as buttonClass, s as SITE, y as useShop } from "./button-D7a_iUSo.mjs";
import { n as openWhatsApp } from "./whatsapp-DdQ76FvK.mjs";
import { a as string, i as object } from "../_libs/zod.mjs";
import { n as useVehicle } from "./vehicle-picker-C6BXl8M_.mjs";
import { t as SiteShell } from "./site-shell-DaZpiWr8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/instalacion-Do04WViU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Ingresá tu nombre"),
	phone: string().trim().min(8, "Ingresá un teléfono"),
	vehicle: string().trim().min(3, "Indicá el vehículo"),
	date: string().min(1, "Elegí una fecha"),
	slot: string().min(1, "Elegí un horario"),
	service: string().min(1)
});
var SLOTS = [
	"10:00",
	"12:00",
	"15:00",
	"17:00"
];
function InstallPage() {
	const addAppointment = useShop((state) => state.addAppointment);
	const { vehicle } = useVehicle();
	const [done, setDone] = (0, import_react.useState)(null);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			phone: "",
			vehicle: vehicle ? vehicleLabel(vehicle) : "",
			date: "",
			slot: "10:00",
			service: "Colocación de volante"
		}
	});
	function onSubmit(values) {
		const entry = addAppointment(values);
		setDone(entry.id);
		openWhatsApp([
			"Hola TISAN MOTORS 👋",
			"Quiero reservar un turno de instalación:",
			`- Nombre: ${values.name}`,
			`- Vehículo: ${values.vehicle}`,
			`- Servicio: ${values.service}`,
			`- Fecha: ${values.date} ${values.slot}`
		].join("\n"));
		form.reset({
			...values,
			name: "",
			phone: ""
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid content-start gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Instalación en taller"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-platinum",
					children: "El volante se coloca en el showroom. Se desconecta la batería, se respeta el airbag de origen, se verifican los comandos del aro y se hace una prueba corta antes de entregar el auto. El kit LED se canaliza por pisaderas y consola, sin intervenir la red del airbag."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-mist",
							children: "Dirección"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: SITE.address })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-mist",
							children: "Horario"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: SITE.hours })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-mist",
							children: "Duración habitual"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Volante: 90 minutos. Kit LED: 2 horas. Combinado: media jornada." })] })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-4 border border-line bg-graphite p-5",
			onSubmit: form.handleSubmit(onSubmit),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Reservar turno"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nombre",
					error: form.formState.errors.name?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						...form.register("name")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Teléfono",
					error: form.formState.errors.phone?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						...form.register("phone")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Vehículo",
					error: form.formState.errors.vehicle?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						...form.register("vehicle")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Servicio",
					error: form.formState.errors.service?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputClass,
						...form.register("service"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Colocación de volante" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Kit LED" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Kit LED + volante" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Fecha",
						error: form.formState.errors.date?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							className: inputClass,
							...form.register("date")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Horario",
						error: form.formState.errors.slot?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: inputClass,
							...form.register("slot"),
							children: SLOTS.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: slot }, slot))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: buttonClass({ size: "lg" }),
					children: "Solicitar turno"
				}),
				done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-platinum",
					children: [
						"Turno ",
						done,
						" registrado. Si WhatsApp no se abrió, escribinos al ",
						SITE.phoneDisplay,
						"."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-mist",
					children: "El turno queda pendiente hasta que el taller lo confirme."
				})
			]
		})]
	}) });
}
var inputClass = "h-11 w-full rounded-md border border-line bg-ink px-3 text-sm text-snow";
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1 text-sm text-platinum",
		children: [
			label,
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: error
			}) : null
		]
	});
}
//#endregion
export { InstallPage as component };
