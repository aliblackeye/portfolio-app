"use client";
import Image from "next/image";

import { skills, projects, icons } from "./data";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  window.document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  return (
    <section className="single-page-portfolio">
      <div className="top-wrapper container">
        <header className="header">
          <div className="container">
            <div className="brand">
              <h1>aliblackeye</h1>
            </div>

            <ul className="socials">
              {icons?.map((iconItem, index) => (
                <li
                  key={index}
                  className="social-item"
                >
                  {iconItem.icon}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section className="hero">
          <div className="container">
            <div className="title">
              <h1>
                Nice to <br /> meet you!
              </h1>
              <h1>
                <span className="underline"> {` I'm `} Ali Karagoz.</span>
              </h1>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              laborum sunt doloribus culpa explicabo voluptas quod voluptates
              architecto magni veniam.
            </p>


          </div>
        </section>
        <Image
          src={"/photo.png"}
          width={350}
          height={550}
          alt="person"
          className="person"
        />
      </div>

      <section className="skills-section">
        <div className="container">
          {skills.map((skill, index) => (
            <div
              className="skill-item"
              key={index}
            >
              <h1>{skill.name}</h1>
              <span>{skill.experience} Years Experience</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <h1 className="projects-title">Projects</h1>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div
                className="project-item"
                key={index}
              >
                <div className="project-image">
                  <Image
                    src={project.image}
                    width={200}
                    height={200}
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
          </div>
        </div>
      </section>


    </section>
  );
}
