export const Register = () => (
    <main>
        <section>
            <p className="text-2xl text-center font-semibold dark:text-white my-10 underline underline-offset-8">
                Register
            </p>
        </section>
        <form>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your name</label>
                <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                    placeholder="Shubham Sarda"
                    required
                    autoComplete="off"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your email</label>
                <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                    placeholder="shubham@example.com"
                    required
                    autoComplete="off"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">Your password</label>
                <input
                    type="password"
                    id="password"
                    className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                    required
                    minLength={7}
                />
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register
            </button>
        </form>
    </main>
);
