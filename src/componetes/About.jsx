import { FiMapPin, FiClock, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiUsers />, number: "500+", label: "Students" },
    { icon: <FiAward />, number: "15+", label: "Years Experience" },
    { icon: <FiClock />, number: "6", label: "Programs" },
  ];

  const managementStaff = [
    {
      name: "Abubakar Farouk Abdullahi",
      position: "Chairman",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "The Principal",
      position: "Principal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Academic Director",
      position: "Academic Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Bursary Officer",
      position: "School Bursary",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">About Our Academy</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto drop-shadow-lg">
            Committed to excellence in education and Islamic values since our establishment
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 dark:bg-yellow-200 text-yellow-100 dark:text-blue-950 rounded-full mb-4 text-2xl">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Staff */}
      <section className="py-16 bg-white dark:bg-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            DR KABIRU GWARZO ACADEMY & TAHFEEZ Management Staff
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementStaff.map((staff, index) => (
              <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-900 dark:border-yellow-200"
                />
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{staff.name}</h3>
                <p className="text-blue-900 dark:text-yellow-200 font-semibold">{staff.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Welcome Message by The Chairman</h2>
            <div className="flex justify-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Chairman Abubakar Farouk Abdullahi"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-900 dark:border-yellow-200"
              />
            </div>
            <h3 className="text-xl text-blue-900 dark:text-yellow-200 font-semibold">
              Abubakar Farouk Abdullahi
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Chairman</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Dear Friends, Supporters, Parents, and Well-Wishers,
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Welcome to the official website of Dr. Kabiru Gwarzo Academy & Tahfeez. As the chairman, I am honored to present our digital presence, a reflection of our commitment to academic excellence and innovation.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-blue-900 dark:text-yellow-200">Our Journey</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Since our establishment, Dr. Kabiru Gwarzo Academy & Tahfeez has grown into a symbol of quality education in our community. Guided by our motto, "Strive for Excellence," we have remained dedicated to empowering young minds.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-blue-900 dark:text-yellow-200">Location</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                  <FiMapPin className="mt-1 text-blue-900 dark:text-yellow-200" />
                  We are located at No. 296 Layin Road Safety, Maikalwa Naibawa Zaria Road, Kumbotso LGA, Kano-Nigeria, serving our community with passion and dedication.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-blue-900 dark:text-yellow-200">Achievements</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our students have excelled academically and personally, with many pursuing higher education at prestigious institutions and embarking on successful careers. Their accomplishments are a testament to the hard work of our students, parents, and staff.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-blue-900 dark:text-yellow-200">Educational Offerings</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our curriculum spans Arts, Sciences, and Commercial disciplines, providing a holistic and well-rounded education. We are committed to nurturing dreams, discovering talents, and forging futures.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-blue-900 dark:text-yellow-200">Innovations</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We have introduced QR ID cards for staff and students to enhance security and efficiency. Additionally, our new e-Form Online Registrations streamline the admissions process, making it more accessible and convenient.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Explore our website to discover more about our academy and engage with our digital community. Together, we strive for excellence and a brighter future for our children.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Thank you for being a part of the Dr. Kabiru Gwarzo Academy & Tahfeez family.
              </p>
              <div className="text-right">
                <p className="font-semibold text-gray-900 dark:text-white">Warm regards,</p>
                <p className="font-bold text-blue-900 dark:text-yellow-200">Abubakar Farouk Abdullahi</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Chairman, Dr. Kabiru Gwarzo Academy & Tahfeez</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white dark:bg-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-900 dark:border-yellow-200">
              <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-yellow-200">Science Stream</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• SS 1 Science</li>
                <li>• SS 2 Science</li>
                <li>• SS 3 Science</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-900 dark:border-yellow-200">
              <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-yellow-200">Arts Stream</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• SS 1 Arts</li>
                <li>• SS 2 Arts</li>
                <li>• SS 3 Arts</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-900 dark:border-yellow-200">
              <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-yellow-200">Commercial Stream</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• SS 1 Commercial</li>
                <li>• SS 2 Commercial</li>
                <li>• SS 3 Commercial</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-900 dark:border-yellow-200">
              <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-yellow-200">Early Years</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Pre-Nursery 1-2</li>
                <li>• Primary 1-5</li>
                <li>• JSS 1-3</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-900 dark:border-yellow-200">
              <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-yellow-200">Islamic Studies</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Islamiyya (All Levels)</li>
                <li>• Tahfeez Program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
