import React from 'react';
import axios from 'axios';
import {
    Route,
    Routes
} from "react-router-dom";
import AppContext from './context';

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
    const [isLoading, setIsLoading] = React.useState(true);

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const onAddToCart = (obj) => {
        console.log(obj);

        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/cart/${obj.id}`);
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        } else {
            axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/cart', obj);
            setCartItems((prev) => [...prev, obj]);
        }
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id));
    }

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/cart/${id}`);
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        } catch (error) {
            alert('Ошибка при удалении из корзины');
            console.error(error);
        }
    };

    const onAddToFavourite = async (obj) => {
        try {
            if (favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/favourites/${obj.id}`);
                setFavourites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                const { data } = await axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/favourites', obj);
                setFavourites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в фавориты');
        }
    };


    React.useEffect(() => {
        async function fetchData() {
            // TODO: Сделать try catch + Promise.all
            const cartResponse = await axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/cart');
            const favoritesResponse = await axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/favourites');
            const itemsResponse = await axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/items');

            setIsLoading(false);
            setCartItems(cartResponse.data);
            setFavourites(favoritesResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favourites,
            isItemAdded,
            onAddToFavourite,
            setCartOpened,
            setCartItems
        }}>
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
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavourite}
                                onAddToCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        } />
                        <Route path="/favourites" element={
                            <Favourites />
                        } />
                    </Routes>
                </main>
            </div >
        </AppContext.Provider>
    );
}

export default App;
