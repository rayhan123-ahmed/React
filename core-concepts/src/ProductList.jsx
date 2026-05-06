export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Mobile",
      price: 999,
    },
    {
      id: 2,
      name: "Laptop",
      price: 59,
    },
    {
      id: 3,
      name: "PC",
      price: 899,
    },
  ];
  const productsEl = products
    .filter((product) => {
      return product.price > 500
    })
    .map((product) => {
      return (
        <div>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Our Product</h2>
      {productsEl}
    </div>
  );
};
