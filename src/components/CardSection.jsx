import { useRef, useEffect } from 'react';
import Card from './Card';
import '../styles/card.css';

function CardSection({ title, data, id }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (id !== 'events' && id !== 'places') return;
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY * 5, behavior: 'smooth' });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [id]);

  return (
    <section id={id} className="card-section">
      <h2 className="section-title">{title}</h2>
      <div ref={containerRef} className="card-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default CardSection;