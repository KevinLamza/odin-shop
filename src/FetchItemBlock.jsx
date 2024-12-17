import { useState, useEffect } from 'react';
import SpriteCanvas from './SpriteCanvas.jsx';
import useFetchData from './useFetchData.jsx';
import styles from './FetchItemBlock.module.css';

const FetchItemBlock = ({ id }) => {
    const { imageURL, title, description, price, error, loading } =
        useFetchData(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            {/* <img src={imageURL} alt={'placeholder text'} /> */}
            <SpriteCanvas imageURL={imageURL} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p className={styles.price}>{price}G</p>
            </div>
        </>
    );
};

export default FetchItemBlock;
