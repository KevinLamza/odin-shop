import { useOutletContext } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import List from './List';
import ItemCard from './ItemCard';
import styles from './Shop.module.css';

const Shop = () => {
    const {
        handleListClick,
        items,
        currentItem,
        handleAddItemToCart,
        currentInput,
        handleInputChange,
    } = useOutletContext();
    console.log(currentItem);
    // const { id } = useParams();
    return (
        <div className={styles.app}>
            <List
                handleListClick={handleListClick}
                items={items}
                currentItem={currentItem}
            />
            <ItemCard
                currentItem={currentItem}
                handleAddItemToCart={handleAddItemToCart}
                currentInput={currentInput}
                handleInputChange={handleInputChange}
            />
        </div>
    );
};

export default Shop;
