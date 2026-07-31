export default function Gallery() {
  const projects = [
    {
      image: "/images/IMG_4251.JPG",
      title: "Custom Carpentry Project",
    },
    {
      image: "/images/IMG_6562.JPG",
      title: "Deck Project",
    },
    {
      image: "/images/IMG_4370.JPG",
      title: "Exterior Project",
    },
    {
      image: "/images/JPEG image-4FD0-85C1-7B-0.jpeg",
      title: "Custom Build",
    },
  ];

  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="gallery">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
