import React from 'react';

import Card from '../components/Card/Card';

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading
}) {

    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={isLoading}
                {...item}
            />
        ));
    };

    return (
        <section className="sneakers">
            <div className="sneakers__head">
                <h1 className="sneakers__title title">{searchValue ? `Поиск по запросу: " ${searchValue}"` : `Все кроссовки`}</h1>
                <div className="sneakers__search">
                    <img onClick={() => setSearchValue('')} className="search__lupa" src="img/search.svg" alt="Поиск" />
                    <input onChange={onChangeSearchInput} className="search__input" value={searchValue} type="text" placeholder="Поиск..." name="" id="" />
                </div>
            </div>
            <div className="sneakers__carts">{renderItems()}</div>
        </section>
    );
}

export default Home;