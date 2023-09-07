import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import herworld from "@/public/herworld.png";
import asiaone from "@/public/asiaone.png";
import moovaz from "@/public/moovaz.png";
import shopbackbiz from "@/public/shopback_business.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Business Development Manager",
    location: "Bangkok, Thailand",
    description:
      "Brought in more schools for the company and managed teaching talents",
    icon: React.createElement(CgWorkAlt),
    date: " 2017 - 2021",
  },
  {
    title: "Marketing Manager",
    location: "Bangkok, Thailand",
    description:
      "Started out as Marketing Specialist. Managed a marketing department before being promoted to General Manager",
    icon: React.createElement(CgWorkAlt),
    date: " 2021 - 2023",
  },
  {
    title: "General Manager",
    location: "Bangkok, Thailand",
    description: "Leading a talented team to bring in more revenue",
    icon: React.createElement(CgWorkAlt),
    date: " 2023 - Present ",
  },
] as const;

export const projectsData = [
  {
    title: "Herworld",
    description:
      "One of the Magazine title I've managed during my tenure at SPHmagazines.",
    tags: ["Wordpress", "Drupal", "PHP", "MySQL", "AWS", "Node.js", "React"],
    imageUrl: herworld,
  },
  {
    title: "AsiaOne",
    description:
      "News aggregator platform. Migrated monolith into micro-service architecture to support web and mobile apps.",
    tags: [
      "Next.js",
      "MobX",
      "SCSS",
      "Drupal",
      "PHP",
      "MySQL",
      "AWS",
      "Node.js",
    ],
    imageUrl: asiaone,
  },
  {
    title: "Moovaz",
    description:
      "Freelance consultant for this start up. Worked on relocation platform and marketing sites.",
    tags: ["React", "TypeScript", "Redux", "Node.js", "AWS", "MySQL"],
    imageUrl: moovaz,
  },
  {
    title: "Shopback",
    description:
      "Information Platform for shopback merchants. Worked on billing and report generation.",
    tags: [
      "React",
      "Postgres",
      "MongoDB",
      "Nest.js",
      "kubernetes",
      "gRPC",
      "Knative",
      "AWS",
    ],
    imageUrl: shopbackbiz,
  },
] as const;

export const skillsData = [
  "Problem Solving",
  "Communication",
  "Leadership",
  "Management",
  "Marketing",
  "Sales",
  "Hiring",
] as const;
