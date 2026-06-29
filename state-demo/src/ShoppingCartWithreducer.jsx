import { useReducer } from "react";
const initialState = {
  items: [], // {will hold id, name , price}
  totalAmount: 0,
  totalItems: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];

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
        totalItems: state.totalItems + 1,
        totalAmount: state.totalAmount + action.payload.price,
      };
    }
    default:
      return state;
  }
};
export const ShoppingCartWithReducer = () => {
  const products = [
    { id: 1, name: "React Course", price: 3.99 },
    { id: 2, name: "Node.js Course", price: 4.99 },
    { id: 3, name: "JavaScript Bundle", price: 5.99 },
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h3>
            {product.name} - ${product.price}
          </h3>
          <button onClick={()=> dispatch({
            type : 'ADD_CART',
            payload : product
          })}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};
