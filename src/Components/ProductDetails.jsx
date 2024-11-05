import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../Layout/MainLayout";
import Heading from "./Heading";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  const allProducts = useContext(ProductsContext);
  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];

  const Product = allProducts.find(
    (product) => product.product_id === parseInt(pathId)
  );
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = Product;
  return (
    <div>
      <div className="bg-primary min-h-[463px]">
        <Heading headingText="Product Details" headingTagName="h2" />
      </div>
      <div className="container -mt-[280px] flex flex-col justify-center items-center">
        <div className="w-full p-6 lg:p-8 bg-white rounded-3xl shadow  flex gap-6 lg:gap-8">
          <div className="w-1/3 rounded-lg">
            <img className="w-full" src={product_image} alt={`image of ${product_title}`} />
          </div>

          <div>
            <h2 className="text-xl lg:text-[28px] font-semibold mb-2 lg:mb-3">{product_title}</h2>
            <p className="text-lg lg:text-xl font-semibold text-gray-700 mb-3">Price: $ {price}</p>
            <span
              className={`inline-block px-3 py-1 text-sm font-medium  ${
                availability
                  ? " text-green-500 bg-green-100 border border-green-400"
                  : "text-red-500 bg-red-100 border-red-400"
              } rounded-full mb-4`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </span>

            <p className="text-gray-600 text-base lg:text-xl mb-4">{description}</p>

            <div>
              <h3 className="font-bold text-black text-base lg:text-lg mb-2 lg:mb-3">Specification:</h3>
              <ul className="text-gray-600 text-base lg:text-lg list-decimal list-inside space-y-1 mb-4">
                {specification.map((info, inx) => (
                  <li key={inx}>{info}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <span className="text-base lg:text-lg font-bold text-black mb-0">Ratings⭐</span>
              <div className="flex ml-2 mt-2 lg:mt-3">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-500 text-base lg:text-lg">
                    ⭐
                  </span>
                ))}
                {/* <span className="text-gray-300 text-base lg:text-lg"></span> */}
                 <span className="ml-2 text-gray-600 text-sm px-4 py-2 bg-gray-100 rounded-[32px]">4.8</span>
              </div>
            </div>
            <div className="flex gap-3 md:gap-4">
              <button className=" px-4 py-2 text-white text-base lg:text-lg font-bold bg-purple-600 rounded-full hover:bg-purple-700 flex gap-2 items-center">
                <span>Add to Cart</span>
                <span>
                  <BsCart3 className="h-5 w-5"/>
                </span>
              </button>

              <button className="h-10 w-10 flex justify-center items-center bg-white border rounded-full">
                <FaRegHeart className="text-gray-700 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
