import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CartListContext,
  ProductsContext,
  TotalPriceContext,
  WishListContext,
} from "../Layout/MainLayout";
import Heading from "./Heading";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";

const ProductDetails = () => {
  const allProducts = useContext(ProductsContext);
  const { productId } = useParams();

  const product = allProducts.find(
    (product) => product.product_id === parseInt(productId)
  );
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const { cartList, setCartList } = useContext(CartListContext);
  const { wishList, setWishList } = useContext(WishListContext);
  const [disableWishBtn, setDisableWishBtn] = useState(false);
  const [totalCartPrice,setTotalCartPrice] = useContext(TotalPriceContext);
  console.log(typeof Number(totalCartPrice));

  const handleAddToCart = (product) => {
    const newTotalPrice = totalCartPrice + product.price;
    if (cartList.includes(product)) {
      toast("Product is already exist in cartlist.", {
        duration: 4000,
        position: "top-center",
        icon: <RxCrossCircled className="text-red-600" />,
      });
    } else if (Number(newTotalPrice) > 1000) {
      toast("You cannot add items exceeding a total of $1000.",{
        duration: 4000,
        position: "top-center",
        icon: <RxCrossCircled className="text-red-600" />,
      });
      return;
    } else {
      setCartList([...cartList, product]);
      toast("Added product to cart list.", {
        duration: 4000,
        position: "top-center",
        icon: <FaRegCheckCircle className="text-green-600" />,
      });
      setTotalCartPrice(totalCartPrice + product.price);
    }
  };
  const handleWishListBtn = (product) => {
    if (wishList.includes(product)) {
      toast("Product is already exist in wishlist");
    } else {
      setWishList([...wishList, product]);
      setDisableWishBtn(true);

      toast("Added product to wish list.", {
        duration: 4000,
        position: "top-center",
        icon: <FaRegCheckCircle className="text-green-600" />,
      });
    }
  };
  return (
    <div>
      <div className="bg-primary min-h-[463px] ">
        <Heading headingText="Product Details" headingTagName="h2" />
      </div>
      <div className="container -mt-[280px] flex flex-col justify-center items-center">
        <div className="w-full p-6 lg:p-8 bg-white rounded-3xl shadow  flex gap-6 lg:gap-8">
          <div className="w-1/3 rounded-lg">
            <img
              className="w-full"
              src={product_image}
              alt={`image of ${product_title}`}
            />
          </div>

          <div>
            <h2 className="text-xl lg:text-[28px] font-semibold mb-2 lg:mb-3">
              {product_title}
            </h2>
            <p className="text-lg lg:text-xl font-semibold text-gray-700 mb-3">
              Price: $ {price.toFixed(2)}
            </p>
            <span
              className={`inline-block px-3 py-1 text-sm font-medium  ${
                availability
                  ? " text-green-500 bg-green-100 border border-green-400"
                  : "text-red-500 bg-red-100 border-red-400"
              } rounded-full mb-4`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </span>

            <p className="text-gray-600 text-base lg:text-xl mb-4">
              {description}
            </p>

            <div>
              <h3 className="font-bold text-black text-base lg:text-lg mb-2 lg:mb-3">
                Specification:
              </h3>
              <ul className="text-gray-600 text-base lg:text-lg list-decimal list-inside space-y-1 mb-4">
                {specification.map((info, inx) => (
                  <li key={inx}>{info}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <div className="text-base lg:text-lg font-bold text-black mb-0 flex gap-2">
                <span>Ratings</span>
                <ReactStars count={1} value={1} size={26} />
              </div>
              <div className="flex ml-2 mt-2 lg:mt-3">
                <ReactStars
                  count={5}
                  value={rating}
                  isHalf={true}
                  size={28}
                  classNames={"text-yellow-500"}
                  activeColor={"#ffd700"}
                />
                {/* <span className="text-gray-300 text-base lg:text-lg"></span> */}
                <div className="ml-2 text-gray-600 text-sm px-4 py-1 bg-gray-100 rounded-full flex items-center justify-center">
                  <span>{rating}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 md:gap-4">
              <button
                onClick={() => handleAddToCart(product)}
                className=" px-4 py-2 text-white text-base lg:text-lg font-bold bg-purple-600 rounded-full hover:bg-purple-700 flex gap-2 items-center"
              >
                <span>Add to Cart</span>
                <span>
                  <BsCart3 className="h-5 w-5" />
                </span>
              </button>

              <button
                disabled={disableWishBtn}
                onClick={() => handleWishListBtn(product)}
                className={`h-10 w-10 flex justify-center items-center ${
                  disableWishBtn ? "bg-gray-200" : "bg-white"
                } border rounded-full`}
              >
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
