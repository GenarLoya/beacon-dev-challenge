import { IProduct, ProductSchema } from "~/models/products";

export async function getOneProduct({ id }: { id: IProduct["_id"] }) {
  const product = ProductSchema.findById(id);

  return product;
}
