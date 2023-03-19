import React from "react";
import { Dropdown } from "./Dropdown";
import logo from "/img/logo.png";

export function Navbar({ title }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-[#393E46]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex items-center">
              <img className="w-5 h-5" src={logo} />
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                <i className="pl-1">{title}</i>
              </a>
            </div>
            <div className="visible md:hidden">
            <Dropdown navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
            </div>
            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
