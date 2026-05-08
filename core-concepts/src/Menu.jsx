import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const HandleOrder = (ItemName, ItemPrice) => {
    alert(`You orderd: ${ItemName} for ${ItemPrice}`);
  };
  return (
    <div>
      <h2>Our Menu</h2>
      <MenuItem name="pizza" price={22} OnOrder={HandleOrder} />
      <MenuItem name="Burger" price={28} OnOrder={HandleOrder} />
      <MenuItem name="pasta" price={89} OnOrder={HandleOrder} />
    </div>
  );
};
