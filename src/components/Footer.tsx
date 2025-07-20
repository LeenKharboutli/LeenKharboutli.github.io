import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Sarah<span className="text-blue-400">Data</span>
            </h3>
            <p className="text-gray-400">
              Data scientist passionate about transforming complex data into actionable insights 
              through advanced analytics and machine learning.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2024 Sarah Chen. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;