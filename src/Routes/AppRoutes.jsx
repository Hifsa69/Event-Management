import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;