import type { ImageId } from "./images";

/**
 * Shop showcase. Static for Version 1: no prices, cart or checkout.
 * A later Shopify phase can replace this file as the data source.
 */
export type Product = { name: string; detail: string; image: ImageId };

export const products: Product[] = [
  { name: "The Cap", detail: "Six-panel, embroidered wordmark", image: "shopCap" },
  { name: "The Tee", detail: "Heavyweight cotton, boxy fit", image: "shopTee" },
  { name: "The Tote", detail: "Canvas, built for the weekend", image: "shopTote" },
];
