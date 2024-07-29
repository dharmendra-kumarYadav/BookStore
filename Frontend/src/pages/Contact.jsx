import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="max-h-screen py-20 flex flex-col items-center bg-white text-black dark:bg-slate-900 dark:text-white">
        <h1 className="text-2xl font-bold mb-4 ">Send us a message</h1>
        <form className="flex flex-col space-y-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-full py-3 px-2 border border-gray-300 rounded-md bg-inherit"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-3 px-2 border border-gray-300 rounded-md bg-inherit"
          />
          <input
            type="number"
            placeholder="Enter your phone no."
            className="w-full py-3 px-2 border border-gray-300 rounded-md bg-inherit"
          />
          <textarea
            rows={4}
            cols={20}
            placeholder="Messages.."
            className="w-full py-3 px-2 border border-gray-300 rounded-md bg-inherit"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
