import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext([]);

const MainLayout = () => {
    const allProducts = useLoaderData();
    
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar />
            <main className="min-h-screen bg-gradient-to-t from-gray-100 to-white">
            <ProductsContext.Provider value={allProducts}>
                <Outlet />
            </ProductsContext.Provider>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;