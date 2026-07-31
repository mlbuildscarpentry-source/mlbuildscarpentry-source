const projects = [
  {
    image: "/images/hero.jpg",
    title: "Custom Feature Wall",
  },
  {
    image: "/images/IMG_4251.JPG",
    title: "Custom Deck/Stairs",
  },
  {
    image: "/images/IMG_6562.JPG",
    title: "Roof Restoration",
  },
  {
    image: "/images/IMG_4370.JPG",
    title: "Privacy Fence",
  },
];

export default function Gallery() {
  return (
    <div className="gallery-grid">
      {projects.map((project) => (
        <figure className="project-card" key={project.image}>
          <div className="project-image-wrap">
            <img src={project.image} alt={project.title} />
            <div className="project-label">
              <h3>{project.title}</h3>
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
}
