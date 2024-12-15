import styles from './NavBar.module.css';

const NavBar = ({ currentPage, setCurrentPage }) => {
    function handleNavClick(e) {
        console.log(e.target.textContent);
        setCurrentPage(e.target.textContent);
    }

    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navButtons}>
                    <button
                        className={
                            currentPage === 'HOME' ? styles.selected : null
                        }
                        onClick={(e) => handleNavClick(e)}
                    >
                        HOME
                    </button>
                    <button
                        className={
                            currentPage === 'SHOP' ? styles.selected : null
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
                    CART (1)
                </button>
            </div>
        </>
    );
};

export default NavBar;
