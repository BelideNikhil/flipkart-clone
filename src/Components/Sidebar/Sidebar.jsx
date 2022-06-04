import { useProducts } from "../../Context/ProductContext";
import "./Sidebar.css";

const brands = ["souled store", "indibelle", "rigo"];
const sizes = ["S", "M", "L"];

export default function Sidebar() {
    const {
        productDispatch,
        productState: {
            filters: { sortBy, idealFor, productSizes, selectedBrands },
        },
    } = useProducts();
    return (
        <aside className="sidebar-wrapper">
            <div className="flex justify-between">
                <div></div>
                <button className="clear-btn" onClick={() => productDispatch({ type: "RESET_FILTERS" })}>
                    Clear
                </button>
            </div>
            <div className="flex flex-col">
                <h4>Sort By Price</h4>
                <label className="filter-label">
                    <input
                        type="radio"
                        name="sort-by"
                        value="lowToHigh"
                        checked={sortBy === "lowToHigh"}
                        onChange={(e) => productDispatch({ type: "SORT_BY_PRICE", payload: e.target.value })}
                    />
                    Low to High
                </label>
                <label className="filter-label">
                    <input
                        type="radio"
                        name="sort-by"
                        value="highToLow"
                        checked={sortBy === "highToLow"}
                        onChange={(e) => productDispatch({ type: "SORT_BY_PRICE", payload: e.target.value })}
                    />
                    High to Low
                </label>
            </div>
            <div className="flex flex-col">
                <h4>Ideal For</h4>
                <label className="filter-label">
                    <input
                        type="checkbox"
                        value="men"
                        checked={idealFor.includes("men")}
                        onChange={(e) => productDispatch({ type: "IDEAL_FOR", payload: e.target.value })}
                    />
                    Men
                </label>
                <label className="filter-label">
                    <input
                        type="checkbox"
                        value="women"
                        checked={idealFor.includes("women")}
                        onChange={(e) => productDispatch({ type: "IDEAL_FOR", payload: e.target.value })}
                    />
                    Women
                </label>
            </div>
            <div className="flex flex-col">
                <h4>Size</h4>
                {sizes.map((size) => {
                    return (
                        <label className="filter-label" key={size}>
                            <input
                                type="checkbox"
                                value={size}
                                checked={productSizes.includes(size)}
                                onChange={(e) =>
                                    productDispatch({ type: "SET_PRODUCTS_SIZE", payload: e.target.value })
                                }
                            />
                            {size}
                        </label>
                    );
                })}
            </div>
            <div>
                <h4>Brands</h4>
                {brands.map((brand) => {
                    return (
                        <label className="filter-label" key={brand}>
                            <input
                                type="checkbox"
                                value={brand}
                                checked={selectedBrands.includes(brand)}
                                onChange={(e) =>
                                    productDispatch({ type: "SET_SELECTED_BRANDS", payload: e.target.value })
                                }
                            />
                            {brand.toUpperCase()}
                        </label>
                    );
                })}
            </div>
        </aside>
    );
}
