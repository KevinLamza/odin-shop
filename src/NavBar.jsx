import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navButtons}>
                    <button>HOME</button>
                    <button>SHOP</button>
                </div>
                <button className={styles.cartButton}>CART (1)</button>
            </div>
        </>
    );
};

export default NavBar;
