import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";

const services = [
  {
    number: "01",
    title: "Custom Decks",
    text: "Pressure-treated, cedar and composite decks built to last.",
  },
  {
    number: "02",
    title: "Garages",
    text: "Custom garages and structural framing completed with precision.",
  },
  {
    number: "03",
    title: "Renovations",
    text: "Interior and exterior renovations tailored to your home.",
  },
  {
    number: "04",
    title: "Framing",
    text: "Structural framing for additions, garages and custom homes.",
  },
  {
    number: "05",
    title: "Exterior Carpentry",
    text: "Pergolas, fences, siding, railings and stairs.",
  },
  {
    number: "06",
    title: "Interior Finishing",
    text: "Trim, flooring, feature walls, stair finishing and custom details.",
  },
];

const trustItems = [
  "Red Seal Carpenter",
  "Fully Insured",
  "Free Estimates",
  "Serving Ottawa & Surrounding Areas",
];

export default function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="hero" id="home">

        <img
          src="/images/hero.jpg"
          alt="MLBUILDS Carpentry"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-inner">

          <p className="eyebrow">
            RED SEAL CARPENTER • DECKS • GARAGES • RENOVATIONS • OTTAWA
          </p>

          <h1>
            Quality Craftsmanship
            <br />
            That Speaks for Itself.
          </h1>

          <p className="hero-copy">
            From custom decks and garages to renovations, framing,
            exterior carpentry and interior finishing,
            MLBUILDS delivers exceptional workmanship
            with attention to detail, honest communication,
            and results built to last.
          </p>

          <div className="hero-actions">

            <a
              href="#contact"
              className="button button-primary"
            >
              Get a Free Quote
            </a>

            <a
              href="#projects"
              className="button button-secondary"
            >
              View Our Work
            </a>

          </div>

        </div>

      </section>
        {/* TRUST STRIP */}

      <section className="trust-strip" aria-label="Why choose MLBUILDS">
        <div className="trust-grid">
          {trustItems.map((item) => (
            <div className="trust-item" key={item}>
              <span className="trust-mark">◆</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}

      <section className="section section-light" id="services">

        <div className="section-heading">

          <p className="eyebrow cedar-text">
            Our Services
          </p>

          <h2>
            Quality carpentry for every stage of your project.
          </h2>

          <p>
            From structural work to the finishing details,
            MLBUILDS delivers practical, durable solutions
            with a clean professional result.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.title}
            >

              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

            </article>

          ))}

        </div>

      </section>
      {/* ABOUT */}

      <section className="section about-section" id="about">

        <div className="about-grid">

          <div>

            <p className="eyebrow cedar-text">
              About MLBUILDS
            </p>

            <h2>
              Built with pride.
              <br />
              Managed with care.
            </h2>

          </div>

          <div className="about-copy">

            <p>
              MLBUILDS Carpentry is a locally owned company proudly serving
              Ottawa and surrounding areas. Every project receives hands-on
              attention, honest communication, and exceptional craftsmanship.
            </p>

            <p>
              Whether you're planning a custom deck, garage, renovation,
              framing project, or interior finishing, our goal is simple:
              deliver a result that is built to last.
            </p>

            <a href="#contact" className="text-link">
              Discuss your project →
            </a>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="section projects-section" id="projects">

        <div className="projects-heading">

          <div>

            <p className="eyebrow cedar-text">
              Our Work
            </p>

            <h2>
              Featured Projects
            </h2>

          </div>

          <p>
            A selection of custom decks, renovations, garages,
            framing, exterior carpentry and interior finishing
            completed by MLBUILDS.
          </p>

        </div>

        <Gallery />

      </section>
      {/* TESTIMONIAL */}

      <section className="section testimonial-section" id="testimonial">

        <div className="testimonial-card">

          <div
            className="stars"
            aria-label="Five-star testimonial"
          >
            ★★★★★
          </div>

          <blockquote>
            "Marcel built our deck expansion and we are more than thrilled
            with the finished product. His attention to detail is
            remarkable! We highly recommend MLBUILDS for any projects.
            You will not be disappointed."
          </blockquote>

          <div className="testimonial-author">

            <strong>Dennis Britt</strong>

            <span>
              Deck Expansion • Ottawa, ON
            </span>

            <span className="verified-review">
              ✓ Verified Google Review
            </span>

          </div>

        </div>

      </section>
      {/* CONTACT */}

      <section className="section contact-section" id="contact">

        <div className="contact-grid">

          <div className="contact-intro">

            <p className="eyebrow cedar-text">
              Start Your Project
            </p>

            <h2>
              Tell us what you are planning.
            </h2>

            <p>
              Share a few details about your project and MLBUILDS will
              contact you to discuss the scope, timeline and provide a
              free estimate.
            </p>

            <div className="contact-details">

              <a href="tel:+18192092541">
                📞 819-209-2541
              </a>

              <a href="mailto:mlbuildscarpentry@gmail.com">
                ✉️ mlbuildscarpentry@gmail.com
              </a>

              <span>
                📍 Ottawa & Surrounding Areas
              </span>

              <span>
                ✔ Fully Insured
              </span>

              <span>
                ✔ Free Estimates
              </span>

            </div>

          </div>

          <ContactForm />

        </div>

      </section>

      <Footer />

      {/* FLOATING BUTTONS */}

      <div className="floating-actions">

        <a
          href="tel:+18192092541"
          className="floating-call"
        >
          📞 Call Now
        </a>

        <a
          href="#contact"
          className="floating-quote"
        >
          ✏️ Free Quote
        </a>

      </div>
    </main>
  );
}
