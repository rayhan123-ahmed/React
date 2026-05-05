export const CardWrapper = ({title, children: detail})=>{
    return (
      <div className="card">
        <h1>{title}</h1>
        <p className="card-content">{detail}</p>
      </div>
    );
} 