import styles from './ItemCard.module.css';
import ultraball from './assets/ultra_ball.webp';

const ItemCard = (item) => {
    // Get canvas context
    const ctx = document.getElementById('game').getContext('2d');

    // Load image
    const image = new Image();
    image.onload = () => {
        // Draw the image into the canvas
        ctx.drawImage(image, 0, 0);
    };
    image.src = ultraball;
    return (
        <>
            <div className={styles.itemContainer}>
                <canvas id="game" width="24" height="24">
                    A cat
                </canvas>
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
