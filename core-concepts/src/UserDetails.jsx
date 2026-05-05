export const UserDetails = ({ name, isOnline, hideOffline,isPremimum,isNew,role }) => {
  if (hideOffline && !isOnline) {
    return null;
  }
  let roleBadge = null
   
  if (role === 'admin') {
     roleBadge = <span>🔑Admin</span>
  }else if(role === 'moderator'){
    roleBadge = <span>👮moderator</span>
  }else if(role === 'vip'){
    roleBadge = <span>💎VIP</span>
  }

  return (
    <div>
      <h2>
        {name}
        {isPremimum && <span>⭐</span>}
        {isNew && <span>🎇</span>}
        {roleBadge}
      </h2>

      <span>{isOnline ? "🟢 online" : "🔴 offline"}</span>
      <p>{isOnline ? "available for text" : "Not available"}</p>
      {isOnline ? (
        <button>send a massage</button>
      ) : (
        <small>Cheack back later</small>
      )}
    </div>
  );
  
};
