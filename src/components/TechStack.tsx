import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "MongoDB",
      src: "/images/logos/mongo.png",

      className: "h-12 w-12",
    },
    {
      title: "Express",
      src: "/images/logos/express.png",

      className: "h-12 w-24",
    },
    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-12 w-12",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-14 w-16",
    },
    {
      title: "Firebase",
      src: "/images/logos/firebase.png",

      className: "h-10 w-24",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    }
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
