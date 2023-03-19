import { Typewriter } from "react-simple-typewriter";
import { Navbar } from "./components/Navbar";
import "./index.css";

function App() {
  const date = new Date();

  return (
    <>
      <Navbar title="PicturAI" />
      <section class="bg-[#222831] dark:bg-gray-900 h-max">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div className="mb-10">
            <h1 class="block lg:mb-10  text-[#00ADB5]  font-extrabold tracking-tight uppercase text-4xl">
              <Typewriter
                words={["Generador de imagenes con inteligencia artificial"]}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <div>
            <p class="text-sm sm:mt-10 lg:mt-0 font-medium text-[#EEEEEE] lg:text-lg text-justify md:px-16 xl:px-48 ">
              Este fascinante proyecto representa una amalgama perfecta de
              vanguardia tecnológica en el ámbito del aprendizaje automático y
              la creatividad visual del diseño gráfico, lo que permite la
              creación de imágenes sorprendentes, verosímiles y de alta calidad
              de manera totalmente automatizada, gracias al uso de la
              extraordinaria tecnología de OpenAI ❤️.
            </p>
            <br />
            <p class="text-sm sm:mt-10 lg:mt-0 font-medium text-[#EEEEEE] lg:text-lg text-justify md:px-16 xl:px-48 ">
              Mediante el uso de algoritmos de aprendizaje automático avanzados
              y técnicas innovadoras de diseño gráfico, este proyecto logra
              combinar la precisión y el realismo de la inteligencia artificial
              con la creatividad y la habilidad artística humana, para producir
              imágenes impresionantes que satisfacen las necesidades de
              cualquier usuario exigente.
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="relative flex w-full md:w-4/12 flex-wrap items-stretch my-5">
              <input
                type="text"
                placeholder="Placeholder"
                class="px-3 py-4 placeholder-slate-300 text-[#EEEEEE] relative bg-[#393E46] rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
              />
              <span className="z-10 cursor-pointer h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-2 py-4">
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
            <div class="flex flex-col mb-8 lg:mb-16 w-full md:h-auto md:w-4/12 space-y-4 sm:space-y-0 sm:space-x-4 rounded-md">
              <img className="rounded-sm" src="https://picsum.photos/250/250" />
            </div>
          </div>

          <div class="px-4 text-center">
            <span class="font-semibold text-[#EEEEEE] uppercase">
              Todos los derecho reservados © {date.getFullYear()}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
