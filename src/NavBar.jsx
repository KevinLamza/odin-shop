import styles from './NavBar.module.css';

const NavBar = ({ currentPage, setCurrentPage, cartItems }) => {
    function handleNavClick(e) {
        setCurrentPage(e.target.textContent);
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
                        onClick={(e) => handleNavClick(e)}
                    >
                        HOME
                    </button>
                    <button
                        className={
                            currentPage === 'SHOP'
                                ? styles.selected
                                : styles.unselected
                        }
                        onClick={(e) => handleNavClick(e)}
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
                >
                    CART ({cartItems.length})
                </button>
            </div>
        </>
    );
};

export default NavBar;
