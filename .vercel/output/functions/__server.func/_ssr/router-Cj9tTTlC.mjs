import { i as __toESM } from "../_runtime.mjs";
import { _ as lazyRouteComponent, b as Link, f as Scripts, g as Outlet, h as createRouter, p as HeadContent, q as require_jsx_runtime, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as vehicleLabel, g as mergeCatalog, h as isCategory, l as buttonClass, n as CATEGORY_LABEL, p as fits, y as useShop } from "./button-D7a_iUSo.mjs";
import { a as string, i as object, n as literal, o as union, r as number, t as _enum } from "../_libs/zod.mjs";
import { t as ProductCard } from "./product-card-SSD6S1O9.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as useVehicle, t as VehiclePicker } from "./vehicle-picker-C6BXl8M_.mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-view-DyjYJF2K.js
var import_jsx_runtime = require_jsx_runtime();
function CatalogView({ title, lede, category, query = "" }) {
	const patches = useShop((state) => state.patches);
	const customProducts = useShop((state) => state.customProducts);
	const { vehicle, draft, setVehicle } = useVehicle();
	const needle = query.trim().toLowerCase();
	const products = mergeCatalog(patches, customProducts).filter((product) => {
		if (product.hidden) return false;
		if (category && product.category !== category) return false;
		if (!fits(product, vehicle)) return false;
		if (!needle) return true;
		return product.name.toLowerCase().includes(needle) || product.short.toLowerCase().includes(needle) || CATEGORY_LABEL[product.category].toLowerCase().includes(needle);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight sm:text-4xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-base leading-relaxed text-platinum",
					children: lede
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 border border-line bg-graphite p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-platinum",
						children: vehicle ? `Compatibles con ${vehicleLabel(vehicle)}` : "Sin filtro de vehículo: se muestra el catálogo completo."
					}), vehicle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: buttonClass({
							variant: "ghost",
							size: "sm"
						}),
						onClick: () => setVehicle(null),
						children: "Quitar vehículo"
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehiclePicker, {
					vehicle: draft,
					onChange: setVehicle
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryLink, {
					label: "Todo",
					active: !category
				}), Object.keys(CATEGORY_LABEL).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryLink, {
					label: CATEGORY_LABEL[id],
					category: id,
					active: category === id
				}, id))]
			}),
			products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border border-line px-5 py-10 text-sm text-mist",
				children: "No hay piezas compatibles con esa combinación. Probá otro año o sacá el filtro."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
			})
		]
	});
}
function CategoryLink({ label, category, active }) {
	const className = active ? "inline-flex h-10 items-center border border-snow px-3 text-sm text-snow" : "inline-flex h-10 items-center border border-line px-3 text-sm text-platinum hover:text-snow";
	if (!category) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/catalogo",
		className,
		children: label
	});
	if (category === "volantes") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/volantes",
		className,
		children: label
	});
	if (category === "iluminacion") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/iluminacion",
		className,
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/catalogo",
		search: { cat: category },
		className,
		children: label
	});
}
function readCatalogSearch(search) {
	const result = {};
	if (typeof search.q === "string" && search.q) result.q = search.q;
	if (isCategory(search.cat)) result.cat = search.cat;
	return result;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cj9tTTlC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function ShopHydrator() {
	(0, import_react.useEffect)(() => {
		useShop.persist.rehydrate();
		useShop.getState().setHydrated(true);
	}, []);
	return null;
}
var styles_default = "/assets/styles-CK6u8x8L.css";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TISAN MOTORS" },
			{
				name: "description",
				content: "Volantes deportivos y OEM, kits de iluminación 48 LED y accesorios con compatibilidad exacta. Showroom TISAN MOTORS en Villa Crespo."
			},
			{
				name: "theme-color",
				content: "#0D0D0D"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopHydrator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "top-center"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$7 = () => import("./routes-gMkCbszk.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "TISAN MOTORS — Equipamiento premium" }, {
		name: "description",
		content: "Equipamiento y personalización premium para tu vehículo. Volantes deportivos, kits LED y accesorios con compatibilidad plug and play."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./admin-Csq3jMAd.mjs");
var Route$6 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Gestión — TISAN MOTORS" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
object({
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
var $$splitComponentImporter$5 = () => import("./catalogo-BtLAnphW.mjs");
var Route$5 = createFileRoute("/catalogo")({
	validateSearch: (search) => readCatalogSearch(search),
	head: () => ({ meta: [{ title: "Catálogo — TISAN MOTORS" }, {
		name: "description",
		content: "Volantes, iluminación LED, accesorios y detailing filtrados por tu vehículo."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contacto-hAnkNf9B.mjs");
object({
	name: string().trim().min(2, "Ingresá tu nombre"),
	phone: string().trim().min(8, "Ingresá un teléfono"),
	message: string().trim().min(8, "Contanos qué necesitás")
});
var Route$4 = createFileRoute("/contacto")({
	head: () => ({ meta: [{ title: "Contacto — TISAN MOTORS" }, {
		name: "description",
		content: "Showroom TISAN MOTORS en Villa Crespo. WhatsApp, horarios y mapa."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./iluminacion-CEoCAu04.mjs");
var Route$3 = createFileRoute("/iluminacion")({
	head: () => ({ meta: [{ title: "Iluminación LED — TISAN MOTORS" }, {
		name: "description",
		content: "Kit de iluminación ambiental de 48 LED RGB con control por app y por audio."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./instalacion-Do04WViU.mjs");
object({
	name: string().trim().min(2, "Ingresá tu nombre"),
	phone: string().trim().min(8, "Ingresá un teléfono"),
	vehicle: string().trim().min(3, "Indicá el vehículo"),
	date: string().min(1, "Elegí una fecha"),
	slot: string().min(1, "Elegí un horario"),
	service: string().min(1)
});
var Route$2 = createFileRoute("/instalacion")({
	head: () => ({ meta: [{ title: "Instalación — TISAN MOTORS" }, {
		name: "description",
		content: "Reservá un turno para colocar volante o kit LED en el showroom de Villa Crespo."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./volantes-C5zzU8ci.mjs");
var Route$1 = createFileRoute("/volantes")({
	head: () => ({ meta: [{ title: "Volantes — TISAN MOTORS" }, {
		name: "description",
		content: "Volantes deportivos GTI y clásicos OEM, con cuero, costura y emblema a elección."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./producto._slug-CKQaxIoh.mjs");
var Route = createFileRoute("/producto/$slug")({
	head: ({ params }) => ({ meta: [{ title: `${params.slug.replaceAll("-", " ")} — TISAN MOTORS` }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AdminRoute: Route$6.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$8
	}),
	CatalogoRoute: Route$5.update({
		id: "/catalogo",
		path: "/catalogo",
		getParentRoute: () => Route$8
	}),
	ContactoRoute: Route$4.update({
		id: "/contacto",
		path: "/contacto",
		getParentRoute: () => Route$8
	}),
	IluminacionRoute: Route$3.update({
		id: "/iluminacion",
		path: "/iluminacion",
		getParentRoute: () => Route$8
	}),
	InstalacionRoute: Route$2.update({
		id: "/instalacion",
		path: "/instalacion",
		getParentRoute: () => Route$8
	}),
	VolantesRoute: Route$1.update({
		id: "/volantes",
		path: "/volantes",
		getParentRoute: () => Route$8
	}),
	ProductoSlugRoute: Route.update({
		id: "/producto/$slug",
		path: "/producto/$slug",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { CatalogView as i, Route as n, Route$5 as r, router_exports as t };
