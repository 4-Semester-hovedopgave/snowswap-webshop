import { supabase } from "@/lib/supabase";
import ProductInfo from "@/components/ProductInfo";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const { data: product, error } = await supabase.from("products").select("*").eq("id", id).single();

  if (error || !product) {
    return <main className="p-6">Product not found.</main>;
  }

  return (
    <main className="p-6">
      <ProductInfo product={product} />
    </main>
  );
}
