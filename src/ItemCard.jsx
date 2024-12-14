import styles from './ItemCard.module.css';
import ultraball from './assets/ultra_ball.webp';

const ItemCard = (item) => {
    return (
        <>
            <div className={styles.itemContainer}>
                <img src={ultraball}></img>
                <div>
                    <h2>TITLE</h2>
                    <p>DESCRIPTION</p>
                    {/* <input>AMOUNT:</input> */}
                    <button>ADD TO CART</button>
                </div>
            </div>
        </>
    );
};

export default ItemCard;
