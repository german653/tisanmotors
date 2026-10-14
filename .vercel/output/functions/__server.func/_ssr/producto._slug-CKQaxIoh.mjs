import { i as __toESM } from "../_runtime.mjs";
import { b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as priced, a as GRIPS, b as vehicleLabel, c as STITCHES, d as configLabel, f as extraLabels, g as mergeCatalog, l as buttonClass, p as fits, r as EXTRAS, t as BADGES, v as stockBadges, y as useShop } from "./button-D7a_iUSo.mjs";
import { n as PriceTag } from "./product-card-SSD6S1O9.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as useVehicle } from "./vehicle-picker-C6BXl8M_.mjs";
import { n as Route } from "./router-Cj9tTTlC.mjs";
import { t as SiteShell } from "./site-shell-DaZpiWr8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/producto._slug-CKQaxIoh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const patches = useShop((state) => state.patches);
	const customProducts = useShop((state) => state.customProducts);
	const trackView = useShop((state) => state.trackView);
	const addLine = useShop((state) => state.addLine);
	const { vehicle } = useVehicle();
	const product = mergeCatalog(patches, customProducts).find((item) => item.slug === slug);
	(0, import_react.useEffect)(() => {
		if (product) trackView(product.id);
	}, [product, trackView]);
	if (!product || product.hidden) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-5 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-semibold",
			children: "Producto no disponible"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/catalogo",
			className: "text-sm text-platinum hover:text-snow",
			children: "Volver al catálogo"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductBody, {
		productId: product.id,
		onAdd: (config) => {
			const prices = priced(product, config);
			if (product.stock < 1) {
				toast("Sin stock por ahora");
				return;
			}
			addLine({
				productId: product.id,
				name: product.name,
				detail: config ? configLabel(config) : void 0,
				extras: config ? extraLabels(config) : [],
				category: product.category,
				qty: 1,
				unitList: prices.list,
				unitTransfer: prices.transfer,
				config
			});
			toast("Agregado al pedido");
		}
	}) });
}
function ProductBody({ productId, onAdd }) {
	const patches = useShop((state) => state.patches);
	const customProducts = useShop((state) => state.customProducts);
	const { vehicle } = useVehicle();
	const product = mergeCatalog(patches, customProducts).find((item) => item.id === productId);
	const [config, setConfig] = (0, import_react.useState)(product?.baseConfig);
	(0, import_react.useEffect)(() => {
		setConfig(product?.baseConfig);
	}, [product]);
	if (!product) return null;
	const prices = priced(product, config);
	const compatible = fits(product, vehicle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-well p-2 shadow-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				className: "aspect-[4/5] w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid content-start gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: stockBadges(product).map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border border-line px-2 py-1 text-xs text-platinum",
						children: badge
					}, badge))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold tracking-tight",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-platinum",
						children: product.description
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTag, {
					list: prices.list,
					transfer: prices.transfer
				}),
				vehicle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: compatible ? "text-sm text-platinum" : "text-sm text-accent",
					children: compatible ? `Compatible con ${vehicleLabel(vehicle)}.` : `No figura como compatible con ${vehicleLabel(vehicle)}.`
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mist",
					children: "Seleccioná tu vehículo en la barra para confirmar el calce."
				}),
				product.configurable && config ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 border border-line p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionGroup, {
							legend: "Material de agarre",
							options: GRIPS,
							value: config.grip,
							onChange: (grip) => setConfig({
								...config,
								grip
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionGroup, {
							legend: "Color de costura",
							options: STITCHES,
							value: config.stitch,
							onChange: (stitch) => setConfig({
								...config,
								stitch
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionGroup, {
							legend: "Insignia",
							options: BADGES,
							value: config.badge,
							onChange: (badge) => setConfig({
								...config,
								badge
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-sm text-platinum",
								children: "Agregados opcionales"
							}), EXTRAS.map((extra) => {
								const checked = config.extras.includes(extra.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "flex items-center justify-between gap-3 text-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked,
											onChange: () => {
												const extras = checked ? config.extras.filter((id) => id !== extra.id) : [...config.extras, extra.id];
												setConfig({
													...config,
													extras
												});
											}
										}), extra.label]
									})
								}, extra.id);
							})]
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: buttonClass({ size: "lg" }),
					onClick: () => onAdd(product.configurable ? config : void 0),
					children: product.configurable ? "Agregar personalización" : "Agregar al pedido"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid gap-3 border-t border-line pt-5",
					children: product.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-mist",
							children: spec.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: spec.value })]
					}, spec.label))
				})
			]
		})]
	});
}
function OptionGroup({ legend, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "text-sm text-platinum",
			children: legend
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: options.map((option) => {
				const active = option.id === value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: active ? "inline-flex h-10 cursor-pointer items-center border border-snow px-3 text-sm" : "inline-flex h-10 cursor-pointer items-center border border-line px-3 text-sm text-platinum",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "radio",
						className: "sr-only",
						name: legend,
						checked: active,
						onChange: () => onChange(option.id)
					}), option.label]
				}, option.id);
			})
		})]
	});
}
//#endregion
export { ProductPage as component };
