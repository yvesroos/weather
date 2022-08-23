import createPersistedState from 'use-persisted-state';
import { SearchItem } from '../../components/SearchInput';
import { Section } from '../../components/Section';
import { Coord, SimpleLocationCoordinates } from '../../types/Location';
import Search from '../Search';
import WeatherSection from '../WeatherSection';
const useLocationsState =
  createPersistedState<SimpleLocationCoordinates[]>('locations');

const App = () => {
  const [locations, setLocations] = useLocationsState([]);

  const handleSelectItem = (selectedItem: SearchItem) => {
    const value = selectedItem.value as Coord;
    setLocations([
      ...locations,
      {
        latitude: parseFloat(value.lat),
        longitude: parseFloat(value.lon),
      },
    ]);
  };

  const handleCloseWeatherSection = (indexToRemove: number) => () => {
    setLocations((locations) =>
      locations.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <Section>
        <h2>Your current location</h2>
        <WeatherSection currentLocation />
      </Section>
      <Section>
        <h2>Look for new cities:</h2>
        <Search onSelectItem={handleSelectItem} />
      </Section>
      {locations.map((location, index) => (
        <Section key={JSON.stringify(location)}>
          <WeatherSection
            key={`weather_${index}`}
            location={location}
            onClose={handleCloseWeatherSection(index)}
          />
        </Section>
      ))}
    </div>
  );
};

export default App;
