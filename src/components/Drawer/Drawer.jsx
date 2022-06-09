function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawwer">
                <h2 className="drawwer__title">Корзина <img src="/img/carts/remove.svg" alt="" /></h2>
                <div className="items">
                    <div className="cart">
                        <div className="cart__item">
                            <img width={70} height={70} src="/img/carts/1.jpg" alt="" />
                            <div className="cart__texts">
                                <div className="texts__name">
                                    <span>
                                        Мужские Кроссовки Nike Air Max 270
                                    </span>
                                </div>
                                <div className="text__price">
                                    <span>
                                        12 999 руб.
                                    </span>
                                </div>
                            </div>
                            <div className="cart__remove">
                                <img src="/img/carts/remove.svg" alt="" />
                            </div>
                        </div>
                        <div className="cart__item">
                            <img width={70} height={70} src="/img/carts/1.jpg" alt="" />
                            <div className="cart__texts">
                                <div className="texts__name">
                                    <span>
                                        Мужские Кроссовки Nike Air Max 270
                                    </span>
                                </div>
                                <div className="text__price">
                                    <span>
                                        12 999 руб.
                                    </span>
                                </div>
                            </div>
                            <div className="cart__remove">
                                <img src="/img/carts/remove.svg" alt="" />
                            </div>
                        </div>
                        <div className="cart__item">
                            <img width={70} height={70} src="/img/carts/1.jpg" alt="" />
                            <div className="cart__texts">
                                <div className="texts__name">
                                    <span>
                                        Мужские Кроссовки Nike Air Max 270
                                    </span>
                                </div>
                                <div className="text__price">
                                    <span>
                                        12 999 руб.
                                    </span>
                                </div>
                            </div>
                            <div className="cart__remove">
                                <img src="/img/carts/remove.svg" alt="" />
                            </div>
                        </div>
                        <div className="cart__item">
                            <img width={70} height={70} src="/img/carts/1.jpg" alt="" />
                            <div className="cart__texts">
                                <div className="texts__name">
                                    <span>
                                        Мужские Кроссовки Nike Air Max 270
                                    </span>
                                </div>
                                <div className="text__price">
                                    <span>
                                        12 999 руб.
                                    </span>
                                </div>
                            </div>
                            <div className="cart__remove">
                                <img src="/img/carts/remove.svg" alt="" />
                            </div>
                        </div>

                        <div className="cart__item">
                            <img width={70} height={70} src="/img/carts/1.jpg" alt="" />
                            <div className="cart__texts">
                                <div className="texts__name">
                                    <span>
                                        Мужские Кроссовки Nike Air Max 270
                                    </span>
                                </div>
                                <div className="text__price">
                                    <span>
                                        12 999 руб.
                                    </span>
                                </div>
                            </div>
                            <div className="cart__remove">
                                <img src="/img/carts/remove.svg" alt="" />
                            </div>
                        </div>
                        <div className="cart__item">
                            <img width={70} height={70} src="/img/carts/1.jpg" alt="" />
                            <div className="cart__texts">
                                <div className="texts__name">
                                    <span>
                                        Мужские Кроссовки Nike Air Max 270
                                    </span>
                                </div>
                                <div className="text__price">
                                    <span>
                                        12 999 руб.
                                    </span>
                                </div>
                            </div>
                            <div className="cart__remove">
                                <img src="/img/carts/remove.svg" alt="" />
                            </div>
                        </div><div className="cart__item">
                            <img width={70} height={70} src="/img/carts/1.jpg" alt="" />
                            <div className="cart__texts">
                                <div className="texts__name">
                                    <span>
                                        Мужские Кроссовки Nike Air Max 270
                                    </span>
                                </div>
                                <div className="text__price">
                                    <span>
                                        12 999 руб.
                                    </span>
                                </div>
                            </div>
                            <div className="cart__remove">
                                <img src="/img/carts/remove.svg" alt="" />
                            </div>
                        </div>
                        <div className="cart__item">
                            <img width={70} height={70} src="/img/carts/4.jpg" alt="" />
                            <div className="cart__texts">
                                <div className="texts__name">
                                    <span>
                                        Мужские Кроссовки Nike Air Max 270
                                    </span>
                                </div>
                                <div className="text__price">
                                    <span>
                                        12 999 руб.
                                    </span>
                                </div>
                            </div>
                            <div className="cart__remove">
                                <img src="/img/carts/remove.svg" alt="" />
                            </div>
                        </div>
                    </div>
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
                    <a href="/"><button className="cart__button-order">Оформить заказ <img width={14} height={12} src="/img/carts/arrowCartButton.svg" alt="" /> </button></a>
                </div>
            </div>
        </div>
    );
}

export default Drawer;