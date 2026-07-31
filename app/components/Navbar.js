export default function Navbar() {
  return (
    <nav className="site-nav">
      <a href="#home" className="brand">
        <img
          src="/images/mlbuildslogo.png"
          alt="MLBUILDS Carpentry"
          className="logo"
          style={{ height: "56px", width: "auto" }}
        />
      </a>

      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact" className="nav-cta">
          Free Quote
        </a>
      </div>
    </nav>
  );
}
