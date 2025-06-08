import CardSection from './CardSection';
import { getinData, placesData, eventsData, transportData, emergencyData } from '../data/data';
import '../styles/dataSections.css';

const sections = [
  { id: 'getting-around', title: 'Getting In', data: getinData },
  { id: 'transportation', title: 'Transportation', data: transportData },
  { id: 'places', title: 'Places to Visit', data: placesData },
  { id: 'events', title: 'Upcoming Events', data: eventsData },
  { id: 'emergency', title: 'Emergency Information', data: emergencyData, isEmergency: true }
];

function DataSections() {
  return (
    <div className="data-sections-container">
      {sections.map(section => (
        <CardSection
          key={section.id}
          id={section.id}
          title={section.title}
          data={section.data}
          isEmergency={section.isEmergency}
        />
      ))}
    </div>
  );
}

export default DataSections;
