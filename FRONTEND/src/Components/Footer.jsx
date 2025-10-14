import React, { useEffect, useState } from "react";
import { FaLinkedin,  FaInstagram,  FaTelegram,  FaWhatsapp,   FaArrowUp,  FaMapMarkerAlt, FaHeart, FaCode, FaRocket } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/5 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" style={{animationDuration: '4s'}}></div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-12 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} className="group-hover:animate-bounce" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-8 transform hover:scale-105 transition-all duration-500">
            <div className="relative">
              <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Aman's
                <br />
                <span className="text-5xl">Portfolio</span>
              </h2>
              <FaRocket className="absolute -top-4 -right-6 text-3xl text-yellow-400 animate-bounce" />
            </div>
            
            <div className="relative p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-lg italic text-gray-300 leading-relaxed">
                "Crafting digital experiences with passion & precision"
              </p>
              <FaCode className="absolute -bottom-2 -right-2 text-cyan-400 animate-spin" style={{animationDuration: '8s'}} />
            </div>

            <div className="w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] animate-pulse" style={{animationDuration: '2s', animationIterationCount: 'infinite'}}></div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>

            {/* Individual Social Links */}
            <div className="grid grid-cols-3 gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/9560472926"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 hover:border-green-400 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 relative overflow-hidden"
              >
                <FaWhatsapp size={32} className="text-green-400 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>

              {/* GitHub */}
             

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amangupta9454/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 hover:border-blue-400 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 relative overflow-hidden"
              >
                <FaLinkedin size={32} className="text-blue-400 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/amangupta9454"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-500/30 hover:border-yellow-400 transform hover:scale-110 hover:rotate-3 transition-all duration-300 relative overflow-hidden"
              >
                <SiLeetcode size={32} className="text-yellow-400 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/gupta_aman_9161/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl border border-pink-500/30 hover:border-pink-400 transform hover:scale-110 hover:-rotate-3 transition-all duration-300 relative overflow-hidden"
              >
                <FaInstagram size={32} className="text-pink-400 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>

              {/* Telegram */}
              <a
                href="https://telegram.me/amangupta20053"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transform hover:scale-110 hover:rotate-3 transition-all duration-300 relative overflow-hidden"
              >
                <FaTelegram size={32} className="text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-6 text-right">
            <div className="relative">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Location
              </h3>
              <FaMapMarkerAlt className="absolute -top-2 -left-8 text-2xl text-red-400 animate-bounce" />
            </div>

            <div className="relative group">
              <div className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transform hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="space-y-2 relative z-10">
                  <p className="text-lg font-semibold text-gray-200">Village: Jashara</p>
                  <p className="text-lg font-semibold text-gray-200">Post: Sachui</p>
                  <p className="text-lg font-semibold text-gray-200">District: Mau</p>
                  <p className="text-sm text-gray-400 mt-4 font-mono">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800/50 pt-8 text-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="text-gray-400">by</span>
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Aman Gupta
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} All rights reserved</p>
            <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse"></div>
            <p className="font-mono tracking-wider">{ "< Developer / Designer / Dreamer >" }</p>
          </div>

          {/* Animated Bottom Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 translate-x-[-100%] animate-pulse" style={{animationDuration: '3s', animationIterationCount: 'infinite'}}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;