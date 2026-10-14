export type Category = "volantes" | "iluminacion" | "performance" | "detailing";

export type GripId = "liso" | "micro" | "alcantara";
export type StitchId = "negro" | "rojo" | "plata";
export type BadgeId = "tsi" | "gti" | "r" | "vw";
export type ExtraId = "paddles" | "led";

export type WheelConfig = {
  grip: GripId;
  stitch: StitchId;
  badge: BadgeId;
  extras: ExtraId[];
};

export type Fitment = {
  brand: string;
  model: string;
  from: number;
  to: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  short: string;
  description: string;
  category: Category;
  image: string;
  price: number;
  transferPrice: number;
  stock: number;
  badges: string[];
  configurable: boolean;
  baseConfig?: WheelConfig;
  fitment: "all" | Fitment[];
  specs: { label: string; value: string }[];
  hidden?: boolean;
};

export type Vehicle = {
  brand: string;
  model: string;
  year: number;
};

export const SITE = {
  name: "TISAN MOTORS",
  phoneDisplay: "+54 11 3000-4455",
  phoneWa: "5491130004455",
  instagram: "https://instagram.com/tisan.motors",
  email: "hola@tisanmotors.com",
  address: "Av. Warnes 2240, Villa Crespo, CABA",
  hours: "Lun a vie 10:00–19:00 · Sáb 10:00–14:00",
  mapSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=-58.456%2C-34.606%2C-58.438%2C-34.594&layer=mapnik&marker=-34.6002%2C-58.447",
};

export const GARAGE: {
  brand: string;
  models: { model: string; from: number; to: number }[];
}[] = [
  {
    brand: "Volkswagen",
    models: [
      { model: "Vento", from: 2011, to: 2022 },
      { model: "Golf", from: 1999, to: 2020 },
      { model: "Bora", from: 1999, to: 2014 },
      { model: "Scirocco", from: 2009, to: 2017 },
      { model: "Polo", from: 2003, to: 2024 },
      { model: "Fox", from: 2004, to: 2021 },
      { model: "Tiguan", from: 2016, to: 2024 },
      { model: "Amarok", from: 2010, to: 2024 },
    ],
  },
  {
    brand: "Audi",
    models: [
      { model: "A3", from: 2013, to: 2020 },
      { model: "S3", from: 2015, to: 2020 },
    ],
  },
  {
    brand: "Seat",
    models: [{ model: "Leon", from: 2013, to: 2020 }],
  },
];

export const GRIPS: { id: GripId; label: string; delta: number }[] = [
  { id: "liso", label: "Cuero liso", delta: 0 },
  { id: "micro", label: "Cuero microperforado", delta: 22000 },
  { id: "alcantara", label: "Alcántara", delta: 48000 },
];

export const STITCHES: { id: StitchId; label: string; delta: number }[] = [
  { id: "negro", label: "Negra", delta: 0 },
  { id: "rojo", label: "Roja", delta: 14000 },
  { id: "plata", label: "Plata", delta: 14000 },
];

export const BADGES: { id: BadgeId; label: string; delta: number }[] = [
  { id: "vw", label: "Clásico VW", delta: 0 },
  { id: "tsi", label: "TSI", delta: 0 },
  { id: "gti", label: "GTI", delta: 9000 },
  { id: "r", label: "R", delta: 9000 },
];

export const EXTRAS: { id: ExtraId; label: string; delta: number }[] = [
  { id: "paddles", label: "Levas de cambio", delta: 96000 },
  { id: "led", label: "Módulo LED ambiental RGB", delta: 89000 },
];

export const CATEGORY_LABEL: Record<Category, string> = {
  volantes: "Volantes",
  iluminacion: "Iluminación LED",
  performance: "Performance",
  detailing: "Detailing",
};

