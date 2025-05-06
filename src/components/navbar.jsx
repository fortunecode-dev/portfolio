import React from 'react';
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/image/LOGO.png";

const navigation = [
  { name: "Portal", href: "#" },
  { name: "Servicios", href: "#services" },
  { name: "Sobre Nosotros", href: "#about" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <nav className="flex justify-between items-center mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center -m-1.5 p-1.5">
            <img src={Logo} alt="logo" className="w-auto h-10" />
            <span className="ml-3 font-bold text-white text-2xl">
              Fortune<span className="text-[#f0b100]">Code</span>
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex">
          <button
            type="button"
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-400 hover:text-[#f0b100]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative font-semibold text-gray-300 hover:text-[#f0b100] text-sm leading-6 transition-colors duration-200"
            >
              {item.name}
              <span className="bottom-0 left-0 absolute bg-[#f0b100] w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="flex items-center gap-1 bg-[#f0b100] hover:bg-[#f0b100]/90 shadow-sm px-4 py-2 rounded-lg font-semibold text-[#121212] text-sm transition-colors duration-200"
          >
            Contactar
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="z-50 fixed inset-0" />
        <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-[#121212] px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center -m-1.5 p-1.5">
              <img src={Logo} alt="logo" className="w-auto h-10" />
              <span className="ml-3 font-bold text-white text-2xl">
                Fortune<span className="text-[#f0b100]">Code</span>
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 p-2.5 rounded-md text-gray-400 hover:text-[#f0b100]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-8 h-8" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-12">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-4 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block hover:bg-gray-800 -mx-3 px-3 py-2 rounded-lg font-semibold text-gray-300 hover:text-[#f0b100] text-base leading-7 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  style={{
                    scrollBehavior:"s"
                  }}
                  className="block bg-[#f0b100] hover:bg-[#f0b100]/90 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-[#121212] text-base leading-7 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Conocer más
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}