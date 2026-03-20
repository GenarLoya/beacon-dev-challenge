import { useRouter } from "next/navigation";
import { IProduct } from "~/models/products";
import { ProductItem } from "./ProductItem";

export function ProductsList({ products }: { products: IProduct[] }) {
  const router = useRouter();

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      {products.map((product) => (
        <ProductItem
          onClick={() => {
            router.push(`/products/${product.slug}`);
          }}
          key={product._id.toString()}
          product={product}
        ></ProductItem>
      ))}
    </div>
  );
}
