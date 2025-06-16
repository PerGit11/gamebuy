import {Link} from "react-router-dom";

export const ProductCard = () => {
    return (
        <div className={"m-3 max-w-[350px] bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800"}>
            <Link to={"/"} className={"relative"}>
                <span className={"absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded"}>Najprodavanija igra</span>
                <img className={"rounded-t-lg w-full"} src={"/assets/images/rdr2.jpg"} alt={""}/>
            </Link>
            <div className={"p-5"}>
                <Link to={"/"}>
                    <h5 className={"mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"}>Red Dead Redemption 2</h5>
                </Link>
                <p className={"mb-3 font-normal text-zinc-700 dark:text-zinc-400"}>Lorem ipsum dolor sit amet consectous</p>

                <div className={"flex items-center my-2"}>
                    <i className={"text-lg bi bi-star-fill text-yellow-500 mr-1"}></i>
                    <i className={"text-lg bi bi-star-fill text-yellow-500 mr-1"}></i>
                    <i className={"text-lg bi bi-star-fill text-yellow-500 mr-1"}></i>
                    <i className={"text-lg bi bi-star-fill text-yellow-500 mr-1"}></i>
                    <i className={"text-lg bi bi-star text-yellow-500 mr-1"}></i>
                </div>

                <p className={"flex justify-between items-center"}>
                    <span className={"text-2xl dark:text-zinc-200"}>
                        <span>€</span> <span>59</span>
                    </span>
                    <button className={"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-amber-600"}>Dodaj u korpu</button>
                   {/* <button className={"inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700"}>Ukloni iz korpe</button>*/}
                </p>
            </div>
        </div>
    )
}
