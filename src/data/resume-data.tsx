import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Milo Ng",
  initials: "MN",
  location: "Richmond BC, Canada",
  locationLink: "https://www.google.com/maps/place/Richmond,+BC",
  about:
    "3rd year Computer Science student with an aspiration for software development",
  summary:
    "I am a motivated and ambitious 3rd year computer science student with a keen interest in web development and full-stack development. I am passionate about creating captivating websites that provide positive user experiences. My strong foundation in multiple programming languages and frameworks allows me to develop robust code wether it be for front end or back end projects. I am constantly learning and staying up-to-date with the latest industry trends and technologies to deliver efficient and cutting-edge solutions. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/55813244?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "milo.ngkl@gmail.com.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ng-milo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/milo-ng",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Simon Fraser University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    "Python",
    "C/C++",
    "Java",
    "SQL",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
  ],
  projects: [
    {
      title: "Weather-app",
      techStack: [
        "Side Project",
        "Python",
        "PyQt5",
      ],
      description: "A simple weather app to display the current weather and forecast",
      // logo: ConsultlyLogo,
      link: {
        label: "Weather-app",
        href: "https://github.com/ng-milo/Weather-App",
      },
    },
    {
      title: "Histogram Generator",
      techStack: ["School Project", "HTML", "JavaScript", "Tailwind CSS"],
      description:
        "A simple histogram generator that takes in a file and displays a histogram based on grade cutoffs",
      // logo: MonitoLogo,
      link: {
        label: "Histogram Generator",
        href: "https://ng-milo.github.io/histogramGenerator/",
      },
    },
    {
      title: "Simplimath",
      techStack: ["Side Project", "HTML", "JavaScript", "Tailwind CSS"],
      description:
        "A website with calculator functionality to perform simple math operations as well as solve quadratic equations",
      // logo: MonitoLogo,
      link: {
        label: "Simplimath",
        href: "https://ng-milo.github.io/web-calc/",
      },
    },
  ],
} as const;
