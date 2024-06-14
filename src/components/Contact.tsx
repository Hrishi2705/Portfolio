"use client";
import React, { useState } from "react";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Highlight } from "./Highlight";
import { Heading } from "./Heading";
import { motion } from "framer-motion";
import Link from "next/link";
// const defaultFormState = {
//   name: {
//     value: "",
//     error: "",
//   },
//   email: {
//     value: "",
//     error: "",
//   },
//   message: {
//     value: "",
//     error: "",
//   },
// };
export const Contact = () => {
  // const [formData, setFormData] = useState(defaultFormState);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   // Write your submit logic here
  //   console.log("confirm");
  //   console.log(formData);
  // };
  return (
    // <form className="form" onSubmit={handleSubmit}>
    //   <div className="flex flex-col md:flex-row justify-between gap-5">
    //     <input
    //       id="name"
    //       type="text"
    //       placeholder="Your Name"
    //       className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
    //       value={formData.name.value}
    //       onChange={(e) => {
    //         setFormData({
    //           ...formData,
    //           name: {
    //             value: e.target.value,
    //             error: "",
    //           },
    //         });
    //       }}
    //     />
    //     <input
    //       id="email"
    //       type="email"
    //       placeholder="Your email address"
    //       className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
    //       value={formData.email.value}
    //       onChange={(e) => {
    //         setFormData({
    //           ...formData,
    //           email: {
    //             value: e.target.value,
    //             error: "",
    //           },
    //         });
    //       }}
    //     />
    //   </div>
    //   <div>
    //     <textarea
    //       id="message"
    //       placeholder="Your Message"
    //       rows={10}
    //       className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
    //       value={formData.message.value}
    //       onChange={(e) => {
    //         setFormData({
    //           ...formData,
    //           message: {
    //             value: e.target.value,
    //             error: "",
    //           },
    //         });
    //       }}
    //     />
    //   </div>
    //   <button
    //     className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
    //     type="submit"
    //   >
    //     Submit{" "}
    //   </button>
    // </form>
    <>
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
            href="mailto:hrishikeshsamala@gmail.com?Subject=From%20Portfolio!"
            target="_blank"

            className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            style={{padding:'1rem'}}
          >
            <div className="flex flex-col justify-between">
              <div>
                <Heading
                  as="h4"
                  className="font-black text-lg md:text-lg lg:text-lg "
                >
                  Email me at
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    hrishikeshsamala@gmail.com
                </Paragraph>
              </div>
            </div>
          </Link>
        </motion.div>
    </div>
    <div className="grid grid-cols-1  gap-10" style={{marginTop:'2rem'}}>
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
            href="https://wa.me/916281948386"
            target="_blank"

            className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            style={{padding:'1rem'}}
          >
            <div className="flex flex-col justify-between">
              <div>
                <Heading
                  as="h4"
                  className="font-black text-lg md:text-lg lg:text-lg "
                >
                  Whatsapp/Call via
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    6821948386
                </Paragraph>
              </div>
            </div>
          </Link>
        </motion.div>
    </div>
    <div className="grid grid-cols-1  gap-10" style={{marginTop:'2rem'}}>
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
            href="https://www.linkedin.com/in/hrishikesh-samala-16b415203/"
            target="_blank"

            className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            style={{padding:'1rem'}}
          >
            <div className="flex flex-col justify-between">
              <div>
                <Heading
                  as="h4"
                  className="font-black text-lg md:text-lg lg:text-lg "
                >
                  Or you can find me on LinkedIn
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    Hrishikesh Samala ↗
                </Paragraph>
              </div>
            </div>
          </Link>
        </motion.div>
    </div>
    </>
  );
};
