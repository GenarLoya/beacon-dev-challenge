"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IProduct } from "~/models/products";
import { ProductsList } from "./_components/ProductList";
import { SearchButton } from "./_components/SearchButton";
import { TsearchParamsDto } from "./_dto/searchProducts.dto";
import { CategoryFilter } from "./_components/CategoryFilter";
import { SearchBar } from "./_components/SearchBar";

export default function SearchPanel({
  searchParams,
  products,
}: {
  searchParams: TsearchParamsDto;
  products: IProduct[];
}) {
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.query);
  const [category, setCategory] = useState(searchParams.category);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (query) params.set("query", query);
    if (category) params.set("category", category);

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow">
      <SearchBar query={query} setQuery={setQuery} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <SearchButton onClick={handleSearch} />
      <ProductsList products={products}></ProductsList>
    </div>
  );
}
