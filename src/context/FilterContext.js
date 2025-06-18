import {createContext, useContext, useReducer} from "react";
import {FilterReducer} from "../reducers/FilterReducer";

const filterInitialState = {
    productList: [],
    initialProductList: [],
    onlyInStock: false,
    onlyBestsellers: false,
    sortBy: null,
    ratings: null,
    platform: null
}

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

    const { productList } = state;

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }

    function bestSeller(products){
        return state.onlyBestsellers ? products.filter(product => product.best_seller === true) : products;
    }

    function inStock(products){
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products;
    }

    function sort(products){
        if(state.sortBy === "lowtohigh"){
            return products.sort((a,b) => Number(a.price) - Number(b.price));
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function plat(products){
        if(state.platform === "PS4"){
            return products.filter(product => product.platform === "PS4");
        }
        if(state.platform === "PS5"){
            return products.filter(product => product.platform === "PS5");
        }
        return products;
    }

    function rating(products){
        if(state.ratings === "4STARSABOVE"){
            return products.filter(product => product.ratings >=4);
        }
        if(state.ratings === "3STARSABOVE"){
            return products.filter(product => product.ratings >=3);
        }
        if(state.ratings === "2STARSABOVE"){
            return products.filter(product => product.ratings >=2);
        }
        if(state.ratings === "1STARSABOVE"){
            return products.filter(product => product.ratings >=1);
        }
        return products;
    }

    const filteredProductList = rating(plat(sort(inStock(bestSeller(state.initialProductList)))));

    const value = {
        state,
        dispatch,
        productList: filteredProductList,
        initialProductList,
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined){
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
}