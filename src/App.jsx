import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';


function App() {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    // const [removeCart, setremoveCart] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };

    // const onClickRemoveCart = (obj) => {
    //     setremoveCart((prev) => [...prev, obj]);
    // };

    React.useEffect(() => {
        fetch('https://62a85bbc943591102b9ff74a.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    return (
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
            <Header onCLickCart={() => setCartOpened(true)} />
            <div className="border__bottom"></div>
            <main className="page">
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
                                onFavourite={() => console.log("Add To Favourite")}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
