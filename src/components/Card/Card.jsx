import React from 'react';

function Card({ onPlus, onFavourite, title, price, imageUrl }) {

    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onPlus({ title, price, imageUrl });
    };

    const onClickFavourite = () => {
        setIsFavourite(!isFavourite);
        onFavourite({ title, imageUrl, price });
    };


    return (
        <div className="sneakers__cart">
            <div className="cart__cross">
                <button className="cross__like" onClick={onClickFavourite}>
                    <img src={isFavourite ? "/img/carts/likeRed.svg" : "img/carts/unLike.svg"} alt="unLike" />
                </button>
                <img width={133} height={120} src={imageUrl} alt="Sneakers" />
            </div>
            <div className="cart__text">
                <span>{title}</span>
            </div>
            <div className="cart__info">
                <div className="info__price">
                    <div className="info__text">
                        <span>Цена:</span>
                    </div>
                    <div className="info__num">
                        <span>{price} руб.</span>
                    </div>
                </div>
                <div className="info__add">
                    <button className="add" onClick={onClickPlus}>
                        <img src={isAdded ? "/img/carts/addGreen.svg" : "img/carts/add.svg"} alt="Add" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;