import { Link } from 'react-router-dom';
import React from 'react';
// import AppContext from '../../context';

function Header(props) {

    // const { cartItems } = React.useContext(AppContext);
    // console.log(cartItems.reduce((sum, obj) => obj.price + sum));

    return (
        <header className="header">
            <Link to={"/"}>
                <div className="header__left">
                    <img width={40} height={40} src="/img/logo.png" alt='logo' />
                    <div className="header__info">
                        <a href="/"><h3 className="header__title">React sneakers</h3></a>
                        <p className="header__subtitle">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="header__right">
                <li onClick={props.onCLickCart} className="right__cart">
                    <img width={18} height={18} src="/img/card.svg" alt='card' />
                    <span className="cart__text">{ }</span>
                </li>
                <li>
                    <Link to={"/favourites"}>
                        < img width={18} height={18} src="/img/like.svg" alt='like' />
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt='user' />
                </li>
            </ul>
        </header >
    );
}

export default Header;