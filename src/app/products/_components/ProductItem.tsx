import { IProduct } from "~/models/products";

export function ProductItem({
  product,
  onClick,
}: {
  product: IProduct;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="rounded-2xl border p-4 shadow">
      <img src={product.image} alt={product.name} className="mb-3 rounded-xl" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="mt-2 font-bold">${product.price}</p>
    </button>
  );
}
