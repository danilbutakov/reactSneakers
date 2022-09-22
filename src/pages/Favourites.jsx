import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';

function Favorites() {

    const { favorites, onAddToFavorite, onAddToCart } = React.useContext(AppContext);

    return (
        <section className='favourites'>
            <div className="favourites__head">
                <h1 className="favourites__title title">Мои закладки</h1>
            </div>
            <div className="sneakers__carts">
                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        onPlus={(obj) => onAddToCart(obj)}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}

export default Favorites;