const SPORT_FIT: Fitment[] = [
  { brand: "Volkswagen", model: "Golf", from: 2013, to: 2020 },
  { brand: "Volkswagen", model: "Vento", from: 2011, to: 2022 },
  { brand: "Volkswagen", model: "Scirocco", from: 2009, to: 2017 },
  { brand: "Volkswagen", model: "Polo", from: 2018, to: 2024 },
  { brand: "Volkswagen", model: "Tiguan", from: 2016, to: 2024 },
  { brand: "Audi", model: "A3", from: 2013, to: 2020 },
  { brand: "Audi", model: "S3", from: 2015, to: 2020 },
  { brand: "Seat", model: "Leon", from: 2013, to: 2020 },
];

const CLASSIC_FIT: Fitment[] = [
  { brand: "Volkswagen", model: "Bora", from: 1999, to: 2014 },
  { brand: "Volkswagen", model: "Golf", from: 1999, to: 2008 },
  { brand: "Volkswagen", model: "Fox", from: 2004, to: 2019 },
  { brand: "Volkswagen", model: "Polo", from: 2003, to: 2017 },
];

const sportBase: WheelConfig = {
  grip: "micro",
  stitch: "negro",
  badge: "gti",
  extras: [],
};

export const SEED_PRODUCTS: Product[] = [
  {
    id: "volante-gti-negro",
    slug: "volante-gti-negro",
    name: "Volante deportivo VW GTI",
    short: "Cuero microperforado, aro deportivo y emblema a elección.",
    description:
      "Volante de tres rayos con aro en cuero microperforado, núcleo compatible con airbag de origen y terminación de taller. Se entrega con la costura y el emblema que elijas, listo para colocar sin cortar el cableado del vehículo.",
    category: "volantes",
    image: "/products/volante-gti-negro.png",
    price: 548000,
    transferPrice: 509000,
    stock: 5,
    badges: ["Plug & Play", "Instalación opcional"],
    configurable: true,
    baseConfig: sportBase,
    fitment: SPORT_FIT,
    specs: [
      { label: "Línea", value: "GTI / MQB" },
      { label: "Agarre de serie", value: "Cuero microperforado" },
      { label: "Airbag", value: "Se conserva el original" },
      { label: "Instalación", value: "Showroom o envío" },
    ],
  },
  {
    id: "volante-gti-plata",
    slug: "volante-gti-plata",
    name: "Volante deportivo VW GTI plata",
    short: "Rayos en aluminio satinado y aro en cuero microperforado.",
    description:
      "La misma geometría deportiva, con rayos en acabado plata satinada. Pensado para tableros claros y para quien quiere el aro GTI sin cerrar todo el habitáculo en negro.",
    category: "volantes",
    image: "/products/volante-gti-plata.png",
    price: 529000,
    transferPrice: 492000,
    stock: 1,
    badges: ["Plug & Play", "Instalación opcional"],
    configurable: true,
    baseConfig: sportBase,
    fitment: SPORT_FIT,
    specs: [
      { label: "Acabado", value: "Rayos plata satinada" },
      { label: "Agarre de serie", value: "Cuero microperforado" },
      { label: "Airbag", value: "Se conserva el original" },
      { label: "Plataforma", value: "MQB / PQ35 según año" },
    ],
  },
  {
    id: "volante-clasico",
    slug: "volante-clasico",
    name: "Volante clásico tres rayos",
    short: "Línea OEM en plata, cuero liso y emblema VW clásico.",
    description:
      "Volante de restauración con aro en cuero liso, rayos metalizados y centro para emblema clásico. Calza en la generación anterior del grupo, con buje acorde al modelo que declares.",
    category: "volantes",
    image: "/products/volante-clasico.png",
    price: 412000,
    transferPrice: 383000,
    stock: 2,
    badges: ["Plug & Play", "Instalación opcional"],
    configurable: true,
    baseConfig: { grip: "liso", stitch: "negro", badge: "vw", extras: [] },
    fitment: CLASSIC_FIT,
    specs: [
      { label: "Línea", value: "Clásica tres rayos" },
      { label: "Agarre de serie", value: "Cuero liso" },
      { label: "Emblema de serie", value: "VW clásico" },
      { label: "Uso", value: "Restauración de habitáculo" },
    ],
  },
  {
    id: "kit-led-48",
    slug: "kit-48-led-rgb",
    name: "Kit ambiental 48 LED RGB",
    short: "Cuatro tiras, control por aplicación y por audio del estéreo.",
    description:
      "Iluminación de pisaderas, consola y vano de pies. El módulo trae control remoto, aplicación de celular y modo que sigue el audio. Se alimenta del vehículo y no interviene la red del airbag.",
    category: "iluminacion",
    image: "/products/kit-led.png",
    price: 96900,
    transferPrice: 89900,
    stock: 14,
    badges: ["Control por app", "Sincroniza con audio"],
    configurable: false,
    fitment: "all",
    specs: [
      { label: "LEDs", value: "48, en cuatro tiras" },
      { label: "Control", value: "App, remoto y audio" },
      { label: "Alimentación", value: "12 V del vehículo" },
      { label: "Instalación", value: "Opcional en taller" },
    ],
  },
  {
    id: "levas",
    slug: "levas-de-cambio",
    name: "Levas de cambio",
    short: "Par de paletas en aluminio para volante deportivo.",
    description:
      "Levas de aluminio cepillado para sumar al volante cuando la caja lo permite. Se entregan con la tornillería del aro y se cotizan también como extra dentro del configurador.",
    category: "performance",
    image: "/products/levas.jpg",
    price: 104000,
    transferPrice: 96000,
    stock: 8,
    badges: ["Instalación opcional"],
    configurable: false,
    fitment: SPORT_FIT,
    specs: [
      { label: "Material", value: "Aluminio cepillado" },
      { label: "Juego", value: "Par izquierda y derecha" },
      { label: "Uso", value: "Cajas compatibles con levas" },
    ],
  },
  {
    id: "pomo",
    slug: "pomo-cuero",
    name: "Pomo de cuero",
    short: "Pomo en cuero con costura de contraste, rosca estándar.",
    description:
      "Pomo pesado forrado en cuero, para acompañar el volante sin mezclar texturas. La costura sale en negro de serie. Sirve en la mayoría de las palancas con adaptador, que se confirma al cotizar.",
    category: "performance",
    image: "/products/pomo.jpg",
    price: 54000,
    transferPrice: 49500,
    stock: 6,
    badges: ["Stock disponible"],
    configurable: false,
    fitment: "all",
    specs: [
      { label: "Material", value: "Cuero cosido" },
      { label: "Acabado", value: "Negro" },
      { label: "Nota", value: "Adaptador según palanca" },
    ],
  },
  {
    id: "detailing",
    slug: "kit-cuidado-cuero",
    name: "Kit de cuidado de cuero",
    short: "Acondicionador, paño y aplicador para el aro y el pomo.",
    description:
      "Mantenimiento simple del cuero del volante y de los asientos: limpiador acondicionador, paño de microfibra y aplicador. Alcanza para varios servicios en casa.",
    category: "detailing",
    image: "/products/detailing.jpg",
    price: 32000,
    transferPrice: 29500,
    stock: 11,
    badges: ["Uso en casa"],
    configurable: false,
    fitment: "all",
    specs: [
      { label: "Incluye", value: "Acondicionador, paño y pad" },
      { label: "Uso", value: "Cuero liso y microperforado" },
    ],
  },
];

