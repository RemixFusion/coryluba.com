import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    VIDEO: "Videos",
    SYSAD: "System Administration",
    DESIGN: "Design",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "CIAC Battle of the Fans",
      projectInfo:
        "The Connecticut Interscholastic Athletic Conference (CIAC) announced the Battle of the Fans (BOTF) contest, where schools would produce a video showing the spirit of the student body and their fan sections, with a focus on school events such as athletics and pep rallies. As a student of Notre Dame High School – West Haven, CT and a member of GoGreenKnights, the schools broadcast club I worked in conjunction with Green Machine, the school spirit/fan section club to begin planning and producing the video for the BOTF contest. I had worked primarily on recording and editing the video with occasional input from Green Machine and school officials, while Green Machine worked primarily on the production including interviews and b-roll shots overlayed over audio. Following the submission of the video, Notre Dame High School was selected as a finalist amongst three other schools, then selected as the winner of 2016-2017 Battle of the Fans (BOTF) contest.",
      client: "Notre Dame High School",
      technologies: "Adobe Premiere Pro, DJI Plantom 4",
      industry: "Videography",
      date: "February 16, 2017",
      url: {
        name: "www.notredamehs.com",
        link: "https://www.notredamehs.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "https://cdn.coryluba.com/portfolio/botf/cover.jpeg",
      sliderImages: [
        "https://cdn.coryluba.com/portfolio/botf/1.png",
        "https://cdn.coryluba.com/portfolio/botf/2.png",
        "https://cdn.coryluba.com/portfolio/botf/3.jpg",
      ],
      categories: [filters.VIDEO],
    },
    {
      title: "DIVAZ Dance Academy Recital",
      projectInfo:
        "In 2018, DIVAZ Dance Adademy reached out requesting videography services for an upcoming recital including USB/DVD drives to be burned following the event. The recital was filmed in HD using a 1080p camera and all edits were made in Adobe Premiere Pro. Copies were burned onto USB drives due to the length of the performance, as well as a digital copy made available via a temporary streaming medium, due to copyright infringement issues with YouTube.",
      client: "DIVAZ Dance Academy",
      technologies: "Adobe Premiere Pro",
      industry: "Videography",
      date: "2018",
      url: {
        name: "www.divazdanceacademy.com",
        link: "https://www.divazdanceacademy.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "https://cdn.coryluba.com/portfolio/divaz/1.png",
      sliderImages: [
        "https://cdn.coryluba.com/portfolio/divaz/3.png",
        "https://cdn.coryluba.com/portfolio/divaz/1.png",
      ],
      categories: [filters.VIDEO],
    },
    {
      title: "MegaCraft",
      projectInfo:
        "Configured a complete environment for hosting game services for MegaCraft and implemented industry standard security practices. This includes configuration of several internal assets, such as websites, which directly integrate with the game to provide useful information. Continual monitoring and support was included in this project, allowing for quick intervention whenever an outage ocurred.",
      client: "MegaCraft",
      technologies: "Virtualization, Linux, Minecraft",
      industry: "System Administration",
      date: "2015",
      url: {
        name: "www.megacrafting.com",
        link: "https://www.megacrafting.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "https://cdn.coryluba.com/portfolio/megacraft/1.png",
      sliderImages: [
        "https://cdn.coryluba.com/portfolio/megacraft/2.png",
        "https://cdn.coryluba.com/portfolio/megacraft/3.png",
        "https://cdn.coryluba.com/portfolio/megacraft/4.png",
      ],
      categories: [filters.SYSAD],
    },
    {
      title: "Red Rocket Cloud",
      projectInfo:
        "Providing web, game, and virtual machine hosting - Red Rocket Cloud was built in 2020 to provide easy virtualized services at affordable prices.",
      client: "Red Rocket Cloud",
      technologies: "Virtualization, Web Hosting, Linux",
      industry: "System Administration",
      date: "2020",
      url: {
        name: "www.redrocketcloud.com",
        link: "https://www.redrocketcloud.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "https://cdn.coryluba.com/portfolio/redrocket/rrclogo.png",
      sliderImages: [
        "https://cdn.coryluba.com/portfolio/redrocket/2.png",
        "https://cdn.coryluba.com/portfolio/redrocket/4.png",
        "https://cdn.coryluba.com/portfolio/redrocket/5.png",
      ],
      categories: [filters.SYSAD],
    },
    {
      title: "Red Rocket Net",
      projectInfo:
        "Managed network infrastructure for a WISP including management, customer, and other internal segments. Provided DHCP, DNS, and Speedtest servers for customers, and managed the routers, switches, and antennas.",
      client: "Red Rocket Net",
      technologies: "WISP, Ubiquiti, Networking, Bare Metal",
      industry: "System Administration",
      date: "July 16, 2019",
      url: {
        name: "www.redrocketnet.com",
        link: "https://www.redrocketnet.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "https://cdn.coryluba.com/portfolio/redrocket/rrnlogo.png",
      sliderImages: [
        "https://cdn.coryluba.com/portfolio/redrocket/2.png",
      ],
      categories: [filters.SYSAD],
    },
    {
      title: "DMTG Technologies",
      projectInfo:
        "Provided system administration and game hosting for PokePlanet, a Pixelmon gaming community from 2014 - 2018.",
      client: "DMTG Technologies",
      technologies: "Bare Metal, Game Hosting, Minecraft",
      industry: "System Administration",
      date: "September 2014",
      url: {
        name: "www.dmtgtech.com",
        link: "https://www.dmtgtech.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "https://cdn.coryluba.com/portfolio/dmtgtech/1.png",
      sliderImages: [
        "https://cdn.coryluba.com/portfolio/dmtgtech/2.png",
      ],
      categories: [filters.SYSAD],
    },
    {
      title: "Project Title 7",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-7.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN, filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{project.categories}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
