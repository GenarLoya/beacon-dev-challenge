import { IProduct } from "~/models/products";
import { getOneProduct } from "./_services/getOneProduct.service";
import { ProductItem } from "../_components/ProductItem";

export default async function Page({
  params,
}: {
  params: Promise<{ id: IProduct["_id"] }>;
}) {
  try {
    const { id } = await params;

    const product = await getOneProduct({ id });

    if (!product) {
      return "NOT FOUND";
    }

    return <ProductItem product={product}></ProductItem>;
  } catch (error: any) {
    return "SEARCH ERROR";
  }
}
