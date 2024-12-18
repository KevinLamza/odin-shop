import PropTypes from 'prop-types';
import styles from './ItemCard.module.css';
import FetchItemBlock from './FetchItemBlock';

const ItemCard = ({
    currentItem,
    handleAddItemToCart,
    currentInput,
    handleInputChange,
    setWobble,
}) => {
    return (
        <>
            <div id="test" className={styles.itemContainer}>
                <FetchItemBlock id={currentItem} />
                <form>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={currentInput}
                        onChange={(e) => handleInputChange(e.target.value)}
                    ></input>
                    <br></br>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            setWobble(1);
                            handleAddItemToCart(currentItem, currentInput);
                        }}
                    >
                        ADD TO CART
                    </button>
                </form>
            </div>
        </>
    );
};

ItemCard.propTypes = {
    currentItem: PropTypes.number,
    handleAddItemToCart: PropTypes.func,
    currentInput: PropTypes.number,
    handleInputChange: PropTypes.func,
    setWobble: PropTypes.func,
};

export default ItemCard;
