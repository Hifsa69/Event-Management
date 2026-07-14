import "./About.css";
import { FaUsers, FaBullseye, FaRocket } from "react-icons/fa";
import PageTransition from "../../components/PageTransition/PageTransition";
function About() {
  return (
    <PageTransition>
    <section className="about">

      <div className="about-header">
        <h1>About EventHub</h1>

        <p>
          EventHub is a modern event management platform designed to
          connect people through conferences, workshops, seminars,
          hackathons and community meetups.
        </p>
      </div>

      <div className="about-cards">

        <div className="about-card">
          <FaRocket className="about-icon" />
          <h3>Our Mission</h3>
          <p>
            To simplify event discovery and provide an engaging
            experience for organizers and attendees.
          </p>
        </div>

        <div className="about-card">
          <FaBullseye className="about-icon" />
          <h3>Our Vision</h3>
          <p>
            Become the leading platform for discovering educational
            and professional events.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Community</h3>
          <p>
            Thousands of students, developers and professionals
            trust our platform every year.
          </p>
        </div>

      </div>

    </section>
    </PageTransition>
  );
}

export default About;