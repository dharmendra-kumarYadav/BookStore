import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FreeBook from "../components/FreeBook";

function Home() {
  return (
    <>
      <div className="bg-white text-slate-800 dark:bgslate-900 dark:text-white"></div>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}

export default Home;
