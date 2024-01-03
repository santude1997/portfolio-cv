import React from "react";
import Header from "./Header/Header";
import Experience from "./Experience/Experience";
import Summary from "./Summary/Summary";

const Home = () => {
  return (
    <>
      <Header />
      <div className="mx-5 mt-2">
        <Summary />
        <Experience />
        <p className="text-gray-50 font-semibold bg-violet-500 p-2 mb-1">
          Projet Works
        </p>
      </div>
    </>
  );
};

export default Home;
