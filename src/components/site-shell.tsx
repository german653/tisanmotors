import type { ReactNode } from "react";
import { CartDrawer } from "@/components/cart-drawer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-snow">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <CartDrawer />
    </div>
  );
}
