import '../styles/card.css';

function Card({ item }) {
  return (
    <div
      className="card"
      onClick={() => item.url && window.open(item.url)}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="card-img"
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