import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Cards from "../components/Cards";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-20 py-4 flex-grow">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Literary Haven is a welcoming bookstore for all book lovers,
            offering a curated selection of books from timeless classics to
            contemporary bestsellers. We create an inviting atmosphere where
            customers can explore literature, attend author readings, and join
            book clubs. Our knowledgeable staff is always ready to recommend the
            perfect book or help you discover a new favorite author. At Literary
            Haven, we believe in the transformative power of books and strive to
            foster a community of passionate readers.
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
