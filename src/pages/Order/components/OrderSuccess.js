import {Link} from "react-router-dom";

export const OrderSuccess = ({data}) => {
    return (
        <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
            <div className="my-5">
                <p className="bi bi-check-circle text-yellow-600 text-7xl mb-5"></p>
                <p>Hvala, {data.user.name}, na porudžbini!</p>
                <p>ID porudžbine:{data.id}</p>
            </div>
            <div className="my-5">
                <p>Vaša porudžbina je potvrđena.</p>
                <p>Proverite mejl ({data.user.email}) za vasu igru.</p>
                <p className="my-5">ID uplate: xyz_123456789</p>
            </div>
            <Link to={"/products"}
                className="text-white bg-yellow-700 hover:bg-yellow-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none">
                Nastavi kupovinu <i className="ml-2 bi bi-cart"></i>
            </Link>
        </section>
    );
};
