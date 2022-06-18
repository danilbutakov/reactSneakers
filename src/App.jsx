import React from 'react';
import axios from 'axios';
import {
    Route,
    Routes
} from "react-router-dom"

import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';


function App() {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favourites, setFavourites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const onAddToCart = (obj) => {
        axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavourite = async (obj) => {
        try {
            if (favourites.find((favObj) => favObj.id == obj.id)) {
                axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/favourites/${obj.id}`);
            } else {
                const { data } = await axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/favourites', obj);
                setFavourites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в закладки');
        }
    };


    React.useEffect(() => {
        axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/items').then((res) => {
            setItems(res.data);
        });
        axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/cart').then((res) => {
            setCartItems(res.data);
        });
        axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/favourites').then((res) => {
            setFavourites(res.data);
        });
    }, []);

    return (
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
            <Header onCLickCart={() => setCartOpened(true)} />

            <div className="border__bottom"></div>
            <main className="page">
                <Routes>
                    <Route path="/" element={
                        <Home
                            items={items}
                            cartItems={cartItems}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onAddToCart={onAddToCart
                            }
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavourite={onAddToFavourite
                            }
                        />
                    } />
                    <Route path="/favourites" element={
                        <Favourites
                            items={favourites}
                            onAddToFavourite={onAddToFavourite}
                        />
                    } />
                </Routes>
            </main>
        </div >
    );
}

export default App;
