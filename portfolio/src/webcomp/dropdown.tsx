import { useState } from 'react';
import { CgDetailsMore } from "react-icons/cg";

function DropDown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-950 text-gray-200 p-3 text-xl hover:bg-black rounded-full transition duration-300"
      >
        <CgDetailsMore />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-40 bg-blue-950 rounded-lg shadow-lg z-50 animate-fadeIn"
        >
          <ul className="flex flex-col p-2 space-y-2 text-white">
            <li>
              <a
                href="#about"
                className="block px-4 py-2 rounded-md hover:bg-black transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block px-4 py-2 rounded-md hover:bg-black transition"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-4 py-2 rounded-md hover:bg-black transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 rounded-md hover:bg-black transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
