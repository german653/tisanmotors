import { useEffect } from "react";
import { useShop } from "@/lib/shop-store";

export function ShopHydrator() {
  useEffect(() => {
    void useShop.persist.rehydrate();
    useShop.getState().setHydrated(true);
  }, []);
  return null;
}
