export const NameList = () => {
  const Names = ["rayhan", "ahmed", "rifat"];

  const NamesEl = Names.map((name, index) => {
    return (
      <div>
        <h2 key={index}>
          {index} {name}
        </h2>
      </div>
    );
  });
  return <div>{NamesEl}</div>;
};