export const IMAGE_LIBRARY = [
  { src: "/products/volante-gti-negro.png", label: "Volante GTI negro" },
  { src: "/products/volante-gti-plata.png", label: "Volante GTI plata" },
  { src: "/products/volante-clasico.png", label: "Volante clásico" },
  { src: "/products/kit-led.png", label: "Kit 48 LED" },
  { src: "/products/levas.jpg", label: "Levas" },
  { src: "/products/pomo.jpg", label: "Pomo" },
  { src: "/products/detailing.jpg", label: "Kit de cuero" },
];

export type ProductPatch = {
  name?: string;
  price?: number;
  transferPrice?: number;
  stock?: number;
  hidden?: boolean;
};

export function mergeCatalog(
  patches: Record<string, ProductPatch>,
  custom: Product[],
): Product[] {
  const seeded = SEED_PRODUCTS.map((product) => {
    const patch = patches[product.id];
    if (!patch) return product;
    return { ...product, ...patch, id: product.id, slug: product.slug };
  });
  return [...seeded, ...custom];
}

export function fits(product: Product, vehicle: Vehicle | null) {
  if (!vehicle || product.fitment === "all") return true;
  return product.fitment.some(
    (entry) =>
      entry.brand === vehicle.brand &&
      entry.model === vehicle.model &&
      vehicle.year >= entry.from &&
      vehicle.year <= entry.to,
  );
}

