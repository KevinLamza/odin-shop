import { useEffect } from 'react';
import useFetchData from './useFetchData';
import styles from './CheckoutItem.module.css';

const CheckoutItem = ({
    item,
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
}) => {
    const { title, price } = useFetchData(item['id']);
    const amount = item['amount'];

    function handleButtonClick() {
        console.log('I was deleted');
        const newCart = removeByAttribute(cartItems, 'id', item['id']);
        setCartItems(newCart);
    }

    function removeByAttribute(array, attr, value) {
        let arr = [...array];
        let i = arr.length;
        while (i--) {
            if (
                arr[i] &&
                arr[i].hasOwnProperty(attr) &&
                arguments.length > 2 &&
                arr[i][attr] === value
            ) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }

    return (
        <>
            <tr>
                <th scope="row">{title}</th>
                <td>{amount}</td>
                <td>{amount * price}G</td>
                <td>
                    <button
                        className={styles.checkoutButton}
                        onClick={() => handleButtonClick()}
                    >
                        DELETE
                    </button>
                </td>
            </tr>
        </>
    );
};

export default CheckoutItem;
