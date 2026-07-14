import "./Gallery.css";
import { useState } from "react";
import gallery from "../../Data/gallery";
import PageTransition from "../../components/PageTransition/PageTransition";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <PageTransition>
      <section className="gallery">

        <h1>Event Gallery</h1>

        <p className="gallery-subtitle">
          Explore unforgettable moments from our conferences,
          workshops, seminars, networking events and community meetups.
        </p>

        <div className="gallery-grid">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImage(item.image)}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <h3>{item.title}</h3>

                <p>📷 Click to View</p>

              </div>

            </div>

          ))}

        </div>

        {/* Image Modal */}

        {selectedImage && (

          <div
            className="modal"
            onClick={() => setSelectedImage(null)}
          >

            <img
              src={selectedImage}
              alt="Selected Event"
            />

          </div>

        )}

      </section>
    </PageTransition>
  );
}

export default Gallery;