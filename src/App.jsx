import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';


function App() {

    const [items, setItems] = React.useState([]);

    fetch('https://62a85bbc943591102b9ff74a.mockapi.io/items')
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setItems(json);
        });

    return (
        <div className="wrapper">
            <Drawer />
            <Header />
            <div className="border__bottom"></div>
            <main className="page">
                <section className="sneakers">
                    <div className="sneakers__head">
                        <h1 className="sneakers__title">Все кроссовки</h1>
                        <div className="sneakers__search">
                            <img className="search__lupa" src="/img/search.svg" alt="Поиск" />
                            <input className="search__input" type="text" placeholder="Поиск..." name="" id="" />
                        </div>
                    </div>
                    <div className="sneakers__carts">
                        {items.map((obj) => (
                            <Card
                                title={obj.title}
                                price={obj.price}
                                imageUrl={obj.imgUrl}
                                onPlus={() => console.log("Add Cart")}
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
