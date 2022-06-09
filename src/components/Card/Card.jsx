function Card(props) {
    return (
        <div className="sneakers__cart">
            <div className="cart__cross">
                <button className="cross__like">
                    <img src="/img/carts/unLike.svg" alt="" />
                </button>
                <img width={133} height={120} src={props.imageUrl} alt="" />
            </div>
            <div className="cart__text">
                <span>{props.title}</span>
            </div>
            <div className="cart__info">
                <div className="info__price">
                    <div className="info__text">
                        <span>Цена:</span>
                    </div>
                    <div className="info__num">
                        <span>{props.price} руб.</span>
                    </div>
                </div>
                <div className="info__add">
                    <button className="add">
                        <img src="/img/carts/add.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;