import { Highlight } from "@/components/Highlight";

export const products = [
  {
    href: "https://project-bridge-hruxf4oyz-aditya-abhirams-projects.vercel.app/",
    repolink: "https://github.com/Hrishi2705/Project-Bridge",
    title: "Project Bridge",
    description:
      "A MERN app simplifying project applications for students and professors.",
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
          Project Bridge is a comprehensive platform facilitating streamlined
          project request management, efficient communication between teachers
          and students, and smart filtering for project allocation.{" "}
        </p>
        <h2>Tech Stack</h2>
        {/* <p><Highlight>MERN</Highlight>, <Highlight>FIREBASE</Highlight></p> */}
        <ol>
          <li>
            Database: <Highlight>MongoDB</Highlight>
          </li>
          <li>
            Backend: <Highlight>Express.js</Highlight>,{" "}
            <Highlight>Node.js</Highlight>
          </li>
          <li>
            Frontend: <Highlight>React.js</Highlight>
          </li>
          <li>
            Login: <Highlight>Google Auth(Firebase)</Highlight>
          </li>
          <li>
            File Storage: <Highlight>Google Cloud Storage</Highlight>
          </li>
        </ol>
        {/* <h2>Web Application Functionalities</h2>
      <p>The web application supports three types of users: Professor, Student, and Admin.</p>

      <details>
        <summary><b>User Login</b></summary>
        <p>Google Firebase Authentication is used so that users can directly login via their BITS google accounts.</p>
      </details>

      <details>
        <summary><b>Professor Side Functionalities</b></summary>
        <ol>
          <li><b>Login</b>: Professors log in using their BITS Google account.</li>

          <li><b>Home Page</b>: Professors can create new projects (name, description, number of slots, project type, pre-requisites). They can edit or delete projects, with changes reflected instantly on the webpage.</li>
          
          <li><b>Requests Page</b>: Professors can view all student requests for their projects in a tabular format. Information includes CG eligibility, degree, resume, performance sheet, pre-requisites fulfilled, and a short paragraph written by the student. Professors can accept or reject requests and undo decisions if necessary.</li>
          
          <li><b>Profile Page</b>: Professors can fill out their basic details, such as name, department, room number, and block/building.</li>
          
        </ol>
      </details>

      <details>
        <summary><b>Student Side Functionalities</b></summary>
        <ol>
          <li><b>Login</b>: Students log in using their BITS Google account.</li>

          <li><b>Home Page</b>: Displays the status of current requests sent by the students (accepted/rejected/pending).</li>
          
          <li><b>Project Bank</b>: Lists all projects by every teacher and department. Students can view project details, apply for projects, save drafts, like projects, and filter projects by various criteria. Requests are sent without the need to reload the page.</li>
          
          <li><b>Profile Page</b>: Students can fill in their basic information (ID number, branch, current CGPA) and upload their resume and performance sheet.</li>
          
        </ol>
      </details>

      <details>
        <summary><b>Admin Functionalities</b></summary>
        <p>Admins can view various statistics related to projects and requests, such as projects per department, average requests per department, project slots with respect to departments, and project type distribution, displayed in graphs (line, bar, pie chart, etc.).</p>
        {" "}
      </details>{" "} */}
        <p style={{ marginBottom: "2rem" }}>
          <h2>Web Application Functionalities</h2>
          <p>
            The web application supports three types of users: Professor,
            Student, and Admin.
          </p>

          <h3>User Login</h3>
          <p>
            Google Firebase Authentication is used so that users can directly
            login via their BITS google accounts.
          </p>

          <h3>Professor Side Functionalities</h3>
          <ul>
            <li>
              <b>Login</b>: Professors log in using their BITS Google account.
            </li>
            <li>
              <b>Home Page</b>: Professors can create new projects (name,
              description, number of slots, project type, pre-requisites). They
              can edit or delete projects, with changes reflected instantly on
              the webpage.
            </li>
            <li>
              <b>Requests Page</b>: Professors can view all student requests for
              their projects in a tabular format. Information includes CG
              eligibility, degree, resume, performance sheet, pre-requisites
              fulfilled, and a short paragraph written by the student.
              Professors can accept or reject requests and undo decisions if
              necessary.
            </li>
            <li>
              <b>Profile Page</b>: Professors can fill out their basic details,
              such as name, department, room number, and block/building.
            </li>
          </ul>

          <h3>Student Side Functionalities</h3>
          <ul>
            <li>
              <b>Login</b>: Students log in using their BITS Google account.
            </li>
            <li>
              <b>Home Page</b>: Displays the status of current requests sent by
              the students (accepted/rejected/pending).
            </li>
            <li>
              <b>Project Bank</b>: Lists all projects by every teacher and
              department. Students can view project details, apply for projects,
              save drafts, like projects, and filter projects by various
              criteria. Requests are sent without the need to reload the page.
            </li>
            <li>
              <b>Profile Page</b>: Students can fill in their basic information
              (ID number, branch, current CGPA) and upload their resume and
              performance sheet.
            </li>
          </ul>

          <h3>Admin Functionalities</h3>
          <ul>
            <li>
              Admins can view various statistics related to projects and
              requests, such as projects per department, average requests per
              department, project slots with respect to departments, and project
              type distribution, displayed in graphs (line, bar, pie chart,
              etc.).
            </li>
          </ul>
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://sales-admin-dashboard-t511.onrender.com/",
    repolink: "https://github.com/Hrishi2705/Admin-Dashboard",
    title: "Sales Admin Dashboard",
    description: "Webapp designed to streamline sales management processes.",
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
          The Sales Admin Dashboard is a tool designed to streamline sales
          management processes. It provides functionalities to manage
          salespeople, stores, and their respective assignments. With this
          dashboard, administrators can efficiently monitor sales activities and
          make necessary adjustments.{" "}
        </p>
        <p>
          <b> PAGES: </b>
          <ul>
            <li>
              <b>
                <i> Sales People Page: </i>
              </b>
              Displays the status of salespeople, their details, and allows
              admins to edit and assign new areas.
            </li>
            <li>
              <b>
                <i>Stores vs Sales People Page: </i>
              </b>
              Provides information on stores and their assigned salespeople,
              along with onboarding details.
            </li>
            <li>
              <b>
                <i>Stores Page: </i>
              </b>
              Access details of individual stores, including store owner
              information, store images, GST images, etc.
            </li>
          </ul>
        </p>{" "}
      </div>
    ),
  },
  // {
  //   href: "https://pipeline-interface.onrender.com/",
  //   repolink: "https://github.com/Hrishi2705/Pipeline-Interface",
  //   title: "Pipeline Interface",
  //   description:
  //     "Application designed to streamline and automate the execution of a chain of scripts.",
  //   thumbnail: "/images/pipeline-interface/page1.png",
  //   images: [
  //     "/images/pipeline-interface/page1.png",
  //     "/images/pipeline-interface/page2.png",
  //     "/images/pipeline-interface/page3.png",
  //   ],
  //   stack: ["NodeJs", "ExpressJs", "MongoDB", "HTML,CSS"],
  //   slug: "pipelineinterface",
  //   content: (
  //     <div>
  //       <p>
  //       The Pipeline Interface provides a user-friendly experience for running and managing scripts with ease.
  //       With MongoDB as the backend database, users can execute scripts sequentially and manage collections efficiently.{" "}
  //       </p>
  //       <p>
  //         <b> Features: </b>
  //         <ul>
  //           <li>
  //           <b><i>Script Execution: </i></b> Initiate script execution with the <Highlight>Start button</Highlight>, seamlessly running a series of scripts one after the other (or phase-wise).
  //           </li>
  //           <li>
  //           <b><i>Phase Management: </i></b> Organize scripts into phases for sequential execution.
  //           </li>
  //           <li>
  //           <b><i>CSV Upload and Validation: </i></b> Upload your input CSV file effortlessly with a simple drag-and-drop feature to give input to the scripts and validate your <Highlight>CSV file</Highlight> against predefined criteria using the Check CSV button.
  //           </li>
  //           <li>
  //           <b><i>Progress Tracking:  </i></b> Monitor the progress of the script execution in real-time, knowing exactly which script is currently running.
  //           </li>
  //           <li>
  //           <b><i>Collection Management: </i></b> View all collections related to different phases and download them directly from the interface.
  //           </li>
  //         </ul>
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  {
    href: null,
    repolink: "https://github.com/Hrishi2705/Timing-Consensus-Scheduler",
    title: "Timing Consensus Scheduler",
    description:
      "Webapp that allows users to manage their availability, book facilities, and check the availability of other users.",
    thumbnail: "/images/tcs/page0.png",
    images: [
      // "/images/tcs/page0.png",
      "/images/tcs/page1.png",
      "/images/tcs/page2.png",
      "/images/tcs/page3_2.png",
    ],
    stack: ["Django", "HTML,CSS"],
    slug: "tcs",
    content: (
      <div>
        <p>
          TCS is a web application built using the Django framework that allows
          users to manage their availability, book facilities, and check the
          availability of other users. It is designed to simplify the process of
          scheduling and coordinating activities.{" "}
        </p>
        <p>
          <b> Features: </b>
          <ul>
            <li>
              <b>
                <i>Home Page: </i>
              </b>{" "}
              Displays the bookings of the logged-in user.
            </li>
            <li>
              <b>
                <i>My Availability Page: </i>
              </b>{" "}
              Allows users to set their daily availability using a calendar
              interface.
            </li>
            <li>
              <b>
                <i>Check Others Availability Page: </i>
              </b>{" "}
              Enables users to check the availability of other users by
              selecting their UserIDs and a specific date.
            </li>
            <li>
              <b>
                <i>Book Facility Page: </i>
              </b>{" "}
              Provides the ability to select a facility at BITS Hyderabad,
              choose a room, and book available slots.
            </li>
            <li>
              <b>
                <i>Edit Profile: </i>
              </b>{" "}
              Allows users to modify their profile information.
            </li>
            <li>
              <b>
                <i>User Registration: </i>
              </b>{" "}
              Create user account, login and logout functionalities.
            </li>
          </ul>
        </p>{" "}
      </div>
    ),
  },
];
