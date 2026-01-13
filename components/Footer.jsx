// components/Footer.jsx
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white reveal">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuwUOqxf_S3gCb07oCrDcVU8rlFH4SPVLQA&s"
                  alt="PD GUPTA & CO Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">PD Gupta & CO</h3>
                <p className="text-xs text-gray-300">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted financial partner for comprehensive accounting,
              taxation, audit, and business advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-gold-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-gold-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-gold-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-300 hover:text-gold-400 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-gold-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Tax Planning & Filing</li>
              <li className="text-sm text-gray-300">GST Registration</li>
              <li className="text-sm text-gray-300">Business Auditing</li>
              <li className="text-sm text-gray-300">Financial Consulting</li>
              <li className="text-sm text-gray-300">Startup Advisory</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-gold-400 mt-1 flex-shrink-0"
                />
                <span className="text-sm text-gray-300">
                  1003, 10th Floor, Modi Tower- 98, Nehru Place, Delhi - 110019
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+91 8860779306,"
                  className="text-sm text-gray-300 hover:text-gold-400 transition"
                >
                  +91 88607 79306
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:gupta.k.deepak@gmail.com"
                  className="text-sm text-gray-300 hover:text-gold-400 transition"
                >
                  gupta.k.deepak@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2026 PD Gupta & CO. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-gold-500 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-gold-500 transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-gold-500 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-gold-500 transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
