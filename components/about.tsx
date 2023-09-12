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
        <span className="font-medium"> Singapore</span>, originally from Myanmar
        🇲🇲. My journey in the world of web development began after graduating
        with a degree in Computer Science in 2015 🧑🏻‍🎓. I've had the privilege of
        collaborating with diverse teams, ranging from agile startups to
        well-established corporations, each providing a unique learning
        experience and helped me become an{" "}
        <span className="font-medium">effective communicator </span> and{" "}
        <span className="font-medium">problem solver</span>.
        <span className="block">
          My core stack includes{" "}
          <span className="font-medium">
            React, Next.js, Nest.js, MongoDB and Postgres
          </span>
        </span>
        . I am always looking to learn new technologies. I am aggresivelly
        seeking a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        When I'm not coding 👨‍💻, I like to enjoy history and philosophy contents,
        playing RTS games or i'll probably doing some outdoors stuffs. Some of
        my fav youtube channels are History Buffs, Kraut, Knowing Better, Contra
        Points and oliSUNvia.
      </p>
    </motion.section>
  );
}
