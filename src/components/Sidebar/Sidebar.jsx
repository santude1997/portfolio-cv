import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import Social from "./Social/Social";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";

const Sidebar = () => {
  return (
      <div className="bg-violet-800 text-white min-h-screen p-3">
        <ProfileImage />
        <Contact />
        <Skills />
        <Social />
      </div>
  );
};

export default Sidebar;
