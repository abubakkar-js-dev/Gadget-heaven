import { useState } from "react";
import Heading from "../Components/Heading";
import Carts from "../Components/Carts";
import Wishlist from "../Components/Wishlist";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [activeTab, setActiveTap] = useState("Cart");
  return (
    <div>
      <Helmet>
        <title>Dashboard || Gadget Heaven</title>
      </Helmet>
      <div className="bg-primary mb-8 md:mb-10 lg:mb-12">
        <Heading headingTagName="h2" headingText="Dashboard" />
        <div className="flex space-x-4 lg:space-x-6 justify-center items-center pb-6 md:pb-8">
          {/* Cart Button */}
          <button
            onClick={() => setActiveTap("Cart")}
            className={`px-14 py-3 ${
              activeTab === "Cart"
                ? "font-extrabold bg-white text-purple-700 hover:bg-gray-100"
                : "text-white border border-white hover:bg-purple-700 hover:border-primary"
            } text-base md:text-lg  rounded-full shadow-md  focus:outline-none`}
          >
            Cart
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => setActiveTap("Wishlist")}
            className={`px-14 py-3 ${
              activeTab === "Wishlist"
                ? "font-extrabold bg-white text-primary hover:bg-gray-100"
                : "text-white border border-white hover:bg-purple-700 hover:border-purple-700"
            } text-base md:text-lg  rounded-full shadow-md  focus:outline-none`}
          >
            Wishlist
          </button>
        </div>
      </div>
        {activeTab === 'Cart' ? <Carts /> : activeTab === 'Wishlist' ? <Wishlist /> : ''}
    </div>
  );
};

export default Dashboard;
