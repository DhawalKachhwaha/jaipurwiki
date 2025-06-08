import '../styles/card.css';

function Card({ item }) {
  const handleClick = () => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div
      className="card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="card-img"
          loading="lazy"
        />
      )}
      <div className="card-content">
        {item.icon && <div className="icon">{item.icon}</div>}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.date && <p className="date">{item.date}</p>}
        {item.url && <p className="learn-more">Learn More →</p>}
      </div>
    </div>
  );
}

export default Card;