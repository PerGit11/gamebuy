import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const ProductCard = ({product}) => {
    const [preorder, setPreorder] = useState(false);
    const {id, name, overview, poster, price, rating, best_seller, platform} = product;

    useEffect(() => {
        if(rating===0){
            setPreorder(true);
        }else{
            setPreorder(false);
        }
    }, [rating])


    return (
        <div className={"m-3 w-[300px] bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800"}>
            <Link to={`products/${id}`} className={"relative"}>
                {best_seller && <span className={"absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded"}>Najprodavanija igra</span>}
                <span className={"absolute top-4 right-2 px-2 bg-blue-400 bg-opacity-90 text-white rounded"}>{platform}</span>
                <img className={"rounded-t-lg w-full"} src={poster} alt={""}/>
            </Link>
            <div className={"p-5"}>
                <Link to={`products/${id}`}>
                    <h5 className={"mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"}>{name}</h5>
                </Link>
                <p className={"mb-3 font-normal text-zinc-700 dark:text-zinc-400"}>{overview}</p>

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

                <p className={"flex justify-between items-center"}>
                    <span className={"text-2xl dark:text-zinc-200"}>
                        <span>€</span> <span>{price}</span>
                    </span>
                    {preorder ? (<button className={"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-amber-600"}>PREORDER</button>) : (<button className={"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-amber-600"}>Dodaj u korpu</button>)}
                   {/* <button className={"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700"}>Ukloni iz korpe</button>*/}
                </p>
            </div>
        </div>
    )
}