function deltaOf<T extends string>(
  options: readonly { id: T; delta: number }[],
  selected: T,
  base: T,
) {
  const selectedDelta = options.find((option) => option.id === selected)?.delta ?? 0;
  const baseDelta = options.find((option) => option.id === base)?.delta ?? 0;
  return selectedDelta - baseDelta;
}

export function configDelta(product: Product, config: WheelConfig) {
  const base = product.baseConfig;
  if (!base) return 0;
  const extras = config.extras.reduce((sum, id) => {
    return sum + (EXTRAS.find((extra) => extra.id === id)?.delta ?? 0);
  }, 0);
  return (
    deltaOf(GRIPS, config.grip, base.grip) +
    deltaOf(STITCHES, config.stitch, base.stitch) +
    deltaOf(BADGES, config.badge, base.badge) +
    extras
  );
}

export function priced(product: Product, config?: WheelConfig) {
  const extra = product.configurable && config ? configDelta(product, config) : 0;
  const list = Math.max(0, product.price + extra);
  const ratio = product.price > 0 ? product.transferPrice / product.price : 1;
  const transfer = Math.max(0, Math.round((list * ratio) / 100) * 100);
  return { list, transfer };
}

export function configLabel(config: WheelConfig) {
  const grip = GRIPS.find((item) => item.id === config.grip)?.label ?? "";
  const stitch = STITCHES.find((item) => item.id === config.stitch)?.label ?? "";
  const badge = BADGES.find((item) => item.id === config.badge)?.label ?? "";
  return `${grip}, Costura ${stitch}, Emblema ${badge}`;
}

export function extraLabels(config: WheelConfig) {
  return config.extras
    .map((id) => EXTRAS.find((extra) => extra.id === id)?.label)
    .filter((label): label is string => Boolean(label));
}

export function stockBadges(product: Product) {
  const rest = product.badges.filter(
    (badge) => badge !== "Stock disponible" && badge !== "Sin stock",
  );
  return [product.stock > 0 ? "Stock disponible" : "Sin stock", ...rest];
}

export function yearsFor(brand: string, model: string) {
  const found = GARAGE.find((entry) => entry.brand === brand)?.models.find(
    (item) => item.model === model,
  );
  if (!found) return [];
  const years: number[] = [];
  for (let year = found.to; year >= found.from; year -= 1) years.push(year);
  return years;
}

export function shortBrand(brand: string) {
  if (brand === "Volkswagen") return "VW";
  return brand;
}

export function vehicleLabel(vehicle: Vehicle | null) {
  if (!vehicle) return "Sin vehículo seleccionado";
  return `${shortBrand(vehicle.brand)} ${vehicle.model} ${vehicle.year}`;
}

export function isCategory(value: unknown): value is Category {
  return (
    value === "volantes" ||
    value === "iluminacion" ||
    value === "performance" ||
    value === "detailing"
  );
}
