import { useReducer } from "react";

export const ShoppingCartWithreducer = () => {
  const products = [
    { id: 1, name: "Raect course", price: 49.99 },
    { id: 2, name: "Node.js course", price: 39.99 },
    { id: 3, name: "Javascript Bundle", price: 29.99 },
  ];
  return (
    <div>
      <h2>Product</h2>
      {products.map((product) => {
        <div key={product.id}>
          <h3>
            {product.name} - {product.price}
          </h3>
          <button>Add to cart</button>
        </div>;
      })}
    </div>
  );
};
