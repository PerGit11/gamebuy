import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Logo from "../assets/images/logo.png";

export const PageNotFound = () => {
    useTitle("Stranica nije pronađena");

    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-red-600 font-bold my-10 dark:text-white text-center">
                        404 - Ups!
                    </p>
                    <div className="max-w-xs">
                        <img src={Logo} alt="Stranica nije pronađena" />
                    </div>
                </div>
                <div className="flex justify-center my-4">
                    <Link to="/">
                        <button
                            type="button"
                            className="w-64 text-2xl text-white bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:bg-gradient-to-br font-semibold rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Povratak na početnu
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
};
