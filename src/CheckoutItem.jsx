import PropTypes from 'prop-types';
import useFetchData from './useFetchData';
import styles from './CheckoutItem.module.css';

const CheckoutItem = ({ item, cartItems, setCartItems }) => {
    const { title, price } = useFetchData(item['id']);
    const amount = item['amount'];

    function handleButtonClick() {
        console.log('I was deleted');
        const newCart = removeByAttribute(cartItems, 'id', item['id']);
        console.log(newCart);
        setCartItems(newCart);
    }

    function removeByAttribute(array, attr, value) {
        let arr = [...array]; // Create a shallow copy of the array
        let i = arr.length - 1; // Initialize i to the last index of the array
        while (i >= 0) {
            // Keep looping as long as i is >= 0
            if (
                arr[i] && // Check if the element at index i exists
                Object.prototype.hasOwnProperty.call(arr[i], attr) &&
                // arr[i].hasOwnProperty(attr) && // Check if the element has the specified attribute
                arguments.length > 2 && // Ensure there are at least 3 arguments passed
                arr[i][attr] === value // Check if the value of the attribute matches the specified value
            ) {
                arr.splice(i, 1); // Remove the element at index i if the conditions are met
            }
            i--; // Decrement i after checking
        }
        return arr; // Return the modified array
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

CheckoutItem.propTypes = {
    setCartItems: PropTypes.func,
    cartItems: PropTypes.arrayOf(PropTypes.object),
    item: PropTypes.object,
};

export default CheckoutItem;
