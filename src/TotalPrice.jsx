import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// ItemList component that fetches prices, sums them up, and renders the total
function TotalPrice({ ids, onFetchedData }) {
    // if (ids.length === 0) return;

    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Helper function to fetch only the price for an item by ID
        const fetchPrice = async (id) => {
            const response = await fetch(
                'https://pokeapi.co/api/v2/item/' + id,
                { mode: 'cors' },
            );
            if (!response.ok)
                throw new Error(`Failed to fetch data for ID ${id}`);
            const data = await response.json();
            return data['cost'];
        };

        const fetchPrices = async () => {
            try {
                const pricePromises = ids.map((id) => fetchPrice(id)); // Create a promise for each ID
                const fetchedPrices = await Promise.all(pricePromises); // Wait for all promises to resolve
                onFetchedData(fetchedPrices);
                setLoading(false);
            } catch (err) {
                setError(err.message); // Handle error
                setLoading(false);
            }
        };

        fetchPrices(); // Call the fetch function when the component mounts
    }, [ids, onFetchedData]); // Dependency on `ids`, refetch if `ids` changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return null;
}

TotalPrice.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number),
    onFetchedData: PropTypes.func,
};

export default TotalPrice;
