import React from 'react'
import NavBar from './Navbar';


const Header = () => {
  return (
    <div
      className="min-vh-100 mb-4 bg-cover bg-center align-items-center w-100 overflow-hidden"
      style={{
        backgroundImage: "url('/header_img.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id="Header"
    >
      <NavBar />

      <div className=" container d-flex flex-column justify-content-center align-items-center vh-100 text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2>Explore homes that fit your dreams</h2>
        <div className="d-flex gap-3 mt-3">
          <a
            href="#Projects"
            className="border rounded px-4 py-2 text-white text-decoration-none"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="rounded px-4 py-2 bg-primary text-white text-decoration-none"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header
