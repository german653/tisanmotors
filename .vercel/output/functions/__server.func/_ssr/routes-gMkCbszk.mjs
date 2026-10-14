import { b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as vehicleLabel, g as mergeCatalog, l as buttonClass, p as fits, y as useShop } from "./button-D7a_iUSo.mjs";
import { n as openWhatsApp } from "./whatsapp-DdQ76FvK.mjs";
import { t as ProductCard } from "./product-card-SSD6S1O9.mjs";
import { n as useVehicle, t as VehiclePicker } from "./vehicle-picker-C6BXl8M_.mjs";
import { n as WhatsAppIcon, t as SiteShell } from "./site-shell-DaZpiWr8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gMkCbszk.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const patches = useShop((state) => state.patches);
	const customProducts = useShop((state) => state.customProducts);
	const { vehicle, draft, setVehicle } = useVehicle();
	const products = mergeCatalog(patches, customProducts).filter((product) => !product.hidden && fits(product, vehicle)).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-2 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-mist uppercase",
						children: "TISAN MOTORS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Equipamiento y personalización premium para tu vehículo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-base leading-relaxed text-platinum",
						children: "Compatibilidad exacta por marca, modelo y año. Volantes con terminación artesanal e iluminación ambiental lista para instalar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm text-platinum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-2 w-2 bg-accent",
							"aria-hidden": true
						}), "Garantía de calidad · Compatibilidad plug & play"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalogo",
							className: buttonClass({ size: "lg" }),
							children: "Explorar catálogo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: buttonClass({
								variant: "secondary",
								size: "lg"
							}),
							onClick: () => openWhatsApp(vehicle ? `Hola TISAN MOTORS, quiero cotizar equipamiento para mi ${vehicleLabel(vehicle)}.` : "Hola TISAN MOTORS, quiero cotizar equipamiento para mi vehículo."),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "Cotizar por WhatsApp"]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-well p-2 shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/products/volante-gti-negro.png",
						alt: "Volante deportivo VW GTI en cuero microperforado",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2",
						children: [
							["Aro", "Deportivo"],
							["Cuero", "Microperforado"],
							["Airbag", "Se conserva"],
							["Calce", "Plug & play"]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-ink/90 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-mist",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm text-snow",
								children: value
							})]
						}, label))
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-graphite",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-5 px-5 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold",
							children: "Compatibilidad por vehículo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-sm leading-relaxed text-platinum",
							children: "Elegí marca, modelo y año. El catálogo muestra solo lo que calza en ese auto."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehiclePicker, {
						vehicle: draft,
						onChange: setVehicle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalogo",
							className: buttonClass({ variant: "primary" }),
							children: "Ver compatibles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-mist",
							children: vehicle ? vehicleLabel(vehicle) : "Todavía no hay un vehículo seleccionado."
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-5 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: "Categorías"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/volantes",
						className: "grid gap-2 border border-line bg-graphite p-5 transition-colors duration-200 hover:border-platinum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Volantes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-mist",
							children: "Línea GTI, clásicos de tres rayos y acabado plata. Costura y emblema a elección."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/iluminacion",
						className: "grid gap-2 border border-line bg-graphite p-5 transition-colors duration-200 hover:border-platinum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Iluminación LED"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-mist",
							children: "Kits de 48 LED con control por aplicación y por el audio del estéreo."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/catalogo",
						search: { cat: "performance" },
						className: "grid gap-2 border border-line bg-graphite p-5 transition-colors duration-200 hover:border-platinum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Performance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-mist",
							children: "Levas de cambio y pomos de cuero para cerrar el puesto de manejo."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/catalogo",
						search: { cat: "detailing" },
						className: "grid gap-2 border border-line bg-graphite p-5 transition-colors duration-200 hover:border-platinum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Detailing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-mist",
							children: "Cuidado del cuero del aro y del habitáculo, para usar en casa."
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-5 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Selección"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/catalogo",
					className: "text-sm text-platinum hover:text-snow",
					children: "Ver todo"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-3",
				children: [
					["Compatibilidad declarada", "Cada volante indica modelo y rango de años. Si no calza, no aparece."],
					["Terminación de taller", "Cuero, costura y emblema se definen antes de armar el pedido."],
					["Instalación con airbag", "En el showroom se coloca, se controla el airbag y se prueba el mando."]
				].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-mist",
						children: text
					})]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-graphite",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-12 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Instalación en showroom"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-sm leading-relaxed text-platinum",
						children: "Av. Warnes 2240, Villa Crespo. Turnos de mañana y tarde para colocar volante o kit LED."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/instalacion",
					className: buttonClass({ size: "lg" }),
					children: "Agendar instalación"
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
