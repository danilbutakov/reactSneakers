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


function App() {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // async function fetchData() {
        //     // TODO: Сделать try catch + Promise.all
        //     const cartResponse = await axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/cart');
        //     const favoritesResponse = await axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/favourites');
        //     const itemsResponse = await axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/items');

        setIsLoading(false);
        //     setCartItems(cartResponse.data);
        //     setFavorites(favoritesResponse.data);
        //     setItems(itemsResponse.data);
        // }
        axios.get('https://62a85bbc943591102b9ff74a.mockapi.io/items').then((res) => {
            setItems(res.data);
        })

        // fetchData();
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/cart:id', obj);
        setCartItems((prev) => [...prev, obj]);
        console.log(obj);
    };

    // if (cartItems.find((itemObj) => Number(itemObj.id) === Number(obj.id))) {
    //     axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/cart/${obj.id}`);
    //     setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    // } else {
    //     axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/cart', obj.id);
    //     setCartItems((prev) => [...prev, obj]);
    //     console.log(obj);
    // }

    const onRemoveItem = (id) => {
        axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavorite = async (obj) => {
        console.log(obj);
        try {
            if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://62a85bbc943591102b9ff74a.mockapi.io/favourites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                const { data } = await axios.post('https://62a85bbc943591102b9ff74a.mockapi.io/favourites', obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в фавориты');
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id));
    }

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
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        } />
                        <Route path="/favourites" element={
                            <Favorites />
                        } />
                    </Routes>
                </main>
            </div >
        </AppContext.Provider>
    );
}

export default App;
