export const DashboardCard = ({ order }) => {
    return (
        <div className="max-w-4xl m-auto p-4 mb-6 border border-zinc-300 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-600 rounded shadow-sm">
            <div className="flex justify-between text-sm mb-4 font-semibold text-zinc-900 dark:text-zinc-200">
                <span>Broj narudžbe: {order.id}</span>
                <span>Ukupno: {order.amount_paid}€</span>
            </div>
            {order.cartList?.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-wrap justify-between p-3 mb-4 border-t border-zinc-300 dark:border-zinc-600"
                >
                    <div className="flex">
                        <img
                            className="w-28 h-auto rounded object-cover"
                            src={product.poster}
                            alt={product.name}
                        />
                        <div className="ml-4">
                            <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                                {product.name}
                            </p>
                            <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">
                                Cijena: {product.price}€
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
