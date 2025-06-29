import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Search} from "../Sections/Search";
import {DropdownLoggedOut} from "../Elements/DropdownLogedOut";
import {DropdownLoggedIn} from "../Elements/DropdownLogedIn";
import {useCart} from "../../context/CartContext";

export const Header = () => {
    const {cartList} = useCart();
    const[darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const[search, setSearch] = useState(false);
    const[dropdown, setDropdown] =useState(false);
    const navigate = useNavigate();
    const token = JSON.parse(sessionStorage.getItem("token"));

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        if(darkMode){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])

    return (
        <header className="bg-white dark:bg-black border-b max-w-7xl m-auto border-black dark:max-w-full">
            <nav className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-between items-center px-4 py-3">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="GameBuy Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GameBuy</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <span onClick={() => setDarkMode(!darkMode)} className="bi bi-palette-fill cursor-pointer text-xl text-gray-700 dark:text-white" />
                        <span onClick={() => setSearch(!search)} className="bi bi-search cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />

              <span  onClick={() => {token ? navigate("/cart") : navigate("/login")}} className="relative bi bi-basket2-fill cursor-pointer text-xl text-gray-700 dark:text-white">
                <span className="absolute -top-1 -right-2 bg-red-700 text-white text-xs rounded-full px-1 py-0.5">
                  {cartList.length}
                </span>
              </span>
                        <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-fill cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />
                        {dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown}/> :<DropdownLoggedOut setDropdown={setDropdown}/>)}
                    </div>
                </div>
            </nav>
            {search && <Search setSearch={setSearch}/>}
        </header>
    );
};
