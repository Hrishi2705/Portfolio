import { Highlight } from "@/components/Highlight";

export const products = [
  {
    href: "https://project-bridge-hruxf4oyz-aditya-abhirams-projects.vercel.app/",
    repolink: "https://github.com/Hrishi2705/Project-Bridge",
    title: "Project Bridge",
    description:
      "A design and development studio that focuses on building quality apps.",
    thumbnail: "/images/project-bridge/loginpage.png",
    images: [
      "/images/project-bridge/teacher_home.png",
      "/images/project-bridge/teacher_newproject.png",
      "/images/project-bridge/teacher_requests.png",
      "/images/project-bridge/student_home.png",
      "/images/project-bridge/student_projectbank.png",
      "/images/project-bridge/student_profile.png",
    ],
    stack: ["MERN", "Firebase"],
    slug: "projectbridge",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://sales-admin-dashboard-t511.onrender.com/",
    repolink: "https://github.com/Hrishi2705/Admin-Dashboard",
    title: "Sales Admin Dashboard",
    description:
      "The Sales Admin Dashboard is a website designed to streamline sales management processes. ",
    thumbnail: "/images/admin-dashboard/page1.png",
    images: [
      "/images/admin-dashboard/page1.png",
      "/images/admin-dashboard/page2.png",
      "/images/admin-dashboard/page3.png",
    ],
    stack: ["NodeJs", "ExpressJs", "MongoDB", "HTML,CSS"],
    slug: "admindashboard",
    content: (
      <div>
        <p>
        The Sales Admin Dashboard is a tool designed to streamline sales management processes. 
        It provides functionalities to manage salespeople, stores, and their respective assignments. 
        With this dashboard, administrators can efficiently monitor sales activities and make necessary adjustments.{" "}
        </p>
        <p>
          <b> PAGES: </b>
          <ul>
            <li>
            <b><i> Sales People Page: </i></b>Displays the status of salespeople, their details, and allows admins to edit and assign new areas.
            </li>
            <li>
            <b><i>Stores vs Sales People Page: </i></b>Provides information on stores and their assigned salespeople, along with onboarding details.
            </li>
            <li>
            <b><i>Stores Page: </i></b>Access details of individual stores, including store owner information, store images, GST images, etc.
            </li>
          </ul>
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://pipeline-interface.onrender.com/",
    repolink: "https://github.com/Hrishi2705/Pipeline-Interface",
    title: "Pipeline Interface",
    description:
      "This interface is a versatile Express.js application designed to streamline and automate the execution of a chain of scripts.",
    thumbnail: "/images/pipeline-interface/page1.png",
    images: [
      "/images/pipeline-interface/page1.png",
      "/images/pipeline-interface/page2.png",
      "/images/pipeline-interface/page3.png",
    ],
    stack: ["NodeJs", "ExpressJs", "MongoDB", "HTML,CSS"],
    slug: "pipelineinterface",
    content: (
      <div>
        <p>
        The Pipeline Interface provides a user-friendly experience for running and managing scripts with ease. 
        With MongoDB as the backend database, users can execute scripts sequentially and manage collections efficiently.{" "}
        </p>
        <p>
          <b> Features: </b>
          <ul>
            <li>
            <b><i>Script Execution: </i></b> Initiate script execution with the <Highlight>Start button</Highlight>, seamlessly running a series of scripts one after the other (or phase-wise).
            </li>
            <li>
            <b><i>Phase Management: </i></b> Organize scripts into phases for sequential execution.
            </li>
            <li>
            <b><i>CSV Upload and Validation: </i></b> Upload your input CSV file effortlessly with a simple drag-and-drop feature to give input to the scripts and validate your <Highlight>CSV file</Highlight> against predefined criteria using the Check CSV button.
            </li>
            <li>
            <b><i>Progress Tracking:  </i></b> Monitor the progress of the script execution in real-time, knowing exactly which script is currently running.
            </li>
            <li>
            <b><i>Collection Management: </i></b> View all collections related to different phases and download them directly from the interface.
            </li>
          </ul>
        </p>{" "}
      </div>
    ),
  },
  {
    href: null,
    repolink: "https://github.com/Hrishi2705/Timing-Consensus-Scheduler",
    title: "Timing Consensus Scheduler",
    description:
      "TCS is a web application that allows users to manage their availability, book facilities, and check the availability of other users.",
    thumbnail: "/images/tcs/page0.png",
    images: [
      "/images/tcs/page0.png",
      "/images/tcs/page1.png",
      "/images/tcs/page2.png",
      "/images/tcs/page3_2.png",
    ],
    stack: ["Django", "HTML,CSS"],
    slug: "tcs",
    content: (
      <div>
        <p>
        TCS is a web application built using the Django framework that allows users to manage their availability, book facilities, and check the availability of other users. 
        It is designed to simplify the process of scheduling and coordinating activities. 
        {" "}
        </p>
        <p>
          <b> Features: </b>
          <ul>
            <li>
            <b><i>Home Page: </i></b> Displays the bookings of the logged-in user.
            </li>
            <li>
            <b><i>My Availability Page: </i></b>  Allows users to set their daily availability using a calendar interface.
            </li>
            <li>
            <b><i>Check Others Availability Page:  </i></b> Enables users to check the availability of other users by selecting their UserIDs and a specific date.
            </li>
            <li>
            <b><i>Book Facility Page:   </i></b> Provides the ability to select a facility at BITS Hyderabad, choose a room, and book available slots.
            </li>
            <li>
            <b><i>Edit Profile:  </i></b> Allows users to modify their profile information.
            </li>
            <li>
            <b><i>User Registration: </i></b> Create user account, login and logout functionalities.
            </li>
          </ul>
        </p>{" "}
      </div>
    ),
  },
];
