import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsLightningCharge } from "react-icons/bs";
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
    name: "Projects",
    hash: "#projects",
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
    title: "Web developer - Inspiral Creative",
    location: "Yangon, Myanmar",
    description: "Worked as web developer for this creative studio.",
    icon: React.createElement(CgWorkAlt),
    date: " 2015 - 2017 ",
  },
  {
    title: "Web developer - SPH magazines",
    location: "Singapore",
    description:
      "I worked on CMSs (Workpress, Drupal) and was in charge of 4 magazine titles.",
    icon: React.createElement(CgWorkAlt),
    date: " 2017 - 2019 ",
  },
  {
    title: "Full-stack Lead - AsiaOne",
    location: "Singapore",
    description:
      "Started out as Full-stack engineer to help scale up the platform. Managed a team of 5 engineers before leaving.",
    icon: React.createElement(CgWorkAlt),
    date: " 2019 - 2021 ",
  },
  {
    title: "Software Engineer - Shopback",
    location: "Singapore",
    description:
      "Worked as Individual Contributor for merchant platforms team.",
    icon: React.createElement(CgWorkAlt),
    date: " 2021 - 2023 ",
  },
  {
    title: "Career Break",
    location: "Singapore/Bangkok",
    description: "Taking a break to learn new technologies.",
    icon: React.createElement(BsLightningCharge),
    date: "2023 - Current",
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
    title: "Shopback Business",
    description:
      "Information Platform for shopback merchants. Solved scaling issues for billing and report generation.",
    tags: [
      "React",
      "Postgres",
      "MongoDB",
      "Nest.js",
      "Kubernetes",
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
  "JavaScript",
  "TypeScript",
  "React",
  "MobX",
  "Next.js",
  "Nest.js",
  "Git",
  "HTML",
  "CSS",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Kubernetes",
  "DevOps",
] as const;
