import "./FeaturedEvents.css";

import events from "../../Data/Events";
import EventCard from "../EventCard/EventCard";

function FeaturedEvents() {

  const featured = events.slice(0, 3);

  return (
    <section className="featured">

      <h2>Featured Events</h2>

      <div className="featured-grid">

        {featured.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedEvents;