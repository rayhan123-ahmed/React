import { useState } from "react";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState({
    raectCourse: 0,
    vueCourse: 0,
  });
  const prices = {
    raectCourse: 4.99,
    vueCourse: 3.99,
  };
  const HandleRactCourse = () => {
    setCartItems({
      ...cartItems,
      raectCourse: cartItems.raectCourse + 1,
    });
  };
  const HandleVuecourse = () => {
    setCartItems({
      ...cartItems,
      vueCourse: cartItems.vueCourse + 1,
    });
  };

  const ClearCart = ()=>{
    setCartItems({
        raectCourse : 0,
        vueCourse : 0,
    })
  }

  return (
    <div>
      <ProductCart
        name={"Raect course"}
        price={prices.raectCourse}
        qunatity={cartItems.raectCourse}
        onAddToCart={HandleRactCourse}
      />
      <ProductCart
        name={"Vue course"}
        price={prices.vueCourse}
        qunatity={cartItems.vueCourse}
        onAddToCart={HandleVuecourse}
      />
      <CartSummary cartItems={cartItems} prices={prices} />
      <button onClick={ClearCart}>Clear Carts</button>
    </div>
  );
};

export const ProductCart = ({ name, price, qunatity, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>Quantity: {qunatity}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
};

export const CartSummary = ({ cartItems, prices }) => {
  const TotalItems = cartItems.raectCourse + cartItems.vueCourse;
  const TotalPrices =
    cartItems.raectCourse * prices.raectCourse +
    cartItems.vueCourse * prices.vueCourse;
  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total items: {TotalItems}</p>
      <p>Total Price: {TotalPrices.toFixed(2)}</p>
    </div>
  );
};
