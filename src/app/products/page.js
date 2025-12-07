import { supabase } from "@/lib/supabase";
import ProductList from "@/components/ProductList";

export default async function ProductsPage() {
  // Fetch/Henter alle produkter fra Supabase
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    return <main className="p-6">Error loading products...</main>;
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Products</h1>
      <ProductList products={products} />
    </main>
  );
}
