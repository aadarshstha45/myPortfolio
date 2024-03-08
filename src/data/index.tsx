import React from "../assets/icons/react.png";
import JS from "../assets/icons/java-script.png";
import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css-3.png";
import Node from "../assets/icons/node-js.png";
import Github from "../assets/icons/github.png";
import Postgres from "../assets/icons/postgres.png";
import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";
import Linkedin from "../assets/icons/linkedin.png";
import Tailwind from "../assets/icons/tailwind.png";
import Location from "../assets/icons/location.png";
import Phone from "../assets/icons/call.png";
import Mail from "../assets/icons/gmail.png";

const socialLinks = [
  {
    id: 1,
    title: "Facebook",
    link: "https://facebook.com/aadarshstha45",
    image: Facebook,
  },
  {
    id: 2,
    title: "Instagram",
    link: "https://instagram.com/aadarshstha45",
    image: Instagram,
  },
  {
    id: 3,
    title: "Github",
    link: "https://github.com/aadarshstha45",
    image: Github,
  },
  {
    id: 4,
    title: "Linkedin",
    link: "https://linkedin.com/in/aadarshstha",
    image: Linkedin,
  },
];

const projectData = [
  {
    id: 1,
    projectTitle: "Movie Backend",
    link: "https://github.com/aadarshstha45/movienode",
    description:
      "This is a backend for movie ticket booking system built using NodeJS and MongoDB",
    languages: [
      {
        name: "NodeJS",
        color: "green",
      },
      {
        name: "MongoDB",
        color: "teal",
      },
    ],
    image: Node,
  },
  {
    id: 2,
    projectTitle: "Workout System",
    link: "https://github.com/aadarshstha45/workoutbackend",

    description:
      "This system is a backend for workout system built using NodeJS. This application allows users to add workouts. This system also allows to perform simple CRUD operation.",
    languages: [
      {
        name: "NodeJS",
        color: "green",
      },
      {
        name: "MongoDB",
        color: "teal",
      },
    ],
    image: Node,
  },
  {
    id: 3,
    projectTitle: "Website for Company",
    description: "The website for CodeTara was built using ReactJS",
    link: "https://codetara.com",
    image: React,
    languages: [
      {
        name: "React",
        color: "blue",
      },
      {
        name: "TailWind CSS",
        color: "blue",
      },
    ],
  },
];

const experienceData = [
  {
    id: 1,
    image: HTML,
    title: "HTML",
    shadow: "#f06529",
  },
  {
    id: 2,
    image: CSS,
    title: "CSS",
    shadow: "#2965f1",
  },
  {
    id: 3,
    image: JS,
    title: "JS",
    shadow: "#F0DB4F",
  },
  {
    id: 4,
    image: Node,
    title: "Node",
    shadow: "#3c873a",
  },

  {
    id: 6,
    image: React,
    title: "React",
    shadow: "#61dafb",
  },
  {
    id: 5,
    image: Postgres,
    title: "Postgres",
    shadow: "#326690",
  },
  {
    id: 7,
    image: Github,
    title: "Github",
    shadow: "#bcbcbc",
  },
  {
    id: 8,
    image: Tailwind,
    title: "Tailwind CSS",
    shadow: "#06b6d4",
  },
];

const educationData = [
  {
    id: 1,
    title: "The Old Capital Secondary School",
    description: "SEE 2073",
    duration: " -2017",
  },
  {
    id: 2,
    title: "National Institute of Science and Technology",
    description: "HSEB +2 Science",
    duration: "2017-2019",
  },
  {
    id: 3,
    title: "Orchid International College",
    description: "Bachelor in Computer Application (BCA)",
    duration: "2019-Present",
  },
];

const contactInformation = [
  {
    id: 2,
    title: "Phone",
    slug: "phone",
    value: "9846704015",
    image: Phone,
  },
  {
    id: 1,
    title: "Email",
    slug: "email",
    value: "aadarsh.stha36@gmail.com",
    image: Mail,
  },

  {
    id: 3,
    title: "Address",
    slug: "address",
    value: "Dhungedara, Kathmandu, Nepal",
    image: Location,
  },
];

export {
  socialLinks,
  projectData,
  experienceData,
  educationData,
  contactInformation,
};
