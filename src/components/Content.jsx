import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export const Content = () => {
    const date = new Date();


  return (
      <section class="bg-[#222831] dark:bg-gray-900 h-max">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div className="h-28 md:h-20 mt-10 lg:mt-5">
            <h1 class="block text-[#00ADB5] font-extrabold tracking-tight uppercase text-2xl md:text-4xl">
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
             
            </p>
            <p class="text-sm sm:mt-10 lg:mt-0 font-medium text-[#EEEEEE] lg:text-lg text-justify md:px-16 xl:px-48 ">
           
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="relative flex w-full md:w-4/12 flex-wrap items-stretch my-5">
              <input
                type="text"
                placeholder="Placeholder"
                class="px-3 py-4 placeholder-slate-300 text-[#EEEEEE] relative bg-[#393E46] rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
              />
            
            </div>
            <div className="w-full md:w-4/12">
            <button
              type="button"
              className="text-white  bg-gradient-to-r w-full mb-6 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
            >
              Buscar
            </button>
            <div class="flex flex-col mb-8 lg:mb-16  md:h-auto  space-y-4 sm:space-y-0 sm:space-x-4 rounded-md">
              <img className="rounded-sm" src="https://picsum.photos/250/250" />
            </div>
            </div>
          </div>

          
        </div>
      </section>
  )
}
