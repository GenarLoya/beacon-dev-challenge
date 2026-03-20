"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { TsearchParamsDto } from "./_dto/searchProducts.dto";
import { IProduct } from "~/models/products";
import { ProductItem } from "./_components/shared/ProductItem";

const categories = [
  "medicamentos",
  "suplementos",
  "cuidado-personal",
  "dispositivos-medicos",
];

// 🔎 Search Bar Component
function SearchBar({
  query,
  setQuery,
}: {
  query: TsearchParamsDto["query"];
  setQuery: (v: TsearchParamsDto["query"]) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full rounded-2xl border p-3 shadow-sm"
    />
  );
}

// 🏷️ Category Filter
function CategoryFilter({
  category,
  setCategory,
}: {
  category: TsearchParamsDto["category"];
  setCategory: (v: TsearchParamsDto["category"]) => void;
}) {
  return (
    <select
      value={category}
      onChange={(e) =>
        setCategory(e.target.value as TsearchParamsDto["category"])
      }
      className="rounded-2xl border p-3 shadow-sm"
    >
      <option value="">Todas las categorías</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

// 🔘 Search Button
function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl bg-black px-6 py-3 text-white shadow"
    >
      Buscar
    </button>
  );
}

// 🧠 Main Panel
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

// 🧾 Example Products List Component
export function ProductsList({ products }: { products: IProduct[] }) {
  const router = useRouter();

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      {products.map((product) => (
        <ProductItem
          onClick={() => {
            router.push(`/products/${product._id}`);
          }}
          key={product._id.toString()}
          product={product}
        ></ProductItem>
      ))}
    </div>
  );
}
