import Image from "next/image";
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
      <Image
        width={400}
        height={400}
        src={product.image}
        alt={product.slug}
        className="mb-3 rounded-xl"
        unoptimized
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="mt-2 font-bold">${product.price}</p>
    </button>
  );
}
