import { useReducer } from "react";

const initialState = {
  items: [], // in the array it will take {id,name,price,quatity}
  totalAmount: 0,
  totalItems: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      // To find that if the items already exist
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      let updatedItems;

      if (existingItemIndex >= 0) {
        // copy old array
        updatedItems = [...state.items];
        // replace the old item with an updated copy that has increased quantity
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
        totalItems: updatedItems.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    }

    default:
      return state;
  }
};

export const ShoppingCartWithreducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
