import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CatalogView, readCatalogSearch } from "@/components/catalog-view";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search) => readCatalogSearch(search),
  head: () => ({
    meta: [
      { title: "Catálogo — TISAN MOTORS" },
      {
        name: "description",
        content: "Volantes, iluminación LED, accesorios y detailing filtrados por tu vehículo.",
      },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const search = Route.useSearch();
  const [query, setQuery] = useState(search.q ?? "");

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-5 pt-10">
        <label className="grid gap-2 text-sm text-platinum">
          Buscar
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Volante, LED, levas…"
            className="h-11 rounded-md border border-line bg-ink px-3 text-snow"
          />
        </label>
      </div>
      <CatalogView
        title="Catálogo"
        lede="Piezas de equipamiento con precio de lista y precio de transferencia. Si elegís tu auto, ves solo lo compatible."
        category={search.cat}
        query={query}
      />
    </SiteShell>
  );
}
