import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2018-2021",
      title: "Associate Degree",
      place: "New England Institute of Technology - East Greenwich, RI",
      desc: "Received an Associates in Network Engineering during the pandemic and transitioned to online learning. Worked particularly with Cisco and Microsoft products, and received several TestOut certifications while attending the college.",
    },  
    {
      yearRange: "2014 - 2018",
      title: "High School Diploma",
      place: "Notre Dame High School - West Haven, CT",
      desc: "Worked with GoGreenKnights to film school events and occasionally worked with Drama Club/Stage Crew during performances for additional support. Assisted the IT Department as a student intern. Received the Man of the Year award and an IT award.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2020 - Present",
      title: "IT Director",
      place: "Sterling Community School",
      desc: "Managed the IT infrastructure for Sterling Community School in Sterling, CT with approximately 350 students and 75 staff. Worked with E-Rate to fund additional networking equipment for the district, and several other grants for other items. Worked on several projects including SSO, new desktops, and more to modernize technology. ",
    },
    {
      yearRange: "2017 - Present",
      title: "Contractor",
      place: "NFHS Network (PlayOn! Sports)",
      desc: "Worked in conjunction with CIAC/RIIL to live stream high-school sporting events for those respective interscholastic leagues. Worked with a variety of camera, audio, and networking gear to facilitate live streaming in a variety of environments. ",
    },
    {
      yearRange: "2019 - 2021",
      title: "System Administrator",
      place: "Red Rocket, LLC",
      desc: "Managed the core network for Red Rocket Net, a wireless ISP (Internet Service Provider) in New Britain, CT. Managed CPEs and server infrastructure for necessary CRM and management platforms. Developed the necessary infrastructure for its parent company, Red Rocket Cloud which provides web, voice, and game hosting to its clients. ",
    },
    {
      yearRange: "2016 - 2018",
      title: "Intern & Helpdesk",
      place: "Notre Dame High School",
      desc: "Provided basic-level IT support for Faculty & Staff including password resets, device upgrades, and board calibrations as necessary. Worked alongside a team of individuals to install over 40 IP cameras, and upgraded a majority of the desktops throughout the building. Managed printers by ordering supplies as necessary and ran cabling to multiple areas of the building to facilitate additional connections. ",
    },
    {
      yearRange: "2012 - 2016",
      title: "System Administrator",
      place: "DMTG Technologies",
      desc: "Managed multiple dedicated servers running Ubuntu on bare metal for hosting providers for voice, games, and web services. Ensured continuity of services through continual maintenance and support for those systems.",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
