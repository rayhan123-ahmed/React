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
          // start total calculation from zero
          0,
        ),
        totalItems: updatedItems.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    }
    case 'REMOVE_ITEM':{
      const filterItem = state.items.filter(
        (item)=> item.id !== action.payload.id
      )
      return {
        ...state,
        items: filterItem,
        totalAmount: filterItem.reduce(
          (total, item) => total + item.price * item.quantity,
          // start total calculation from zero
          0,
        ),
        totalItems: filterItem.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    }
    case 'UPDATE_QUANTITY':{
      if (action.payload.quantity === 0) {
        return reducer(state, {
          type: "REMOVE_ITEM",
          payload : {id : action.payload.id}
        });
      }
      const updateQuantityItems = state.items.map((item)=>
        item.id === action.payload.id 
        ? {...item, quantity : action.payload.quantity} 
        : item
      );
      return {
        ...state,
        items: updateQuantityItems,
        totalAmount: updateQuantityItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
        totalItems: updateQuantityItems.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };

    }
    case 'RESET':
      return initialState
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
      {products.map((product) => (
        <div key={product.id}>
          <h3>
            {product.name} - {product.price}
          </h3>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: product,
              })
            }
          >
            Add to cart
          </button>
          
        </div>
      ))}

      <div>
        <h2>Shopping cart</h2>
        {state.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name} - {item.price} x {item.quantity}
                </p>
                <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", 
                  payload : {id : item.id, quantity : item.quantity - 1}
                 })}>
                  -
                </button>
                <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", 
                  payload : {id : item.id, quantity : item.quantity + 1}
                 })}>
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <h3>Total items : {state.totalItems}</h3>
      <h3>Total Amount: ${state.totalAmount.toFixed(2)}</h3>
      {
        state.items.length > 0 && (
          <button onClick={()=> dispatch({type: 'RESET' })}>Reset</button>
        )
      }
    </div>
  );
};
