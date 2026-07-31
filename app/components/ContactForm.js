export default function ContactForm() {
  return (
    <form className="contact-form">
      <input
        type="text"
        placeholder="Your Name"
        name="name"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
      />

      <input
        type="email"
        placeholder="Email Address"
        name="email"
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
        placeholder="Tell us about your project"
        name="message"
        rows="5"
      />

      <button type="submit">
        Request a Quote
      </button>
    </form>
  );
}
