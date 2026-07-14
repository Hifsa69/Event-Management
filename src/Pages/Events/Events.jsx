import "./Events.css";
import { useState } from "react";

import events from "../../Data/events";
import EventCard from "../../components/EventCard/EventCard";
import PageTransition from "../../components/PageTransition/PageTransition";

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(6);

  const filteredEvents = events.filter((event) => {
    const matchSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || event.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <PageTransition>
    <section className="events">

      <h1>All Events</h1>

      <div className="events-controls">

        <input
          type="text"
          placeholder="Search Events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Upcoming</option>
          <option>Past</option>
        </select>

      </div>

      <div className="events-grid">

        {filteredEvents
          .slice(0, visible)
          .map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
        ))}

      </div>

      {visible < filteredEvents.length && (

        <div className="load-more">

          <button
            onClick={() => setVisible(visible + 3)}
          >
            Load More
          </button>

        </div>

      )}

    </section>
    </PageTransition>
  );
}

export default Events;