import PropTypes from 'prop-types';
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
				aria-label={`Open shop page ${title}`}
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

List.propTypes = {
	validIds: PropTypes.arrayOf(PropTypes.number),
	handleListClick: PropTypes.func,
	currentItem: PropTypes.number,
};

export default List;
