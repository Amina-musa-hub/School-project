import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiUsers, FiAward, FiMapPin, FiClock } from 'react-icons/fi';
import logo from '../assets/school.png';

const Home = () => {
  const features = [
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Quality Education",
      description: "Pre-Nursery to SS3 with Science, Arts & Commercial streams plus comprehensive Islamic studies"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Islamic Studies & Tahfeez",
      description: "Complete Islamiyya and Tahfeez programs integrated with modern curriculum"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Excellence & Innovation",
      description: "QR ID cards, e-Form registrations, and commitment to academic excellence"
    }
  ];

  const programs = [
    { level: "Pre-Nursery", grades: "1-2", time: "Mon-Thu: 7:30am-12:30pm, Fri: 7:30am-12:00pm" },
    { level: "Primary", grades: "1-5", time: "Mon-Thu: 7:30am-1:15pm, Fri: 7:30am-12:00pm" },
    { level: "Junior Secondary", grades: "JSS 1-3", time: "Mon-Thu: 7:30am-1:15pm, Fri: 7:30am-12:00pm" },
    { level: "Senior Secondary", grades: "SS 1-3 (Science, Arts, Commercial)", time: "Mon-Thu: 7:30am-1:15pm, Fri: 7:30am-12:00pm" },
    { level: "Islamiyya", grades: "All Levels", time: "Mon-Thu: 2:30pm-5:00pm" },
    { level: "Tahfeez", grades: "All Levels", time: "Mon-Thu: 9:00am-5:00pm" }
  ];

  const currentEvents = [
    {
      title: "2025/2026 Session e-Application Form",
      status: "NOW ON SALE!",
      description: "Get your application form for the upcoming academic session",
      color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
    },
    {
      title: "2024/2025 Session Registration",
      status: "ONGOING",
      description: "Registration for current session is still ongoing",
      color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
    },
    {
      title: "Employment Opportunities",
      status: "AVAILABLE",
      description: "Academic Staff, NYSC Corps Members and IT Students needed",
      color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img src={logo} alt="Dr. Kabiru Gwarzo Academy Logo" className="w-28 h-28 drop-shadow-2xl" />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to<br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-lg">
                Dr. Kabiru Gwarzo Academy
              </span>
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
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl transform hover:scale-105"
              >
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
        </div>
      </section>

      {/* Current Events */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            School Current Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currentEvents.map((event, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${event.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-900 dark:bg-yellow-200 text-yellow-100 dark:text-blue-950 text-xs font-bold rounded-full">
                    {event.status}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Our Academy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 dark:bg-yellow-200 text-yellow-100 dark:text-blue-950 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Time Schedule */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            What to Study From Us & Time Schedule
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-900 dark:border-yellow-200">
                <h3 className="font-bold text-lg mb-2 text-blue-900 dark:text-yellow-200">
                  {program.level}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">{program.grades}</p>
                <div className="flex items-start gap-2">
                  <FiClock className="text-blue-900 dark:text-yellow-200 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{program.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman's Message Preview */}
      <section className="py-16 bg-white dark:bg-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Message from the Chairman</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
              "Welcome to Dr. Kabiru Gwarzo Academy & Tahfeez. As chairman, I am honored to present our commitment to academic excellence and innovation. Since our establishment, we have grown into a symbol of quality education in our community, guided by our motto 'Strive for Excellence'..."
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">Abubakar Farouk Abdullahi</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Chairman</p>
            <Link
              to="/about"
              className="inline-block text-blue-900 dark:text-yellow-200 hover:underline font-semibold"
            >
              Read Full Message →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
