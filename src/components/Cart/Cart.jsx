import React, { useEffect, useState } from "react";
import { Minus, Plus, Loader2 } from "lucide-react";
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
  useAddToCartMutation,
} from "../../Redux/API/CartAPI"; // Path check kar lena
import { FaAngleRight } from "react-icons/fa6";
import AddAddressModal from "../Models/AddAddressModal.jsx";

// ==========================================
// 🛠️ CONFIGURATION
// ==========================================
const USE_MOCK_DATA = true;

// ==========================================
// 📦 MOCK DATA
// ==========================================
const MOCK_RESPONSE = {
  success: true,
  cart: {
    _id: "mock_cart_id_123",
    userId: "mock_user_id_456",
    items: [
      {
        _id: "item_1",
        quantity: 1,
        productId: {
          _id: "prod_001",
          name: "Aditii - The Breath Of Divine Consciousness",
          description: "Born From Silence And Sacred Fire...",
          price: 200,
          bottleImg: "https://placehold.co/300",
        },
      },
      {
        _id: "item_2",
        quantity: 1,
        productId: {
          _id: "prod_002",
          name: "Aditi - The Breath Of Divine Consciousness",
          description: "Born From Silence And Sacred Fire...",
          price: 200,
          bottleImg: "https://placehold.co/300",
        },
      },
      {
        _id: "item_1",
        quantity: 1,
        productId: {
          _id: "prod_001",
          name: "Aditii - The Breath Of Divine Consciousness",
          description: "Born From Silence And Sacred Fire...",
          price: 200,
          bottleImg: "https://placehold.co/300",
        },
      },
      {
        _id: "item_2",
        quantity: 1,
        productId: {
          _id: "prod_002",
          name: "Aditi - The Breath Of Divine Consciousness",
          description: "Born From Silence And Sacred Fire...",
          price: 200,
          bottleImg: "https://placehold.co/300",
        },
      },
      {
        _id: "item_1",
        quantity: 1,
        productId: {
          _id: "prod_001",
          name: "Aditii - The Breath Of Divine Consciousness",
          description: "Born From Silence And Sacred Fire...",
          price: 200,
          bottleImg: "https://placehold.co/300",
        },
      },
      {
        _id: "item_2",
        quantity: 1,
        productId: {
          _id: "prod_002",
          name: "Aditi - The Breath Of Divine Consciousness",
          description: "Born From Silence And Sacred Fire...",
          price: 200,
          bottleImg: "https://placehold.co/300",
        },
      },
    ],
  },
};

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data: apiData, isLoading: apiLoading } = useGetCartQuery(undefined, {
    skip: USE_MOCK_DATA,
  });

  const [removeFromCart, { isLoading: isRemoving }] =
    useRemoveFromCartMutation();
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const [localCartItems, setLocalCartItems] = useState([]);

  useEffect(() => {
    if (USE_MOCK_DATA) {
      setLocalCartItems(MOCK_RESPONSE.cart.items);
    } else if (apiData?.cart?.items) {
      setLocalCartItems(apiData.cart.items);
    }
  }, [apiData, USE_MOCK_DATA]);

  const isLoading = USE_MOCK_DATA ? false : apiLoading;

  // --- CALCULATIONS ---
  const deliveryCharge = 100;

  const subTotal = localCartItems.reduce((acc, item) => {
    const price = Number(item.productId?.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  const totalItems = localCartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const discountAmount = subTotal > 0 ? 200 : 0;
  const finalTotal = subTotal + deliveryCharge - discountAmount;

  // --- HANDLERS ---
  const handleRemove = async (itemId) => {
    if (USE_MOCK_DATA) {
      setLocalCartItems((prev) => prev.filter((item) => item._id !== itemId));
      return;
    }
    try {
      await removeFromCart(itemId).unwrap();
    } catch (error) {
      console.error("Failed to remove:", error);
    }
  };

  const handleIncrement = async (item) => {
    if (USE_MOCK_DATA) {
      setLocalCartItems((prev) =>
        prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
      return;
    }
    try {
      await addToCart({
        productId: item.productId._id,
        quantity: 1,
      }).unwrap();
    } catch (error) {
      console.error("Failed to add:", error);
    }
  };

  const handleDecrement = async (item) => {
    if (item.quantity <= 1) return;
    if (USE_MOCK_DATA) {
      setLocalCartItems((prev) =>
        prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity - 1 } : i,
        ),
      );
      return;
    }
    try {
      await addToCart({
        productId: item.productId._id,
        quantity: -1,
      }).unwrap();
    } catch (error) {
      console.error("Failed to decrement:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white gap-4">
        <Loader2 size={40} className="animate-spin text-black" />
        <p className="font-['Poppins'] text-gray-500">Loading your cart...</p>
      </div>
    );
  }

  if (!isLoading && localCartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white text-black font-['Poppins'] px-6 lg:px-24 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-Montserrat mb-2">Your Cart is Empty</h2>
        <p className="text-gray-400">Add some divine essences to your cart.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-['Poppins'] px-6 lg:px-24 pt-2 mb-20">
      <div className="w-full max-w-[1600px] mx-auto ">
        <p className="text-xs text-gray-400 mt-2">Home / Cart →</p>
        <h1 className="text-lg font-medium font-Montserrat pt-6 ">
          Total Items ( {totalItems.toString().padStart(2, "0")} )
        </h1>
      </div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1 flex flex-col gap-6 mt-6 w-full">
          {localCartItems.map((item) => {
            const product = item.productId;
            if (!product) return null;

            return (
              <div
                key={item._id}
                className="flex flex-col md:flex-row   rounded-[22px] bg-white shadow-[0_2px_15px_rgba(0,0,0,0.02)] overflow-hidden "
              >
                <div className="w-full md:w-[50%] flex items-center justify-center p-8 bg-white">
                  <img
                    src={product.bottleImg || "https://placehold.co/300"}
                    alt={product.name}
                    className="w-full h-auto object-contain max-h-[220px] mix-blend-multiply"
                  />
                </div>

                <div className="hidden md:block w-px bg-[#0000008A] my-6"></div>
                <div className="block md:hidden w-full h-px bg-[#0000008A]"></div>

                <div className="flex-1 p-8 flex flex-col justify-center gap-4">
                  <div>
                    <h3 className="font-Montserrat text-[18px] font-medium text-gray-900 leading-tight mb-2">
                      {product.name}
                    </h3>
                    <p className="text-[13px] font-poppins text-gray-400 leading-relaxed max-w-md">
                      {product.description}
                    </p>
                  </div>

                  <div className="text-[30px] font-medium font-Montserrat text-[#000000] mt-2">
                    $ {product.price}
                  </div>

                  <div className="flex items-center gap-1 mt-2">
                    <button
                      onClick={() => handleIncrement(item)}
                      disabled={isAdding}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition"
                    >
                      <Plus size={14} strokeWidth={2} />
                    </button>

                    <span className="text-sm font-medium w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleDecrement(item)}
                      disabled={item.quantity <= 1 || isAdding}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition disabled:opacity-30"
                    >
                      <Minus size={14} strokeWidth={2} />
                    </button>
                  </div>

                  {/* <div className="mt-2">
                    <button
                      onClick={() => handleRemove(item._id)}
                      disabled={isRemoving}
                      className="border border-black text-black font-Poppins px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors disabled:opacity-50"
                    >
                      {isRemoving ? "Removing..." : "Remove From Cart"}
                    </button>
                  </div> */}
                  <div className="flex flex-col gap-2 sm:gap-2 items-start justify-center">
                    <button
                      className="flex items-center relative gap-0.5 mt-4 md:mt-3 sm:gap-1 text-black text-xs sm:text-sm md:text-base font-medium whitespace-nowrap"
                      onClick={() => handleRemove(item._id)}
                      disabled={isRemoving}
                    >
                      <span className="hidden sm:inline font-poppins text-[15px] font-normal">
                        {isRemoving ? "Removing..." : "Remove from cart"}
                      </span>
                      <span className="sm:hidden">Continue</span>
                      <FaAngleRight
                        size={12}
                        className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                      />
                      <div className="absolute -bottom-1 w-4 sm:w-5 bg-black h-0.5 sm:h-1 rounded-xl" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full lg:w-[400px] flex flex-col gap-4 shrink-0 mt-5">
          <div className="bg-[#FAFAFA] rounded-[30px] py-4 px-6">
            <h2 className="text-lg font-Poppins mb-4">Price Details</h2>
            <div className="w-full h-px bg-[#1C2532] mb-6"></div>
            <div className="flex flex-col gap-4 text-sm mb-6 border-b border-gray-200 pb-8">
              <div className="flex justify-between font-Poppins ">
                <span className="text-[#000000]">
                  Price ( {totalItems} items )
                </span>
                <span className="text-gray-600">$ {subTotal}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-[#000000]">Discount</span>
                <span className="text-green-500">-$ {discountAmount}</span>
              </div>
              <div className="flex justify-between ">
                <span>Delivery charges</span>
                <span className="text-gray-600">$ {deliveryCharge}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-Poppins text-[#000000]">
                Total amount
              </span>
              <span className="font-Poppins text-gray-600">$ {finalTotal}</span>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-[20px] p-6 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900">
              Delivery address
            </span>
            <button onClick={() => setOpenModal(true)} className="text-green-500 text-xs font-medium hover:underline">
              + Add address
            </button>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-col gap-2 sm:gap-2 items-start justify-center">
              <button
                className="flex items-center relative gap-0.5 mt-4 md:mt-3 sm:gap-1 text-black text-xs sm:text-sm md:text-base font-medium whitespace-nowrap"
                // onClick={() => handleRemove(item._id)}
                // disabled={isRemoving}
              >
                <span className="hidden sm:inline font-poppins text-[15px] font-normal">
                  Continue experience
                </span>
                <span className="sm:hidden">Continue experience</span>
                <FaAngleRight
                  size={12}
                  className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                />
                <div className="absolute -bottom-1 w-4 sm:w-5 bg-black h-0.5 sm:h-1 rounded-xl" />
              </button>
            </div>

            {/* <button className="flex-1 bg-black text-white text-xs font-medium py-4 rounded-full hover:bg-gray-800 transition">
              Continue Experience
            </button> */}
            <div className="flex flex-col gap-2 sm:gap-2 items-start justify-center">
              <button
                className="flex items-center relative gap-0.5 mt-4 md:mt-3 sm:gap-1 text-black text-xs sm:text-sm md:text-base font-medium whitespace-nowrap"
                // onClick={() => handleRemove(item._id)}
                // disabled={isRemoving}
              >
                <span className="hidden sm:inline font-poppins text-[15px] font-normal">
                  Place order
                </span>
                <span className="sm:hidden">Continue</span>
                <FaAngleRight
                  size={12}
                  className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                />
                <div className="absolute -bottom-1 w-4 sm:w-4 bg-black h-0.5 sm:h-1 rounded-xl" />
              </button>
            </div>

            {/* <button className="flex-1 bg-white border border-black text-black text-xs font-medium py-4 rounded-full hover:bg-gray-50 transition">
              Place Order
            </button> */}
          </div>
        </div>
      </div>
       {/* Modal */}
      {openModal && <AddAddressModal onClose={() => setOpenModal(false)} />}
    </div>
  );
};

export default Cart;
