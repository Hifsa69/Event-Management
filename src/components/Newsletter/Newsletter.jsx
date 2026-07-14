import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-box">

        <h2>Stay Updated</h2>

        <p>
          Subscribe to our newsletter and never miss upcoming events,
          workshops, and conferences.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;;