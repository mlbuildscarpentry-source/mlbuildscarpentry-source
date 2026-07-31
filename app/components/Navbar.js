export default function Navbar() {
  return (
    <nav>
      <a href="/" aria-label="MLBUILDS homepage">
        <img
          src="/images/mlbuildslogo.png"
          alt="MLBUILDS Carpentry"
          className="logo"
          style={{ height: "58px", width: "auto" }}
        />
      </a>

      <div>
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Free Quote</a>
      </div>
    </nav>
  );
}
