import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Hrishikesh",
  description:
    "",
};

export default function Projects() {
  return (
    <Container>
      <div style={{display:"inline-flex"}}>
        <span className="text-4xl" style={{marginRight:"1rem"}}>🖥️</span>
        <Heading className="font-black mb-10">
          
          {" "}
          My Projects
        </Heading>
      </div>
      

      <Products />
    </Container>
  );
}
