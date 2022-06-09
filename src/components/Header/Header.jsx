function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <a href="/"><img width={40} height={40} src="/img/logo.png" /></a>
                <div className="header__info">
                    <a href="/"><h3 className="header__title">React sneakers</h3></a>
                    <p className="header__subtitle">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="header__right">
                <li className="right__cart">
                    <img width={18} height={18} src="/img/card.svg" />
                    <span className="cart__text">1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/like.svg" />
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;