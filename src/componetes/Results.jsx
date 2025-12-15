import { useState } from 'react';
import { FiSearch, FiDownload } from 'react-icons/fi';

const Results = () => {
  const [searchData, setSearchData] = useState({
    studentId: '',
    examType: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    alert('Results will be displayed here');
  };

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Results Checker</h1>
          <p className="text-xl text-violet-100 drop-shadow-lg">Check and download your examination results</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Student ID</label>
              <input
                type="text"
                required
                placeholder="Enter your student ID"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                value={searchData.studentId}
                onChange={(e) => setSearchData({...searchData, studentId: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Exam Type</label>
              <select
                required
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                value={searchData.examType}
                onChange={(e) => setSearchData({...searchData, examType: e.target.value})}
              >
                <option value="">Select Exam Type</option>
                <option value="first-term">First Term</option>
                <option value="second-term">Second Term</option>
                <option value="third-term">Third Term</option>
                <option value="mock">Mock Exam</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiSearch /> Check Results
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Results;
