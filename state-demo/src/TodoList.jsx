import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Rayhan", done: false },
    { id: 2, text: "Ahmed", done: false },
  ]);

  console.log("deploy product", items);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: "Deploy production",
      done: false,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleBtn = (id) => {
    setItems(items.map((item)=> {
       if (item.id === id){
          return {...item, done : !item.done}
       }
       return item
    }))
  };
  

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {item.text}
              </span>
              <button onClick={() => toggleBtn(item.id)}>
                {item.done ? "undo" : "done"}
              </button>
              <button onClick={() => removeItem(item.id)}>Detele</button>
            </li>
          );
        })}
      </ul>
      <button onClick={addItem}>Add item</button>
    </div>
  );
};
