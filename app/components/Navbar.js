export default function Navbar() {
  return (
    <nav>
      <div>
        <img
  src="/images/mlbuildslogo.png"
  alt="MLBUILDS Carpentry"
  className="logo"
  style={{ height: "35px", width: "auto" }}
/>
      </div>

      <div>
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
