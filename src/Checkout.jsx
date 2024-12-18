import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import styles from './Checkout.module.css';
import CheckoutItem from './CheckoutItem';
import useFetchData from './useFetchData';

const Checkout = () => {
    const { cartItems, setCartItems } = useOutletContext();
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(totalPrice);

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
                                totalPrice={totalPrice}
                                setTotalPrice={setTotalPrice}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colSpan="2">
                                Total price:
                            </th>
                            <td>{'???'}G</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default Checkout;
