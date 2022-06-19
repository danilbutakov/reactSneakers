import Card from '../components/Card/Card';
import React from 'react';

function Home({
    items,
    cartItems,
    searchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavourite }) {
    return (
        <section className="sneakers">
            <div className="sneakers__head">
                <h1 className="sneakers__title title">{searchValue ? `Поиск по запросу: " ${searchValue}"` : `Все кроссовки`}</h1>
                <div className="sneakers__search">
                    <img className="search__lupa" src="/img/search.svg" alt="Поиск" />
                    <input onChange={onChangeSearchInput} className="search__input" value={searchValue} type="text" placeholder="Поиск..." name="" id="" />
                </div>
            </div>
            <div className="sneakers__carts">
                {items
                    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                        <Card
                            key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imgUrl}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavourite={(obj) => onAddToFavourite(obj)}
                            added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                        />
                    ))}
            </div>
        </section>
    );
}

export default Home;