import React, { useState } from "react";

export const Dropdown = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div class="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-white text-white shadow-sm"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {!navbarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {navbarOpen && (
        <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Inicio
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Funcionamiento
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Aplicacion
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
