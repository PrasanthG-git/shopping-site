import React from "react";

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity*82,
    0
  );
  const discount = totalPrice * 0.1; // 10% discount
  const finalPrice = totalPrice - discount;

  return (
    <div className="p-4">
      <h2 className="mb-4 font-bold text-2xl">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center mb-4 p-4 border rounded"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mr-4 w-16 h-16 object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p>
                  Rs.{item.price*82} x {item.quantity} = Rs.
                  {item.price * item.quantity*82}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(item)}
                    className="bg-yellow-300 mr-2 px-2 py-1 text-black"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="bg-yellow-300 ml-2 px-2 py-1 text-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 px-4 py-2 text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="mt-4 font-bold text-xl">
            Total Price: rs.{totalPrice.toFixed(2)}
          </h3>
          <h3 className="mt-2 font-bold text-xl">
            Discount (10%): -Rs.{discount.toFixed(2)}
          </h3>
          <h3 className="mt-2 font-bold text-2xl">
            Final Price: Rs.{finalPrice.toFixed(2)}
          </h3>
        </>
      )}
    </div>
  );
};

export default Cart;

