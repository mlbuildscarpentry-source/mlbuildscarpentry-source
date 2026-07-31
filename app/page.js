import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";

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
            RED SEAL CARPENTER • OTTAWA & SURROUNDING AREAS
          </p>

          <h1>
            Custom Carpentry
            <br />
            Built To Last.
          </h1>

          <p className="hero-copy">
            MLBUILDS specializes in custom decks, garages,
            framing, renovations, siding, fences,
            pergolas and fine finish carpentry.
          </p>

          <div className="hero-actions">

            <a
              href="#contact"
              className="button button-primary"
            >
              Request a Free Quote
            </a>

            <a
              href="#projects"
              className="button button-secondary"
            >
              View Projects
            </a>

          </div>

        </div>

      </section>

      {/* TRUST STRIP */}

      <section className="trust-strip">

        <div className="trust-grid">

          <div className="trust-item">
            <span className="trust-mark">◆</span>
            <span>Red Seal Carpenter</span>
          </div>

          <div className="trust-item">
            <span className="trust-mark">◆</span>
            <span>Professional Craftsmanship</span>
          </div>

          <div className="trust-item">
            <span className="trust-mark">◆</span>
            <span>Free Estimates</span>
          </div>

          <div className="trust-item">
            <span className="trust-mark">◆</span>
            <span>Ottawa & Surrounding Areas</span>
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        className="section section-light"
        id="services"
      >

        <div className="section-heading">

          <p className="eyebrow cedar-text">
            OUR SERVICES
          </p>

          <h2>
            Quality carpentry for every project.
          </h2>

          <p>
            We build beautiful spaces with careful planning,
            premium workmanship and attention to every detail.
          </p>

        </div>

        <div className="services-grid">

          <div className="service-card">
            <span className="service-number">01</span>
            <h3>Custom Decks</h3>
            <p>
              Pressure treated, cedar and composite decks.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">02</span>
            <h3>Garages</h3>
            <p>
              Detached garages and structural framing.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">03</span>
            <h3>Renovations</h3>
            <p>
              Interior and exterior renovations.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">04</span>
            <h3>Framing</h3>
            <p>
              Structural framing for additions and custom builds.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">05</span>
            <h3>Exterior Carpentry</h3>
            <p>
              Pergolas, fences, siding, railings and stairs.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">06</span>
            <h3>Interior Finishing</h3>
            <p>
              Trim, flooring, feature walls and finishing work.
            </p>
          </div>

        </div>

      </section>
        {/* ABOUT */}

      <section className="section about-section" id="about">

        <div className="about-grid">

          <div>
            <p className="eyebrow cedar-text">
              ABOUT MLBUILDS
            </p>

            <h2>
              Built with pride.
              Managed with care.
            </h2>
          </div>

          <div className="about-copy">

            <p>
              MLBUILDS Carpentry is a locally owned company serving Ottawa
              and surrounding areas. Every project receives hands-on attention,
              clear communication and a strong commitment to quality.
            </p>

            <p>
              From custom decks and garages to renovations, framing and
              interior finishing, the goal is simple: deliver a clean,
              durable result that is built to last.
            </p>

            <a href="#contact" className="text-link">
              Discuss your project →
            </a>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="section projects-section" id="projects">

        <div className="section-heading section-heading-dark">

          <p className="eyebrow cedar-text">
            SELECTED WORK
          </p>

          <h2>
            Recent MLBUILDS projects.
          </h2>

          <p>
            Real work completed for homeowners in Ottawa
            and surrounding areas.
          </p>

        </div>

        <Gallery />

      </section>
        {/* TESTIMONIAL */}

      <section className="section testimonial-section" id="testimonial">
        <div className="testimonial-card">
          <div className="stars" aria-label="Five-star testimonial">
            ★★★★★
          </div>

          <blockquote>
            “Marcel built our deck expansion and we are more than thrilled with
            the finished product. His attention to detail is remarkable. We
            highly recommend MLBUILDS for any projects. You will not be
            disappointed!”
          </blockquote>

          <p className="testimonial-author">
            — MLBUILDS client
          </p>
        </div>
      </section>

      {/* CONTACT */}

      <section className="section contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-intro">
            <p className="eyebrow cedar-text">
              START YOUR PROJECT
            </p>

            <h2>
              Tell us what you are planning.
            </h2>

            <p>
              Share a few details and MLBUILDS will follow up to discuss the
              project, timing, and next steps.
            </p>

            <div className="contact-details">
              <a href="tel:+18192092541">
                819-209-2541
              </a>

              <a href="mailto:mlbuildscarpentry@gmail.com">
                mlbuildscarpentry@gmail.com
              </a>

              <span>
                Ottawa & surrounding areas
              </span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

    </main>
  );
}
