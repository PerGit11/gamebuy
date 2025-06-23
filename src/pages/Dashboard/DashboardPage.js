import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { useEffect, useState } from "react";
import {useTitle} from "../../hooks/useTitle";

export const DashboardPage = () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const gbid = JSON.parse(sessionStorage.getItem("gbid"));
    const [orders, setOrders] = useState([]);
    useTitle("Kontrolna tabla");

    useEffect(() => {
        if (!token) return;
        (async () => {
            try {
                const res = await fetch(`http://localhost:8000/660/orders?user.id=${gbid}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();
                setOrders(data);
            } catch {
                setOrders([]);
            }
        })();
    }, [token]);

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                    Moja tabla
                </p>
            </section>
            <section>
                {orders.length > 0 && orders.map((order) => (
                    <DashboardCard key={order.id} order={order} />
                ))}
            </section>
            <section>
                {orders.length === 0 && <DashboardEmpty />}
            </section>
        </main>
    );
};
