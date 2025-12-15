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
                  ? "text-black dark:text-yellow-300 font-semibold underline underline-offset-8 dark:decoration-yellow-300 decoration-blue-900 drop-shadow"
                  : "text-black font-bold hover:text-blue-900 transition"
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
                  ? "text-black dark:text-yellow-300  font-semibold underline underline-offset-8 dark:decoration-yellow-300 decoration-blue-900 drop-shadow"
                  : "text-black font-bold hover:text-blue-900 transition"
              }
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/programs"
                  ? "text-black dark:text-yellow-300 font-semibold underline underline-offset-8 dark:decoration-yellow-300 decoration-blue-900 drop-shadow"
                  : "text-black font-bold hover:text-blue-900 transition"
              }
              to="/programs"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/gallery"
                  ? "text-black dark:text-yellow-300 font-semibold underline underline-offset-8 dark:decoration-yellow-300 decoration-blue-900 drop-shadow"
                  : "text-black font-bold hover:text-blue-900 transition"
              }
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/contact"
                  ? "text-black dark:text-yellow-300 font-semibold underline underline-offset-8 dark:decoration-yellow-300 decoration-blue-900 drop-shadow"
                  : "text-black font-bold hover:text-blue-900 transition"
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
          to="/admissions"
          className="hidden md:inline-block bg-blue-900 dark:bg-yellow-300 dark:text-blue-950 font-semibold text-white px-5 py-2 rounded-xl dark:hover:bg-yellow-300 hover:bg-red-900 transition"
        >
          Apply Now
        </Link>

        <button
          className="md:hidden text-3xl text-yellow-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} to="/about">
              About
            </Link>
            <Link onClick={() => setOpen(false)} to="/programs">
              Programs
            </Link>
            <Link onClick={() => setOpen(false)} to="/gallery">
              Gallery
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/admissions"
              className="bg-yellow-600 text-white px-6 py-2 rounded-xl"
            >
              Apply Now
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
