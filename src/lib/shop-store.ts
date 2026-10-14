import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  configLabel,
  extraLabels,
  type Category,
  type Product,
  type ProductPatch,
  type Vehicle,
  type WheelConfig,
} from "@/lib/catalog";
import type { Delivery } from "@/lib/whatsapp";

export type CartLine = {
  lineId: string;
  productId: string;
  name: string;
  detail?: string;
  extras: string[];
  category: Category;
  qty: number;
  unitList: number;
  unitTransfer: number;
  config?: WheelConfig;
};

export type QuoteStatus = "pendiente" | "preparacion" | "agendada" | "completado";

export type Quote = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  delivery: Delivery;
  vehicle: Vehicle | null;
  items: CartLine[];
  status: QuoteStatus;
  total: number;
};

export type Appointment = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  vehicle: string;
  date: string;
  slot: string;
  service: string;
  status: "pendiente" | "agendada" | "completado";
};

type ShopState = {
  hydrated: boolean;
  vehicle: Vehicle | null;
  cart: CartLine[];
  cartOpen: boolean;
  quotes: Quote[];
  appointments: Appointment[];
  views: Record<string, number>;
  patches: Record<string, ProductPatch>;
  customProducts: Product[];
  setHydrated: (value: boolean) => void;
  setVehicle: (vehicle: Vehicle | null) => void;
  setCartOpen: (open: boolean) => void;
  addLine: (line: Omit<CartLine, "lineId"> & { lineId?: string }) => void;
  setQty: (lineId: string, qty: number) => void;
  removeLine: (lineId: string) => void;
  clearCart: () => void;
  addQuote: (quote: Omit<Quote, "id" | "createdAt" | "status" | "total">) => Quote;
  setQuoteStatus: (id: string, status: QuoteStatus) => void;
  addAppointment: (
    entry: Omit<Appointment, "id" | "createdAt" | "status">,
  ) => Appointment;
  setAppointmentStatus: (id: string, status: Appointment["status"]) => void;
  trackView: (productId: string) => void;
  patchProduct: (id: string, patch: ProductPatch) => void;
  addCustomProduct: (product: Product) => void;
  removeCustomProduct: (id: string) => void;
};

function lineKey(productId: string, config?: WheelConfig) {
  return `${productId}:${config ? configLabel(config) + extraLabels(config).join(",") : "base"}`;
}

const SEED_QUOTES: Quote[] = [
  {
    id: "TM-1042",
    createdAt: "2026-10-03T13:10:00.000Z",
    name: "Martín Alegre",
    phone: "11 5555 2104",
    delivery: "instalacion",
    vehicle: { brand: "Volkswagen", model: "Vento", year: 2017 },
    status: "completado",
    total: 598900,
    items: [
      {
        lineId: "seed-1",
        productId: "volante-gti-negro",
        name: "Volante deportivo VW GTI",
        detail: "Cuero microperforado, Costura Roja, Emblema GTI",
        extras: [],
        category: "volantes",
        qty: 1,
        unitList: 562000,
        unitTransfer: 522000,
        config: { grip: "micro", stitch: "rojo", badge: "gti", extras: [] },
      },
      {
        lineId: "seed-2",
        productId: "kit-led-48",
        name: "Kit ambiental 48 LED RGB",
        extras: [],
        category: "iluminacion",
        qty: 1,
        unitList: 96900,
        unitTransfer: 89900,
      },
    ],
  },
  {
    id: "TM-1055",
    createdAt: "2026-10-08T16:40:00.000Z",
    name: "Lucía Ferreyra",
    phone: "11 4820 1190",
    delivery: "retiro",
    vehicle: { brand: "Audi", model: "A3", year: 2016 },
    status: "preparacion",
    total: 492000,
    items: [
      {
        lineId: "seed-3",
        productId: "volante-gti-plata",
        name: "Volante deportivo VW GTI plata",
        detail: "Cuero microperforado, Costura Negro, Emblema GTI",
        extras: [],
        category: "volantes",
        qty: 1,
        unitList: 529000,
        unitTransfer: 492000,
      },
    ],
  },
  {
    id: "TM-1061",
    createdAt: "2026-10-12T11:05:00.000Z",
    name: "Diego Paredes",
    phone: "11 6044 2281",
    delivery: "envio",
    vehicle: { brand: "Volkswagen", model: "Bora", year: 2008 },
    status: "pendiente",
    total: 383000,
    items: [
      {
        lineId: "seed-4",
        productId: "volante-clasico",
        name: "Volante clásico tres rayos",
        detail: "Cuero liso, Costura Negro, Emblema Clásico VW",
        extras: [],
        category: "volantes",
        qty: 1,
        unitList: 412000,
        unitTransfer: 383000,
      },
    ],
  },
  {
    id: "TM-1066",
    createdAt: "2026-10-13T19:20:00.000Z",
    name: "Camila Rossi",
    phone: "11 5122 7740",
    delivery: "instalacion",
    vehicle: { brand: "Volkswagen", model: "Golf", year: 2018 },
    status: "agendada",
    total: 605000,
    items: [
      {
        lineId: "seed-5",
        productId: "volante-gti-negro",
        name: "Volante deportivo VW GTI",
        detail: "Cuero microperforado, Costura Negro, Emblema GTI",
        extras: ["Levas de cambio"],
        category: "volantes",
        qty: 1,
        unitList: 644000,
        unitTransfer: 605000,
      },
    ],
  },
];

