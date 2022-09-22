import React from 'react';
import axios from 'axios';
import {
    Route,
    Routes
} from "react-router-dom";
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favourites';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Orders from "./pages/Orders";

function App() {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                    axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/cart'),
                    axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/favourites'),
                    axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/items'),
                ]);

                setIsLoading(false);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Ошибка при запросе данных ;(');
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
            if (findItem) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/cart/${findItem.id}`);
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/cart', obj);
                setCartItems((prev) => prev.map(item => {
                    if (item.parentId === data.parentId) {
                        return {
                            ...item,
                            id: data.id
                        };
                    }
                    return item;
                }));
            }
        } catch (error) {
            alert('Ошибка при добавлении или удалении из корзины');
            console.error(error);
        }
    };

    const onRemoveItem = async (id) => {
        try {
            await axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/cart/${id}`);
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        } catch (error) {
            alert('Ошибка при удалении из корзины');
            console.error(error);
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/favourites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                const { data } = await axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/favourites', obj,);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в фавориты');
            console.error(error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favorites,
            isItemAdded,
            onAddToFavorite,
            onAddToCart,
            setCartOpened,
            setCartItems
        }}>
            <div className="wrapper">
                <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened} />
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
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        } />
                        <Route path="/favourites" element={
                            <Favorites />
                        } />
                        <Route path="/orders" element={
                            <Orders />
                        } />
                    </Routes>
                </main>
            </div >
        </AppContext.Provider>
    );
}

export default App;
