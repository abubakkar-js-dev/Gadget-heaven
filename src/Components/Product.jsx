import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_image, product_title, price,product_id } = product;
  return (
    <Link to={`/products/${product_id}`}>
      <div className="p-5 rounded-2xl bg-white shadow-sm flex flex-col">
        <img
          className="h-[180px] rounded-2xl w-full mb-6"
          src={product_image}
          alt={`image of ${product_title}`}
        />
        <h3 className="text-xl lg:text-2xl mb-3 font-semibold text-black">
          {product_title}
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-4 flex-grow">
          Price: ${price}
        </p>
        <div>
          <button className="text-primary p-[1px] bg-gradient-to-b from-primary via-primary to-pink-400 hover:to-primary  hover:!bg-primary hover:text-white rounded-full transition">
            <div className="py-2 px-5 bg-white hover:bg-primary rounded-full transition">View Details</div>
          </button>
        </div>
      </div>
    </Link>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
