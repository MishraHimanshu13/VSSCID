import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBasketballBall, FaFutbol, FaRunning, FaVolleyballBall } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="logo-text text-2xl font-bold">
              VSSCID
              <span className="logo-text-full text-sm">
                Vimla Shruti Sports Civil Infrastructure and Development
              </span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl mb-4">VSSCID</h3>
                <p className="text-gray-400">Building the future of sports infrastructure</p>
              </div>
              <div>
                <h3 className="text-xl mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                  <li><Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Sports Avenue</li>
                  <li>New Delhi, India</li>
                  <li>Phone: +91 123-456-7890</li>
                  <li>Email: info@vsscid.com</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <FaBasketballBall className="text-2xl text-gray-400 hover:text-white cursor-pointer" />
                  <FaFutbol className="text-2xl text-gray-400 hover:text-white cursor-pointer" />
                  <FaVolleyballBall className="text-2xl text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 VSSCID. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;