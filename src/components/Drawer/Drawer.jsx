import React from 'react';
import axios from 'axios';

import Info from '../info/Info';
import AppContext from '../../context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {

    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderID, setOrderID] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/orders', {
                items: cartItems
            });
            setOrderID(data.id);
            setIsOrderComplete(true);
            setCartItems([]);
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://62a85bbc943591102b9ff74a.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {
            alert("Ошибка при создании заказа :(");
        }
        setIsLoading(false);
    }

    return (
        <div className="overlay">
            <div className="drawwer">
                <h2 className="drawwer__title">Корзина <img onClick={onClose} src="/img/carts/remove.svg" alt="Remove" /></h2>
                {
                    items.length > 0 ? (
                        <div className="items__container">
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cart__item">
                                        <img width={70} height={70} src={obj.imgUrl} alt="Sneakers" />
                                        <div className="cart__texts">
                                            <div className="texts__name">
                                                <span>
                                                    {obj.title}
                                                </span>
                                            </div>
                                            <div className="text__price">
                                                <span>
                                                    {obj.price} руб.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cart__remove">
                                            <img
                                                onClick={() => onRemove(obj.id)}
                                                src="/img/carts/remove.svg"
                                                alt="Remove" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart__container">
                                <ul className="cart__down">
                                    <li className="down__item">
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>21 498 руб. </b>
                                    </li>
                                    <li className="down__item">
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1074 руб. </b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="cart__button-order">Оформить заказ<img width={14} height={12} src="/img/carts/arrowCartButton.svg" alt="Arrow" /> </button>
                            </div>
                        </div>
                    ) : (
                        <Info title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"} description={isOrderComplete ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} image={isOrderComplete ? "/img/empty/done.svg" : "/img/empty/empty.svg"} />
                    )
                }
            </div>
        </div>
    );
}

export default Drawer;