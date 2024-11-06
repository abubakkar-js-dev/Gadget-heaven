import PropTypes from "prop-types";
import { RxCrossCircled } from "react-icons/rx";

const Cart = ({ cart, addToCartBtnTxt = "",handleRemoveItem }) => {
  const { product_image, product_title, description, price,product_id} = cart;
  return (
    <div className="p-6 md:p-8 rounded-2xl flex items-center bg-white gap-5 md:gap-8 shadow">
      <div>
        <img src={product_image} className="h-[200px] w-[220px] max-w-full bg-gray-200 rounded-xl" />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {/* Wrapper for title and cross icon */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            {product_title}
          </h3>
          <button onClick={()=>handleRemoveItem(product_id)} className="mr-8 md:mr-12 lg:mr-16">
            <RxCrossCircled className="w-6 h-6 lg:w-8 lg:h-8 text-red-400 cursor-pointer" />
          </button>
        </div>
        <p className="mb-1 text-base md:text-lg text-gray-500">{description}</p>
        <h4 className="text-lg md:text-xl text-gray-700 font-serif">
          Price: ${price.toFixed(2)}
        </h4>
        {addToCartBtnTxt && (
          <button className="h-10 md:h-12 px-5 md:px-7 text-white bg-primary hover:bg-purple-700 text-base md:text-lg font-medium rounded-full max-w-[164px]">
            {addToCartBtnTxt}
          </button>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  addToCartBtnTxt: PropTypes.string.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
