import { searchProductsDto, TsearchParamsDto } from "./_dto/searchProducts.dto";
import { searchProducts } from "./_services/searchProducts.service";
import SearchPanel from "./client";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<TsearchParamsDto>;
}) {
  const validatedParams = searchProductsDto.safeParse(await searchParams);

  if (!validatedParams.success) {
    return JSON.stringify(validatedParams.error.issues);
  }

  const products = await searchProducts({ searchParams: validatedParams.data });

  return (
    <SearchPanel
      products={products}
      searchParams={validatedParams.data}
    ></SearchPanel>
  );
}
