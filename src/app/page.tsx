import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Languages } from "@/components/Languages";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hi! &nbsp; I'm Hrishikesh</Heading>
      <Paragraph className="max-w-xl mt-4">
        A full-stack developer that loves{" "}
        <Highlight>building web apps </Highlight>
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I'm a {""} <Highlight>BITS Pilani Graduate</Highlight> with{" "}
        a Degree in Electronics & Communications Engineering, along with a Minor in Computing & Intelligence.
      </Paragraph>
      {/* <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading> */}
      {/* <Products /> */}
      <TechStack />
      <Languages />
    </Container>
  );
}
