import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";

const services = [
  {
    number: "01",
    title: "Custom Decks",
    text: "Pressure-treated, cedar, and composite decks designed for your home and built to last.",
  },
  {
    number: "02",
    title: "Garages",
    text: "Detached garages, accessory buildings, and structural framing completed with precision.",
  },
  {
    number: "03",
    title: "Renovations",
    text: "Interior and exterior renovations planned around your home, goals, and budget.",
  },
  {
    number: "04",
    title: "Framing",
    text: "Structural framing for additions, garages, renovations, and custom residential builds.",
  },
  {
    number: "05",
    title: "Exterior Carpentry",
    text: "Pergolas, fences, siding, stairs, railings, and durable outdoor structures.",
  },
  {
    number: "06",
    title: "Interior Finishing",
    text: "Trim, doors, flooring, stairs, feature walls, and detailed finishing work.",
  },
];

const trustItems = [
  "✓ Red Seal Carpenter",
  "✓ Fully Insured",
  "✓ Free Estimates",
  "✓ Serving Ottawa & Surrounding Areas",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <img
          src="/images/hero.jpg"
          alt="Custom carpentry project completed by MLBUILDS"
          className="hero-image"
        />

        <div className="hero-overlay" />

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
    exterior carpentry, and interior finishing, MLBUILDS delivers
    exceptional workmanship with attention to detail, honest
    communication, and results built to last.
  </p>

  <div className="hero-actions">
    <a href="#contact" className="button button-primary">
      Get a Free Quote
    </a>

    <a href="#projects" className="button button-secondary">
      View Our Work
    </a>
  </div>
</div>
      </section>

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

      <section className="section section-light" id="services">
        <div className="section-heading">
          <p className="eyebrow cedar-text">Our Services</p>

          <h2>Quality carpentry for every stage of your project.</h2>

          <p>
            From structural work to the finishing details, MLBUILDS delivers
            practical, durable solutions with a clean professional result.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-grid">
          <div>
            <p className="eyebrow cedar-text">About MLBUILDS</p>

            <h2>
              Built with pride.
              <br />
              Managed with care.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              MLBUILDS Carpentry is a locally owned company serving Ottawa and
              surrounding areas. Every project receives hands-on attention,
              clear communication, and a strong commitment to quality.
            </p>

            <p>
              Whether you are planning a custom deck, garage, renovation,
              framing project, or detailed interior finishing, the goal is
              simple: deliver a clean, durable result that is built to last.
            </p>

            <a href="#contact" className="text-link">
              Discuss your project →
            </a>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="projects-heading">
          <div>
            <p className="eyebrow cedar-text">Our Work</p>
            <h2>Featured Projects</h2>
          </div>

          <p>
            A compact selection of custom decks, renovations, exterior work,
            and finished carpentry completed by MLBUILDS.
          </p>
        </div>

        <Gallery />
      </section>

     <section className="section testimonial-section" id="testimonial">
  <div className="testimonial-card">
    <div className="stars" aria-label="Five-star testimonial">
      ★★★★★
    </div>

    <blockquote>
      "Marcel built our deck expansion and we are more than thrilled with
      the finished product. His attention to detail is remarkable. We
      highly recommend MLBUILDS for any projects. You will not be
      disappointed!"
    </blockquote>

    <div className="testimonial-author">
      <strong>— Dennis Britt</strong>
      <br />
      <span>Deck Expansion • Ottawa, ON</span>
      <br />
      <span>★★★★★ Verified Client</span>
    </div>
  </div>
</section>

      <section className="section contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-intro">
            <p className="eyebrow cedar-text">Start Your Project</p>

            <h2>Tell us what you are planning.</h2>

            <p>
              Share a few details and MLBUILDS will follow up to discuss your
              project, timing, and next steps.
            </p>

            <div className="contact-details">
              <a href="tel:+18192092541">819-209-2541</a>

              <a href="mailto:mlbuildscarpentry@gmail.com">
                mlbuildscarpentry@gmail.com
              </a>

              <span>Ottawa & surrounding areas</span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
                <Footer />
    </main>
  );
}
