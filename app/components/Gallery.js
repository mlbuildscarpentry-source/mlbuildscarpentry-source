const projects = [
  {
    image: "/images/hero.jpg",
    title: "Custom Build",
  },
  {
    image: "/images/IMG_4251.JPG",
    title: "Custom Deck",
  },
  {
    image: "/images/IMG_6562.JPG",
    title: "Deck Expansion",
  },
  {
    image: "/images/IMG_4370.JPG",
    title: "Exterior Carpentry",
  },
];

export default function Gallery() {
  return (
    <div className="gallery-grid">
      {projects.map((project) => (
        <figure className="project-card" key={project.image}>
          <img src={project.image} alt={project.title} />

          <figcaption>
            <h3>{project.title}</h3>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
