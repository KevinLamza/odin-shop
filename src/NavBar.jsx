import styles from './NavBar.module.css';

const NavBar = ({ setCurrentPage }) => {
    function handleNavClick(e) {
        console.log(e.target.textContent);
        setCurrentPage(e.target.textContent);
    }

    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navButtons}>
                    <button onClick={(e) => handleNavClick(e)}>HOME</button>
                    <button onClick={(e) => handleNavClick(e)}>SHOP</button>
                </div>
                <button className={styles.cartButton}>CART (1)</button>
            </div>
        </>
    );
};

export default NavBar;
