import React, { useState, useEffect } from 'react';
import './index.css';
import Loader from '../Loader';

const Upcoming = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      if (page > 5) {
        setHasMore(false);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);
        const data = await response.json();
        if (data.events.length === 0) {
          setHasMore(false);
          return;
        }
        setUpcomingEvents(prevEvents => [...prevEvents, ...data.events]);
        setLoading(false);
        setPage(prevPage => prevPage + 1);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }
      if (!loading && hasMore) {
        fetchUpcomingEvents();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, loading, hasMore]);

  return (
    <div className="upcoming-container">
      <h1>Upcoming Events</h1>
      <div className="upcoming-events-container">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.imgUrl} alt="Event" className="event-image" />
            <div className="event-details">
              <div className="event-info">
                <p className="event-name">{event.eventName}</p>
                <p className="event-location">{event.cityName}</p>
              </div>
              <div className="event-meta">
                <p className="weather">{event.weather}</p>
                <p className="distance">{event.distanceKm} km</p>
              </div>
            </div>
          </div>
        ))}
        {loading && <Loader />}
        {!hasMore && <p>No more events to load</p>}
      </div>
    </div>
  );
};

export default Upcoming;
