import { useOutletContext } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import List from './List';
import ItemCard from './ItemCard';

const Shop = () => {
    const {
        handleListClick,
        items,
        currentItem,
        handleAddItemToCart,
        currentInput,
        handleInputChange,
    } = useOutletContext();
    // const { id } = useParams();
    return (
        <>
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
        </>
    );
};

export default Shop;
