import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componetes/layout/Navbar';
import Home from './componetes/Home';
import About from './componetes/About';
import Gallery from './componetes/Gallery';
import Apply from './componetes/Apply';
import Results from './componetes/Results';
import Price from './componetes/Price';
import Contact from './componetes/Contact';
import Footer from './componetes/Footer';

function App() {
  return (
    <Router>
      <div className='font-poppins bg-background dark:bg-red-950 text-gray-800 dark:text-white min-h-screen'>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/results" element={<Results />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
