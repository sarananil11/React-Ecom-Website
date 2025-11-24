import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Glow</span>
              <span className="text-white">Skin</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in skincare. We offer premium skincare
              products designed for both men and women to achieve healthy,
              glowing skin.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sarananil11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.387 7.868 10.91.575.106.785-.25.785-.556 0-.274-.01-1.179-.015-2.14-3.2.696-3.877-1.517-3.877-1.517-.524-1.332-1.28-1.688-1.28-1.688-1.046-.716.08-.702.08-.702 1.157.082 1.766 1.189 1.766 1.189 1.029 1.764 2.699 1.254 3.357.959.104-.746.403-1.254.732-1.542-2.555-.291-5.242-1.278-5.242-5.687 0-1.255.448-2.282 1.183-3.086-.118-.291-.513-1.464.112-3.052 0 0 .966-.31 3.166 1.178a10.948 10.948 0 0 1 2.883-.388c.977.005 1.963.132 2.883.388 2.199-1.488 3.165-1.178 3.165-1.178.626 1.588.231 2.761.113 3.052.737.804 1.182 1.831 1.182 3.086 0 4.42-2.692 5.392-5.258 5.678.413.356.781 1.058.781 2.133 0 1.54-.014 2.782-.014 3.161 0 .309.209.667.79.555C20.21 21.383 23.5 17.084 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/saran-anil-v-p-028521341/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-.24 6H9.2v11H4.74zm6.27 0H15v1.52h.09c.59-1.08 2.04-2.22 4.2-2.22 4.49 0 5.32 2.96 5.32 6.8V21.5h-4.45v-5.8c0-1.38-.03-3.16-1.93-3.16-1.94 0-2.24 1.51-2.24 3.07v5.89h-4.45z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: sarananilvp2020@gmail.com</li>
              <li>Phone: +91 9497404560</li>
              <li>Address: Makkada(po) Kakkodi Kozhikode Kerala</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} GlowSkin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
