import {useCart} from "../../../context/CartContext";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Checkout = ({ setCheckout }) => {
    const {cartList, total, clearCart} = useCart();
    const [user, setUser] = useState({});
    const token = JSON.parse(sessionStorage.getItem("token"));
    const gbid = JSON.parse(sessionStorage.getItem("gbid"));
    const navigate = useNavigate();

    useEffect(() => {
        async function getUser(){
            const response = await fetch(`http://localhost:8000/600/users/${gbid}`,{
                method: "GET",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
            });
            const data = await response.json();
            setUser(data);
        }
        getUser();
    }, []);

    async function handleOrderSubmit(event){
        event.preventDefault();

         try{
            const order ={
                cartList: cartList,
                amount_paid: total,
                quantity: cartList.length,
                user: {
                    name: user.name,
                    email: user.email,
                    id: user.id
                }
            }
            const response = await fetch("http://localhost:8000/660/orders", {
                method: "POST",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
                body: JSON.stringify(order)
            });
            const data = await response.json();
            clearCart();
            navigate("/order-summary", {state: {data: data, status: true}});
        } catch(error) {
            navigate("/order-summary", {state: {status: false}});
        }
    }

    return (
        <section>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div
                id="authentication-modal"
                tabIndex="-1"
                className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
                aria-modal="true"
                role="dialog"
            >
                <div className="relative p-4 w-full mt-14 md:mt-0 max-w-md h-full md:h-auto overflow-y-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-zinc-700">
                        <button
                            onClick={() => setCheckout(false)}
                            type="button"
                            className="absolute top-3 right-2.5 text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-800 dark:hover:text-white"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Zatvori prozor</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-zinc-900 dark:text-white">
                                <i className="bi bi-credit-card mr-2"></i>PLAĆANJE KARTICOM
                            </h3>
                            <form onSubmit={handleOrderSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        Ime:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                                        value={user.name || ""}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        Email:
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                                        value={user.email || ""}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="card"
                                        className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        Broj kartice:
                                    </label>
                                    <input
                                        type="number"
                                        id="card"
                                        className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                                        value="4215625462597845"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="code"
                                        className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        Datum isteka:
                                    </label>
                                    <input
                                        type="number"
                                        id="month"
                                        className="inline-block w-20 bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                                        value="03"
                                        disabled
                                    />
                                    <input
                                        type="number"
                                        id="year"
                                        className="inline-block w-20 ml-3 bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                                        value="27"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="code"
                                        className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                                    >
                                        Sigurnosni kod:
                                    </label>
                                    <input
                                        type="number"
                                        id="code"
                                        className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                                        value="523"
                                        disabled
                                    />
                                </div>
                                <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                                    {total}€
                                </p>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-yellow-700 hover:bg-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700"
                                >
                                    <i className="mr-2 bi bi-lock-fill"></i>PLATI
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
