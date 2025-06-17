import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({ setSearch }) => {
    const searchRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        searchRef.current?.focus();
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const query = searchRef.current.value.trim();
        if (query) {
            navigate(`/products?q=${query}`);
            setSearch(false);
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl p-2 my-5">
            <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative w-full">
                    <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
                    <input
                        ref={searchRef}
                        name="search"
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5  dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                        placeholder="Pretrazi"
                        autoComplete="off"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-yellow-600 rounded-lg border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                />
            </form>
        </div>
    );
};
