import { useContext } from "react";
import {
  CartListContext,
  TotalPriceContext,
  WishListContext,
} from "../Layout/MainLayout";
import Card from "./Card";
import toast from "react-hot-toast";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";

const Wishlist = () => {
  const { wishList, setWishList } = useContext(WishListContext);
  const { cartList, setCartList } = useContext(CartListContext);
  const [totalCartPrice, setTotalCartPrice] = useContext(TotalPriceContext);

  const handleRemoveWishItem = (id) => {
    const remainingWishItems = wishList.filter(
      (wishItems) => wishItems.product_id !== id
    );
    setWishList(remainingWishItems);
  };
  const handleAddToCartFromWish = (cart) => {
    const newCartPrice = totalCartPrice + cart.price;
    console.log("Hello world");
    console.log(cart.product_id);
    if (cartList.includes(cart)) {
      toast("Product is already exist in cartlist.", {
        duration: 4000,
        position: "top-center",
        icon: <RxCrossCircled className="text-red-600" />,
      });
    } else if (Number(newCartPrice) > 1000) {
      toast("You cannot add items exceeding a total of $1000.", {
        duration: 4000,
        position: "top-center",
        icon: <RxCrossCircled className="text-red-600" />,
      });
      return;
    } else {
      const remainingWishList = wishList.filter(
        (wishItem) => wishItem.product_id !== cart.product_id
      );
      setCartList([...cartList, cart]);
      setTotalCartPrice(totalCartPrice + cart.price);
      setWishList(remainingWishList);
      toast("Added product to cart list.", {
        duration: 4000,
        position: "top-center",
        icon: <FaRegCheckCircle className="text-green-600" />,
      });
    }
  };
  return (
    <div className="container mb-12 md:mb-14 lg:mb-[100px]">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-5 md:mb-6 lg:mb-8">
        WishList
      </h2>
      <div className="flex flex-col gap-6">
        {wishList.map((cart) => (
          <Card
            key={cart.product_id}
            cart={cart}
            addToCartBtnTxt="Add to Cart"
            handleRemoveItem={handleRemoveWishItem}
            handleAddToCartFromWish={handleAddToCartFromWish}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

