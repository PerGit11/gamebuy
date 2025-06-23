import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export const DropdownLoggedIn = ({setDropdown}) => {
    const navigate = useNavigate();
    const name = JSON.parse(sessionStorage.getItem("gbname"));

    return (
        <div id="dropdownAvatar"
             className="select-none absolute top-12 2xl:right-80 right-0 z-10 w-44 bg-white rounded divide-y divide-zinc-100 shadow dark:bg-zinc-700 dark:divide-zinc-600">
            <div className="py-3 px-4 text-sm text-zinc-900 dark:text-white">
                <div className="font-medium truncate">{name}</div>
            </div>
            <ul className="py-1 text-sm text-zinc-700 dark:text-white" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link to="/products"
                          onClick={() => setDropdown(false)}
                          className="block py-2 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">Sve igre</Link>
                </li>
                <li>
                    <Link to="/dashboard"
                          onClick={() => setDropdown(false)}
                          className="block py-2 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">Kontrolna tabla</Link>
                </li>
            </ul>
            <div className="py-1">
        <span
            onClick={() => {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("gbid");
                setDropdown(false);
                navigate("/");
            }}
            className="cursor-pointer block py-2 px-4 text-sm text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:text-white dark:hover:text-white">
          Izloguj se
        </span>
            </div>
        </div>
    );
}
