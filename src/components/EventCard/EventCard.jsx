import "./EventCard.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function EventCard({ event }) {
  return (
    <motion.div
      className="event-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="event-image">

        <img src={event.image} alt={event.title} />

        <span className="event-category">
          {event.category}
        </span>

      </div>

      <div className="event-content">

        <h3>{event.title}</h3>

        <p className="event-date">
          <FaCalendarAlt />
          {event.date}
        </p>

        <p className="event-location">
          <FaMapMarkerAlt />
          {event.location}
        </p>

        <Link to={`/events/${event.id}`}>
          <button>View Details</button>
        </Link>

      </div>
    </motion.div>
  );
}

export default EventCard;