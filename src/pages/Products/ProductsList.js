import { ProductCard } from "../../components/Elements/ProductCard";
import { FilterBar } from "./components/FilterBar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {useTitle} from "../../hooks/useTitle";
import {useFilter} from "../../context/FilterContext";
import {useNavigate} from "react-router-dom";

export const ProductsList = () => {
    const navigate = useNavigate();
    const {productList, initialProductList, dispatch} = useFilter();
    const [show, setShow] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useTitle("Igre -");

    const location = useLocation();
    const searchTerm = new URLSearchParams(location.search).get("q") || "";

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("http://localhost:8000/products");
            const data = await response.json();
            initialProductList(data);
        }
        fetchProducts();
    }, [initialProductList]);

    useEffect(() => {
        const lowerSearch = searchTerm.toLowerCase();
        const filtered = productList.filter((product) =>
            product.name.toLowerCase().includes(lowerSearch)
        );
        setFilteredProducts(filtered);
    }, [searchTerm, productList]);

    return (
        <main>
            <section className={"my-5"}>
                <div className={"my-5 flex justify-between"}>
          <span className={"text-2xl font-semibold dark:text-slate-100 mb-5"}>
          <span className={"cursor-pointer"} onClick={() => {
              setFilteredProducts(productList);
              dispatch({ type: "CLEAR_FILTER" })
              navigate("/products");
          }}
          >Sve igre</span> ({filteredProducts.length})
          </span>
                    <span>
            <button
                onClick={() => setShow(!show)}
                id={"dropdownMenuIconButton"}
                data-dropdown-toggle={"dropdownDots"}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-zinc-900 bg-zinc-100 rounded-lg hover:bg-zinc-200 dark:text-white dark:bg-zinc-600 dark:hover:bg-zinc-700"
                type={"button"}
            >
              <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
                </div>

                <div className={"flex flex-wrap justify-center lg:flex-row"}>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
            {show && <FilterBar setShow={setShow} />}
        </main>
    );
};
