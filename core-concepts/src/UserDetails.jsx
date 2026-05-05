export const UserDetails = ({ name, isOnline, hideOffline }) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <span>{isOnline ? "🟢 online" : "🔴 offline"}</span>
      <p>{isOnline ? "availbale for text" : "Not availbale"}</p>
      {isOnline ? (
        <button>send a massage</button>
      ) : (
        <small>Cheack back later</small>
      )}
    </div>
  );
  
};
