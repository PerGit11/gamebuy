export const FilterBar = ({ setShow }) => {
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
                            {["Cijena - Niza ka Vecoj", "Cijena - Veca ka nizoj"].map((label, i) => (
                                <div key={i} className="flex items-center my-1">
                                    <input
                                        id={`price-sort-${i + 1}`}
                                        type="radio"
                                        name="price-sort"
                                        className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                    />
                                    <label
                                        htmlFor={`price-sort-${i + 1}`}
                                        className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </li>

                        {/* Rating */}
                        <li className="mt-1 mb-5">
                            <span className="font-semibold">Rating</span>
                            {[
                                "4 Zvjezdice i vise",
                                "3 Zvjezdice i vise",
                                "2 Zvjezdice i vise",
                                "1 Zvjezdica i vise",
                            ].map((label, i) => (
                                <div key={i} className="flex items-center my-1">
                                    <input
                                        id={`rating-sort-${i + 1}`}
                                        type="radio"
                                        name="rating-sort"
                                        className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                    />
                                    <label
                                        htmlFor={`rating-sort-${i + 1}`}
                                        className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </li>

                        {/*PS4 i PS5*/}
                        <li className="mt-1 mb-5">
                            <p className="font-semibold my-1">Platforma</p>
                            {["PS4", "PS5"].map((platform, i) => (
                                <div key={i} className="flex items-center my-1">
                                    <input
                                        id={`platform-${platform}`}
                                        type="radio"
                                        name="ps-platform"
                                        className="w-4 h-4 text-yellow-600 bg-zinc-100 border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                    />
                                    <label
                                        htmlFor={`platform-${platform}`}
                                        className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        {platform} igre
                                    </label>
                                </div>
                            ))}
                        </li>

                        {/* Ostali filteri */}
                        <li className="mt-1 mb-5">
                            <span className="font-semibold">Ostali filteri</span>
                            {[
                                { id: "best-seller", label: "Samo najprodavaniji" },
                                { id: "only-instock", label: "Samo dostupni" },
                            ].map(({ id, label }) => (
                                <div key={id} className="flex items-center my-1">
                                    <input
                                        id={id}
                                        type="checkbox"
                                        className="w-4 h-4 text-yellow-600 bg-zinc-100 rounded border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
                                    />
                                    <label
                                        htmlFor={id}
                                        className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </li>

                        {/* Dugme za čišćenje filtera */}
                        <li className="mt-1 mb-5 px-1">
                            <button
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
