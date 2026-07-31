export default function Navbar() {
  return (
    <nav>
      <a href="/">
        <img
          src="/images/mlbuildslogo.png"
          alt="MLBUILDS Carpentry"
          className="logo"
        />
      </a>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact" className="quote-button">
          Free Quote
        </a>
      </div>
    </nav>
  );
}
