import { CATEGORIES } from "~/constants/categories";
import { TsearchParamsDto } from "../_dto/searchProducts.dto";

export function CategoryFilter({
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
      {CATEGORIES.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
