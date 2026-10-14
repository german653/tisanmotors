import { b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as priced, l as buttonClass, m as formatARS, v as stockBadges, y as useShop } from "./button-D7a_iUSo.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/price-tag-Bd6YyKGZ.js
var import_jsx_runtime = require_jsx_runtime();
function PriceTag({ list, transfer, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: compact ? "text-xs text-mist" : "text-sm text-mist",
			children: "Transferencia"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: compact ? "text-lg font-semibold tabular-nums" : "text-2xl font-semibold tabular-nums",
			children: formatARS(transfer)
		}),
		list !== transfer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-mist tabular-nums",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "line-through",
				children: formatARS(list)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " lista" })]
		}) : null
	] });
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-SSD6S1O9.js
function ProductCard({ product }) {
	const addLine = useShop((state) => state.addLine);
	const prices = priced(product, product.baseConfig);
	const badges = stockBadges(product);
	function add() {
		if (product.stock < 1) {
			toast("Sin stock por ahora");
			return;
		}
		addLine({
			productId: product.id,
			name: product.name,
			detail: void 0,
			extras: [],
			category: product.category,
			qty: 1,
			unitList: prices.list,
			unitTransfer: prices.transfer
		});
		toast("Agregado al carrito");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col bg-graphite shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/producto/$slug",
			params: { slug: product.slug },
			className: "bg-well p-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				className: "aspect-[4/5] w-full rounded-md object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-4 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: badges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border border-line px-2 py-1 text-xs tracking-wide text-platinum",
						children: badge
					}, badge))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold leading-snug",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/producto/$slug",
							params: { slug: product.slug },
							className: "hover:text-platinum",
							children: product.name
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-mist",
						children: product.short
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTag, {
					list: prices.list,
					transfer: prices.transfer,
					compact: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto",
					children: product.configurable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/producto/$slug",
						params: { slug: product.slug },
						className: buttonClass({
							variant: "primary",
							size: "md",
							className: "w-full"
						}),
						children: "Personalizar"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: add,
						className: buttonClass({ className: "w-full" }),
						children: "Agregar"
					})
				})
			]
		})]
	});
}
//#endregion
export { PriceTag as n, ProductCard as t };
