import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <header className="bg-white border-b-4 border-green-600 border-t-2 sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* Left Section: Logos and Names */}
      <div className="flex items-center space-x-2">
        <img src="\assets\psg_logo.png" alt="Logo 1" className="w-12 h-12" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Department of Production Engineering</span>
          <span className="text-lg font-semibold">PSG College Of Technology</span>
        </div>
      </div>

      {/* Center Logo */}
      <img src="" alt="Prodothon Logo" className="w-12 h-12" />

      {/* Right Section: Logos and Names */}
      <div className="flex flex-col space-y-2 items-start">
        <div className="flex items-center space-x-4">
          <img src="\assets\PEA_Logo.png" alt="PEA Logo" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Production Engineering Association</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src="\assets\sme_logo.png" alt="SME Logo" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">
              Society of Manufacturing Engineers - Student Chapter
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Navigation Bar */}
<nav className="bg-white py-2 border-t-4 border-green-600">
  <div className="container mx-auto flex justify-between px-6">
    <div className="flex space-x-12">
      <Link 
        to="/" 
        className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        Home
      </Link>
      <Link 
        to="/event" 
        className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        Event
      </Link>
      <Link 
        to="/workshops" 
        className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        Workshops
      </Link>
    </div>
    <div className="flex space-x-12">
      <Link 
        to="/accommodation" 
        className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        Accommodation
      </Link>
      <Link 
        to="/gallery" 
        className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        Gallery
      </Link>
    </div>
  </div>
</nav>

  </header>
);

const Footer = () => (
  <footer className="bg-white border-t-4 border-green-600 sticky bottom-0 z-50">
  <div className="container mx-auto flex justify-between items-center px-6 py-2">
  {/* About Link */}
    <div className="flex items-center space-x-12">
      <Link 
        to="/about" 
        className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        About
      </Link>
    
      <Link 
        to="/team" 
        className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        Team
      </Link>
    </div>

  {/* Contact and Social Icons */}
    <div className="flex items-center space-x-12">
    {/* Contact Us Link */}
      <Link 
        to="/contact" 
        className="border-2 border-green-600 rounded-md py-1 px-4 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        Contact Us
      </Link>

    {/* Instagram Icon */}
      <a 
        href="https://www.instagram.com/pea_sme?igsh=MXE4bDI2ZjJ2N3g3OQ==" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="border-2 border-green-600 rounded-md py-2 px-2 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        <FaInstagram />
      </a>

    {/* LinkedIn Icon */}
      <a 
        href="https://www.linkedin.com/company/pea-sme-psg-tech/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="border-2 border-green-600 rounded-md py-2 px-2 text-amber-500 hover:text-blue-500 hover:border-blue-500 transition">
        <FaLinkedin />
      </a>
    </div>
  </div>
  
    {/* Links Section */}


    {/* Sponsor Section */}
    <div className="bg-white border-t-4 border-b-2 border-green-600 py-4">
      <div className="container mx-auto flex flex-wrap justify-center space-x-6 px-6">
        {/* Sponsor 1 */}
        <div className="flex items-center space-x-2">
          <img src="\assets\psg_logo.png" alt="Sponsor" className="w-8 h-8" />
          <span className="text-sm font-medium">PSG Tech</span>
        </div>
        {/* Sponsor 2 */}
        <div className="flex items-center space-x-2">
          <img src="\assets\psg_logo.png" alt="Sponsor" className="w-8 h-8" />
          <span className="text-sm font-medium">PSG Tech</span>
        </div>
        {/* Sponsor 3 */}
        <div className="flex items-center space-x-2">
          <img src="\assets\psg_logo.png" alt="Sponsor" className="w-8 h-8" />
          <span className="text-sm font-medium">PSG Tech</span>
        </div>
        {/* Sponsor 4 */}
        <div className="flex items-center space-x-2">
          <img src="\assets\psg_logo.png" alt="Sponsor" className="w-8 h-8" />
          <span className="text-sm font-medium">PSG Tech</span>
        </div>
        {/* Sponsor 5 */}
        <div className="flex items-center space-x-2">
          <img src="\assets\psg_logo.png" alt="Sponsor" className="w-8 h-8" />
          <span className="text-sm font-medium">PSG Tech</span>
        </div>
        {/* Sponsor 6 */}
        <div className="flex items-center space-x-2">
          <img src="\assets\psg_logo.png" alt="Sponsor" className="w-8 h-8" />
          <span className="text-sm font-medium">PSG Tech</span>
        </div>
        {/* Sponsor 7 */}
        <div className="flex items-center space-x-2">
          <img src="\assets\psg_logo.png" alt="Sponsor" className="w-8 h-8" />
          <span className="text-sm font-medium">PSG Tech</span>
        </div>
        {/* Sponsor 8 */}
        <div className="flex items-center space-x-2">
          <img src="\assets\psg_logo.png" alt="Sponsor" className="w-8 h-8" />
          <span className="text-sm font-medium">PSG Tech</span>
        </div>
      </div>
    </div>
  </footer>
);


const MainPage = () => (
  <main className="min-h-screen flex items-center justify-center bg-gray-100">
    <h1 className="text-4xl md:text-6xl font-bold text-center">
      PEA & SME presents <br /> PRODOTHON 25
    </h1>
  </main>
);

const About = () => (
  <main className="container mx-auto text-center py-12">
    <h1 className="text-4xl font-bold">About Us</h1>
  </main>
);

const Contact = () => (
  <main className="container mx-auto text-center py-12">
    <h1 className="text-4xl font-bold">Contact Us</h1>
  </main>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<h1 className="text-4xl md:text-6xl  text-center">Work on Progress</h1>} />
            <Route path="/team"element={<h1 className="text-4xl md:text-6xl  text-center">Work on Progress</h1>} />
            <Route path="/contact"element={<h1 className="text-4xl md:text-6xl  text-center">Work on Progress</h1>} />
            <Route path="/accommodation" element={<h1 className="text-4xl md:text-6xl  text-center">Work on Progress</h1>} />
            <Route path="/gallery" element={<h1 className="text-4xl md:text-6xl  text-center">Work on Progress</h1>} />
            <Route path="/event" element={<h1 className="text-4xl md:text-6xl  text-center">Work on Progress</h1>} />
            <Route path="/workshops" element={<h1 className="text-4xl md:text-6xl  text-center">Work on Progress</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
