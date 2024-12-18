import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Shop from './Shop.jsx';
import Checkout from './Checkout.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/shop/:idString', element: <Shop /> },
            { path: '/checkout', element: <Checkout /> },
        ],
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
