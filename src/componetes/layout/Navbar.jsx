import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import logo from "../../assets/school.png";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-blue-900/30 backdrop-blur shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-yellow-600">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </Link>

        <ul className="hidden md:flex font-semibold items-center gap-6 text-gray-700 ">
          <li>
            <Link
              className={
                location.pathname === "/"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/about"
                  ? "text-black dark:text-yellow-200  font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
              to="/about"
            >
              About
            </Link>
          </li>
           <li>
            <Link
              className={
                location.pathname === "/gallery"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/apply"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
              to="/apply"
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/Results"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
              to="/Results"
            >
              Results
            </Link>
          </li>
         
          <li>
            <Link
              className={
                location.pathname === "/contact"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
              to="/contact"
            >
              Contact
            </Link>
          </li>
            <li>
                <DarkModeToggle />
            </li>
        </ul>

        <Link
          to="/apply"
          className="hidden md:inline-block bg-blue-900 dark:bg-yellow-200 dark:text-blue-950 font-semibold text-yellow-100 dark:hover:text-yellow-100 px-5 py-2 rounded-xl  dark:hover:bg-blue-950 *: hover:bg-red-900 transition"
        >
          Apply Now
        </Link>

        <button
          className="md:hidden text-3xl text-blue-900 dark:text-yellow-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-blue-950/30 shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <Link
             className={
                location.pathname === "/"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
            onClick={() => setOpen(false)} to="/">
              Home
            </Link>
            <Link
             className={
                location.pathname === "/about"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
            onClick={() => setOpen(false)}
             to="/about">
              About
            </Link>
            <Link 
             className={
                location.pathname === "/programs"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
            onClick={() => setOpen(false)} to="/programs">
              Programs
            </Link>
            <Link 
             className={
                location.pathname === "/gallery"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
            onClick={() => setOpen(false)} to="/gallery">
              Gallery
            </Link>
            <Link
             className={
                location.pathname === "/contact"
                  ? "text-black dark:text-yellow-200 font-semibold underline underline-offset-8 dark:decoration-yellow-200 decoration-blue-900 drop-shadow"
                  : "text-black dark:text-gray-50/90 font-bold hover:text-blue-900 transition"
              }
            onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
            <li>
                <DarkModeToggle />
            </li>
            <Link
              onClick={() => setOpen(false)}
              to="/apply"
              className="bg-blue-900 dark:bg-yellow-200 dark:text-blue-950 font-semibold text-yellow-100 dark:hover:text-yellow-100 px-6 py-2 rounded-xl"
            >
              Apply Now
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
