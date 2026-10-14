import { GARAGE, yearsFor, type Vehicle } from "@/lib/catalog";
import { useShop } from "@/lib/shop-store";

const fieldClass =
  "h-11 w-full rounded-md border border-line bg-ink px-3 text-sm text-snow";

export function VehiclePicker({
  vehicle,
  onChange,
}: {
  vehicle: Vehicle | null;
  onChange: (vehicle: Vehicle | null) => void;
}) {
  const brand = vehicle?.brand ?? "";
  const model = vehicle?.model ?? "";
  const models = GARAGE.find((entry) => entry.brand === brand)?.models ?? [];
  const years = brand && model ? yearsFor(brand, model) : [];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <label className="grid gap-1 text-sm text-platinum">
        Marca
        <select
          className={fieldClass}
          value={brand}
          onChange={(event) => {
            const next = event.target.value;
            onChange(next ? { brand: next, model: "", year: 0 } : null);
          }}
        >
          <option value="">Seleccionar</option>
          {GARAGE.map((entry) => (
            <option key={entry.brand} value={entry.brand}>
              {entry.brand}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm text-platinum">
        Modelo
        <select
          className={fieldClass}
          value={model}
          disabled={!brand}
          onChange={(event) => {
            onChange({ brand, model: event.target.value, year: 0 });
          }}
        >
          <option value="">Seleccionar</option>
          {models.map((entry) => (
            <option key={entry.model} value={entry.model}>
              {entry.model}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm text-platinum">
        Año
        <select
          className={fieldClass}
          value={vehicle?.year ? String(vehicle.year) : ""}
          disabled={!model}
          onChange={(event) => {
            onChange({ brand, model, year: Number(event.target.value) });
          }}
        >
          <option value="">Seleccionar</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export function useVehicle() {
  const vehicle = useShop((state) => state.vehicle);
  const setVehicle = useShop((state) => state.setVehicle);
  const ready = Boolean(vehicle && vehicle.model && vehicle.year);
  return { vehicle: ready ? vehicle : null, draft: vehicle, setVehicle };
}
