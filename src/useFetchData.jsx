import { useState, useEffect } from 'react';

const useFetchData = (id) => {
    const [imageURL, setImageURL] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
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
                setPrice(response['cost']);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [id]);

    return { imageURL, title, description, price, error, loading };
};

export default useFetchData;
