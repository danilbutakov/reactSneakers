import React from 'react';

function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawwer">
                <h2 className="drawwer__title">Корзина <img onClick={onClose} src="/img/carts/remove.svg" alt="Remove" /></h2>
                {
                    items.length > 0 ? (
                        <div className="items__container">
                            <div className="items">
                                {items.map((obj) => (
                                    <div className="cart__item">
                                        <img width={70} height={70} src={obj.imageUrl} alt="Sneakers" />
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
                                <button className="cart__button-order">Оформить заказ <img width={14} height={12} src="/img/carts/arrowCartButton.svg" alt="Arrow" /> </button>
                            </div>
                        </div>
                    ) : (
                        <div className="cart__clear">
                            <img src="/img/empty/empty.svg" alt="empty" className="clear__img" />
                            <h2 className="clear__title">Корзина пустая</h2>
                            <p width={120} height={120} className="clear__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className="clear__btn">
                                <img width={14} height={12} src="/img/carts/arrowCartButton.svg" alt="Arrow" />
                                Оформить заказ
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Drawer;