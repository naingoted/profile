"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a dedicated full-stack developer based in{" "}
        <span className="font-medium">Singapore</span>
        <span className="text-2xl"> 🇸🇬</span>, originally from{" "}
        <span className="font-medium">Myanmar</span>
        <span className="text-2xl"> 🇲🇲</span>. My journey in the world of web
        development began after graduating with a degree in Computer Science in
        2015 <span className="text-2xl">🧑🏻‍🎓</span>.
        <span className="block">
          I've had the privilege of leading and collaborating with diverse teams
          in environments ranging from agile startups to established
          corporations. Working on a broad spectrum of projects, from developing
          complex UIs <span className="text-2xl">👨‍💻</span> to architecting
          systems <span className="text-2xl">🏗️</span> capable of handling
          millions of transactions and page views. These unique learning
          experiences helped me become an{" "}
        </span>
        <span className="font-medium">effective communicator </span> and{" "}
        <span className="font-medium">problem solver</span>.
        <span className="block">
          My current core stack includes{" "}
          <span className="font-medium">
            React, Next.js, Nest.js, MongoDB and Postgres.
          </span>
        </span>
        I am always looking to learn new technologies. I am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        When I'm not coding, I like to enjoy history and philosophy contents,
        playing RTS games or i'll probably doing some outdoors stuffs. Some of
        my fav youtube channels are History Buffs, Kraut, Knowing Better, Contra
        Points and oliSUNvia.
      </p>
    </motion.section>
  );
}
