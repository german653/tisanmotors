import { q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as GARAGE, x as yearsFor, y as useShop } from "./button-D7a_iUSo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vehicle-picker-C6BXl8M_.js
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "h-11 w-full rounded-md border border-line bg-ink px-3 text-sm text-snow";
function VehiclePicker({ vehicle, onChange }) {
	const brand = vehicle?.brand ?? "";
	const model = vehicle?.model ?? "";
	const models = GARAGE.find((entry) => entry.brand === brand)?.models ?? [];
	const years = brand && model ? yearsFor(brand, model) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm text-platinum",
				children: ["Marca", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: fieldClass,
					value: brand,
					onChange: (event) => {
						const next = event.target.value;
						onChange(next ? {
							brand: next,
							model: "",
							year: 0
						} : null);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Seleccionar"
					}), GARAGE.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: entry.brand,
						children: entry.brand
					}, entry.brand))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm text-platinum",
				children: ["Modelo", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: fieldClass,
					value: model,
					disabled: !brand,
					onChange: (event) => {
						onChange({
							brand,
							model: event.target.value,
							year: 0
						});
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Seleccionar"
					}), models.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: entry.model,
						children: entry.model
					}, entry.model))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm text-platinum",
				children: ["Año", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: fieldClass,
					value: vehicle?.year ? String(vehicle.year) : "",
					disabled: !model,
					onChange: (event) => {
						onChange({
							brand,
							model,
							year: Number(event.target.value)
						});
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Seleccionar"
					}), years.map((year) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: year,
						children: year
					}, year))]
				})]
			})
		]
	});
}
function useVehicle() {
	const vehicle = useShop((state) => state.vehicle);
	const setVehicle = useShop((state) => state.setVehicle);
	return {
		vehicle: Boolean(vehicle && vehicle.model && vehicle.year) ? vehicle : null,
		draft: vehicle,
		setVehicle
	};
}
//#endregion
export { useVehicle as n, VehiclePicker as t };
