export const Greeting = ({name = 'Rayhan', massage = 'good morning'})=> {
    return (
      <h2>
        {massage},{name}
      </h2>
    );
}