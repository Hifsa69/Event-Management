import "./Highlights.css";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaStar } from "react-icons/fa";

function Highlights() {
  return (
    <section className="highlights">

      <h2>Why Choose EventHub?</h2>

      <div className="highlights-grid">

        <div className="highlight-card">
          <FaCalendarAlt className="icon" />
          <h3>50+ Events</h3>
          <p>Attend exciting conferences, workshops and seminars every month.</p>
        </div>

        <div className="highlight-card">
          <FaUsers className="icon" />
          <h3>10K+ Visitors</h3>
          <p>Thousands of students and professionals join our events.</p>
        </div>

        <div className="highlight-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Multiple Cities</h3>
          <p>Events organized in Islamabad, Lahore, Karachi and more.</p>
        </div>

        <div className="highlight-card">
          <FaStar className="icon" />
          <h3>Top Rated</h3>
          <p>Highly rated by attendees for quality and networking.</p>
        </div>

      </div>

    </section>
  );
}

export default Highlights;