import React from "react";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Hero/Home";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="grid grid-cols-12">
          <section className="col-span-12 md:col-span-2 sm:col-span-4">
            <Sidebar />
          </section>
          <main className="col-span-12 md:col-span-10 sm:col-span-8">
            <Home />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