const SEED_APPOINTMENTS: Appointment[] = [
  {
    id: "IN-220",
    createdAt: "2026-10-10T12:00:00.000Z",
    name: "Camila Rossi",
    phone: "11 5122 7740",
    vehicle: "VW Golf 2018",
    date: "2026-10-16",
    slot: "15:00",
    service: "Colocación de volante",
    status: "agendada",
  },
  {
    id: "IN-226",
    createdAt: "2026-10-13T15:12:00.000Z",
    name: "Hernán Ruiz",
    phone: "11 4471 0908",
    vehicle: "VW Polo 2020",
    date: "2026-10-18",
    slot: "10:00",
    service: "Kit LED + volante",
    status: "pendiente",
  },
];

export const useShop = create<ShopState>()(
  persist(
    (set, get) => ({
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
        detailing: 12,
      },
      patches: {},
      customProducts: [],
      setHydrated: (value) => set({ hydrated: value }),
      setVehicle: (vehicle) => set({ vehicle }),
      setCartOpen: (cartOpen) => set({ cartOpen }),
      addLine: (line) => {
        const lineId = line.lineId ?? lineKey(line.productId, line.config);
        const existing = get().cart.find((item) => item.lineId === lineId);
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.lineId === lineId ? { ...item, qty: item.qty + line.qty } : item,
            ),
            cartOpen: true,
          });
          return;
        }
        set({ cart: [...get().cart, { ...line, lineId }], cartOpen: true });
      },
      setQty: (lineId, qty) => {
        if (qty < 1) {
          set({ cart: get().cart.filter((item) => item.lineId !== lineId) });
          return;
        }
        set({
          cart: get().cart.map((item) => (item.lineId === lineId ? { ...item, qty } : item)),
        });
      },
      removeLine: (lineId) => set({ cart: get().cart.filter((item) => item.lineId !== lineId) }),
      clearCart: () => set({ cart: [] }),
      addQuote: (quote) => {
        const total = quote.items.reduce((sum, item) => sum + item.unitTransfer * item.qty, 0);
        const next: Quote = {
          ...quote,
          id: `TM-${1067 + get().quotes.length}`,
          createdAt: new Date().toISOString(),
          status: "pendiente",
          total,
        };
        set({ quotes: [next, ...get().quotes] });
        return next;
      },
      setQuoteStatus: (id, status) =>
        set({
          quotes: get().quotes.map((quote) => (quote.id === id ? { ...quote, status } : quote)),
        }),
      addAppointment: (entry) => {
        const next: Appointment = {
          ...entry,
          id: `IN-${230 + get().appointments.length}`,
          createdAt: new Date().toISOString(),
          status: "pendiente",
        };
        set({ appointments: [next, ...get().appointments] });
        return next;
      },
      setAppointmentStatus: (id, status) =>
        set({
          appointments: get().appointments.map((item) =>
            item.id === id ? { ...item, status } : item,
          ),
        }),
      trackView: (productId) =>
        set({ views: { ...get().views, [productId]: (get().views[productId] ?? 0) + 1 } }),
      patchProduct: (id, patch) =>
        set({ patches: { ...get().patches, [id]: { ...get().patches[id], ...patch } } }),
      addCustomProduct: (product) => set({ customProducts: [product, ...get().customProducts] }),
      removeCustomProduct: (id) =>
        set({ customProducts: get().customProducts.filter((product) => product.id !== id) }),
    }),
    {
      name: "tisan-motors",
      skipHydration: true,
      partialize: (state) => ({
        vehicle: state.vehicle,
        cart: state.cart,
        quotes: state.quotes,
        appointments: state.appointments,
        views: state.views,
        patches: state.patches,
        customProducts: state.customProducts,
      }),
    },
  ),
);
