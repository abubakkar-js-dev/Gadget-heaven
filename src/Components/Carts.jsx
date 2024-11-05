import { GiSettingsKnobs } from "react-icons/gi";
import { CartListContext } from "../Layout/MainLayout";
import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import succesImg from '../assets/images/success.png'
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const { cartList, setCartList } = useContext(CartListContext);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [purchaseTotal,setParchaseTotal] = useState(null);
  const [disablePurchase,setDisablePurchase] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // calculate the total price
    const totalCartItemPrice = cartList.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
    setTotalCartPrice(totalCartItemPrice.toFixed(2));

  }, [cartList, setCartList]);

  useEffect(()=>{
    if(cartList.length > 0){
      setDisablePurchase(false);
    }else{
      setDisablePurchase(true);
    }
  },[cartList])

  const handleSortByPrice = () => {
    // sort by price
    const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedCartList);
  };

  const handlePurchase = ()=>{
      document.getElementById('purchase_modal').showModal();
      setParchaseTotal(totalCartPrice);
      setCartList([]);
      setTotalCartPrice(0);

  }


  const handleCloseModal = () =>{
    navigate('/');
  }

  return (
    <div className="container mb-[200px]">
      <div className="flex justify-between items-center mb-5 md:mb-6 lg:mb-8">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Cart</h2>
        <div className=" flex gap-5 md:gap-6 items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            Total Cost: ${totalCartPrice}
          </h2>
          <button
            onClick={handleSortByPrice}
            className="p-[2px] bg-gradient-to-b from-primary via-primary to-pink-400 rounded-full text-primary"
          >
            <div className="bg-white hover:bg-purple-50 rounded-full px-4 py-3 flex items-center gap-2 text-primary text-base md:text-lg font-bold">
              <span>Sort by price</span>
              <GiSettingsKnobs className="font-extrabold text-lg" />
            </div>
          </button>
          <button disabled={disablePurchase} onClick={handlePurchase} className={`h-10 md:h-12 lg:h-14 px-5 md:px-7 text-white ${!disablePurchase ? 'bg-gradient-to-b from-primary via-primary to-[#D160EA] hover:to-primary hover:from-[#D160EA]' : 'bg-purple-400'} text-base md:text-lg font-medium rounded-full`}>
            Purchase
          </button>
        </div>
      </div>
      {/* cart cotainer */}
      <div className="flex flex-col gap-6">
        {cartList.map((cart) => (
          <Cart key={cart.product_id} cart={cart} />
        ))}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="purchase_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center gap-3">
          <img className="max-w-16 xl:max-w-[72px] md:mb-2 lg:mb-3" src={succesImg} alt="" />
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Payment Successfully</h3>
          <p className="py-4 text-base text-gray-600">
            Thanks for purchasing.
          </p>
          <p className="text-base text-gray-600">Total: ${purchaseTotal}</p>
          <div className="modal-action flex-col w-full">
            <form method="dialog flex">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleCloseModal} className="btn w-full rounded-full text-black text-base font-semibold bg-gray-300">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Carts;
