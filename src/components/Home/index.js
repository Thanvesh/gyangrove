// Home.js

import React, { useState, useEffect } from 'react';
import "./index.css"
import RecommendedEvents from '../Recommended';
import Header from "../Header"
import Location from "../Location"
import Upcoming from "../Upcoming"

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data
    fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
      .then(response => response.json())
      .then(data => {
        setEvents(data.events);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const bannerImage=()=>(
    <div className="home-container">
        <Header/>
        <nav className="top-navbar">
            <div className="current-location">
                <Location />
            </div>
            <ul className="nav-links">
                <li><a href="#">Live Shows</a></li>
                <li><a href="#">Streams</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Plays</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Activities</a></li>
            </ul>
        </nav>

        {/* Banner */}
        <div className="banner">
            <img src={'../images/banner.svg'} alt="Banner" />
            <div className="banner-content">
                <h2>Discover Exciting Events Happening Near You</h2>
                <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.</p>
            </div>
        </div>

        <RecommendedEvents events={events} />
  </div>
  )

  return (
    <>
      {bannerImage()}
      <Upcoming/>
    </>
  );
};

export default Home;
