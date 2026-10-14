import { i as __toESM } from "../_runtime.mjs";
import { b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { g as mergeCatalog, l as buttonClass, m as formatARS, n as CATEGORY_LABEL, o as IMAGE_LIBRARY, y as useShop } from "./button-D7a_iUSo.mjs";
import { t as DELIVERY_LABEL } from "./whatsapp-DdQ76FvK.mjs";
import { a as string, i as object, r as number, t as _enum } from "../_libs/zod.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Csq3jMAd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	"Resumen",
	"Pedidos",
	"Turnos",
	"Clientes",
	"Productos",
	"Stock"
];
var STATUS_LABEL = {
	pendiente: "Pendiente",
	preparacion: "En preparación",
	agendada: "Instalación agendada",
	completado: "Completado"
};
function AdminPage() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [tab, setTab] = (0, import_react.useState)("Resumen");
	(0, import_react.useEffect)(() => setMounted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ink text-snow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex h-16 items-center justify-between border-b border-line px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide",
				children: "TISAN · Gestión"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-sm text-platinum hover:text-snow",
				children: "Volver a la tienda"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-5 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-x-auto",
					children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab(item),
						className: tab === item ? "h-10 shrink-0 border border-snow px-3 text-sm" : "h-10 shrink-0 border border-line px-3 text-sm text-platinum",
						children: item
					}, item))
				}),
				mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBody, { tab }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mist",
					children: "Cargando gestión…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-mist",
					children: "Pedidos, turnos y cambios de catálogo de esta tienda quedan guardados en este navegador."
				})
			]
		})]
	});
}
function AdminBody({ tab }) {
	const quotes = useShop((state) => state.quotes);
	const appointments = useShop((state) => state.appointments);
	const views = useShop((state) => state.views);
	const patches = useShop((state) => state.patches);
	const customProducts = useShop((state) => state.customProducts);
	const products = mergeCatalog(patches, customProducts);
	if (tab === "Resumen") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, {
		quotes,
		appointments,
		views,
		products
	});
	if (tab === "Pedidos") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Orders, { quotes });
	if (tab === "Turnos") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Turns, { appointments });
	if (tab === "Clientes") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clients, {
		quotes,
		appointments
	});
	if (tab === "Productos") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Products, { products });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stock, { products });
}
function Summary({ quotes, appointments, views, products }) {
	const month = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
	const monthQuotes = quotes.filter((quote) => quote.createdAt.slice(0, 7) === month);
	const sales = monthQuotes.filter((quote) => quote.status === "completado" || quote.status === "preparacion").reduce((sum, quote) => sum + quote.total, 0);
	const pendingTurns = appointments.filter((item) => item.status === "pendiente").length;
	const top = Object.entries(views).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([id, count]) => ({
		name: products.find((product) => product.id === id)?.name ?? id,
		count
	}));
	const chart = (0, import_react.useMemo)(() => {
		const days = [];
		for (let index = 13; index >= 0; index -= 1) {
			const date = /* @__PURE__ */ new Date();
			date.setHours(12, 0, 0, 0);
			date.setDate(date.getDate() - index);
			const key = date.toISOString().slice(0, 10);
			days.push({
				label: `${date.getDate()}/${date.getMonth() + 1}`,
				count: quotes.filter((quote) => quote.createdAt.slice(0, 10) === key).length
			});
		}
		return days;
	}, [quotes]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "Ventas del mes",
					value: formatARS(sales)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "Cotizaciones iniciadas",
					value: String(monthQuotes.length)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "Turnos pendientes",
					value: String(pendingTurns)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "Productos activos",
					value: String(products.filter((product) => !product.hidden).length)
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-graphite p-5 lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-sm font-medium text-platinum",
					children: "Cotizaciones · 14 días"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: chart,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "label",
									stroke: "var(--color-mist)",
									fontSize: 12,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									allowDecimals: false,
									stroke: "var(--color-mist)",
									fontSize: 12,
									tickLine: false,
									axisLine: false,
									width: 28
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									cursor: { fill: "var(--color-raised)" },
									contentStyle: {
										background: "var(--color-ink)",
										border: "1px solid var(--color-line)",
										borderRadius: 6,
										color: "var(--color-snow)"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "count",
									fill: "var(--color-platinum)"
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-graphite p-5 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-sm font-medium text-platinum",
					children: "Más consultados"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: top.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-mist",
							children: item.count
						})]
					}, item.name))
				})]
			})]
		})]
	});
}
function Kpi({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-graphite p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-mist uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-2xl font-semibold tabular-nums",
			children: value
		})]
	});
}
function Orders({ quotes }) {
	const setQuoteStatus = useShop((state) => state.setQuoteStatus);
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const rows = quotes.filter((quote) => filter === "todos" || quote.status === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: [
				"todos",
				"pendiente",
				"preparacion",
				"agendada",
				"completado"
			].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFilter(status),
				className: filter === status ? "h-10 border border-snow px-3 text-sm" : "h-10 border border-line px-3 text-sm text-platinum",
				children: status === "todos" ? "Todos" : STATUS_LABEL[status]
			}, status))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto border border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[720px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-graphite text-mist",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Pedido"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Cliente"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Vehículo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Total"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Estado"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((quote) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: quote.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-mist",
								children: DELIVERY_LABEL[quote.delivery]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: quote.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-mist",
								children: quote.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-3",
							children: quote.vehicle ? `${quote.vehicle.brand} ${quote.vehicle.model} ${quote.vehicle.year}` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-3 tabular-nums",
							children: formatARS(quote.total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "h-10 rounded-md border border-line bg-ink px-2",
								value: quote.status,
								onChange: (event) => setQuoteStatus(quote.id, event.target.value),
								children: Object.keys(STATUS_LABEL).map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: status,
									children: STATUS_LABEL[status]
								}, status))
							})
						})
					]
				}, quote.id)) })]
			})
		})]
	});
}
function Turns({ appointments }) {
	const setAppointmentStatus = useShop((state) => state.setAppointmentStatus);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto border border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[680px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-graphite text-mist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 font-medium",
						children: "Turno"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 font-medium",
						children: "Cliente"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 font-medium",
						children: "Cuando"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 font-medium",
						children: "Estado"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: appointments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t border-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: item.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-mist",
							children: item.service
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-mist",
							children: item.vehicle
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "px-3 py-3 tabular-nums",
						children: [
							item.date,
							" · ",
							item.slot
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "h-10 rounded-md border border-line bg-ink px-2",
							value: item.status,
							onChange: (event) => setAppointmentStatus(item.id, event.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "pendiente",
									children: "Pendiente"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "agendada",
									children: "Agendada"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "completado",
									children: "Completado"
								})
							]
						})
					})
				]
			}, item.id)) })]
		})
	});
}
function Clients({ quotes, appointments }) {
	const map = /* @__PURE__ */ new Map();
	for (const quote of quotes) {
		const key = quote.phone;
		const current = map.get(key) ?? {
			name: quote.name,
			phone: quote.phone,
			vehicles: /* @__PURE__ */ new Set(),
			orders: 0
		};
		current.orders += 1;
		if (quote.vehicle) current.vehicles.add(`${quote.vehicle.brand} ${quote.vehicle.model} ${quote.vehicle.year}`);
		map.set(key, current);
	}
	for (const turn of appointments) {
		const current = map.get(turn.phone) ?? {
			name: turn.name,
			phone: turn.phone,
			vehicles: /* @__PURE__ */ new Set(),
			orders: 0
		};
		if (turn.vehicle) current.vehicles.add(turn.vehicle);
		map.set(turn.phone, current);
	}
	const rows = [...map.values()];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto border border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[640px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-graphite text-mist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 font-medium",
						children: "Cliente"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 font-medium",
						children: "Teléfono"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 font-medium",
						children: "Vehículos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 font-medium",
						children: "Pedidos"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t border-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-3",
						children: row.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-3",
						children: row.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-3 text-platinum",
						children: [...row.vehicles].join(" · ") || "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-3 tabular-nums",
						children: row.orders
					})
				]
			}, row.phone)) })]
		})
	});
}
var productSchema = object({
	name: string().trim().min(3, "Nombre corto"),
	category: _enum([
		"volantes",
		"iluminacion",
		"performance",
		"detailing"
	]),
	price: number().positive("Precio inválido"),
	transferPrice: number().positive("Precio inválido"),
	stock: number().int().min(0),
	image: string().min(1)
});
function Products({ products }) {
	const patchProduct = useShop((state) => state.patchProduct);
	const addCustomProduct = useShop((state) => state.addCustomProduct);
	const removeCustomProduct = useShop((state) => state.removeCustomProduct);
	const customProducts = useShop((state) => state.customProducts);
	const form = useForm({
		resolver: u(productSchema),
		defaultValues: {
			name: "",
			category: "performance",
			price: 5e4,
			transferPrice: 46e3,
			stock: 1,
			image: IMAGE_LIBRARY[0].src
		}
	});
	function onCreate(values) {
		const id = `custom-${values.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Date.now()}`;
		addCustomProduct({
			id,
			slug: id,
			name: values.name,
			short: values.name,
			description: values.name,
			category: values.category,
			image: values.image,
			price: values.price,
			transferPrice: Math.min(values.transferPrice, values.price),
			stock: values.stock,
			badges: ["Instalación opcional"],
			configurable: values.category === "volantes",
			baseConfig: values.category === "volantes" ? {
				grip: "micro",
				stitch: "negro",
				badge: "gti",
				extras: []
			} : void 0,
			fitment: "all",
			specs: [{
				label: "Origen",
				value: "Alta de taller"
			}]
		});
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-3 border border-line bg-graphite p-5 sm:grid-cols-2",
			onSubmit: form.handleSubmit(onCreate),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium text-platinum sm:col-span-2",
					children: "Nuevo producto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					placeholder: "Nombre",
					...form.register("name")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: inputClass,
					...form.register("category"),
					children: Object.keys(CATEGORY_LABEL).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: id,
						children: CATEGORY_LABEL[id]
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					type: "number",
					placeholder: "Precio lista",
					...form.register("price", { valueAsNumber: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					type: "number",
					placeholder: "Transferencia",
					...form.register("transferPrice", { valueAsNumber: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					type: "number",
					placeholder: "Stock",
					...form.register("stock", { valueAsNumber: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: inputClass,
					...form.register("image"),
					children: IMAGE_LIBRARY.map((image) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: image.src,
						children: image.label
					}, image.src))
				}),
				form.formState.errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-accent sm:col-span-2",
					children: form.formState.errors.name.message
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: buttonClass({ className: "sm:col-span-2 sm:w-fit" }),
					children: "Dar de alta"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto border border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[760px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-graphite text-mist",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Producto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Lista"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Transferencia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-3 font-medium",
							children: "Stock"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-3 py-3 font-medium" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRow, {
					product,
					custom: customProducts.some((item) => item.id === product.id),
					onPatch: (patch) => patchProduct(product.id, patch),
					onRemove: () => removeCustomProduct(product.id)
				}, product.id)) })]
			})
		})]
	});
}
function ProductRow({ product, custom, onPatch, onRemove }) {
	const [price, setPrice] = (0, import_react.useState)(String(product.price));
	const [transfer, setTransfer] = (0, import_react.useState)(String(product.transferPrice));
	const [stock, setStock] = (0, import_react.useState)(String(product.stock));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-t border-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
				className: "px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: product.hidden ? "text-mist" : "font-medium",
					children: product.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-mist",
					children: CATEGORY_LABEL[product.category]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "h-10 w-28 rounded-md border border-line bg-ink px-2 tabular-nums",
					value: price,
					onChange: (event) => setPrice(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "h-10 w-28 rounded-md border border-line bg-ink px-2 tabular-nums",
					value: transfer,
					onChange: (event) => setTransfer(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "h-10 w-20 rounded-md border border-line bg-ink px-2 tabular-nums",
					value: stock,
					onChange: (event) => setStock(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: buttonClass({
								variant: "quiet",
								size: "sm"
							}),
							onClick: () => onPatch({
								price: Number(price) || product.price,
								transferPrice: Number(transfer) || product.transferPrice,
								stock: Number(stock) || 0
							}),
							children: "Guardar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: buttonClass({
								variant: "ghost",
								size: "sm"
							}),
							onClick: () => onPatch({ hidden: !product.hidden }),
							children: product.hidden ? "Mostrar" : "Ocultar"
						}),
						custom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: buttonClass({
								variant: "ghost",
								size: "sm"
							}),
							onClick: onRemove,
							children: "Eliminar"
						}) : null
					]
				})
			})
		]
	});
}
function Stock({ products }) {
	const low = products.filter((product) => !product.hidden && product.stock <= 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-semibold",
			children: "Alertas de stock"
		}), low.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-mist",
			children: "No hay insumos por debajo de 3 unidades."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: low.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3 border border-line px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: product.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-accent",
					children: product.stock === 0 ? "Sin stock" : `Quedan ${product.stock}`
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mist",
					children: CATEGORY_LABEL[product.category]
				})]
			}, product.id))
		})]
	});
}
var inputClass = "h-11 rounded-md border border-line bg-ink px-3 text-sm text-snow";
//#endregion
export { AdminPage as component };
