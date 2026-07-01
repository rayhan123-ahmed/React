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
    case "REMOVE_CART": {
      const filteredItem = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        items: filteredItem,
        totalItems: filteredItem.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
        totalAmount: filteredItem.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
      };
    }
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity === 0) {
        return reducer(state, {
          type: "REMOVE_CART",
          payload: { id: action.payload.id },
        });
      }
      const updatedItem = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );

      return {
        items: updatedItem,
        totalItems: updatedItem.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
        totalAmount: updatedItem.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
      };
    }
    case "CLEAR_CART": {
      return initialState;
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
          <button
            onClick={() =>
              dispatch({
                type: "ADD_CART",
                payload: product,
              })
            }
          >
            Add to cart
          </button>
        </div>
      ))}

      <div>
        {state.items.length === 0 ? (
          <p>Youre cart is empty</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name} - {item.price} x {item.quantity}
                </p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QUANTITY",
                      payload: { id: item.id, quantity: item.quantity - 1 },
                    })
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QUANTITY",
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_CART",
                      payload: { id: item.id },
                    })
                  }
                >
                  Remove cart
                </button>
              </div>
            ))}
          </div>
        )}
        <h3>Total items : {state.totalItems}</h3>
        <h3>Total amounts : {state.totalAmount.toFixed(2)}</h3>
        {state.items.length > 0 && (
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};
