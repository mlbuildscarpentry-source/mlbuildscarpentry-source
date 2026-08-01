export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>MLBUILDS Carpentry</h3>
          <p>
            Red Seal Carpenter providing custom decks, garages,
            renovations, framing, exterior carpentry, and interior
            finishing throughout Ottawa and surrounding areas.
          </p>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Custom Decks</li>
            <li>Garages</li>
            <li>Renovations</li>
            <li>Framing</li>
            <li>Exterior Carpentry</li>
            <li>Interior Finishing</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>

          <p>📞 819-209-2541</p>

          <p>✉️ mlbuildscarpentry@gmail.com</p>

          <p>📍 Ottawa & Surrounding Areas</p>

          <p>✔ Fully Insured</p>

          <p>✔ Free Estimates</p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>

          <p>
            <a
              href="https://www.instagram.com/mlbuildscarpentry"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>

          <p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MLBUILDS Carpentry • Built with pride. Made to last.
      </div>
    </footer>
  );
}
