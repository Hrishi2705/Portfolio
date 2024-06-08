import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import { IconBox } from "@tabler/icons-react";
import { motion } from "framer-motion";
import About from "@/components/About";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "About | Hrishikesh",
  description:
    "",
};

export default function AboutPage() {
  return (
    <Container>
      <div style={{display:"inline-flex", marginBottom:"2rem"}}>
      <Heading className="font-black"> About Me</Heading>
      </div>
      
      <About />
      <br></br>
      <br></br>
      <br></br>
      <div style={{display:"inline-flex", marginBottom:"2rem"}}>
      <span className="text-4xl" style={{marginRight:"1rem"}}>🎓</span>
      <Heading className="font-black"> Education</Heading>
      </div>
      
      <br></br>
      <Education />
    </Container>
  );
}
