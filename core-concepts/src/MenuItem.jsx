export const MenuItem = ({ name, price, OnOrder }) => {
  return (
    <div>
      <span>
        {name}-{price}
      </span>
      <button onClick={() => OnOrder(name, price)}>Order</button>
    </div>
  );
};
