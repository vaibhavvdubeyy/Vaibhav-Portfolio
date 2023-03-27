import {
  wipro,
  sl,
  TNC,
  lnt,
  python,
 
  azure,
  mysql ,
  django,
  mobile,
  backend,
  creator,
  web,
  javascript,
 
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
 
  meta,
  starbucks,
tesla,
shopify,
carrent,
jobit,
tripguide,
threejs,
} from "../assets";

export const navLinks = [
{
  id: "about",
  title: "About",
},
{
  id: "work",
  title: "Work",
},
{
  id: "contact",
  title: "Contact",
},
];

const services = [
{
  title: "Web Developer",
  icon: web,
},
{
  title: "React Developer",
  icon: mobile,
},
{
  title: "Frontend Developer",
  icon: backend,
},
{
  title: "Python Developer",
  icon: web,
},
{
  title: "Data Scientist",
  icon: mobile,
},
{
  title: "Content Creator",
  icon: creator,
},
];

const technologies = [
{
  name: "HTML 5",
  icon: html,
},
{
  name: "CSS 3",
  icon: css,
},
{
  name: "JavaScript",
  icon: javascript,
},
{
  name: "Django",
  icon: django,
},
{
  name: "React JS",
  icon: reactjs,
},
{
  name: "Redux Toolkit",
  icon: redux,
},
{
  name: "Tailwind CSS",
  icon: tailwind,
},
{
  name: "Node JS",
  icon: nodejs,
},
{
  name: "MongoDB",
  icon: mongodb,
},
{
  name: "Three JS",
  icon: threejs,
},
{
  name: "azure",
  icon: azure,
},
{
  name: "mysql",
  icon: mysql,
},
{
  name: "python",
  icon: python,
},

];

const experiences = [
{
  title: "ML Intern",
  company_name: "SkyFi Labs",
  icon: sl,
  iconBg: "#383E56",
  date: "Jan 2020 - May 2020",
  points: [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
  ],
},
{
  title: "SEO Intern",
  company_name: "TNC Aviation",
  icon: TNC,
  iconBg: "#E6DEDD",
  date: "Aug 2020 - Oct 2020",
  points: [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
  ],
},
{
  title: "J2EE Developer",
  company_name: "Wipro",
  icon: wipro,
  iconBg: "#383E56",
  date: "Feb 2022 - May 2022",
  points: [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
  ],
},
{
  title: "Full stack Developer",
  company_name: "Larsen & Toubro",
  icon: lnt,
  iconBg: "#E6DEDD",
  date: "Nov 2022 - Present",
  points: [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
  ],
},
];

const testimonials = [
{
  testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Vaibhav proved me wrong.",
  name: "Shashank Raghuvanshi",
  designation: "MBBS",
  company: "SR Hospital",
  image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
  testimonial:
    "I've never met a web developer who truly cares about their clients' success like Vaibhav does.",
  name: "Shashank Shukla",
  designation: "CMO",
  company: "Wipro",
  image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
  testimonial:
    "After Vaibhav optimized our website, our traffic increased by 50%. We can't thank them enough!",
  name: "Shubhankar Rao",
  designation: "Founder",
  company: "HashTag Momos",
  image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
{
  name: "E-Commerce Website",
  description:
    "Web-based platform like Amazon that allows users to search, buy, and sell products from website.",
    tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "sqllite",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: carrent,
  source_code_link: "https://github.com/vaibhavvdubeyy/AmazonClone",
},
{
  name: "News Website",
  description:
    "Web application that enables users to go through latest News around the world.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "restapi",
      color: "green-text-gradient",
    },
    {
      name: "scss",
      color: "pink-text-gradient",
    },
    {
      name: "newsapi",
      color: "green-text-gradient",
    },
  ],
  image: jobit,
  source_code_link: "https://github.com/vaibhavvdubeyy/NewsApp",
},
{
  name: "Restaurant App",
  description:
    "A restaurant specific app similar to Burger King that allows users to buy from the cusines and seels to sell their food.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "supabase",
      color: "green-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
  ],
  image: tripguide,
  source_code_link: "https://github.com/",
},
];

export { services, technologies, experiences, testimonials, projects };