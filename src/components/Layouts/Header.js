import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export const Header = () => {
    return (
        <header className="bg-white dark:bg-black border-b max-w-7xl m-auto border-black dark:max-w-full">
            <nav className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-between items-center px-4 py-3">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="GameBuy Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GameBuy
            </span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <span className="bi bi-palette-fill cursor-pointer text-xl text-gray-700 dark:text-white" />
                        <span className="bi bi-search cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />
                        <Link to="/cart">
              <span className="relative bi bi-basket2-fill cursor-pointer text-xl text-gray-700 dark:text-white">
                <span className="absolute -top-1 -right-2 bg-red-700 text-white text-xs rounded-full px-1 py-0.5">
                  0
                </span>
              </span>
                        </Link>
                        <span className="bi bi-person-fill cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />
                    </div>
                </div>
            </nav>
        </header>
    );
};
