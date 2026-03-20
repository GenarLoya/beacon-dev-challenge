import { TsearchParamsDto } from "../_dto/searchProducts.dto";

export function SearchBar({
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
