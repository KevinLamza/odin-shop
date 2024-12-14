import styles from './ItemCard.module.css';
import FetchImage from './FetchImage';

const ItemCard = (item) => {
    // const { title, description, imageURL } = FetchImage(1);

    // useEffect(() => {
    //     spriteCanvas(imageURL);
    // }, [imageURL]);

    return (
        <>
            <div id="test" className={styles.itemContainer}>
                <FetchImage id={1} />
            </div>
        </>
    );
};

export default ItemCard;
