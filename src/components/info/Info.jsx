import React from 'react';

import AppContext from '../../context';

const Info = ({ title, description, image }) => {

    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="cart__clear">
            <img src={image} alt="empty" className="clear__img" />
            <h2 className="clear__title">{title}</h2>
            <p width={120} className="clear__text">{description}</p>
            <button onClick={() => setCartOpened(false)} className="clear__btn">
                <img width={14} height={12} src="/img/carts/arrowCartButton.svg" alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;