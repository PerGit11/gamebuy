import {Link} from "react-router-dom";

export const OrderFail = () => {
    return (
        <section className="text-xl text-center max-w-4xl mx-auto my-10 py-7 dark:text-slate-100 border dark:border-slate-700 rounded">
            <div className="my-5">
                <p className="bi bi-exclamation-circle text-red-500 text-7xl mb-5"></p>
                <p>Uplata nije uspela, pokušajte ponovo!</p>
            </div>
            <div className="my-5">
                <p>Vaša porudžbina nije potvrđena.</p>
                <p>Kontaktirajte <span className="">game@buy.com</span> za podršku.</p>
            </div>
            <Link to={"/cart"}
                type="button"
                className="text-white bg-yellow-700 hover:bg-yellow-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none">
                Proveri korpu ponovo <i className="ml-2 bi bi-cart"></i>
            </Link>
        </section>
    );
};
