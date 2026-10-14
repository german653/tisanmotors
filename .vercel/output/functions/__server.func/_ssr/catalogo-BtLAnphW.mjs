import { i as __toESM } from "../_runtime.mjs";
import { q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { i as CatalogView, r as Route$5 } from "./router-Cj9tTTlC.mjs";
import { t as SiteShell } from "./site-shell-DaZpiWr8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogo-BtLAnphW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CatalogPage() {
	const search = Route$5.useSearch();
	const [query, setQuery] = (0, import_react.useState)(search.q ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-5 pt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "grid gap-2 text-sm text-platinum",
			children: ["Buscar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "Volante, LED, levas…",
				className: "h-11 rounded-md border border-line bg-ink px-3 text-snow"
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogView, {
		title: "Catálogo",
		lede: "Piezas de equipamiento con precio de lista y precio de transferencia. Si elegís tu auto, ves solo lo compatible.",
		category: search.cat,
		query
	})] });
}
//#endregion
export { CatalogPage as component };
