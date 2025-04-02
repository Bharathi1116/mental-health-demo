
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-mind-green/30 backdrop-blur-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-semibold text-mind-text flex items-center gap-2">
              <span className="bg-mind-blue p-1 rounded-lg">Mind</span>
              <span>Sphere</span>
            </Link>
            <p className="text-mind-subtle text-sm max-w-xs">
              A comprehensive mental health platform integrating AI-driven self-reflection, therapy, and wellness tools.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-mind-text">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/journal" className="text-mind-subtle hover:text-mind-text text-sm transition-colors duration-200">
                  Emotion Journal
                </Link>
              </li>
              <li>
                <Link to="/therapy" className="text-mind-subtle hover:text-mind-text text-sm transition-colors duration-200">
                  Therapy Chatbot
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-mind-text">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-mind-subtle hover:text-mind-text text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-mind-subtle hover:text-mind-text text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-mind-blue/20">
          <p className="text-mind-subtle text-xs text-center flex items-center justify-center gap-2">
            © {currentYear} MindSphere. Made with <Heart size={12} className="text-red-400" /> for better mental health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
