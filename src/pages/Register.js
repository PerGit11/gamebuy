import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useTitle} from "../hooks/useTitle";

export const Register = () => {
    const navigate = useNavigate();
    useTitle("Registracija");

    async function handleRegister(event){
        event.preventDefault();
        const authDetail = {
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value
        }
        const requestOptions = {
            method: "POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(authDetail)
        }
        const response = await fetch("http://localhost:8000/register", requestOptions);
        const data = await response.json();
        if (data.accessToken) {
            toast.success("Nalog je uspešno registrovan!");
            navigate("/products");
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("gbid", JSON.stringify(data.user.id));
            sessionStorage.setItem("gbname", JSON.stringify(data.user.name));
        } else {
            if(data === "Email already exists"){
                toast.error("Nalog sa tim email vec postoji!");
            }
            else{
                toast.error(data);
            }
        }
    }

    return(
    <main>
        <section>
            <p className="text-2xl text-center font-semibold dark:text-white my-10 underline underline-offset-8">
                Registracija
            </p>
        </section>
        <div className={"max-w-lg rounded-xl shadow-2xl p-10 m-auto "}>
        <form onSubmit={handleRegister}>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Ime</label>
                <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                    placeholder="Unesite Vase Ime"
                    required
                    autoComplete="off"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">E-mail</label>
                <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                    placeholder="Unesite Vas e-mail"
                    required
                    autoComplete="off"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Sifra</label>
                <input
                    type="password"
                    id="password"
                    className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                    required
                    minLength={7}
                />
            </div>
            <button
                type="submit"
                className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
                Registruj se
            </button>
            <Link to={"/login"}><p className={"text-white mt-5 text-center cursor-pointer text-sm"}>Vec imate nalog? Ulogujte se.</p></Link>
        </form>
        </div>
    </main>
    )
}
