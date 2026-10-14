import { q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
require_jsx_runtime();
var SITE = {
	name: "TISAN MOTORS",
	phoneDisplay: "+54 11 3000-4455",
	phoneWa: "5491130004455",
	instagram: "https://instagram.com/tisan.motors",
	email: "hola@tisanmotors.com",
	address: "Av. Warnes 2240, Villa Crespo, CABA",
	hours: "Lun a vie 10:00–19:00 · Sáb 10:00–14:00",
	mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=-58.456%2C-34.606%2C-58.438%2C-34.594&layer=mapnik&marker=-34.6002%2C-58.447"
};
var GARAGE = [
	{
		brand: "Volkswagen",
		models: [
			{
				model: "Vento",
				from: 2011,
				to: 2022
			},
			{
				model: "Golf",
				from: 1999,
				to: 2020
			},
			{
				model: "Bora",
				from: 1999,
				to: 2014
			},
			{
				model: "Scirocco",
				from: 2009,
				to: 2017
			},
			{
				model: "Polo",
				from: 2003,
				to: 2024
			},
			{
				model: "Fox",
				from: 2004,
				to: 2021
			},
			{
				model: "Tiguan",
				from: 2016,
				to: 2024
			},
			{
				model: "Amarok",
				from: 2010,
				to: 2024
			}
		]
	},
	{
		brand: "Audi",
		models: [{
			model: "A3",
			from: 2013,
			to: 2020
		}, {
			model: "S3",
			from: 2015,
			to: 2020
		}]
	},
	{
		brand: "Seat",
		models: [{
			model: "Leon",
			from: 2013,
			to: 2020
		}]
	}
];
var GRIPS = [
	{
		id: "liso",
		label: "Cuero liso",
		delta: 0
	},
	{
		id: "micro",
		label: "Cuero microperforado",
		delta: 22e3
	},
	{
		id: "alcantara",
		label: "Alcántara",
		delta: 48e3
	}
];
var STITCHES = [
	{
		id: "negro",
		label: "Negra",
		delta: 0
	},
	{
		id: "rojo",
		label: "Roja",
		delta: 14e3
	},
	{
		id: "plata",
		label: "Plata",
		delta: 14e3
	}
];
var BADGES = [
	{
		id: "vw",
		label: "Clásico VW",
		delta: 0
	},
	{
		id: "tsi",
		label: "TSI",
		delta: 0
	},
	{
		id: "gti",
		label: "GTI",
		delta: 9e3
	},
	{
		id: "r",
		label: "R",
		delta: 9e3
	}
];
var EXTRAS = [{
	id: "paddles",
	label: "Levas de cambio",
	delta: 96e3
}, {
	id: "led",
	label: "Módulo LED ambiental RGB",
	delta: 89e3
}];
var CATEGORY_LABEL = {
	volantes: "Volantes",
	iluminacion: "Iluminación LED",
	performance: "Performance",
	detailing: "Detailing"
};
var SPORT_FIT = [
	{
		brand: "Volkswagen",
		model: "Golf",
		from: 2013,
		to: 2020
	},
	{
		brand: "Volkswagen",
		model: "Vento",
		from: 2011,
		to: 2022
	},
	{
		brand: "Volkswagen",
		model: "Scirocco",
		from: 2009,
		to: 2017
	},
	{
		brand: "Volkswagen",
		model: "Polo",
		from: 2018,
		to: 2024
	},
	{
		brand: "Volkswagen",
		model: "Tiguan",
		from: 2016,
		to: 2024
	},
	{
		brand: "Audi",
		model: "A3",
		from: 2013,
		to: 2020
	},
	{
		brand: "Audi",
		model: "S3",
		from: 2015,
		to: 2020
	},
	{
		brand: "Seat",
		model: "Leon",
		from: 2013,
		to: 2020
	}
];
var CLASSIC_FIT = [
	{
		brand: "Volkswagen",
		model: "Bora",
		from: 1999,
		to: 2014
	},
	{
		brand: "Volkswagen",
		model: "Golf",
		from: 1999,
		to: 2008
	},
	{
		brand: "Volkswagen",
		model: "Fox",
		from: 2004,
		to: 2019
	},
	{
		brand: "Volkswagen",
		model: "Polo",
		from: 2003,
		to: 2017
	}
];
var sportBase = {
	grip: "micro",
	stitch: "negro",
	badge: "gti",
	extras: []
};
var SEED_PRODUCTS = [
	{
		id: "volante-gti-negro",
		slug: "volante-gti-negro",
		name: "Volante deportivo VW GTI",
		short: "Cuero microperforado, aro deportivo y emblema a elección.",
		description: "Volante de tres rayos con aro en cuero microperforado, núcleo compatible con airbag de origen y terminación de taller. Se entrega con la costura y el emblema que elijas, listo para colocar sin cortar el cableado del vehículo.",
		category: "volantes",
		image: "/products/volante-gti-negro.png",
		price: 548e3,
		transferPrice: 509e3,
		stock: 5,
		badges: ["Plug & Play", "Instalación opcional"],
		configurable: true,
		baseConfig: sportBase,
		fitment: SPORT_FIT,
		specs: [
			{
				label: "Línea",
				value: "GTI / MQB"
			},
			{
				label: "Agarre de serie",
				value: "Cuero microperforado"
			},
			{
				label: "Airbag",
				value: "Se conserva el original"
			},
			{
				label: "Instalación",
				value: "Showroom o envío"
			}
		]
	},
	{
		id: "volante-gti-plata",
		slug: "volante-gti-plata",
		name: "Volante deportivo VW GTI plata",
		short: "Rayos en aluminio satinado y aro en cuero microperforado.",
		description: "La misma geometría deportiva, con rayos en acabado plata satinada. Pensado para tableros claros y para quien quiere el aro GTI sin cerrar todo el habitáculo en negro.",
		category: "volantes",
		image: "/products/volante-gti-plata.png",
		price: 529e3,
		transferPrice: 492e3,
		stock: 1,
		badges: ["Plug & Play", "Instalación opcional"],
		configurable: true,
		baseConfig: sportBase,
		fitment: SPORT_FIT,
		specs: [
			{
				label: "Acabado",
				value: "Rayos plata satinada"
			},
			{
				label: "Agarre de serie",
				value: "Cuero microperforado"
			},
			{
				label: "Airbag",
				value: "Se conserva el original"
			},
			{
				label: "Plataforma",
				value: "MQB / PQ35 según año"
			}
		]
	},
	{
		id: "volante-clasico",
		slug: "volante-clasico",
		name: "Volante clásico tres rayos",
		short: "Línea OEM en plata, cuero liso y emblema VW clásico.",
		description: "Volante de restauración con aro en cuero liso, rayos metalizados y centro para emblema clásico. Calza en la generación anterior del grupo, con buje acorde al modelo que declares.",
		category: "volantes",
		image: "/products/volante-clasico.png",
		price: 412e3,
		transferPrice: 383e3,
		stock: 2,
		badges: ["Plug & Play", "Instalación opcional"],
		configurable: true,
		baseConfig: {
			grip: "liso",
			stitch: "negro",
			badge: "vw",
			extras: []
		},
		fitment: CLASSIC_FIT,
		specs: [
			{
				label: "Línea",
				value: "Clásica tres rayos"
			},
			{
				label: "Agarre de serie",
				value: "Cuero liso"
			},
			{
				label: "Emblema de serie",
				value: "VW clásico"
			},
			{
				label: "Uso",
				value: "Restauración de habitáculo"
			}
		]
	},
	{
		id: "kit-led-48",
		slug: "kit-48-led-rgb",
		name: "Kit ambiental 48 LED RGB",
		short: "Cuatro tiras, control por aplicación y por audio del estéreo.",
		description: "Iluminación de pisaderas, consola y vano de pies. El módulo trae control remoto, aplicación de celular y modo que sigue el audio. Se alimenta del vehículo y no interviene la red del airbag.",
		category: "iluminacion",
		image: "/products/kit-led.png",
		price: 96900,
		transferPrice: 89900,
		stock: 14,
		badges: ["Control por app", "Sincroniza con audio"],
		configurable: false,
		fitment: "all",
		specs: [
			{
				label: "LEDs",
				value: "48, en cuatro tiras"
			},
			{
				label: "Control",
				value: "App, remoto y audio"
			},
			{
				label: "Alimentación",
				value: "12 V del vehículo"
			},
			{
				label: "Instalación",
				value: "Opcional en taller"
			}
		]
	},
	{
		id: "levas",
		slug: "levas-de-cambio",
		name: "Levas de cambio",
		short: "Par de paletas en aluminio para volante deportivo.",
		description: "Levas de aluminio cepillado para sumar al volante cuando la caja lo permite. Se entregan con la tornillería del aro y se cotizan también como extra dentro del configurador.",
		category: "performance",
		image: "/products/levas.jpg",
		price: 104e3,
		transferPrice: 96e3,
		stock: 8,
		badges: ["Instalación opcional"],
		configurable: false,
		fitment: SPORT_FIT,
		specs: [
			{
				label: "Material",
				value: "Aluminio cepillado"
			},
			{
				label: "Juego",
				value: "Par izquierda y derecha"
			},
			{
				label: "Uso",
				value: "Cajas compatibles con levas"
			}
		]
	},
	{
		id: "pomo",
		slug: "pomo-cuero",
		name: "Pomo de cuero",
		short: "Pomo en cuero con costura de contraste, rosca estándar.",
		description: "Pomo pesado forrado en cuero, para acompañar el volante sin mezclar texturas. La costura sale en negro de serie. Sirve en la mayoría de las palancas con adaptador, que se confirma al cotizar.",
		category: "performance",
		image: "/products/pomo.jpg",
		price: 54e3,
		transferPrice: 49500,
		stock: 6,
		badges: ["Stock disponible"],
		configurable: false,
		fitment: "all",
		specs: [
			{
				label: "Material",
				value: "Cuero cosido"
			},
			{
				label: "Acabado",
				value: "Negro"
			},
			{
				label: "Nota",
				value: "Adaptador según palanca"
			}
		]
	},
	{
		id: "detailing",
		slug: "kit-cuidado-cuero",
		name: "Kit de cuidado de cuero",
		short: "Acondicionador, paño y aplicador para el aro y el pomo.",
		description: "Mantenimiento simple del cuero del volante y de los asientos: limpiador acondicionador, paño de microfibra y aplicador. Alcanza para varios servicios en casa.",
		category: "detailing",
		image: "/products/detailing.jpg",
		price: 32e3,
		transferPrice: 29500,
		stock: 11,
		badges: ["Uso en casa"],
		configurable: false,
		fitment: "all",
		specs: [{
			label: "Incluye",
			value: "Acondicionador, paño y pad"
		}, {
			label: "Uso",
			value: "Cuero liso y microperforado"
		}]
	}
];
var IMAGE_LIBRARY = [
	{
		src: "/products/volante-gti-negro.png",
		label: "Volante GTI negro"
	},
	{
		src: "/products/volante-gti-plata.png",
		label: "Volante GTI plata"
	},
	{
		src: "/products/volante-clasico.png",
		label: "Volante clásico"
	},
	{
		src: "/products/kit-led.png",
		label: "Kit 48 LED"
	},
	{
		src: "/products/levas.jpg",
		label: "Levas"
	},
	{
		src: "/products/pomo.jpg",
		label: "Pomo"
	},
	{
		src: "/products/detailing.jpg",
		label: "Kit de cuero"
	}
];
function mergeCatalog(patches, custom) {
	return [...SEED_PRODUCTS.map((product) => {
		const patch = patches[product.id];
		if (!patch) return product;
		return {
			...product,
			...patch,
			id: product.id,
			slug: product.slug
		};
	}), ...custom];
}
function fits(product, vehicle) {
	if (!vehicle || product.fitment === "all") return true;
	return product.fitment.some((entry) => entry.brand === vehicle.brand && entry.model === vehicle.model && vehicle.year >= entry.from && vehicle.year <= entry.to);
}
function deltaOf(options, selected, base) {
	return (options.find((option) => option.id === selected)?.delta ?? 0) - (options.find((option) => option.id === base)?.delta ?? 0);
}
function configDelta(product, config) {
	const base = product.baseConfig;
	if (!base) return 0;
	const extras = config.extras.reduce((sum, id) => {
		return sum + (EXTRAS.find((extra) => extra.id === id)?.delta ?? 0);
	}, 0);
	return deltaOf(GRIPS, config.grip, base.grip) + deltaOf(STITCHES, config.stitch, base.stitch) + deltaOf(BADGES, config.badge, base.badge) + extras;
}
function priced(product, config) {
	const extra = product.configurable && config ? configDelta(product, config) : 0;
	const list = Math.max(0, product.price + extra);
	const ratio = product.price > 0 ? product.transferPrice / product.price : 1;
	return {
		list,
		transfer: Math.max(0, Math.round(list * ratio / 100) * 100)
	};
}
function configLabel(config) {
	return `${GRIPS.find((item) => item.id === config.grip)?.label ?? ""}, Costura ${STITCHES.find((item) => item.id === config.stitch)?.label ?? ""}, Emblema ${BADGES.find((item) => item.id === config.badge)?.label ?? ""}`;
}
function extraLabels(config) {
	return config.extras.map((id) => EXTRAS.find((extra) => extra.id === id)?.label).filter((label) => Boolean(label));
}
function stockBadges(product) {
	const rest = product.badges.filter((badge) => badge !== "Stock disponible" && badge !== "Sin stock");
	return [product.stock > 0 ? "Stock disponible" : "Sin stock", ...rest];
}
function yearsFor(brand, model) {
	const found = GARAGE.find((entry) => entry.brand === brand)?.models.find((item) => item.model === model);
	if (!found) return [];
	const years = [];
	for (let year = found.to; year >= found.from; year -= 1) years.push(year);
	return years;
}
function shortBrand(brand) {
	if (brand === "Volkswagen") return "VW";
	return brand;
}
function vehicleLabel(vehicle) {
	if (!vehicle) return "Sin vehículo seleccionado";
	return `${shortBrand(vehicle.brand)} ${vehicle.model} ${vehicle.year}`;
}
function isCategory(value) {
	return value === "volantes" || value === "iluminacion" || value === "performance" || value === "detailing";
}
function lineKey(productId, config) {
	return `${productId}:${config ? configLabel(config) + extraLabels(config).join(",") : "base"}`;
}
var SEED_QUOTES = [
	{
		id: "TM-1042",
		createdAt: "2026-10-03T13:10:00.000Z",
		name: "Martín Alegre",
		phone: "11 5555 2104",
		delivery: "instalacion",
		vehicle: {
			brand: "Volkswagen",
			model: "Vento",
			year: 2017
		},
		status: "completado",
		total: 598900,
		items: [{
			lineId: "seed-1",
			productId: "volante-gti-negro",
			name: "Volante deportivo VW GTI",
			detail: "Cuero microperforado, Costura Roja, Emblema GTI",
			extras: [],
			category: "volantes",
			qty: 1,
			unitList: 562e3,
			unitTransfer: 522e3,
			config: {
				grip: "micro",
				stitch: "rojo",
				badge: "gti",
				extras: []
			}
		}, {
			lineId: "seed-2",
			productId: "kit-led-48",
			name: "Kit ambiental 48 LED RGB",
			extras: [],
			category: "iluminacion",
			qty: 1,
			unitList: 96900,
			unitTransfer: 89900
		}]
	},
	{
		id: "TM-1055",
		createdAt: "2026-10-08T16:40:00.000Z",
		name: "Lucía Ferreyra",
		phone: "11 4820 1190",
		delivery: "retiro",
		vehicle: {
			brand: "Audi",
			model: "A3",
			year: 2016
		},
		status: "preparacion",
		total: 492e3,
		items: [{
			lineId: "seed-3",
			productId: "volante-gti-plata",
			name: "Volante deportivo VW GTI plata",
			detail: "Cuero microperforado, Costura Negro, Emblema GTI",
			extras: [],
			category: "volantes",
			qty: 1,
			unitList: 529e3,
			unitTransfer: 492e3
		}]
	},
	{
		id: "TM-1061",
		createdAt: "2026-10-12T11:05:00.000Z",
		name: "Diego Paredes",
		phone: "11 6044 2281",
		delivery: "envio",
		vehicle: {
			brand: "Volkswagen",
			model: "Bora",
			year: 2008
		},
		status: "pendiente",
		total: 383e3,
		items: [{
			lineId: "seed-4",
			productId: "volante-clasico",
			name: "Volante clásico tres rayos",
			detail: "Cuero liso, Costura Negro, Emblema Clásico VW",
			extras: [],
			category: "volantes",
			qty: 1,
			unitList: 412e3,
			unitTransfer: 383e3
		}]
	},
	{
		id: "TM-1066",
		createdAt: "2026-10-13T19:20:00.000Z",
		name: "Camila Rossi",
		phone: "11 5122 7740",
		delivery: "instalacion",
		vehicle: {
			brand: "Volkswagen",
			model: "Golf",
			year: 2018
		},
		status: "agendada",
		total: 605e3,
		items: [{
			lineId: "seed-5",
			productId: "volante-gti-negro",
			name: "Volante deportivo VW GTI",
			detail: "Cuero microperforado, Costura Negro, Emblema GTI",
			extras: ["Levas de cambio"],
			category: "volantes",
			qty: 1,
			unitList: 644e3,
			unitTransfer: 605e3
		}]
	}
];
var SEED_APPOINTMENTS = [{
	id: "IN-220",
	createdAt: "2026-10-10T12:00:00.000Z",
	name: "Camila Rossi",
	phone: "11 5122 7740",
	vehicle: "VW Golf 2018",
	date: "2026-10-16",
	slot: "15:00",
	service: "Colocación de volante",
	status: "agendada"
}, {
	id: "IN-226",
	createdAt: "2026-10-13T15:12:00.000Z",
	name: "Hernán Ruiz",
	phone: "11 4471 0908",
	vehicle: "VW Polo 2020",
	date: "2026-10-18",
	slot: "10:00",
	service: "Kit LED + volante",
	status: "pendiente"
}];
var useShop = create()(persist((set, get) => ({
	hydrated: false,
	vehicle: null,
	cart: [],
	cartOpen: false,
	quotes: SEED_QUOTES,
	appointments: SEED_APPOINTMENTS,
	views: {
		"volante-gti-negro": 86,
		"volante-gti-plata": 54,
		"kit-led-48": 71,
		"volante-clasico": 33,
		levas: 29,
		pomo: 18,
		detailing: 12
	},
	patches: {},
	customProducts: [],
	setHydrated: (value) => set({ hydrated: value }),
	setVehicle: (vehicle) => set({ vehicle }),
	setCartOpen: (cartOpen) => set({ cartOpen }),
	addLine: (line) => {
		const lineId = line.lineId ?? lineKey(line.productId, line.config);
		if (get().cart.find((item) => item.lineId === lineId)) {
			set({
				cart: get().cart.map((item) => item.lineId === lineId ? {
					...item,
					qty: item.qty + line.qty
				} : item),
				cartOpen: true
			});
			return;
		}
		set({
			cart: [...get().cart, {
				...line,
				lineId
			}],
			cartOpen: true
		});
	},
	setQty: (lineId, qty) => {
		if (qty < 1) {
			set({ cart: get().cart.filter((item) => item.lineId !== lineId) });
			return;
		}
		set({ cart: get().cart.map((item) => item.lineId === lineId ? {
			...item,
			qty
		} : item) });
	},
	removeLine: (lineId) => set({ cart: get().cart.filter((item) => item.lineId !== lineId) }),
	clearCart: () => set({ cart: [] }),
	addQuote: (quote) => {
		const total = quote.items.reduce((sum, item) => sum + item.unitTransfer * item.qty, 0);
		const next = {
			...quote,
			id: `TM-${1067 + get().quotes.length}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: "pendiente",
			total
		};
		set({ quotes: [next, ...get().quotes] });
		return next;
	},
	setQuoteStatus: (id, status) => set({ quotes: get().quotes.map((quote) => quote.id === id ? {
		...quote,
		status
	} : quote) }),
	addAppointment: (entry) => {
		const next = {
			...entry,
			id: `IN-${230 + get().appointments.length}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: "pendiente"
		};
		set({ appointments: [next, ...get().appointments] });
		return next;
	},
	setAppointmentStatus: (id, status) => set({ appointments: get().appointments.map((item) => item.id === id ? {
		...item,
		status
	} : item) }),
	trackView: (productId) => set({ views: {
		...get().views,
		[productId]: (get().views[productId] ?? 0) + 1
	} }),
	patchProduct: (id, patch) => set({ patches: {
		...get().patches,
		[id]: {
			...get().patches[id],
			...patch
		}
	} }),
	addCustomProduct: (product) => set({ customProducts: [product, ...get().customProducts] }),
	removeCustomProduct: (id) => set({ customProducts: get().customProducts.filter((product) => product.id !== id) })
}), {
	name: "tisan-motors",
	skipHydration: true,
	partialize: (state) => ({
		vehicle: state.vehicle,
		cart: state.cart,
		quotes: state.quotes,
		appointments: state.appointments,
		views: state.views,
		patches: state.patches,
		customProducts: state.customProducts
	})
}));
var ars = new Intl.NumberFormat("es-AR", {
	style: "currency",
	currency: "ARS",
	maximumFractionDigits: 0
});
function formatARS(value) {
	return ars.format(value);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			primary: "bg-accent text-snow hover:bg-accent-strong",
			secondary: "bg-graphite text-snow shadow-card hover:shadow-card-hover",
			ghost: "bg-transparent text-platinum hover:text-snow",
			quiet: "bg-raised text-snow hover:bg-line"
		},
		size: {
			sm: "h-10 px-3 text-sm",
			md: "h-11 px-4 text-sm",
			lg: "h-12 px-5 text-sm",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function buttonClass({ variant, size, className }) {
	return cn(buttonVariants({
		variant,
		size
	}), className);
}
//#endregion
export { priced as _, GRIPS as a, vehicleLabel as b, STITCHES as c, configLabel as d, extraLabels as f, mergeCatalog as g, isCategory as h, GARAGE as i, buttonClass as l, formatARS as m, CATEGORY_LABEL as n, IMAGE_LIBRARY as o, fits as p, EXTRAS as r, SITE as s, BADGES as t, cn as u, stockBadges as v, yearsFor as x, useShop as y };
