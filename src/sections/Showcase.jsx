export function Showcase() {
  const projects = [
    {
      title: "Shop.co E-commerce",
      date: "March 2025",
      image: "assets/shop-co.png",
      description:
        "Creating a sleek, fully responsive e-commerce platform that showcases products with clarity and style, offering customers a seamless shopping experience from browsing to checkout.",
      link: "https://shop-co-ecommerce-three.vercel.app/",
    },
    {
      title: "Foods Project",
      date: "February 2025",
      image: "assets/foods.png",
      description:
        "Developing a clean, user-friendly platform that streamlines food management and showcases curated recipes, helping users discover, organize, and enjoy their favorite meals with ease.",
      link: "https://foodsprojectdemo.netlify.app/",
    },
    {
      title: "Sanctuary Hotel",
      date: "January 2025",
      image: "assets/sanctuary.png",
      description:
        "Designing and developing a modern, elegant website that showcases the hotel’s amenities and services, offering guests an inviting preview of their stay and an effortless way to connect and book.",
      link: "https://sanctuaryhotel.my.canva.site/",
    },
    {
      title: "Terras Mil",
      date: "November 2024",
      image: "assets/fazenda.jpeg",
      description:
        "Website developed as a management dashboard for an Urban Farm, providing coworkers with real-time insights into the farm’s operations and processes.",
      link: "https://oluisvi.github.io/pim/dashboard.html",
    },
  ];

  return (
    <>
      <div className="category__projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-card__image"
            />
            <div className="project-card__info">
              <h5>{project.title}</h5>
              <p>{project.date}</p>
            </div>
            <p className="project-card__desc">{project.description}</p>
            <a
              className="btn"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Project
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
