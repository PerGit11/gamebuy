import {Link} from "react-router-dom";
import {useCart} from "../../../context/CartContext";
import {useState, useEffect} from "react";

export const CartCard = ({product}) => {
    const {removeFromCart} = useCart();
    const [preorder , setPreorder] = useState(false);

    useEffect(() => {
        if (product.in_stock === false){
            setPreorder(true);
        }else {
            setPreorder(false);
        }
    }, []);

    return (
        <div className="flex flex-wrap justify-between items-center border-b dark:border-zinc-700 max-w-4xl m-auto p-2 mb-5">
            <div className="flex">
                <Link to={`/products/${product.id}`}>
                <img className="w-[80px] rounded" src={product.poster} alt={product.name} />
                </Link>
                <div>
                    <Link to={`/products/${product.id}`}>
                    <p className="text-lg ml-2 dark:text-zinc-200">{product.name}{preorder ? " | PREORDER" : ""}</p>
                    </Link>
                    <p onClick={() => removeFromCart(product)} className="text-base ml-2 cursor-pointer text-red-400">Ukloni</p>
                </div>
            </div>
            <div className="text-lg m-2 dark:text-zinc-200">
                <span>{product.price}€</span>
            </div>
        </div>
    )
}
