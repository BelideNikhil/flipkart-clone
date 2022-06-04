import "./ProductList.css";
import { useProducts } from "../../Context/ProductContext";
import { ProductCard } from "../index";
import { sortAndFilter } from "../../Utils/sortAndFilter";

export default function ProductList() {
    const {
        productState: { products, filters },
    } = useProducts();

    const finalProducts = sortAndFilter(products, filters);

    return (
        <main className="product-list-wrapper">
            {finalProducts?.map((product) => {
                return <ProductCard product={product} key={product.id} />;
            })}
        </main>
    );
}
