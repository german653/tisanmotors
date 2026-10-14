import { createFileRoute } from "@tanstack/react-router";
import { CatalogView } from "@/components/catalog-view";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/iluminacion")({
  head: () => ({
    meta: [
      { title: "Iluminación LED — TISAN MOTORS" },
      {
        name: "description",
        content: "Kit de iluminación ambiental de 48 LED RGB con control por app y por audio.",
      },
    ],
  }),
  component: LedPage,
});

function LedPage() {
  return (
    <SiteShell>
      <CatalogView
        title="Iluminación ambiental"
        lede="Kits de 48 LED para pisaderas, consola y vano de pies. Control remoto, aplicación y modo que sigue el audio."
        category="iluminacion"
      />
    </SiteShell>
  );
}
