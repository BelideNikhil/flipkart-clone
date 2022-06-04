import { useContext, createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

const ProductContext = createContext();
const filtersInitial = {
    sortBy: "",
    idealFor: [],
    productSizes: [],
    selectedBrands: [],
};
const initialState = {
    products: [
        {
            id: uuid(),
            imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1621919104_9303367.jpg?format=webp&w=400&dpr=1.0",
            title: "HUGSY by Souled store",
            idealFor: "women",
            price: "599",
            brand: "souled store",
            sizes: ["M", "L"],
        },
        {
            id: uuid(),
            title: "Blue Denim Jacket",
            imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1644564615_1065596.jpg?format=webp&w=480&dpr=1.3",
            idealFor: "men",
            price: "999",
            brand: "souled store",
            sizes: ["S", "M"],
        },
        {
            id: uuid(),
            title: "Black Sweatshirt",
            imgSrc: "https://rukminim1.flixcart.com/image/880/1056/kgmla4w0/sweatshirt/t/7/y/m-sw10201091-rigo-original-imafwtepjjyfkxkq.jpeg?q=50",
            idealFor: "men",
            price: "799",
            brand: "rigo",
            sizes: ["S", "L"],
        },
        {
            id: uuid(),
            title: "Multicolor Shrug",
            imgSrc: "https://rukminim1.flixcart.com/image/880/1056/jpodaq80/shrug/n/e/q/3xl-ibcp255ml-indibelle-original-imafbufrktnbhwg8.jpeg?q=50",
            idealFor: "women",
            price: "399",
            brand: "indibelle",
            sizes: ["S", "M"],
        },
        {
            id: uuid(),
            title: "Tie Dye: Streaming Blue",
            imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1644644377_1798770.jpg?format=webp&w=300&dpr=1.3",
            idealFor: "women",
            price: "799",
            brand: "souled store",
            sizes: ["S", "L"],
        },
        {
            id: uuid(),
            title: "Batman Baseball Shirt: Bruce Wayne",
            imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1654061204_7214075.jpg?format=webp&w=480&dpr=1.3",
            idealFor: "men",
            price: "899",
            brand: "souled store",
            sizes: ["M", "L"],
        },
        {
            id: uuid(),
            title: "Solid Men Round Neck Blue T-Shirt",
            imgSrc: "https://rukminim1.flixcart.com/image/880/1056/l251xu80/t-shirt/e/k/5/m-mshct1041-rigo-original-imagdjzgpvw2fazg.jpeg?q=50",
            idealFor: "men",
            price: "799",
            brand: "rigo",
            sizes: ["M", "L"],
        },
    ],
    filters: filtersInitial,
};

function productReducer(state, { type, payload }) {
    switch (type) {
        case "SORT_BY_PRICE":
            return { ...state, filters: { ...state.filters, sortBy: payload } };
        case "IDEAL_FOR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    idealFor: state.filters.idealFor?.includes(payload)
                        ? state.filters.idealFor.filter((e) => e !== payload)
                        : [...state.filters.idealFor, payload],
                },
            };
        case "RESET_FILTERS":
            return { ...state, filters: filtersInitial };
        case "SET_PRODUCTS_SIZE": {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    productSizes: state.filters.productSizes.includes(payload)
                        ? state.filters.productSizes.filter((e) => e !== payload)
                        : [...state.filters.productSizes, payload],
                },
            };
        }
        case "SET_SELECTED_BRANDS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    selectedBrands: state.filters.selectedBrands.includes(payload)
                        ? state.filters.selectedBrands.filter((e) => e !== payload)
                        : [...state.filters.selectedBrands, payload],
                },
            };
        default:
            return state;
    }
}

function ProductProvider({ children }) {
    const [productState, productDispatch] = useReducer(productReducer, initialState);
    return <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>;
}

function useProducts() {
    return useContext(ProductContext);
}

export { ProductProvider, useProducts };
