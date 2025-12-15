import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-12 right-12 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-12 left-12 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl text-teal-100 drop-shadow-lg">Get in touch with Dr. Kabiru Gwarzo Academy</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No.296 Layin Road Safety, Maikalwa Naibawa<br />
                      Zaria Road Kumbotso LGA, Kano-Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiClock className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">School Hours</h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      <p>Mon-Thu: 7:30am - 1:15pm</p>
                      <p>Friday: 7:30am - 12:00pm</p>
                      <p>Islamiyya: 2:30pm - 5:00pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                ></textarea>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
