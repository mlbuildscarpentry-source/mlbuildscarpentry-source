const projects = [
  {
    image: "/images/IMG_4251.JPG",
    title: "Custom Carpentry",
  },
  {
    image: "/images/IMG_6562.JPG",
    title: "Deck Construction",
  },
  {
    image: "/images/IMG_4370.JPG",
    title: "Exterior Carpentry",
  },
  {
    image: "/images/JPEG image-4FD0-85C1-7B-0.jpeg",
    title: "Custom Build",
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
