import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Rayhan", done: false },
    { id: 2, text: "Ahmed", done: false },
  ]);
  console.log("Rederin with itesm:", items);

  const AddItem = () => {
    const NewItem = {
      id: Date.now(),
      text: "Deploy the name",
      done: false,
    };
    setItems([...items, NewItem]);
  };
  
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleDone = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    );
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              {item.text}
            </span>
            <button onClick={() => toggleDone(item.id)}>
              {item.done ? "Done" : "undo"}
            </button>
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={AddItem}>Add item</button>
    </div>
  );
};
