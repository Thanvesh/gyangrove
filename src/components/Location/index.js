import React, { useState, useEffect } from 'react';
import { FaAngleRight,FaMapPin } from "react-icons/fa6";
const Location = ({className}) => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(data => {
            setLocation(`${data.city}, ${data.countryName}`);
          })
          .catch(error => {
            console.error('Error fetching location:', error);
            setLocation('Unknown Location');
          });
      }, (error) => {
        console.error('Error getting location:', error);
        setLocation('Unknown Location');
      });
    } else {
      setLocation('Geolocation is not supported');
    }
  }, []);

  return (
    <div className={className}>
        <div className="location-text-container">
            <FaMapPin/> <p className="location-text">{location}</p>
        </div>
        <FaAngleRight className="left-arrow" />
      
    </div>
  );
};

export default Location;
