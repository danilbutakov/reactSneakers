import React from 'react';
import Card from '../components/Card/Card';

function Favourites({
    items,
    onAddToFavourite
}) {
    return (
        <section className='favourites'>
            <div className="favourites__head">
                <h1 className="favourites__title title">Мои закладки</h1>
            </div>
            <div className="sneakers__carts">
                {items
                    .map((item, index) => (
                        <Card
                            key={index}
                            {...item}
                            favourited={true}
                            onFavourite={onAddToFavourite}
                        />
                    ))}
            </div>
        </section>
    );
}

export default Favourites;