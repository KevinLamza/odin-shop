import { useOutletContext } from 'react-router-dom';
import { useState, use } from 'react';
import styles from './Checkout.module.css';
import CheckoutItem from './CheckoutItem';
import TotalPrice from './TotalPrice';

const Checkout = () => {
    const { cartItems, setCartItems } = useOutletContext();
    const [prices, setPrices] = useState([]); // State to store fetched prices
    const [loading, setLoading] = useState(true); // Loading state for prices
    const [error, setError] = useState(null); // Error state for fetching prices

    // Callback to handle fetched prices from TotalPrice component
    const handleFetchedPrices = (fetchedPrices) => {
        setPrices(fetchedPrices); // Store the fetched prices
        setLoading(false); // Once fetched, stop the loading state
    };

    // Calculate total price once prices are fetched
    const total = () => {
        if (prices.length === 0) return 0; // If prices are empty, return 0

        // Calculate total by multiplying price * amount for each cart item
        return cartItems.reduce((totalPrice, item, index) => {
            return totalPrice + item.amount * prices[index];
        }, 0);
    };

    return (
        <>
            <div className={styles.checkout}>
                <h2>CHECKOUT</h2>

                <table>
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <CheckoutItem
                                key={item['id']}
                                item={item}
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colSpan="2">
                                Total price:
                            </th>
                            <td>
                                <TotalPrice
                                    ids={cartItems.map((item) => item.id)}
                                    onFetchedData={handleFetchedPrices}
                                />
                                <strong>
                                    {loading
                                        ? 'Loading...'
                                        : `$${total().toFixed(2)}`}
                                </strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default Checkout;
