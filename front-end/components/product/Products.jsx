import { fetchProducts } from "@/lib/actions";
import { ProductsSub } from "./ProductSub";
export const Products=async()=> {
  const products = await fetchProducts()
  return (
    <ProductsSub products={products}/>
  );
};
