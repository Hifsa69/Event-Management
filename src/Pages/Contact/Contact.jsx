import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import PageTransition from "../../components/PageTransition/PageTransition";

function Contact() {
  return (
    <PageTransition>
      <section className="contact">

        <div className="contact-header">

          <h1>Get In Touch</h1>

          <p>
            We'd love to hear from you. Whether you have a question,
            feedback or want to collaborate, feel free to contact us.
          </p>

        </div>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Address</h3>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>info@eventhub.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaClock className="icon" />
              <div>
                <h3>Working Hours</h3>
                <p>Mon - Fri : 9 AM - 6 PM</p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </section>
    </PageTransition>
  );
}

export default Contact;