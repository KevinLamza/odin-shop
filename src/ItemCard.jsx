import styles from './ItemCard.module.css';
import FetchImage from './FetchImage';

const ItemCard = ({ currentItem, handleAddItemToCart }) => {
    return (
        <>
            <div id="test" className={styles.itemContainer}>
                <FetchImage id={currentItem} />
                <form>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value="1"
                    ></input>
                    <br></br>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleAddItemToCart(currentItem, '1');
                        }}
                    >
                        ADD TO CART
                    </button>
                </form>
            </div>
        </>
    );
};

export default ItemCard;
