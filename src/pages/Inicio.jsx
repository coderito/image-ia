import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="text-center md:text-left">
      <h2 class="md:text-6xl text-5xl font-extrabold text-[#08D9D6]">
        Bienvenido a Picturai
      </h2>
      <p class="my-4 text-lg text-[#EAEAEA]">
        Una aplicacion web capaz de crear imagenes a travez de IA.
      </p>
      <div class="flex items-center justify-center md:justify-start mb-8 ">
        <img
          class="rounded-full ring-1 ring-[#FF2E63]"
          src="/img/logoCircle.png"
          alt="image description"
        />
      </div>
      <button
        type="button"
        class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-[#252A34] bg-[#08D9D6] rounded-lg hover:bg-[#08d9d2f2] focus:ring-4 focus:outline-none"
      >
        <Link to="/aplicacion">Ir a la aplicacion</Link>
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
};
