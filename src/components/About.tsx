"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Highlight } from "./Highlight";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Hrishikesh - a passionate developer with a strong foundation in computer science concepts from my studies at BITS Pilani.
          
          
        </Paragraph>
        <Paragraph className=" mt-4">
          Experienced in full-stack development using technologies like <Highlight>MERN stack</Highlight>, I specialize in building dynamic web applications with intuitive user interfaces and robust backend functionality.
          Collaborative by nature, I thrive in team environments and excel at translating client requirements into tailored solutions.
        </Paragraph>
      </div>
    </div>
  );
}
