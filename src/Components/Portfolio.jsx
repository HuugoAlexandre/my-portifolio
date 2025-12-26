/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/lamp.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Web Development Academic Projects",
    description:
      "Developed web applications as part of academic coursework, applying concepts such as HTML, CSS, JavaScript, backend logic, and basic web architecture.",
    url: "https://github.com/Comparou-Comprou",
  },
  {
    title: "Backend and Database Practice",
    description:
      "Implemented backend logic and database interactions in study projects, working with CRUD operations, data modeling, and server-side programming.",
    url: "https://github.com/HuugoAlexandre/gerenciador-tarefas",
  },
  {
    title: "Programming Exercises and Challenges",
    description:
      "Solved programming exercises and challenges to strengthen logic, problem-solving skills, and understanding of core programming concepts.",
    url: "https://github.com/HuugoAlexandre/design-patterns-java",
  },
  {
    title: "Learning Projects with Databases",
    description:
      "Built small projects to explore new technologies and tools, focusing on continuous learning and practical application.",
    url: "https://github.com/HuugoAlexandre",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
