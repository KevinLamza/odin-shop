// App.jsx

import { useState } from 'react';
import styles from './App.module.css';
import NavBar from './NavBar';
import List from './List';
import { items } from './items';
import ItemCard from './ItemCard';

const App = () => {
    const [currentPage, setCurrentPage] = useState('HOME');
    const [currentItem, setCurrentItem] = useState('1');
    const [cartItems, setCartItems] = useState([{ 1: '5' }, { 2: '4' }]);

    function handleListClick(id) {
        setCurrentItem(id);
    }

    function handleAddItemToCart(id, amount) {
        function compare(item, num) {
            return Object.keys(item).toString() === num;
        }
        if (cartItems.findIndex((element) => compare(element, id)) === -1) {
            setCartItems([...cartItems, { [id]: amount }]);
        } else {
            console.log('nope');
        }
    }

    return (
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>WELCOME TO THE POKé MART</h1>
                        <p>PRESS ANY KEY TO CONTINUE</p>
                    </div>
                    <NavBar
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        cartItems={cartItems}
                    />
                    <div
                        className={
                            currentPage === 'HOME'
                                ? styles.app + ' ' + styles.hidden
                                : styles.app
                        }
                    >
                        <List
                            handleListClick={handleListClick}
                            items={items}
                            currentItem={currentItem}
                        />
                        <ItemCard
                            currentItem={currentItem}
                            handleAddItemToCart={handleAddItemToCart}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
