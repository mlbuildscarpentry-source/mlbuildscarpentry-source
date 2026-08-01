export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <img
            src="/images/mlbuildslogo.png"
            alt="MLBUILDS Carpentry"
            className="footer-logo"
          />

          <p>
            Quality craftsmanship that speaks for itself.
            Proudly serving Ottawa and surrounding areas.
          </p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <a href="#services">Custom Decks</a>
          <a href="#services">Garages</a>
          <a href="#services">Renovations</a>
          <a href="#services">Framing</a>
          <a href="#services">Exterior Carpentry</a>
          <a href="#services">Interior Finishing</a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>📞 819-209-2541</p>

          <p>✉️ mlbuildscarpentry@gmail.com</p>

          <p>📍 Ottawa & Surrounding Areas</p>

          <p>✔ Fully Insured</p>

          <p>✔ Free Estimates</p>
        </div>

        <div className="footer-column">
  <h4>Follow Us</h4>

  <a
    href="https://www.facebook.com/profile.php?id=61572682347568"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/images/icons/facebook.png" alt="Facebook" width="26" height="26" />
    Facebook
  </a>

  <a
    href="https://www.instagram.com/mlbuildscarpentry"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/images/icons/instagram.png" alt="Instagram" width="26" height="26" />
    Instagram
  </a>

  <a
    href="https://g.page/r/CTPxY7iRNEeREBM/review"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/images/icons/google.png" alt="Google Reviews" width="26" height="26" />
    Google Reviews
  </a>
</div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MLBUILDS Carpentry • Quality Craftsmanship That Speaks for Itself.
      </div>

    </footer>
  );
}
