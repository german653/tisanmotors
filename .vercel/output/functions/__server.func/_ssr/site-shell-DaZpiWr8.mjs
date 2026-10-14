import { i as __toESM } from "../_runtime.mjs";
import { b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as vehicleLabel, l as buttonClass, m as formatARS, s as SITE, u as cn, y as useShop } from "./button-D7a_iUSo.mjs";
import { n as openWhatsApp, r as quoteText, t as DELIVERY_LABEL } from "./whatsapp-DdQ76FvK.mjs";
import { a as string, i as object, t as _enum } from "../_libs/zod.mjs";
import { n as useVehicle, t as VehiclePicker } from "./vehicle-picker-C6BXl8M_.mjs";
import { a as Instagram, i as Menu, r as ShoppingBag, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-DaZpiWr8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Ingresá tu nombre"),
	phone: string().trim().min(8, "Ingresá un teléfono"),
	delivery: _enum([
		"envio",
		"retiro",
		"instalacion"
	])
});
function CartDrawer() {
	const open = useShop((state) => state.cartOpen);
	const setOpen = useShop((state) => state.setCartOpen);
	const cart = useShop((state) => state.cart);
	const setQty = useShop((state) => state.setQty);
	const removeLine = useShop((state) => state.removeLine);
	const clearCart = useShop((state) => state.clearCart);
	const addQuote = useShop((state) => state.addQuote);
	const { vehicle, draft, setVehicle } = useVehicle();
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			phone: "",
			delivery: "instalacion"
		}
	});
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, setOpen]);
	if (!open) return null;
	const total = cart.reduce((sum, item) => sum + item.unitTransfer * item.qty, 0);
	function onSubmit(values) {
		addQuote({
			name: values.name,
			phone: values.phone,
			delivery: values.delivery,
			vehicle,
			items: cart
		});
		const text = quoteText({
			name: values.name,
			delivery: values.delivery,
			vehicle,
			lines: cart.map((item) => ({
				name: item.name,
				detail: item.detail,
				category: item.category,
				extras: item.extras
			}))
		});
		openWhatsApp(text);
		clearCart();
		form.reset({
			name: "",
			phone: "",
			delivery: values.delivery
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/70",
			"aria-label": "Cerrar carrito",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "cart-title",
			className: "absolute inset-y-0 right-0 flex w-full flex-col bg-graphite shadow-card sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center justify-between border-b border-line px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "cart-title",
					className: "text-base font-semibold",
					children: "Pedido"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Cerrar",
					className: "inline-flex size-11 items-center justify-center text-platinum",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto px-5 py-5",
				children: [
					cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mist",
						children: "El carrito está vacío. Elegí un volante o un kit del catálogo."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-4",
						children: cart.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-2 border-b border-line pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: item.name
									}),
									item.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-mist",
										children: item.detail
									}) : null,
									item.extras.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-mist",
										children: item.extras.join(" · ")
									}) : null
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tabular-nums",
									children: formatARS(item.unitTransfer * item.qty)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-10 items-center justify-center border border-line",
										onClick: () => setQty(item.lineId, item.qty - 1),
										"aria-label": "Restar",
										children: "−"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center text-sm tabular-nums",
										children: item.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-10 items-center justify-center border border-line",
										onClick: () => setQty(item.lineId, item.qty + 1),
										"aria-label": "Sumar",
										children: "+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "ml-auto text-sm text-mist hover:text-snow",
										onClick: () => removeLine(item.lineId),
										children: "Quitar"
									})
								]
							})]
						}, item.lineId))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-mist uppercase",
							children: "Vehículo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehiclePicker, {
							vehicle: draft,
							onChange: setVehicle
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 grid gap-4",
						onSubmit: form.handleSubmit(onSubmit),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1 text-sm text-platinum",
								children: [
									"Nombre",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "h-11 rounded-md border border-line bg-ink px-3 text-snow",
										...form.register("name")
									}),
									form.formState.errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-accent",
										children: form.formState.errors.name.message
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1 text-sm text-platinum",
								children: [
									"Teléfono",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "h-11 rounded-md border border-line bg-ink px-3 text-snow",
										...form.register("phone")
									}),
									form.formState.errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-accent",
										children: form.formState.errors.phone.message
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-sm text-platinum",
									children: "Entrega"
								}), Object.keys(DELIVERY_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										value: key,
										...form.register("delivery")
									}), DELIVERY_LABEL[key]]
								}, key))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-end justify-between border-t border-line pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-mist",
									children: "Total transferencia"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl font-semibold tabular-nums",
									children: formatARS(total)
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: cart.length === 0,
								className: buttonClass({
									size: "lg",
									className: "w-full"
								}),
								children: "Confirmar y cotizar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-mist",
								children: "Se abre WhatsApp con el detalle del pedido. No se cobra online."
							})
						]
					})
				]
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/logo.png",
						alt: "",
						className: "h-10 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs text-sm leading-relaxed text-mist",
						children: "Volantes, iluminación y accesorios con compatibilidad declarada. Taller en Villa Crespo."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid content-start gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-mist uppercase",
							children: "Tienda"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalogo",
							className: "text-platinum hover:text-snow",
							children: "Catálogo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/volantes",
							className: "text-platinum hover:text-snow",
							children: "Volantes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/iluminacion",
							className: "text-platinum hover:text-snow",
							children: "Iluminación LED"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/instalacion",
							className: "text-platinum hover:text-snow",
							children: "Instalación"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid content-start gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-mist uppercase",
							children: "Showroom"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-platinum",
							children: SITE.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-platinum",
							children: SITE.hours
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-platinum",
							children: SITE.phoneDisplay
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${SITE.email}`,
							className: "text-platinum hover:text-snow",
							children: SITE.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "pt-3 text-mist hover:text-snow",
							children: "Gestión"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 py-4 text-xs leading-relaxed text-mist",
				children: "Los emblemas de los fabricantes se muestran para indicar compatibilidad. TISAN MOTORS es un taller independiente."
			})
		})]
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.02c-.24.68-1.4 1.25-1.94 1.33-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.25-4.76-4.15-4.9-4.35-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.38.24-.27.64-.39.85-.39h.61c.2 0 .46-.04.72.55.27.64.91 2.22.99 2.38.08.16.13.35.03.56-.1.22-.16.35-.31.54-.16.19-.33.42-.47.56-.16.16-.32.33-.14.64.19.31.83 1.37 1.78 2.22 1.23 1.09 2.26 1.43 2.58 1.59.32.16.5.13.69-.08.19-.22.8-.93 1.01-1.25.22-.31.43-.26.72-.16.29.1 1.84.87 2.16 1.03.32.16.53.24.61.37.08.14.08.78-.16 1.46z" })
	});
}
var LINKS = [
	{
		to: "/catalogo",
		label: "Catálogo"
	},
	{
		to: "/volantes",
		label: "Volantes"
	},
	{
		to: "/iluminacion",
		label: "Iluminación LED"
	},
	{
		to: "/instalacion",
		label: "Agendar instalación"
	},
	{
		to: "/contacto",
		label: "Contacto"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { vehicle, draft, setVehicle } = useVehicle();
	const count = useShop((state) => state.cart.reduce((sum, item) => sum + item.qty, 0));
	const setCartOpen = useShop((state) => state.setCartOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center gap-4 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "shrink-0",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/logo.png",
							alt: "TISAN",
							className: "h-10 w-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-4 hidden items-center gap-5 lg:flex",
						children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "text-sm text-platinum transition-colors duration-200 hover:text-snow",
							activeProps: { className: "text-sm text-snow" },
							children: link.label
						}, link.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.instagram,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "inline-flex size-11 items-center justify-center text-platinum hover:text-snow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "WhatsApp",
								className: "inline-flex size-11 items-center justify-center text-platinum hover:text-snow",
								onClick: () => openWhatsApp(vehicle ? `Hola TISAN MOTORS, quiero cotizar equipamiento para mi ${vehicleLabel(vehicle)}.` : "Hola TISAN MOTORS, quiero cotizar equipamiento para mi vehículo."),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-label": "Abrir carrito",
								className: "relative inline-flex size-11 items-center justify-center text-platinum hover:text-snow",
								onClick: () => setCartOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-1 right-1 flex h-5 min-w-5 items-center justify-center bg-accent px-1 text-xs text-snow tabular-nums",
									children: count
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center text-platinum lg:hidden",
								"aria-label": open ? "Cerrar menú" : "Abrir menú",
								onClick: () => setOpen((value) => !value),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden border-t border-line lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-4 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "w-28 shrink-0 text-xs tracking-wide text-mist uppercase",
						children: "Tu vehículo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehiclePicker, {
							vehicle: draft,
							onChange: setVehicle
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("border-t border-line lg:hidden", open ? "block" : "hidden"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-6 px-5 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "grid gap-1",
						children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "flex h-11 items-center text-base text-snow",
							onClick: () => setOpen(false),
							children: link.label
						}, link.to))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-mist uppercase",
							children: "Tu vehículo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehiclePicker, {
							vehicle: draft,
							onChange: setVehicle
						})]
					})]
				})
			})
		]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-ink text-snow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {})
		]
	});
}
//#endregion
export { WhatsAppIcon as n, SiteShell as t };
