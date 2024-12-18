import { useOutletContext } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import List from './List';
import ItemCard from './ItemCard';
import styles from './Shop.module.css';

const Shop = () => {
    const {
        handleListClick,
        validIds,
        currentItem,
        handleAddItemToCart,
        currentInput,
        handleInputChange,
        setWobble,
    } = useOutletContext();
    return (
        <div className={styles.app}>
            <List
                handleListClick={handleListClick}
                validIds={validIds}
                currentItem={currentItem}
            />
            <ItemCard
                currentItem={currentItem}
                handleAddItemToCart={handleAddItemToCart}
                currentInput={currentInput}
                handleInputChange={handleInputChange}
                setWobble={setWobble}
            />
        </div>
    );
};

export default Shop;
