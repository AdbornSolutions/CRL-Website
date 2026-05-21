import React from 'react';
import footerlogo from "../assets/images/crl-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer bg-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-4/12">
            <div className="footer-logo mb-3">
              <img src={footerlogo} alt="CRL Logo" className="w-32" />
            </div>
            <p className="footer-description text-gray-400">
              CRL Transport and Packing offers reliable, efficient, and safe transportation and packing solutions.
              With expert handling and secure packaging, we ensure your goods are delivered on time and in perfect
              condition. Trust us to manage your logistics needs with top-notch service and attention to detail every
              step of the way.
            </p>

            <div className="footer-divider my-4 border-t-2 border-gray-700"></div>

            <div className="social-icons mt-3 flex space-x-4">
              <a
                href="https://www.instagram.com/crl_packers_and_movers_nagpur_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587466176300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-2/12">
            <h6 className="footer-title text-lg font-semibold text-gray-300 mb-4">Menu</h6>
            <ul className="footer-links text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/service" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/project" className="hover:text-gray-200">
                  Project
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          {/* <div className="w-full sm:w-1/2 md:w-1/4 lg:w-2/12">
            <h6 className="footer-title text-lg font-semibold text-gray-300 mb-4">Policy</h6>
            <ul className="footer-links text-gray-400 space-y-2">
              <li>
                <a href="/terms-privacy" className="hover:text-gray-200">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="/terms-privacy" className="hover:text-gray-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-privacy" className="hover:text-gray-200">
                  Shipping and Delivery Policy
                </a>
              </li>
              <li>
                <a href="/terms-privacy" className="hover:text-gray-200">
                  Refund & Return Policy
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-3/12">
            <h6 className="footer-title text-lg font-semibold text-gray-300 mb-4">Contact</h6>
            <ul className="footer-contact text-gray-300 space-y-2">
              <li>
                <a href="tel:+917499358403" className=" hover:text-gray-200">
                  +91 7499358403
                </a>
              </li>
              <li>
                <a href="mailto:chapleroadlines26@crl-transport.com" className=" hover:text-gray-200">
                  chapleroadlines26@crl-transport.com
                </a>
              </li>
              <li>
                C/O Babarao Chaple
                <br />
                Miniwada (Kondhali)
                <br />
                Tahsil – Katol
                <br />
                District – Nagpur – 441103
                <br />
                Maharashtra (MH)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-dark py-2">
        <div className="container mx-auto text-center text-gray-300">
          © 2025 <a href="#" className="footer-link text-gray-400 hover:text-white">CRL Transport</a> | Designed by{' '}
          <a href="#" className="footer-link text-gray-400 hover:text-white">Adborn Solutions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;