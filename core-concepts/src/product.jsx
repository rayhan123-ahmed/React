export const Product = ({ title, price, Instock, Categories }) => {
  return (
    <>
      <p>{title}</p>
      <p>Price: {price}</p>
      <p>In stock: {Instock ? "yes" : "no"}</p>
      <p>Cetagories: {Categories.join(",")}</p>
    </>
  );
};