import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/ProdactCard";

export default function Home() {
  return (
    <div className="p-6">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div
          className="
            grid
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl;grid-cols-6
            gap-8
          "
        >
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
