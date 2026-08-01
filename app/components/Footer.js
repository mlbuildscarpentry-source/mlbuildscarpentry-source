import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
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
          <h3>Follow Us</h3>

<a
  href="https://www.instagram.com/mlbuildscarpentry"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram /> Instagram
</a>

<a
  href="https://www.facebook.com/profile.php?id=61572682347568"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebook /> Facebook
</a>

<a
  href="YOUR GOOGLE BUSINESS LINK"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGoogle /> Google Reviews
</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MLBUILDS Carpentry • Quality Craftsmanship That Speaks for Itself.
      </div>

    </footer>
  );
}
