import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";

export const Languages = () => {
  const stack = [
    {
      title: "JavaScript",
      src: "/images/logos/js.png",

      className: "h-12 w-12",
    },
    {
      title: "Python",
      src: "/images/logos/python.png",

      className: "h-12 w-24",
    },
    {
      title: "TypeScript",
      src: "/images/logos/typescript.png",

      className: "h-11 w-12",
    },
    {
      title: "HTML",
      src: "/images/logos/html.png",

      className: "h-12 w-12",
    },
    {
      title: "CSS",
      src: "/images/logos/css.png",

      className: "h-12 w-12",
    },
    {
      title: "SQL",
      src: "/images/logos/sql.png",

      className: "h-12 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Languages
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
