import { useOutletContext } from 'react-router-dom';
import styles from './Checkout.module.css';
import CheckoutItem from './CheckoutItem';

const Checkout = () => {
    const { items, cartItems } = useOutletContext();
    console.log(cartItems);
    return (
        <>
            <div className={styles.checkout}>
                <h2>CHECKOUT</h2>
                {cartItems.map((item) => (
                    <CheckoutItem item={item} items={items} />
                ))}
            </div>
        </>
    );
};

export default Checkout;
