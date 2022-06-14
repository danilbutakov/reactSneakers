import React from 'react';

function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className="sneakers__cart">
            <div className="cart__cross">
                <button className="cross__like" onClick={props.onFavourite}>
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
                    <button className="add" onClick={onClickPlus}>
                        <img src={isAdded ? "/img/carts/addGreen.svg" : "img/carts/add.svg"} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;