import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>MLBUILDS Carpentry</h1>
        <h2>Built with skill. Made to last.</h2>
        <p>
          Custom carpentry, decks, renovations, framing, and exterior
          projects built with quality craftsmanship in Ottawa and surrounding areas.
        </p>

        <a href="#contact">Request a Quote</a>
      </section>

      <section id="services">
        <h2>Our Services</h2>

        <div>
          <h3>Custom Decks</h3>
          <p>Pressure treated, cedar, and composite decks designed and built to last.</p>

          <h3>Fences & Pergolas</h3>
          <p>Custom outdoor structures built for privacy, style, and durability.</p>

          <h3>Renovations</h3>
          <p>Interior and exterior renovations tailored to your home.</p>

          <h3>Framing</h3>
          <p>Structural framing, additions, and custom builds.</p>

          <h3>Garages</h3>
          <p>Detached garages and exterior structures built with precision.</p>

          <h3>Interior Finishing</h3>
          <p>Trim, stairs, flooring, feature walls, and detailed finishing work.</p>
        </div>
      </section>

      <section id="about">
  <h2>About MLBUILDS</h2>

  <p>
    MLBUILDS Carpentry is a locally owned carpentry company serving Ottawa
    and surrounding areas. As a Red Seal Carpenter, we bring professional
    experience, attention to detail, and pride in every project we build.
  </p>

  <p>
    From custom decks and exterior structures to renovations, framing,
    garages, and interior finishing, our goal is simple:
    deliver quality craftsmanship that is built to last.
  </p>
</section>

<section id="testimonial">
  <h2>What Our Clients Say</h2>

  <blockquote>
    “Marcel built our deck expansion and we are more than thrilled with the
    finished product. His attention to details is remarkable!
    We highly recommend MLBUILDS for any projects. You will not be disappointed!”
  </blockquote>

  <p>— Client Testimonial</p>
</section>

      <Gallery />

      <section id="contact">
  <h2>Start Your Project</h2>

  <p>
    Tell us about your project and we’ll get back to you.
  </p>

  <p>819-209-2541</p>

  <ContactForm />
</section>
    </main>
  );
}
