// App.jsx

import styles from './App.module.css';
import NavBar from './NavBar';
import List from './List';
import { items } from './items';
import ItemCard from './ItemCard';

const App = () => {
    return (
        <>
            <div className={styles.background}>
                {test()}
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>WELCOME TO THE POKé MART</h1>
                        <p>PRESS ANY KEY TO CONTINUE</p>
                    </div>
                    <NavBar />
                    <div className={styles.app}>
                        <List items={items} />
                        <ItemCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;

function test() {
    console.log('Blas Eier');
}
