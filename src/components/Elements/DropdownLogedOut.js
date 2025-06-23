import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({setDropdown}) => {
    return (
        <div id="dropdownAvatar"
             className="select-none absolute top-12 2xl:right-80 right-0 z-10 w-44 bg-white rounded divide-y divide-zinc-100 shadow dark:bg-zinc-700 dark:divide-zinc-600">
            <ul className="py-1 text-sm text-zinc-700 dark:text-white" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link to="/products"
                          onClick={() => setDropdown(false)}
                          className="block py-2 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">Sve igre</Link>
                </li>
                <li>
                    <Link to="/login"
                          onClick={() => setDropdown(false)}
                          className="block py-2 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">Uloguj se</Link>
                </li>
                <li>
                    <Link to="/register"
                          onClick={() => setDropdown(false)}
                          className="block py-2 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">Registruj se</Link>
                </li>
            </ul>
        </div>
    );
}
