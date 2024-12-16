import styles from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ currentPage, setCurrentPage, cartItems, setCurrentItem }) => {
    const navigate = useNavigate();

    function handleNavClick(path) {
        // setCurrentPage(e.target.textContent);
        if (path === '/') setCurrentPage('HOME');
        else if (path === '/shop/1') {
            setCurrentItem('1');
            setCurrentPage('SHOP');
        } else if (path === '/checkout') setCurrentPage('CHECKOUT');
        navigate(path);
    }

    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navButtons}>
                    <button
                        className={
                            currentPage === 'HOME'
                                ? styles.selected
                                : styles.unselected
                        }
                        onClick={() => handleNavClick('/')}
                    >
                        HOME
                    </button>
                    <button
                        className={
                            currentPage === 'SHOP'
                                ? styles.selected
                                : styles.unselected
                        }
                        onClick={() => handleNavClick('/shop/1')}
                    >
                        SHOP
                    </button>
                </div>
                <button
                    className={
                        currentPage === 'CART'
                            ? styles.cartButton + ' ' + styles.selected
                            : styles.cartButton
                    }
                    onClick={() => handleNavClick('/checkout')}
                >
                    CART ({cartItems.length})
                </button>
            </div>
        </>
    );
};

export default NavBar;
