import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work History | Hrishikesh",
  description:
    "",
};

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}building products
        and <Highlight>web apps</Highlight>.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
