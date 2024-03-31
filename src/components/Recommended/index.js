import React from 'react';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';

const RecommendedEvents= ({ events }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  // Adjust slider settings for mobile screens
  if (window.innerWidth <= 768) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="recommendation-container">
        <div className="header">
            <h1>Recommendation Events</h1>
            <div className="actions">
                <span className="see-all">See All</span>
                <i className="arrow-icon fas fa-chevron-right"></i>
            </div>
        </div>
        <Slider {...settings}>
            {events.map((event, index) => (
                <LazyLoad key={index} height={200} offset={100}>
                    <div>
                        <div className="event-card">
                            <div className="image" style={{ backgroundImage: `url(${event.imgUrl})` }}>
                            <div className="event-details">
                                <h3 className="event-name">{event.eventName}</h3>
                                <div className="location">
                                <i className="fa fa-map-marker"></i>
                                <span className="city">{event.cityName}</span>
                                </div>
                            </div>
                            <div className="date">{event.date}</div>
                            </div>
                            <div className="weather">{event.weather}</div>
                            <div className="distance">{event.distanceKm} km</div>
                        </div>
                    </div>
                </LazyLoad>
            ))}
        </Slider>
    </div>
        
  );
};

export default RecommendedEvents;
