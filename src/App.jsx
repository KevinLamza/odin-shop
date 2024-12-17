import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from './NavBar';
import { items } from './items';

const App = () => {
    const [currentPage, setCurrentPage] = useState('HOME');
    const [currentItem, setCurrentItem] = useState('1');
    const [cartItems, setCartItems] = useState([{ 1: '5' }, { 2: '4' }]);
    const [currentInput, setCurrentInput] = useState('1');
    const { id } = useParams();
    const navigate = useNavigate();

    // check if the dynamic segment is part of the items object
    // (and therefore a valid segment),
    // else set item to 1 and navigate to that path
    useEffect(() => {
        if (Object.prototype.hasOwnProperty.call(items, id)) {
            setCurrentItem(id);
        } else if (
            !Object.prototype.hasOwnProperty.call(items, id) &&
            typeof id !== 'undefined'
        ) {
            setCurrentItem('1');
            navigate('/shop/1');
        }
    }, [id, navigate]);

    function handleListClick(id) {
        setCurrentItem(id);
        setCurrentInput('1');
        const path = '/shop/' + id;
        navigate(path);
    }

    function handleAddItemToCart(id, amount) {
        function compare(item, num) {
            return Object.keys(item).toString() === num;
        }
        const index = cartItems.findIndex((element) => compare(element, id));
        if (index === -1) {
            setCartItems([...cartItems, { [id]: amount }]);
        } else {
            let updatedCart = [...cartItems];
            updatedCart[index] = {
                ...updatedCart[index],
                [id]: (
                    Number(updatedCart[index][id]) + Number(amount)
                ).toString(),
            };
            setCartItems(updatedCart);
        }
    }

    function handleInputChange(value) {
        setCurrentInput(value);
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
                        setCurrentItem={setCurrentItem}
                    />
                    <Outlet
                        context={{
                            handleListClick,
                            items,
                            currentItem,
                            cartItems,
                            handleAddItemToCart,
                            currentInput,
                            handleInputChange,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default App;
