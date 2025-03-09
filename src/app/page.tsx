import ProductList from "@/components/ProductList";

const Page = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return <ProductList products={data} />;
  } catch {
    return <div>Error loading products.</div>;
  }
};

export default Page;
