import { IProduct } from "~/models/products";
import { findProduct } from "./_services/findProduct.service";
import { ProductItem } from "../_components/ProductItem";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: IProduct["slug"] }>;
}) {
  const { slug } = await params;

  const product = await findProduct({ slug });

  if (!product) {
    return "NOT FOUND";
  }

  return <ProductItem product={product}></ProductItem>;
}
