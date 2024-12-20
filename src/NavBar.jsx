import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';

const NavBar = ({
	currentPage,
	setCurrentPage,
	cartItems,
	setCurrentItem,
	setCurrentInput,
	wobble,
	setWobble,
}) => {
	const navigate = useNavigate();

	function handleNavClick(path) {
		// setCurrentPage(e.target.textContent);
		if (path === '/') setCurrentPage('HOME');
		else if (path === '/shop/1') {
			setCurrentItem(1);
			setCurrentInput(1);
			setCurrentPage('SHOP');
		} else if (path === '/checkout') setCurrentPage('CHECKOUT');
		navigate(path);
	}

	return (
		<>
			<div className={styles.navBar}>
				<div className={styles.navButtons}>
					<button
						className={
							currentPage === 'HOME'
								? styles.selected
								: styles.unselected
						}
						onClick={() => handleNavClick('/')}
						aria-label={`Go to home page}`}
					>
						HOME
					</button>
					<button
						className={
							currentPage === 'SHOP'
								? styles.selected
								: styles.unselected
						}
						onClick={() => handleNavClick('/shop/1')}
						aria-label={`Go to shop page}`}
					>
						SHOP
					</button>
				</div>
				<button
					className={
						currentPage === 'CART'
							? styles.cartButton + ' ' + styles.selected
							: styles.cartButton
					}
					onAnimationEnd={() => setWobble(0)}
					data-wobble={wobble}
					onClick={() => handleNavClick('/checkout')}
					aria-label={`Go to checkout page}`}
				>
					CART ({cartItems.length})
				</button>
			</div>
		</>
	);
};

NavBar.propTypes = {
	currentPage: PropTypes.string,
	setCurrentPage: PropTypes.func,
	cartItems: PropTypes.arrayOf(PropTypes.object),
	setCurrentItem: PropTypes.func,
	setCurrentInput: PropTypes.func,
	wobble: PropTypes.number,
	setWobble: PropTypes.func,
};

export default NavBar;
