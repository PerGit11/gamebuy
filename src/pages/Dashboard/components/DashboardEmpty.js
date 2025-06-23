import {Link} from "react-router-dom";

export const DashboardEmpty = () => {
    return (
        <section className="text-xl text-center max-w-4xl mx-auto my-10 py-7 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 rounded">
            <div className="my-5">
                <p className="bi bi-cart text-yellow-600 text-7xl mb-5"></p>
                <p>Ups! Tvoja lista narudžbi je prazna!</p>
                <p>Dodaj u korpu igre iz naše ponude.</p>
            </div>
            <Link
                to={"/products"}
                type="button"
                className="text-white bg-yellow-700 hover:bg-yellow-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none"
            >
                Nastavi kupovinu <i className="ml-2 bi bi-cart"></i>
            </Link>
        </section>
    );
};
