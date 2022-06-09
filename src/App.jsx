import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

const arr = [
    { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: "/img/carts/1.jpg" },
    { title: 'Мужские Кроссовки Nike Air Max 270', price: 10499, imgUrl: "/img/carts/2.jpg" },
    { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 13499, imgUrl: "/img/carts/3.jpg" },
    { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8499, imgUrl: "/img/carts/4.jpg" }
];

function App() {
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
                        {arr.map((obj) => (
                            <Card
                                title={obj.title}
                                price={obj.price}
                                imageUrl={obj.imgUrl}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
