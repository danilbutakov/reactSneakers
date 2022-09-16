import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';

function Favourites() {

    const { favourites, onAddToFavourite } = React.useContext(AppContext);

    return (
        <section className='favourites'>
            <div className="favourites__head">
                <h1 className="favourites__title title">Мои закладки</h1>
            </div>
            <div className="sneakers__carts">
                {favourites.map((item, index) => (
                    <Card
                        key={index}
                        favourited={true}
                        onFavourite={onAddToFavourite}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}

export default Favourites;