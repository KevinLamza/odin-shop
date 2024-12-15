import styles from './List.module.css';

const List = ({ items, handleListClick }) => {
    const keys = Object.keys(items);
    const list = keys.map((element) => (
        <button
            onClick={() => handleListClick(element)}
            className={styles.listButtons}
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
