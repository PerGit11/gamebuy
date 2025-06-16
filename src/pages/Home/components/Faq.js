import {Accordion} from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
            "id": 1,
            "question": "Zasto kupovati na GameBuy sajtu?",
            "answer": "Zato jer kod nas uvijek imate brzu, sigurnu i jeftinu isporuku igara i bilo koje doba dana."
        },
        {
            "id": 2,
            "question": "Da li je moguce kupovati igre sa telefona?",
            "answer": "Da, kupovinu mozete izvrsavati sa svakog uredjaja koji ima pretrazivac."
        },
        {
            "id": 3,
            "question": "Da li postoji opcija povracaja novca?",
            "answer": "Da, ukoliko od kupovine nije proslo 48 sati mozete zatraziti povracaj novca."
        },
        {
            "id": 4,
            "question": "Da li podrzavate paypal?",
            "answer": "Da, nasa platforma podrzava sve vrste placanja."
        }
    ];

    return (
        <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Redovna pitanja?</h1>
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                { faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                )) }
            </div>
        </section>
    )
}