import { useContext } from "react";
import { WishListContext } from "../Layout/MainLayout";
import Card from "./Card";

const Wishlist = () => {
    const {wishList, setWishList} = useContext(WishListContext);
    
    const handleRemoveWishItem = (id) =>{
        const remainingWishItems = wishList.filter(wishItems => wishItems.product_id !== id);
        setWishList(remainingWishItems);
    }
    return (
        <div className="container">
           <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-5 md:mb-6 lg:mb-8">WishList</h2>
           <div className="flex flex-col gap-6">
        {wishList.map(cart => <Card key={cart.product_id} cart={cart} addToCartBtnTxt="Add to Cart" handleRemoveItem={handleRemoveWishItem}/>)}
    </div>
        </div>
    );
};

export default Wishlist;