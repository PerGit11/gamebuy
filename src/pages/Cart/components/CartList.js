import {CartCard} from "./CartCard";
import {Checkout} from "./Checkout";
import {useState} from "react";
import {useCart} from "../../../context/CartContext";

export const CartList = () => {
    const [checkout, setCheckout] = useState(false);
    const {cartList, total} = useCart();

    return (
        <>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-zinc-100 my-10 underline underline-offset-8">
                    Moja korpa ({cartList.length})
                </p>
            </section>

            <section>
                { cartList.map((product) => (
                    <CartCard key={product.id} product={product}/>
                )) }
            </section>

            <section className="max-w-4xl m-auto">
                <div className="flex flex-col p-2 border-b dark:border-zinc-700 text-lg dark:text-zinc-100">
                    <p className="flex justify-between my-2">
                        <span className="font-semibold">Ukupan iznos:</span>
                        <span>{total}€</span>
                    </p>
                </div>
                <div className="text-right my-5">
                    <button type="button" onClick={() => setCheckout(true)} className="text-white bg-yellow-700 hover:bg-yellow-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700">
                        PORUČI <i className="ml-2 bi bi-arrow-right"></i>
                    </button>
                </div>
            </section>
            {checkout && <Checkout setCheckout={setCheckout}/>}
        </>
    )
}
