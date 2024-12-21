import './Weather.scss';
import halfSun from '../../Assets/halfSun.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState({ lat: 48.8566, lon: 2.3522 }); // Paris par défaut
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les données météo en fonction des coordonnées
  const fetchWeatherData = (lat, lon) => {
    setLoading(true);
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&current_weather=true&timezone=Europe/Paris`
      )
      .then(response => {
        setWeatherData(response.data);
        setLoading(false);
        setError(null);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setError("Une erreur s'est produite lors de la récupération des données météo.");
      });
  };

  // Effect pour récupérer les données météo initiales (Paris par défaut)
  useEffect(() => {
    fetchWeatherData(location.lat, location.lon);
  }, [location]);

  // Fonction pour rechercher une ville et mettre à jour les coordonnées
  const handleSearch = () => {
    if (!search.trim()) {
      setError('Veuillez entrer un nom de ville.');
      return;
    }
    setError(null);
    axios
      .get(`https://nominatim.openstreetmap.org/search?q=${search}&format=json&limit=1`)
      .then(response => {
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setLocation({ lat: parseFloat(lat), lon: parseFloat(lon) });
        } else {
          setError('Ville non trouvée.');
        }
      })
      .catch(error => {
        console.log(error);
        setError("Une erreur s'est produite lors de la recherche de la ville.");
      });
  };

  // Affichage pendant le chargement
  if (loading) {
    return <p>Chargement...</p>;
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <div className="Weather-container">
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={() => setError(null)}>Réessayer</button>
      </div>
    );
  }

  return (
    <div className="Weather-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Entrez un lieu"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
        </button>
      </div>
      {weatherData && (
        <div className="weather-item">
          <div>
            <h2>{search || 'Paris'}</h2>
            <h2>{weatherData.current_weather.temperature}°C</h2>
          </div>
          <img src={halfSun} alt="Weather Icon" />
        </div>
      )}
    </div>
  );
}

export default Weather;
