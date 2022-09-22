import React from 'react';
import Card from '../components/Card/Card';
import axios from "axios";


function Orders() {

    const [isLoading, setIsLoading] = React.useState(true);
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        async function fetchOrders() {
            try {
                const { data } = await axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/orders');
                setOrders(data.map((obj) => obj.items).flat());
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказов');
                console.error(error);
            }
        }
        fetchOrders();
    }, []);
    return (
        <section className='favourites'>
            <div className="favourites__head">
                <h1 className="favourites__title title">Мои заказы</h1>
            </div>
            <div className="sneakers__carts">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        loading={isLoading}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}

export default Orders;