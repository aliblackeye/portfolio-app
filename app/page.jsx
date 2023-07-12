import Image from "next/image";

export default function Home() {
  const skills = [
    {
      name: "HTML",
      experience: "3",
    },
    {
      name: "CSS",
      experience: "3",
    },
    {
      name: "JS",
      experience: "2",
    },
    {
      name: "React",
      experience: "1",
    },
    {
      name: "Next.js",
      experience: "1",
    },
    {
      name: "Scss",
      experience: "1",
    },
  ];

  const projects = [
    {
      name: "Project Name",
      image: "/photo.png",
      skills: ["HTML", "CSS"],
    },
    {
      name: "Project Name",
      image: "/photo.png",
      skills: ["HTML", "CSS"],
    },
    {
      name: "Project Name",
      image: "/photo.png",
      skills: ["HTML", "CSS"],
    },
    {
      name: "Project Name",
      image: "/photo.png",
      skills: ["HTML", "CSS"],
    },
    {
      name: "Project Name",
      image: "/photo.png",
      skills: ["HTML", "CSS"],
    },
    {
      name: "Project Name",
      image: "/photo.png",
      skills: ["HTML", "CSS"],
    },
  ];

  return (
    <section className="single-page-portfolio">
      <header className="header">
        <div className="brand">
          <h1>aliblackeye</h1>
        </div>

        <ul className="socials">
          <li className="social-item">icon</li>
          <li className="social-item">icon</li>
          <li className="social-item">icon</li>
          <li className="social-item">icon</li>
        </ul>
      </header>

      <section className="hero-section">
        <h1>Nice to meet you!</h1>
        <h1>{`I'm Ali Karagoz.`}</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          laborum sunt doloribus culpa explicabo voluptas quod voluptates
          architecto magni veniam.
        </p>

        <button>DOWNLOAD CV</button>
      </section>

      <section className="skills">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <h1>{skill.name}</h1>
            <span>{skill.experience} Years Experience</span>
          </div>
        ))}
      </section>

      <section className="projects">
        {projects.map((project, index) => (
          <div
            className="project-item"
            key={index}
          >
            <div className="project-image">
              <Image
                src={project.image}
                width={400}
                height={650}
                alt="person"
              />
            </div>
            <div className="project-content">
              <h1>{project.name}</h1>
              <div className="skills">
                {project?.skills?.map((skill, index) => (
                  <span
                    className="skill-item"
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <div className="footer-content">
          <div className="left">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              quas non nemo expedita perspiciatis odio atque omnis, earum sint
              voluptatem?
            </p>
          </div>
          <form className="right">
            <input
              type="text"
              placeholder="Name"
            />
            <input
              type="text"
              placeholder="Email"
            />
            <textarea placeholder="Message"></textarea>
            <button>SEND MESSAGE</button>
          </form>
        </div>
        <div className="footer-bottom">
          <div className="brand">
            <h2>aliblackeye</h2>
          </div>

          <ul className="socials">
            <li className="social-item">icon</li>
            <li className="social-item">icon</li>
            <li className="social-item">icon</li>
            <li className="social-item">icon</li>
          </ul>
        </div>
      </footer>

      <Image
        src={"/photo.png"}
        width={400}
        height={650}
        alt="person"
      />
    </section>
  );
}
