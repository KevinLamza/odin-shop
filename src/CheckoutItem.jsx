const CheckoutItem = ({ item, items }) => {
    const key = Object.keys(item)[0];
    const value = Object.values(item)[0];
    console.log(value);
    return (
        <>
            <h3>
                {items[key]} x{value}
            </h3>
        </>
    );
};

export default CheckoutItem;
