import { createFileRoute } from "@tanstack/react-router";
import { CatalogView } from "@/components/catalog-view";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/volantes")({
  head: () => ({
    meta: [
      { title: "Volantes — TISAN MOTORS" },
      {
        name: "description",
        content: "Volantes deportivos GTI y clásicos OEM, con cuero, costura y emblema a elección.",
      },
    ],
  }),
  component: VolantesPage,
});

function VolantesPage() {
  return (
    <SiteShell>
      <CatalogView
        title="Volantes deportivos y OEM"
        lede="Línea GTI en negro o plata y el tres rayos clásico. El precio se actualiza al cambiar cuero, costura, emblema y agregados."
        category="volantes"
      />
    </SiteShell>
  );
}
