import React from 'react';
import axios from 'axios';

import Info from '../info/Info';
import {useCart} from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {

    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://62a85bbc943591102b9ff74a.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {
            alert('Ошибка при создании заказа :(');
        }
        setIsLoading(false);
    };

    return (
        <div className={`overlay ${opened ? 'overlayVisible' : ''}`}>
            <div className="drawwer">
                <h2 className="drawwer__title">Корзина <img onClick={onClose} src="/img/carts/remove.svg" alt="Remove" /></h2>
                {
                    items.length > 0 ? (
                        <div className="items__container">
                            <div className="items">
                                {items.map((obj, index) => (
                                    <div key={index} className="cart__item">
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
                                        <b>{totalPrice} руб. </b>
                                    </li>
                                    <li className="down__item">
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>{Math.round(totalPrice * 0.05)} руб. </b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="cart__button-order">Оформить заказ<img width={14} height={12} src="/img/carts/arrowCartButton.svg" alt="Arrow" /> </button>
                            </div>
                        </div>
                    ) : (
                        <Info title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"} description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} image={isOrderComplete ? "/img/empty/done.svg" : "/img/empty/empty.svg"} />
                    )
                }
            </div>
        </div>
    );
}

export default Drawer;