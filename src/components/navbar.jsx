import React from 'react'
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/image/LOGO.png"
const navigation = [
  { name: "Portal", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Sobre Nosotros", href: "#" },
  { name: "Contáctenos", href: "#" }
];
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="top-0 z-50 fixed inset-x-0 bg-amber-50/40">
      <nav aria-label="Global" className="flex justify-between items-center p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center -m-1.5 p-1.5">
            <img src={Logo} alt="logo" className="w-1/8" />
            <h1 className="flex gap-1 font-bold text-3xl">
              <span className="text-cyan-950">Fortune</span>
              <span className="text-yellow-500">Code</span>
            </h1>
          </a>
        </div>
        <div className="lg:hidden flex">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md font-bold text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(item =>
            <a
              key={item.name}
              href={item.href}
              className="hover:drop-shadow-2xl hover:border-b-1 font-bold text-gray-900 hover:text-amber-500 text-lg transition-colors duration-150"
            >
              {item.name}
            </a>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="z-50 fixed inset-0" />
        <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-cyan-950 px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
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
              <XMarkIcon aria-hidden="true" className="size-6" />
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
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>;
}
