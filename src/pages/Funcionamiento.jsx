import React from "react";
import { Link } from "react-router-dom";

export const Funcionamiento = () => {
  return (
    <div>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#08D9D6] md:text-5xl lg:text-6xl">
        Buscamoser ser la aplicacion <span class="text-[#FF2E63]">#1</span> en
        experiencia de usuario.
      </h1>

      <div className="text-justify text-[#EAEAEA]">
        <p class="text-md  lg:text-xl font-normal">
          Este fascinante proyecto representa una amalgama perfecta de
          vanguardia tecnológica en el ámbito del aprendizaje automático y la
          creatividad visual del diseño gráfico, lo que permite la creación de
          imágenes sorprendentes, verosímiles y de alta calidad de manera
          totalmente automatizada, gracias al uso de la extraordinaria
          tecnología de OpenAI ❤️.
        </p>
        <br />
        <p class="text-md font-normal lg:text-xl">
          Mediante el uso de algoritmos de aprendizaje automático avanzados y
          técnicas innovadoras de diseño gráfico, este proyecto logra combinar
          la precisión y el realismo de la inteligencia artificial con la
          creatividad y la habilidad artística humana, para producir imágenes
          impresionantes que satisfacen las necesidades de cualquier usuario
          exigente.
        </p>
      </div>
      <div className="pt-8">
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
    </div>
  );
};
