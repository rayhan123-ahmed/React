export const UserDetails = ({ name, isOnline, hideOffline }) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  if (isOnline) {
    return (
      <div>
        <h1>{name}</h1>
        <span>🟢 online</span>
        <p>availbale for text</p>
        <button>send a massage</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{name}</h1>
        <span>🔴 offline</span>
        <p>Not availbale</p>
        <button>Cheack back later</button>
      </div>
    );
  }
  
};
