import styles from './List.module.css';

const List = ({ items }) => {
    const keys = Object.keys(items);
    const list = keys.map((element) => <li key={element}>{items[element]}</li>);
    return (
        <>
            <ul>{list}</ul>
        </>
    );
};

export default List;
