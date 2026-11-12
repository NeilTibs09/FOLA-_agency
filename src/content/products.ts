/**
 * Shop showcase. Static for Version 1: no prices, cart or checkout.
 * These are merchandise concepts, not confirmed products. They are shown as
 * illustrations (see ProductArt) and described as concepts throughout.
 * A later Shopify phase can replace this file as the data source.
 */
export type ProductArtKind = "cap" | "tee" | "tote";

export type Product = { name: string; detail: string; art: ProductArtKind };

export const products: Product[] = [
  { name: "The Cap", detail: "Six-panel, embroidered wordmark", art: "cap" },
  { name: "The Tee", detail: "Heavyweight cotton, boxy fit", art: "tee" },
  { name: "The Tote", detail: "Natural canvas, built for the weekend", art: "tote" },
];
