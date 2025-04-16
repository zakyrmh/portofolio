import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT = `Applied Bachelor of Software Engineering Technology student with a deep understanding of various programming languages such as JavaScript, Python, C, C++, as well as MySQL and MongoDB databases. Experienced in using modern technologies such as Laravel, ReactJS, Node.js, and TailwindCSS. Has a special interest in the field of data analysis and has been learning programming since the 2nd grade of high school.`;

export const ABOUT_TEXT = `Hello! I am an applied undergraduate student in Software Engineering Technology who has a great passion in the world of technology and programming. With experience learning programming since the 2nd grade of high school, I have developed skills in various programming languages such as JavaScript, Python, C, and C++. I also understand the use of MySQL and MongoDB databases and technologies such as Laravel, ReactJS, Node.js, and TailwindCSS. In addition, I am very interested in the field of data analysis and always eager to learn new things in the world of technology.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Walletify",
    image: project1,
    description:
      "A financial record-keeping website for recording expenses and income, and financial analysis and other functions.",
    technologies: ["TailwindCSS", "Vite", "React", "Node.js", "MongoDB"],
  },
  {
    title: "TRPL 24 C",
    image: project1,
    description:
      "Web application for class schedule management, assignments, learning materials and others to support student needs.",
    technologies: ["NextJS", "TailwindCSS", "Firebase"],
  },
  {
    title: "Hima Aksi Unsika",
    image: project2,
    description:
      "Organizational information website of HIMA FE Singaperbangsa University Karawang.",
    technologies: ["Laravel", "TailwindCSS", "PostgreSQL"],
  },
];

export const CONTACT = {
  address: "Padang, West Sumatra, Indonesia",
  email: "zaxxyyramadhan@gmail.com",
};
