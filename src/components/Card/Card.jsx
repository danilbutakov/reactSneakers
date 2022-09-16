import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

function Card({
    id,
    title,
    imgUrl,
    price,
    onFavourite,
    onPlus,
    favourited = false,
    loading = false,
}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavourite, setIsFavourite] = React.useState(favourited);

    console.log(title, isItemAdded(id));

    const onClickPlus = () => {
        onPlus({ id, title, imgUrl, price });
    };

    const onClickFavourite = () => {
        onFavourite({ id, title, imgUrl, price });
        setIsFavourite(!isFavourite);
    };

    return (
        <div className="sneakers__cart">
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            ) : (
                <>
                    <div className="cart__cross">
                        <button className="cross__like" onClick={onClickFavourite}>
                            <img src={isFavourite ? "/img/carts/likeRed.svg" : "img/carts/unLike.svg"} alt="unLike" />
                        </button>
                        <img width={133} height={120} src={imgUrl} alt="Sneakers" />
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
                                <img src={isItemAdded(id) ? "/img/carts/addGreen.svg" : "img/carts/add.svg"} alt="Add" />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;