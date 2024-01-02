import React from "react";
import Header from "./Header/Header";

const Home = () => {
  return (
    <>
      <Header/>
      <div className="mx-5 mt-2">
        <p className="text-gray-50 font-semibold bg-violet-500 p-2 mb-1">
          Summary
        </p>
        <p className="leading-8 tracking-wide">
          As a Frontend Developer at AllesHealth, you will play a pivotal role
          in designing and developing our mobile application using React Native.
          You will collaborate with cross-functional teams, including UI/UX
          designers and backend developers, to create seamless and engaging user
          experiences. Your technical expertise, creativity, and attention to
          detail will contribute to the overall success of our innovative
          healthcare platform.
        </p>
        <p className="text-gray-50 font-semibold bg-violet-500 p-2 mb-1">
          Work Experience
        </p>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>

          <p>DataSpace Security Private Limited</p>
        </div>
        <p className="ml-7 mb-3">
          Full Stack Web developer - (Augest, 2023 - Present)
        </p>

        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
            />
          </svg>
          <p>RWS Moravia India Private Limited</p>
        </div>
        <p className="ml-7 mb-3">
          Software Developer - (Augest, 2021 - Augest, 2023)
        </p>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
            />
          </svg>
          <p>Startup ACE - Internship</p>
        </div>
        <p className="ml-7 mb-3">
          Software Developer - (Augest, 2021 - Augest, 2023)
        </p>

        <p className="text-gray-50 font-semibold bg-violet-500 p-2 mb-1">
          Projet Works
        </p>
      </div>
    </>
  );
};

export default Home;
