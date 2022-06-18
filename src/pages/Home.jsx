import Card from '../components/Card/Card';

function Home({
    items,
    searchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavourite }) {
    return (
        <section className="sneakers">
            <div className="sneakers__head">
                <h1 className="sneakers__title">{searchValue ? `Поиск по запросу: " ${searchValue}"` : `Все кроссовки`}</h1>
                <div className="sneakers__search">
                    <img className="search__lupa" src="/img/search.svg" alt="Поиск" />
                    <input onChange={onChangeSearchInput} className="search__input" value={searchValue} type="text" placeholder="Поиск..." name="" id="" />
                </div>
            </div>
            <div className="sneakers__carts">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imgUrl}
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavourite={(obj) => onAddToFavourite(obj)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Home;