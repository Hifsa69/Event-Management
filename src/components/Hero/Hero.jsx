import "./Hero.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCalendarAlt,
  FaUsers,
  FaStar,
  FaPlay,
  FaTimes,
} from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="hero">

        {/* Left Side */}
        <div className="hero-content">

          <span className="hero-badge">
            ✨ Pakistan's #1 Event Platform
          </span>

          <h1>
            Discover <br />
            <span>Amazing Events</span> <br />
            Around You
          </h1>

          <p>
            Find conferences, workshops, seminars, hackathons,
            concerts and unforgettable experiences—all in one place.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/events")}
            >
              Explore Events
            </button>

            <button
              className="secondary-btn"
              onClick={() => setShowVideo(true)}
            >
              <FaPlay />
              <span>Watch Video</span>
            </button>

          </div>

          {/* Stats */}

          <div className="hero-stats">

            <div className="stat-box">
              <h2>150+</h2>
              <p>Events</p>
            </div>

            <div className="stat-box">
              <h2>20K+</h2>
              <p>Visitors</p>
            </div>

            <div className="stat-box">
              <h2>500+</h2>
              <p>Speakers</p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=900"
            alt="Event"
          />

          <div className="floating-card card1">
            <FaCalendarAlt />
            <div>
              <h4>25+ Events</h4>
              <p>This Month</p>
            </div>
          </div>

          <div className="floating-card card2">
            <FaUsers />
            <div>
              <h4>20K+</h4>
              <p>Visitors</p>
            </div>
          </div>

          <div className="floating-card card3">
            <FaStar />
            <div>
              <h4>4.9 Rating</h4>
              <p>Top Reviews</p>
            </div>
          </div>

        </div>

      </section>

      {/* Video Modal */}

      {showVideo && (
        <div
          className="video-modal"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="video-container"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-video"
              onClick={() => setShowVideo(false)}
            >
              <FaTimes />
            </button>

            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/L7TkhWmoSkM"
              title="Event Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </div>
      )}

    </>
  );
}

export default Hero;