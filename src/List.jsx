import styles from './List.module.css';
import useFetchData from './useFetchData';

const List = ({ validIds, handleListClick, currentItem }) => {
    const list = validIds.map((element) => {
        const { title } = useFetchData(element);
        return (
            <button
                onClick={() => handleListClick(element)}
                className={
                    element === currentItem
                        ? styles.selectedButtons
                        : styles.unselectedButtons
                }
                key={element}
            >
                {title}
            </button>
        );
    });
    return (
        <>
            <ul>{list}</ul>
        </>
    );
};

export default List;
