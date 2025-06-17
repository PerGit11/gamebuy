import {createContext, useContext, useReducer} from "react";
import {FilterReducer} from "../reducers/FilterReducer";

const filterInitialState = {
    productList: [],
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

    const value = {
        productList,
        initialProductList
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}