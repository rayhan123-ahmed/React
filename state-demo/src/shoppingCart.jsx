import { useState } from "react";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState({
    reactCourse: 0,
    vueCourse: 0,
  });

  const prices =  {
    reactCourse : 4.99,
    vueCourse : 3.99
  }

  const handleReactCourse = () => {

    if (cartItems.reactCourse < 5) {
       setCartItems({
         ...cartItems,
         reactCourse: cartItems.reactCourse + 1,
       });
    }
    
  };

  const handleVueCourse = () => {
    setCartItems({
      ...cartItems,
      vueCourse: cartItems.vueCourse + 1,
    });
  };

  const ClearCart = ()=>{
     setCartItems({
      reactCourse : 0,
      vueCourse : 0
     })
  }
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h2>Shopping cart component</h2>
      <ProductCard
        name={"React Course"}
        price={prices.reactCourse}
        quantity={cartItems.reactCourse}
        addToCart={handleReactCourse}
      />
      <ProductCard
        name={"Vue Course"}
        price={prices.vueCourse}
        quantity={cartItems.vueCourse}
        addToCart={handleVueCourse}
      />
      <CartSummary cartItems={cartItems} prices={prices} />

      <button onClick={ClearCart}>Clear</button>
    </div>
  );
};

export const ProductCard = ({ name, price, quantity, addToCart }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>Quantity: {quantity}</p>

      <button onClick={addToCart}>Increment</button>
    </div>
  );
};

export const CartSummary = ({ cartItems, prices }) => {
  const totalItems = cartItems.reactCourse + cartItems.vueCourse;

  const totalPrices =
    cartItems.reactCourse * prices.reactCourse +
    cartItems.vueCourse * prices.vueCourse;

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrices.toFixed(2)}</p>
    </div>
  );
};