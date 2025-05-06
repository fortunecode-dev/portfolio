import React from 'react'
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/image/LOGO.png"
const navigation = [
  { name: "Portal", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Sobre Nosotros", href: "#" },
];
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="top-0 z-50 fixed inset-x-0">
      <nav aria-label="Global" className="flex mt-10">
        <div className="flex justify-between mx-5 w-full">
          <div className="flex">
            <a href="#" className="flex items-center">
              <img src={Logo} alt="logo" className="w-1/8" />
              <h1 className="flex gap-1 font-bold text-4xl">
                <span className="bg-clip-text bg-gradient-to-t from-gray-700 to-gray-100 text-transparent">
                  Fortune
                </span>
                <span className="bg-clip-text bg-gradient-to-t from-yellow-500 to-gray-100 text-transparent">
                  Code
                </span>
              </h1>
            </a>
          </div>
          <div className="lg:hidden flex">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md font-bold text-gray-700">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-10 text-yellow-500" />
            </button>
          </div>
          <div className="hidden lg:flex items-center lg:gap-x-12 bg-gray-950 -ml-80 p-3 rounded-4xl text-white">
            {navigation.map(item =>
              <a
                key={item.name}
                href={item.href}
                className="hover:bg-gray-900 p-3 rounded-2xl font-normal text-white hover:text-amber-500 text-lg"
              >
                {item.name}
              </a>
            )}
          </div>
          <a href="#" className="hidden lg:flex items-center bg-gray-950 hover:bg-gray-700 shadow-xl p-5 rounded-4xl font-bold text-yellow-500 hover:scale-105 duration-75">
            Contáctenos
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="z-50 fixed inset-0" />
        <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-gray-900 px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#" className="-m-1">
                <img src={Logo} alt="logo" className="w-20" />
              </a>
              <div>
                <h1 className="flex flex-col gap-1 font-bold text-3xl">
                  <span className="text-white">Fortune</span>
                  <span className="text-yellow-500">
                    {"<code/>"}
                  </span>
                </h1>
              </div>
            </div>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 rounded-md text-white hover:text-yellow-500">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item =>
                  <a
                    key={item.name}
                    href={item.href}
                    className="block hover:bg-cyan-900 -mx-3 px-3 py-2 rounded-lg font-semibold text-white hover:text-yellow-500 text-base/7"
                  >
                    {item.name}
                  </a>
                )}
              </div>
              <a href="#" className="block hover:bg-cyan-900 -mx-3 px-3 py-2 rounded-lg font-semibold text-yellow-500 hover:text-yellow-500 text-base/7">
                Contáctenos
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>;
}
