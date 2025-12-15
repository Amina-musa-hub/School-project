import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'photos', name: 'Photos' },
    { id: 'videos', name: 'Videos' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Students in the Classroom',
      category: 'photos',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop',
      description: 'Active learning environment'
    },
    {
      id: 2,
      title: 'The Principal',
      category: 'photos',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      description: 'School leadership'
    },
    {
      id: 3,
      title: 'School Assembly Event',
      category: 'videos',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Morning assembly highlights'
    },
    {
      id: 4,
      title: 'Cultural Day Celebration',
      category: 'videos',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Students in traditional attire'
    },
    {
      id: 5,
      title: 'Academic Competition',
      category: 'videos',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Quiz competition highlights'
    },
    {
      id: 6,
      title: 'Pre-vocational Laboratory',
      category: 'facilities',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop',
      description: 'Science laboratory'
    },
    {
      id: 7,
      title: 'Sports Day Event',
      category: 'videos',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Annual sports competition'
    },
    {
      id: 8,
      title: 'Graduation Ceremony',
      category: 'events',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop',
      description: 'Students graduation day'
    },
    {
      id: 9,
      title: 'Computer Lab',
      category: 'facilities',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
      description: 'Technology learning center'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : selectedCategory === 'photos' 
    ? galleryItems.filter(item => item.type === 'image')
    : selectedCategory === 'videos'
    ? galleryItems.filter(item => item.type === 'video')
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery Album</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our vibrant school community through photos and videos
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <FiPlay className="text-blue-900 text-2xl ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {item.type === 'video' ? 'Play Video' : 'View Image'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      {item.type === 'video' ? 'Video' : 'Photo'}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School's Events Videos Section */}
      <section className="py-16 bg-white dark:bg-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            School's Events Videos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <FiPlay className="text-4xl text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">Cultural Day Celebration 2024</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Annual Cultural Day</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Students showcasing traditional dances and cultural performances</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <FiPlay className="text-4xl text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">Academic Excellence Awards</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Awards Ceremony</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Recognizing outstanding academic achievements and excellence</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <FiPlay className="text-2xl text-gray-400" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Sports Day</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Athletic competitions</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <FiPlay className="text-2xl text-gray-400" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Science Fair</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Student innovations</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <FiPlay className="text-2xl text-gray-400" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Graduation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Class of 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">School Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                Modern Facilities
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Well-equipped classrooms with modern teaching aids
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Science laboratories for practical learning
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Computer lab with internet connectivity
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  Library with extensive collection of books
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
                Student Activities
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                  Academic competitions and quiz programs
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                  Cultural events and celebrations
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                  Sports and physical education activities
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                  Islamic studies and Tahfeez programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
