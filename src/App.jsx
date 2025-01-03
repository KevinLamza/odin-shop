import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from './NavBar';
import { validIds } from './validIds';

const App = () => {
	// can be 'HOME', 'SHOP', 'CHECKOUT', used only for CSS
	const [currentPage, setCurrentPage] = useState('HOME');

	// refers to the Id of the item
	const [currentItem, setCurrentItem] = useState(1);

	// some default items to check functionality easier
	const [cartItems, setCartItems] = useState([]);

	const [currentInput, setCurrentInput] = useState(1);
	const [wobble, setWobble] = useState(0);
	const { idString } = useParams();
	const id = Number(idString);
	const navigate = useNavigate();

	// check if the dynamic segment is part of the items object
	// (and therefore a valid segment),
	// else set item to 1 and navigate to that path
	useEffect(() => {
		if (validIds.includes(id)) {
			setCurrentItem(id);
		} else if (!validIds.includes(id) && id === id) {
			console.log(typeof id);
			console.log('hey');
			setCurrentItem(1);
			setCurrentInput(1);
			navigate('/shop/1');
		}
	}, [id, navigate]);

	function handleListClick(id) {
		console.log(id);
		setCurrentItem(id);
		setCurrentInput(1);
		const path = '/shop/' + id;
		navigate(path);
	}

	function handleAddItemToCart(id, amount) {
		function compare(element, id) {
			// console.log(element['id'] === id);
			return element['id'] === id;
		}
		const index = cartItems.findIndex((element) => compare(element, id));
		console.log(index);
		if (index === -1) {
			setCartItems([...cartItems, { id, amount }]);
		} else {
			let updatedCart = [...cartItems];
			updatedCart[index] = {
				...updatedCart[index],
				amount: Number(updatedCart[index]['amount']) + Number(amount),
			};
			setCartItems(updatedCart);
		}
	}

	function handleInputChange(value) {
		setCurrentInput(Number(value));
	}

	return (
		<>
			<div className={styles.background}>
				<div className={styles.container}>
					<header>
						<div className={styles.header}>
							<h1>WELCOME TO THE POKé MART</h1>
							<p>
								SERVING YOU WITH EVERYTHING POKéMON SINCE 2024
							</p>
						</div>
					</header>
					<nav>
						<NavBar
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							cartItems={cartItems}
							setCurrentItem={setCurrentItem}
							setCurrentInput={setCurrentInput}
							wobble={wobble}
							setWobble={setWobble}
						/>
					</nav>

					<main>
						<Outlet
							context={{
								handleListClick,
								validIds,
								currentItem,
								cartItems,
								setCartItems,
								handleAddItemToCart,
								currentInput,
								handleInputChange,
								setWobble,
							}}
						/>
					</main>
				</div>
			</div>
		</>
	);
};

export default App;
