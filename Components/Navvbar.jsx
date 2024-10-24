import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Function to toggle the menu
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <header className='ml-10 mnav mr-10 flex shadow-md py-4 px-4 sm:px-10 bg-[#1c1c22] font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center gap-5 w-full'>
        {/* Logo */}
        <Link href="/">
          <h1 className="logo relative text-4xl font-extrabold text-white after:content-[''] after:absolute after:bottom-[2px] after:right-[-17px] after:w-[10px] after:h-[10px] after:bg-[#0bfa9d] after:rounded-full">
            Ahmad
          </h1>
        </Link>

        {/* Menu for Large Devices */}
        <nav className={`hidden lg:flex lg:ml-auto lg:flex-row lg:space-x-4`}>
          <ul className='flex flex-col lg:flex-row gap-4 lg:space-x-4'>
            <li>
              <Link href="/" className='relative hover:text-[#0bfa9d] text-[#0bfa9d] font-semibold block text-[15px] px-2 py-1 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className='relative hover:text-[#0bfa9d] text-white font-semibold block text-[15px] px-2 py-1 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                Services
              </Link>
            </li>
            <li>
              <Link href="/work" className='relative hover:text-[#0bfa9d] text-white font-semibold block text-[15px] px-2 py-1 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className='relative hover:text-[#0bfa9d] text-white font-semibold block text-[15px] px-2 py-1 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sign Up and Toggle Button */}
        <div className='flex items-center max-lg:ml-auto space-x-6'>
          <button className='px-4 py-2 text-[15px] rounded font-semibold text-black bg-[#0bfa9d] border-2 border-[#0bfa9d] hover:bg-transparent hover:text-[#0bfa9d] transition-all ease-in-out duration-300'>
            Hire Me
          </button>

          {/* Toggle Button for Mobile Menu */}
          <button onClick={handleToggle} className='lg:hidden flex items-center justify-center rounded-full bg-white p-2'>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#333" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 5a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM5 15a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#333" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer and Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleToggle}></div>

          {/* Side Drawer */}
          <div className="fixed inset-y-0 left-0 w-64 bg-[#1c1c22] p-4 z-50 shadow-lg transform transition-transform duration-300 ease-in-out" style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
            <ul className='flex flex-col space-y-4'>
              <li>
                <Link href="/" className='relative hover:text-[#0bfa9d] text-white font-semibold block text-[15px] py-1 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className='relative hover:text-[#0bfa9d] text-white font-semibold block text-[15px] py-1 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className='relative hover:text-[#0bfa9d] text-white font-semibold block text-[15px] py-1 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className='relative hover:text-[#0bfa9d] text-white font-semibold block text-[15px] py-1 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#0bfa9d] after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
