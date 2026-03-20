import dbConnect from "~/lib/db";
import { IProduct, ProductSchema } from "~/models/products";

export async function findProduct({ slug }: { slug: IProduct["slug"] }) {
  await dbConnect();

  const product = ProductSchema.findOne({
    slug,
  });

  return product;
}
