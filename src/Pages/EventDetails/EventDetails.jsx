import "./EventDetails.css";
import { useParams } from "react-router-dom";
import events from "../../Data/events";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return <h2 className="not-found">Event Not Found</h2>;
  }

  return (
    <section className="event-details">

      <div className="details-image">
        <img src={event.image} alt={event.title} />
      </div>

      <div className="details-content">

        <span className="badge">
          {event.category}
        </span>

        <h1>{event.title}</h1>

        <p><strong>📅 Date:</strong> {event.date}</p>

        <p><strong>📍 Location:</strong> {event.location}</p>

        <p className="description">
          {event.description}
        </p>

        <button>
          Book Your Seat
        </button>

      </div>

    </section>
  );
}

export default EventDetails;