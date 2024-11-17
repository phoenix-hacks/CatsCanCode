"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

export default function Navbar({ changecurr,curr }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currnav,setCurrnav]=useState(null);

  return (
    <>
      <header className="">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <div className="text-lightWhite text-xl font-medium" onClick={() => {changecurr(1)}}>Forge.ai</div>
              {/* <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
                onClick={() => {changecurr(1)}}
              /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className={`border-stroke border-opacity-25 border-[0.1rem] px-6 py-2 group rounded-[6rem] bg-blackishGray`} >
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
              <NavbarItem onClick={() => changecurr(2)} >Features</NavbarItem>
              <NavbarItem
                href="#"
                
                onClick={() => changecurr(3)}
              >
                How it works
              </NavbarItem>
              <NavbarItem
                href="#"
                onClick={() => changecurr(4)}
              >
                FAQs
              </NavbarItem>
            </PopoverGroup>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <Link
              to="/signin"
              className="text-sm/6 font-semibold text-lightWhite text-opacity-80 border-stroke border-opacity-25 rounded-3xl px-3 py-2 border-[0.1rem]"
            >
              Sign In
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-subText hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-subText hover:bg-gray-50"
                  >
                    How it works
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-subText hover:bg-gray-50"
                  >
                    FAQs
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-subText hover:bg-gray-50"
                  >
                    Generate
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}

const NavbarItem = ({ children, onClick}) => {
  return (
    <>
      <a
        onClick={onClick}
        href="#"
        className="text-sm/6 font-semibold text-subText hover:text-white transition-colors group-hover:shadow-slate-300"
      >
        
        {children}
        
      </a>
    </>
  );
};
