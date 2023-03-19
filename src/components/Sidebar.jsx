import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const active =
    "flex items-center p-2 text-base font-normalrounded-lg text-[#EAEAEA] hover:bg-#[252A34] bg-gray-500";
  const desactive =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-300";

  return (
    <>
      <aside
        id="logo-sidebar"
        class="fixed top-0 bg-[#EAEAEA] left-0 z-40 w-64 h-full pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <nav class="h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : desactive)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span class="ml-3">Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/funcionamiento"
                className={({ isActive }) => (isActive ? active : desactive)}
              >
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
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">
                  Funcionamiento
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aplicacion"
                className={({ isActive }) => (isActive ? active : desactive)}
              >
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
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Aplicacion</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? active : desactive)}
              >
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Contacto</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
