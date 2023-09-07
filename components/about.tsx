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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I have a diverse professional background that includes roles in product
        development, marketing, and education services. In{" "}
        <span className="font-medium">product development</span>, I've worked
        closely with different teams to understand our company's needs and
        prioritize projects. I've also planned and executed product strategies
        that align with our business goals and provided feedback to help my team
        improve.
      </p>
      <p>
        In <span className="font-medium">marketing</span>, I've been involved in
        creating and implementing marketing plans, building partnerships, and
        using data to improve our campaigns. I've successfully increased our
        brand's visibility, generated leads, and tracked the return on
        investment.
      </p>
      <p>
        Additionally, I've taken on{" "}
        <span className="font-medium">leadership</span> roles where I've managed
        HR functions and provided training for sales and marketing, setting
        objectives and road maps. I've focused on helping our partner companies
        grow and ensuring that they stay with our organization.
      </p>
      <p>
        I'm experienced in using digital tools and data to achieve results and
        make informed decisions. I'm passionate about innovation and committed
        to doing well in any role I take on. All these experience helped me
        become an <span className="font-medium">effective communicator </span>{" "}
        and <span className="font-medium">problem solver</span>.
      </p>
    </motion.section>
  );
}
