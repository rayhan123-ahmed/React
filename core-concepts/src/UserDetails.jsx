export const UserDetails = ({ name, isOnline, hideOffline,isPremimum,isNew }) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {isPremimum && <span>⭐</span>}
      {isNew && <span>🎇</span>}
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
