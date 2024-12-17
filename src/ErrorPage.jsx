import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <h1>SOMETHING WENT WRONG</h1>;
            <Link to="/">Click here to return to the main page</Link>
        </>
    );
};

export default ErrorPage;
