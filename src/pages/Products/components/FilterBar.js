import { useFilter } from "../../../context/FilterContext";

export const FilterBar = ({ setShow }) => {
    const { state, dispatch } = useFilter();

    return (
        <section className="filter">
            <div
                id="drawer-disable-body-scrolling"
                className="fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-zinc-800 transition-transform left-0 top-0 transform-none"
                tabIndex="-1"
                aria-labelledby="drawer-disable-body-scrolling-label"
                aria-modal="true"
                role="dialog"
            >
                {/* Naslov i X dugme */}
                <div className="flex justify-between items-center mb-3">
                    <h5
                        id="drawer-disable-body-scrolling-label"
                        className="text-base font-semibold text-zinc-500 uppercase dark:text-zinc-400"
                    >
                        Filteri
                    </h5>
                    <button
                        onClick={() => setShow(false)}
                        type="button"
                        className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 dark:hover:bg-zinc-600 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Zatvori Filtere</span>
                    </button>
                </div>

                <div className="border-b pb-3" />

                {/* Sadržaj filtera */}
                <div className="py-4 overflow-y-auto">
                    <ul className="text-slate-700 dark:text-slate-100">
                        {/* Sort By */}
                        <li className="mt-1 mb-5">
                            <p className="font-semibold my-1">Cijena</p>

                            <div className="flex items-center my-1">
                                <input
                                    id="price-sort-1"
                                    type="radio"
                                    name="price-sort"
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor="price-sort-1"
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    Cijena - Niza ka Vecoj
                                </label>
                            </div>

                            <div className="flex items-center my-1">
                                <input
                                    id="price-sort-2"
                                    type="radio"
                                    name="price-sort"
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor="price-sort-2"
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    Cijena - Veca ka nizoj
                                </label>
                            </div>
                        </li>

                        {/* Rating */}
                        <li className="mt-1 mb-5">
                            <span className="font-semibold">Rating</span>

                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "RATINGS", payload: {ratings: "4STARSABOVE"}})}
                                    checked={state.ratings === "4STARSABOVE" || false}
                                    id="rating-sort-1"
                                    type="radio"
                                    name="rating-sort"
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor="rating-sort-1"
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    4 Zvjezdice i vise
                                </label>
                            </div>

                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "RATINGS", payload: {ratings: "3STARSABOVE"}})}
                                    checked={state.ratings === "3STARSABOVE" || false}
                                    id="rating-sort-2"
                                    type="radio"
                                    name="rating-sort"
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor="rating-sort-2"
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    3 Zvjezdice i vise
                                </label>
                            </div>

                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "RATINGS", payload: {ratings: "2STARSABOVE"}})}
                                    checked={state.ratings === "2STARSABOVE" || false}
                                    id="rating-sort-3"
                                    type="radio"
                                    name="rating-sort"
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor="rating-sort-3"
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    2 Zvjezdice i vise
                                </label>
                            </div>

                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "RATINGS", payload: {ratings: "1STARSABOVE"}})}
                                    checked={state.ratings === "1STARSABOVE" || false}
                                    id="rating-sort-4"
                                    type="radio"
                                    name="rating-sort"
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor="rating-sort-4"
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    1 Zvjezdica i vise
                                </label>
                            </div>
                        </li>

                        {/* Platforma */}
                        <li className="mt-1 mb-5">
                            <p className="font-semibold my-1">Platforma</p>

                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "PLATFORM", payload: {platform: "PS4"}})}
                                    id="PS4"
                                    type="radio"
                                    name="ps-platform"
                                    checked={state.platform === "PS4"}
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor="PS4"
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    PS4 igre
                                </label>
                            </div>

                            <div className="flex items-center my-1">
                                <input
                                    onChange={() => dispatch({type: "PLATFORM", payload: {platform: "PS5"}})}
                                    id="PS5"
                                    type="radio"
                                    name="ps-platform"
                                    checked={state.platform === "PS5"}
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor="PS5"
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    PS5 igre
                                </label>
                            </div>
                        </li>

                        {/* Ostali filteri */}
                        <li className="mt-1 mb-5">
                            <span className="font-semibold">Ostali filteri</span>

                            <div key={"best-seller"} className="flex items-center my-1">
                                <input
                                    onClick={() =>
                                        dispatch({
                                            type: "BEST_SELLER",
                                            payload: { onlyBestsellers: !state.onlyBestsellers },
                                        })
                                    }
                                    id={"best-seller"}
                                    type="checkbox"
                                    checked={state.onlyBestsellers || false}
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 rounded border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor={"best-seller"}
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    Samo najprodavaniji
                                </label>
                            </div>

                            <div key={"only-instock"} className="flex items-center my-1">
                                <input
                                    onClick={() =>
                                        dispatch({
                                            type: "IN_STOCK",
                                            payload: { onlyInStock: !state.onlyInStock },
                                        })
                                    }
                                    id={"only-instock"}
                                    type="checkbox"
                                    checked={state.onlyInStock || false}
                                    className="w-4 h-4 text-yellow-600 bg-zinc-100 rounded border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                />
                                <label
                                    htmlFor={"only-instock"}
                                    className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                >
                                    Samo dostupni
                                </label>
                            </div>
                        </li>

                        {/* Dugme za čišćenje filtera */}
                        <li className="mt-1 mb-5 px-1">
                            <button
                                onClick={() =>
                                dispatch({ type: "CLEAR_FILTER" })}
                                type="button"
                                className="w-full text-zinc-900 bg-white border border-zinc-300 focus:outline-none hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-zinc-800 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 dark:focus:ring-zinc-700"
                            >
                                Ocisti filtere
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
