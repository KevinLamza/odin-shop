import styles from './ItemCard.module.css';
import FetchImage from './FetchImage';

const ItemCard = ({ currentItem }) => {
    // const { title, description, imageURL } = FetchImage(1);

    // useEffect(() => {
    //     spriteCanvas(imageURL);
    // }, [imageURL]);

    console.log(currentItem);

    return (
        <>
            <div id="test" className={styles.itemContainer}>
                <FetchImage id={currentItem} />
            </div>
        </>
    );
};

export default ItemCard;
