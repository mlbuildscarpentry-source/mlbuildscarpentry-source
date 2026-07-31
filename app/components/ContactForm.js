export default function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/mnjekapn"
      method="POST"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
      />

      <select name="project">
        <option>Project Type</option>
        <option>Deck</option>
        <option>Fence</option>
        <option>Pergola</option>
        <option>Renovation</option>
        <option>Garage</option>
        <option>Interior Finishing</option>
        <option>Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows="5"
      />

      <button type="submit">
        Request a Quote
      </button>
    </form>
  );
}
