import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import ProductDetails from "../Components/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        loader: ()=> fetch('/products.json'),
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'products/:productId',
                element: <ProductDetails />
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]

    }
])

export default router;