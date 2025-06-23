import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {useTitle} from "../hooks/useTitle";
import {useCart} from "../context/CartContext";

export const ProductDetail = () => {
    const [isInCart, setIsInCart] = useState(false);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [preorder, setPreorder] = useState(false);
    const {rating} = product;
    const {cartList, addToCart, removeFromCart} = useCart();

    useTitle(`${product.name}`);

    useEffect(() => {
        setIsInCart(cartList.some(item => item.id === product.id));
    }, [cartList, product.id]);


    useEffect(() => {
        if(rating===0){
            setPreorder(true);
        }else{
            setPreorder(false);
        }
    }, [rating])


    useEffect(() => {
        async function fetchProducts(){
            const response = await fetch(`http://localhost:8000/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProducts();
    }, [id]);


    return (
        <main>
            <section>
                <div className="relative flex items-center justify-center w-full mt-10 mb-5">
                    <Link to={"/products"}><button className="absolute hidden sm:block left-24 px-4 py-2 bg-zinc-200 text-zinc-800 rounded dark:bg-zinc-700 dark:text-white">← Nazad</button></Link>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-zinc-900 dark:text-slate-200">
                            {product.name}
                        </h1>
                        <p className="mt-2 text-lg text-zinc-900 dark:text-slate-200">
                            {product.overview}
                        </p>
                    </div>
                </div>


                <div className="flex flex-wrap justify-around items-center">
                    <div className="max-w-3xl my-3">
                        <img className="rounded w-[330px]" src={product.poster} alt={product.name} />
                    </div>
                    <div className="max-w-xl my-3">
                        <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                            <span className="mr-1">€</span>
                            <span>{product.price}</span>
                        </p>

                        <div className="flex items-center my-2">
                            {[...Array(5)].map((_, i) => (
                                <i
                                    key={i}
                                    className={`text-lg bi ${
                                        i < product.rating ? "bi-star-fill" : "bi-star"
                                    } text-yellow-500 mr-1`}
                                ></i>
                            ))}
                        </div>

                        <p className="my-4 select-none">
                            {product.best_seller && (
                                <span className="font-semibold text-white bg-orange-500 opacity-90 rounded-lg px-3 py-1 mr-2">
                                    Najprodavanija igra
                                </span>
                            )}
                            {product.in_stock ? (
                                <span className="font-semibold text-white bg-green-400 rounded-lg px-3 py-1 mr-2">
                                    Dostupno
                                </span>
                            ) : (
                                <span className="font-semibold text-white  bg-red-700 rounded-lg px-3 py-1 mr-2">
                                    Nije Dostupno
                                </span>
                            )}
                            {product.platform==="PS4" ? (
                                <span className="font-semibold text-white bg-blue-600 opacity-90 rounded-lg px-3 py-1 mr-2">
                                    {product.platform}
                                </span>
                            ):
                                (<span className="font-semibold text-white bg-black opacity-90 rounded-lg px-3 py-1 mr-2">
                                    {product.platform}
                                </span>
                                )
                            }
                        </p>

                        {preorder ? ( isInCart ? (<button onClick={() => removeFromCart(product)} className={"inline-flex items-center my-2 py-3 pl-6 pr-6 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-600"}>OTKAZI PREORDER</button>) : (<button onClick={() => addToCart(product)} className={"inline-flex items-center my-2 py-3 pl-6 pr-6 text-lg font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-amber-600"}>PREORDER</button>)) : (isInCart ? (<button onClick={() => removeFromCart(product)} className={"inline-flex items-center my-2 py-3 pl-6 pr-4 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-600"}>Ukloni iz korpe -</button>) : (<button onClick={() => addToCart(product)} className={"inline-flex items-center my-2 py-3 pl-6 pr-4 text-lg font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-amber-600"}>Dodaj u korpu +</button>))}

                        <p className="text-lg text-zinc-900 dark:text-slate-200">
                            {product.long_description}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};
