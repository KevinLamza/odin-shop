import styles from './List.module.css';

const List = ({ items, handleListClick, currentItem }) => {
    const keys = Object.keys(items);
    const list = keys.map((element) => (
        <button
            onClick={() => handleListClick(element)}
            className={
                element === currentItem
                    ? styles.selectedButtons
                    : styles.unselectedButtons
            }
            key={element}
        >
            {items[element]}
        </button>
    ));
    return (
        <>
            <ul>{list}</ul>
        </>
    );
};

export default List;
