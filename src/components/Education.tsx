"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Highlight } from "./Highlight";
import { Heading } from "./Heading";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Education() {
  return (
    <div className="grid grid-cols-1  gap-10">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: 1 * 0.1 }}
        >
          <Link
            href="https://www.bits-pilani.ac.in/hyderabad/"
            target="_blank"

            className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
          >
            <Image
              src="/images/logos/bits.png"
              alt="thumbnail"
              height="160"
              width="160"
              className="rounded-md"
            />
            <div className="flex flex-col justify-between">
              <div>
                <Heading
                  as="h4"
                  className="font-black text-lg md:text-lg lg:text-lg "
                >
                  BITS Pilani Hyderabad Campus
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    B.E(Hons) in Electronics and Communication Engineering
                </Paragraph>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    Minor in Computation and Intelligence
                </Paragraph>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    <b>CGPA:</b> 7.35/10
                </Paragraph>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    <b>CourseWork:</b> Data Structures and Algorithms, Operating Systems, Artificial Intelligence, Software Engineering, Cryptography
                </Paragraph>
              </div>
            </div>
          </Link>
        </motion.div>
    </div>
  );
}
