import dbConnect from "~/lib/db";
import { ProductSchema } from "../../../models/products";
import { TsearchParamsDto } from "../_dto/searchProducts.dto";

export async function searchProducts({
  searchParams,
}: {
  searchParams: TsearchParamsDto;
}) {
  await dbConnect();

  const { query, category } = searchParams;

  const filter: any = {};

  if (query) {
    filter.name = {
      $regex: query,
      $options: "i",
    };
  }

  if (category) {
    filter.category = category;
  }

  const products = await ProductSchema.find(filter);

  return products;
}
