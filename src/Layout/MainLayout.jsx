import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";


// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext([]);
// eslint-disable-next-line react-refresh/only-export-components
export const CartListContext = createContext([]);
// eslint-disable-next-line react-refresh/only-export-components
export const WishListContext = createContext([]);
// eslint-disable-next-line react-refresh/only-export-components
export const TotalPriceContext = createContext(0);

const MainLayout = () => {
  const allProducts = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  return (
    <TotalPriceContext.Provider value={[totalCartPrice,setTotalCartPrice]}>
      <div className="flex flex-col min-h-screen">
        <WishListContext.Provider value={{ wishList, setWishList }}>
          <CartListContext.Provider value={{ cartList, setCartList }}>
            <Navbar
              cartListCount={cartList.length}
              wishListCount={wishList.length}
            />
            <main className="min-h-screen bg-gradient-to-t from-gray-100 to-white">
              <ProductsContext.Provider value={allProducts}>
                <Outlet />
              </ProductsContext.Provider>
            </main>
          </CartListContext.Provider>
        </WishListContext.Provider>
        <Footer />
        <Toaster />
      </div>
    </TotalPriceContext.Provider>
  );
};

export default MainLayout;
