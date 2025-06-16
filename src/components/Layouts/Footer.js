import {Link} from "react-router-dom";


export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black w-full rounded-none shadow-none m-0">
            <div className="w-full max-w-screen-xl mx-auto px-4 pt-2 pb-4">
                <hr className="mt-2 mb-4 border-black dark:border-white" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
                  © 2025 <Link to="/" className="hover:underline">GameBuy™</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}
