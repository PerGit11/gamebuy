export const FilterReducer = (state, action) => {
    const {type, payload} = action;

    switch (type){
        case "PRODUCT_LIST":
            return {
                ...state,
                productList: payload.products,
                initialProductList: payload.products
            };

        case "SORT_BY":
            return{
                ...state,
                sortBy: payload.sortBy,
            };

        case "RATINGS":
            return{
                ...state,
                ratings: payload.ratings,
            };

        case "BEST_SELLER":
            return{
                ...state,
                onlyBestsellers: payload.onlyBestsellers,
            };

        case "IN_STOCK":
            return{
                ...state,
                onlyInStock: payload.onlyInStock,
            };

        case "PLATFORM":
            return{
                ...state,
                platform: payload.platform,
            };

        case "CLEAR_FILTER":
            return {
                ...state,
                onlyInStock: false,
                onlyBestsellers: false,
                sortBy: null,
                ratings: null,
                platform: null
            };

        default:
            throw new Error("Nema takvih igrica!");
    }
}
