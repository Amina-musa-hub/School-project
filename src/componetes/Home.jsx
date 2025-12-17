import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/school.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  const features = [
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Quality Education",
      description:
        "Pre-Nursery to SS3 with Science, Arts & Commercial streams plus comprehensive Islamic studies",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Islamic Studies & Tahfeez",
      description:
        "Complete Islamiyya and Tahfeez programs integrated with modern curriculum",
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Excellence & Innovation",
      description:
        "QR ID cards, e-Form registrations, and commitment to academic excellence",
    },
  ];

  const programs = [
    { level: "Pre-Nursery", grades: "1-2", 
      time: "Mon-Thu: 7:30am-12:30pm,Fri: 7:30am-12:00pm" },
    { level: "Primary", grades: "1-5", time: "Mon-Thu: 7:30am-1:15pm, Fri: 7:30am-12:00pm" },
    { level: "Junior Secondary", grades: "JSS 1-3", time: "Mon-Thu: 7:30am-1:15pm, Fri: 7:30am-12:00pm" },
    { level: "Senior Secondary", grades: "SS 1-3 (Science, Arts, Commercial)", time: "Mon-Thu: 7:30am-1:15pm, Fri: 7:30am-12:00pm" },
    { level: "Islamiyya", grades: "All Levels", time: "Mon-Thu: 2:30pm-5:00pm" },
    { level: "Tahfeez", grades: "All Levels", time: "Mon-Thu: 9:00am-5:00pm" },
  ];

  const currentEvents = [
    {
      title: "2025/2026 Session e-Application Form",
      status: "NOW ON SALE!",
      description: "Get your application form for the upcoming academic session",
      color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    },
    {
      title: "2024/2025 Session Registration",
      status: "ONGOING",
      description: "Registration for current session is still ongoing",
      color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    },
    {
      title: "Employment Opportunities",
      status: "AVAILABLE",
      description: "Academic Staff, NYSC Corps Members and IT Students needed",
      color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
    <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-24 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.img
            src={logo}
            alt="School Logo"
            className="w-28 h-28 mx-auto mb-6 drop-shadow-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <br />
            <span className="text-yellow-300">Dr. Kabiru Gwarzo Academy</span>
          </h1>

             <p className="text-xl md:text-2xl mb-6 text-yellow-200 font-semibold drop-shadow-lg">
              & Tahfeez - "Strive for Excellence"
             </p>
            <div className="flex items-center justify-center gap-2 text-blue-100 mb-8">
              <FiMapPin className="text-yellow-200 drop-shadow-lg" />
              <p className=" max-w-3xl drop-shadow-lg">
                No.296 Layin Road Safety, Maikalwa Naibawa Zaria Road, Kumbotso LGA, Kano-Nigeria
              </p>
            </div>
         
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link
                to="/apply"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl transform hover:scale-105"              >
                Apply Now <FiArrowRight />
                </Link>
               <Link
                 to="/about"
                 className="border-2 border-yellow-200 text-yellow-200 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-200 hover:text-blue-900 transition-all duration-300 backdrop-blur-sm bg-white/10 shadow-xl"
               >
                 Learn More
             </Link>
        </div>
        </div>
      </motion.section>
   

      {/* Events */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4"
        >
          {currentEvents.map((event, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`p-6 rounded-lg border-2 ${event.color}`}
            >
              <span className="text-sm font-bold">{event.status}</span>
              <h3 className="text-lg font-bold mt-2">{event.title}</h3>
              <p className="mt-2">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
            >
              <div className="w-16 h-16 mx-auto bg-blue-900 text-yellow-200 flex items-center justify-center rounded-full mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-900"
            >
              <h3 className="font-bold text-lg">{p.level}</h3>
              <p>{p.grades}</p>
              <div className="flex gap-2 mt-2">
                <FiClock />
                <span className="text-sm">{p.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
