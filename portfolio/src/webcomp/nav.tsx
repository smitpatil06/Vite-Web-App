import '../App.css'
import DropDown from './dropdown'


function Nav(){

    return (
        <>
 <header className="w-full bg-blue-950 shadow-md sticky top-0 z-50">
  <nav className="container mx-auto text-white px-4 py-4">
    <div className="flex justify-between items-center">

      {/* Brand */}
      <div className="text-2xl font-bold text-indigo-400 tracking-wide">
        Smit.dev
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a
          href="/"
          className="text-gray-300 hover:text-white hover:bg-blue-800 px-4 py-2 rounded-full transition duration-300"
        >
          About
        </a>
        <a
          href="/about"
          className="text-gray-300 hover:text-white hover:bg-blue-800 px-4 py-2 rounded-full transition duration-300"
        >
          Experience
        </a>
        <a
          href="/services"
          className="text-gray-300 hover:text-white hover:bg-blue-800 px-4 py-2 rounded-full transition duration-300"
        >
          Projects
        </a>
        <a
          href="#hobbies"
          className="text-gray-300 hover:text-white hover:bg-blue-800 px-4 py-2 rounded-full transition duration-300"
        >
          My Hobbies
        </a>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <DropDown />
      </div>
    </div>
  </nav>
</header>
        </>
    )
}
export default Nav

