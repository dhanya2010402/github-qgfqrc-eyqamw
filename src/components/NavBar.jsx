import { Link } from 'react-router-dom';
import './style2.css';
export function NavBar() {
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
  };
  return (
    <header style={navbarStyle}>
      <nav className="flex items-center justify-between px-4 py-2">
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-white hover:text-gray-400">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
