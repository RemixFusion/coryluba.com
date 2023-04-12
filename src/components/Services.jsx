import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Network Engineering",
      desc: "For consumers, small, medium, and large businesses. Consult with me to upgrade your existing network architecture.",
      icon: "fas fa-palette",
    },
    {
      name: "Web Design",
      desc: "Stunning websites in a variety of HTML languages including Static, React, and Node.JS.",
      icon: "fas fa-desktop",
    },
    {
      name: "Search Engine Optimization",
      desc: "Rank higher on Google and other search engines through the SEO services I provide.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "System Administration",
      desc: "Whether you need a server setup or require an image for a device rollout, I can assist you with your project.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Videography",
      desc: "Available for in-person and virtual events to provide high-resolution video for your event.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Photography",
      desc: "Have professional photographs taken for your family, office, or other event. Various options are available to pick from.",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
