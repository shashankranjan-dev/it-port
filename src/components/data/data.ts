// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import Result from "../assets/studentresult.jpg";
import Exam from "../assets/learnersexam.jpg";
import Online from "../assets/onlineexam.jpg";
import Movie from "../assets/movie.png";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "Online Exam Portal",
    img_url: `${Online}`,
    link: "https://learnersexamportal.vercel.app/",
    
  },
  {
    id: 2,
    title: "Movie App",
    img_url: `${Movie}`,
    link: "https://tijanisylla.github.io/movie-app",
    
  },

  {
    id: 3,
    title: "Result Management System",
    img_url: `${Result}`,
    link: "https://learnersresult.000webhostapp.com/",
    
  },
  {
    id: 4,
    title: "Examination System",
    img_url: `${Exam}`,
    link: "https://learnersexamportal.000webhostapp.com/home.php",
    
  },
  
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
