import { useState, useEffect } from 'react';
import SpriteCanvas from './SpriteCanvas.jsx';

const useImageURL = (id) => {
    const [imageURL, setImageURL] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/item/' + id, { mode: 'cors' })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('server error');
                }
                return response.json();
            })
            .then((response) => {
                // Promise.all([
                //     setImageURL(response['sprites']['default']),
                //     setTitle(response['names']['7']['name']),
                //     setDescription(
                //         response['flavor_text_entries']['3']['text'],
                //     ),
                // ]);
                setImageURL(response['sprites']['default']);
                setTitle(response['names']['7']['name']);
                setDescription(response['flavor_text_entries']['3']['text']);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [id]);

    return { imageURL, title, description, error, loading };
};

const FetchImage = ({ id }) => {
    const { imageURL, title, description, error, loading } = useImageURL(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            {/* <img src={imageURL} alt={'placeholder text'} /> */}
            <SpriteCanvas imageURL={imageURL} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    );
};

export default FetchImage;
