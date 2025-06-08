import { useRef, useState, useEffect } from 'react';
import Card from './Card';
import '../styles/card.css';

function CardSection({ title, data, id, isEmergency }) {
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 350;
      const currentScroll = containerRef.current.scrollLeft;
      containerRef.current.scrollTo({
        left: currentScroll + (direction === 'right' ? scrollAmount : -scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      const observer = new ResizeObserver(checkScroll);
      observer.observe(container);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        observer.disconnect();
      };
    }
  }, []);

  const isScrollSection = id === 'events' || id === 'places';

  return (
    <section id={id} className="card-section">
      <h2 className="section-title">{title}</h2>
      {isScrollSection ? (
        <div className="scroll-section-wrapper">
          <div className="button-container">
            <button
              className="scroll-button"
              onClick={() => scroll('left')}
              disabled={!showLeftButton}
              aria-label="Scroll left"
            >←</button>
          </div>
          <div ref={containerRef} className="card-container" onScroll={checkScroll}>
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <div className="button-container">
            <button
              className="scroll-button"
              onClick={() => scroll('right')}
              disabled={!showRightButton}
              aria-label="Scroll right"
            >→</button>
          </div>
        </div>
      ) : (
        <div className="card-scroll-wrapper">
          <div className={`card-container ${isEmergency ? 'emergency-grid' : ''}`}>
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default CardSection;
