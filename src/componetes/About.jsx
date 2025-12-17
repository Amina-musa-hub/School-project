import { FiMapPin, FiClock, FiUsers, FiAward, FiChevronRight } from "react-icons/fi";
import { FaGraduationCap, FaBookOpen, FaPray } from "react-icons/fa";
import chairman from "../assets/chairman.jpg";
import principal from "../assets/principal.png";
import bursay from "../assets/bursay.png";
import officer from "../assets/officer.png";
import teacher from "../assets/teacher.png";
import officer2 from "../assets/officer2.png";
import imge from "../assets/image.png";
import CountUp from "../componetes/layout/CountUp";
import { motion } from "framer-motion";
import {Link } from 'react-router-dom';

const About = () => {
  const stats = [
    {
      icon: <FiUsers />,
      number: (
        <CountUp
          from={10}
          to={500}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
      ),
      label: "Students",
      description: "Enrolled across all programs"
    },
    {
      icon: <FiAward />,
      number: (
        <CountUp
          from={0}
          to={15}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
      ),
      label: "Years Experience",
      description: "Of educational excellence"
    },
    {
      icon: <FiClock />,
      number: (
        <CountUp
          from={10}
          to={6}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
      ),
      label: "Programs",
      description: "Comprehensive curriculum"
    },
    {
      icon: <FaGraduationCap />,
      number: (
        <CountUp
          from={0}
          to={50}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
      ),
      label: "Graduates",
      description: "Success stories annually"
    },
  ];

  const managementStaff = [
    {
      name: "Adamu Muhammad Alkali",
      position: "Principal",
      image: principal,
    },
    {
      name: "Ummi Abubakar",
      position: "School Bursary",
      image: bursay,
    },
    {
      name: "Faruk Hamza Adam",
      position: "Head Teacher",
      image: teacher,
    },
    {
      name: "Buhari Haruna Idris",
      position: "Examination Officer",
      image: officer,
    },
    {
      name: "Khadija Hamza Adam",
      position: "Asst. Examination Officer",
      image: officer2,
    },
    {
      name: "Imam Lawal Abubakar",
      position: "CEO A.I. Softwares Solutions",
      image: imge,
    },
  ];

  const programs = [
    {
      title: "Science Stream",
      icon: "🔬",
      color: "from-blue-500/90 to-cyan-200",
      items: ["SS 1 Science", "SS 2 Science", "SS 3 Science"],
      description: "Advanced scientific education with modern laboratories"
    },
    {
      title: "Arts Stream",
      icon: "🎨",
      color: "from-purple-400 to-pink-200",
      items: ["SS 1 Arts", "SS 2 Arts", "SS 3 Arts"],
      description: "Creative and humanities-focused curriculum"
    },
    {
      title: "Commercial Stream",
      icon: "💼",
      color: "from-green-400 to-emerald-200",
      items: ["SS 1 Commercial", "SS 2 Commercial", "SS 3 Commercial"],
      description: "Business and commerce education"
    },
    {
      title: "Early Years",
      icon: "👶",
      color: "from-yellow-400 to-orange-200",
      items: ["Pre-Nursery 1-2", "Primary 1-5", "JSS 1-3"],
      description: "Foundation building for young learners"
    },
    {
      title: "Islamic Studies",
      icon: "☪️",
      color: "from-red-400 to-rose-200",
      items: ["Islamiyya (All Levels)", "Tahfeez Program"],
      description: "Comprehensive Islamic education"
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-24 text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div> */}
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold ">
              About Our Institution
            </span>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
           
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              By The Numbers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our journey in numbers - a testament to our commitment to educational excellence
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-900 dark:bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 dark:from-yellow-400 dark:to-yellow-300 flex items-center justify-center text-white dark:text-blue-900 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Staff */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dedicated professionals guiding our institution towards excellence
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
            
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
            >
              {[...managementStaff, ...managementStaff].map((staff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[300px] bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-yellow-400 dark:to-yellow-300 rounded-full blur"></div>
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 relative"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                    {staff.name}
                  </h3>
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-blue-900/10 dark:bg-yellow-400/10 text-blue-900 dark:text-yellow-300 rounded-full text-sm font-semibold">
                      {staff.position}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}

      
      <section className="py-20 ">
        <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            <div className="md:flex lg:flex flex-col">
              <div className="md:w-1/3 lg:w-full  p-8 md:p-12 flex flex-col items-center justify-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full border-8 border-white/20 overflow-hidden shadow-2xl shadow-blue-900">
                    <img
                      src={chairman}
                      alt="Chairman Abubakar Farouk Abdullahi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white dark:bg-blue-900 rounded-full flex items-center justify-center text-3xl text-blue-900 dark:text-yellow-300 shadow-lg">
                    👑
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-yellow-300 text-center">
                  Abubakar Farouk Abdullahi
                </h3>
                <p className="text-blue-600 dark:text-blue-800 font-semibold mt-2">Chairman</p>
                <div className="mt-6 flex items-center gap-2 text-blue-900/80 dark:text-blue-900/80">
                  <FiMapPin />
                  <span className="text-sm">Kano, Nigeria</span>
                </div>
              </div>

              {/* Right Column - Message */}
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-900 to-blue-600 dark:from-yellow-400 dark:to-yellow-300 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Chairman's Message
                  </h2>
                </div>

                <div className="space-y-6 ">
                   <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/50 dark:bg-gray-700/30  p-6 rounded-xl border-l-4 border-blue-900 dark:border-yellow-300"
                  >
                    <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-yellow-300 flex items-center gap-2">
                      <FiChevronRight /> Our Journey & Vision
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Since our establishment, Dr. Kabiru Gwarzo Academy & 
                      Tahfeez has grown into a symbol of quality education in our community. 
                      Guided by our motto, "Strive for Excellence,"
                       we have remained dedicated to empowering young minds.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/50 dark:bg-gray-700/30 p-6 rounded-xl border-l-4 border-blue-900 dark:border-yellow-300"
                  >
                    <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-yellow-300 flex items-center gap-2">
                      <FiChevronRight /> Achievements & Innovation
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Our students have excelled academically and personally, with many pursuing higher education at prestigious institutions. We've introduced QR ID cards and e-Form Online Registrations to enhance security and streamline processes.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/50 dark:bg-gray-700/30 p-6 rounded-xl border-l-4 border-blue-900 dark:border-yellow-300"
                  >
                    <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-yellow-300 flex items-center gap-2">
                      <FiChevronRight /> Educational Philosophy
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Our curriculum spans Arts, Sciences, and Commercial disciplines, providing a holistic education. We are committed to nurturing dreams, discovering talents, and forging futures through both academic and Islamic education.
                    </p>
                  </motion.div>
                </div>
                  <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                      "Together, we strive for excellence and a brighter future for our children. Thank you for being part of our family."
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Warm regards,</p>
                        <p className="text-2xl font-bold text-blue-900 dark:text-yellow-300">
                          Abubakar Farouk Abdullahi
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Chairman, Dr. Kabiru Gwarzo Academy & Tahfeez
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      

      {/* Programs Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Programs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tailored educational pathways for every student's success
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className={`h-full bg-gradient-to-br ${program.color} rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl`}>
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-4xl mb-3">{program.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{program.description}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <ul className="space-y-2">
                        {program.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-white/90 group-hover:text-white">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-4 border-t border-white/20">
                      <Link to="/Price">
                      <button className="w-full py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm font-semibold transition-all duration-300 group-hover:bg-white/40">
                          Learn More →
                        </button>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
              <FaBookOpen className="text-2xl text-blue-900 dark:text-yellow-300" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Complete curriculum with modern teaching methodologies
              </span>
              <FaPray className="text-2xl text-blue-900 dark:text-yellow-300" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
