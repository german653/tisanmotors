import { q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { l as buttonClass, s as SITE } from "./button-D7a_iUSo.mjs";
import { n as openWhatsApp } from "./whatsapp-DdQ76FvK.mjs";
import { a as string, i as object } from "../_libs/zod.mjs";
import { t as SiteShell } from "./site-shell-DaZpiWr8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-hAnkNf9B.js
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Ingresá tu nombre"),
	phone: string().trim().min(8, "Ingresá un teléfono"),
	message: string().trim().min(8, "Contanos qué necesitás")
});
function ContactPage() {
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			phone: "",
			message: ""
		}
	});
	function onSubmit(values) {
		openWhatsApp([
			"Hola TISAN MOTORS 👋",
			`Soy ${values.name} (${values.phone}).`,
			values.message
		].join("\n"));
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid content-start gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Contacto y showroom"
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
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: SITE.phoneDisplay })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-mist",
							children: "Correo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-platinum",
							href: `mailto:${SITE.email}`,
							children: SITE.email
						}) })] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit: form.handleSubmit(onSubmit),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm text-platinum",
							children: [
								"Nombre",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									...form.register("name")
								}),
								form.formState.errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: form.formState.errors.name.message
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm text-platinum",
							children: [
								"Teléfono",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									...form.register("phone")
								}),
								form.formState.errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: form.formState.errors.phone.message
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm text-platinum",
							children: [
								"Mensaje",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									className: "rounded-md border border-line bg-ink px-3 py-2 text-sm text-snow",
									...form.register("message")
								}),
								form.formState.errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: form.formState.errors.message.message
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: buttonClass({ size: "lg" }),
							children: "Escribir por WhatsApp"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden shadow-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Mapa del showroom TISAN MOTORS",
				src: SITE.mapSrc,
				className: "h-96 w-full grayscale invert",
				loading: "lazy"
			})
		})]
	}) });
}
var inputClass = "h-11 rounded-md border border-line bg-ink px-3 text-sm text-snow";
//#endregion
export { ContactPage as component };
