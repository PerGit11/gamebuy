import {ProductCard} from "../../../components/Elements/ProductCard";

export const FeaturedProducts = () => {
    return (
        <section className={"my-20"}>
            <h1 className={"text-2xl text-center font-semibold dark:text-slate-100 mb-5 border-b-2 border-black max-w-[200px] m-auto"}>Predlozene Igre</h1>
            <div className={"flex flex-wrap justify-center lg:flex-row"}>
                <ProductCard/>
            </div>
        </section>
    )
}
