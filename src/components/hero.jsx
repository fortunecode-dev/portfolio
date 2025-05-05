import { useState, useEffect } from 'react';
import manolo from '../assets/image/christian-velitchkov-oCD1HUJmFIM.jpg';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Hero() {
  const [allowScroll, setAllowScroll] = useState(false)

  useEffect(()=>{
    if (!allowScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [allowScroll]);

  const handleAllowScroll = () => {
    setAllowScroll(true);
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <main className='flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 w-full h-screen'>
        <section className="z-5 flex lg:flex-row flex-col justify-center items-center gap-10 mx-10 lg:mx-20 mt-100 lg:mt-50">
          <div className="flex flex-col w-full lg:w-1/2">
            <div >
              <h1 className="flex flex-col gap-1 font-bold">
                <motion.span 
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration:.6, ease:"easeInOut"}}
                className="text-gray-900 text-8xl">Fortune</motion.span>
                <span className="text-yellow-500 text-7xl">{` <code/>`}</span>

              </h1>
              <h6  className="my-3.5 font-semibold text-cyan-950 text-2xl">
                  {/* Aqui si se le quita el espacio se rompe  */}
                  <Typewriter
                  options={{
                    strings: [` Programamos tu suerte`],
                    autoStart: true,
                    loop: true,
                  }}
                  />
                  
                </h6>
            </div>
            <motion.p 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1.2, ease:"easeInOut", delay:1}}
            className="text-xl">
             Creamos software a tu medida para que tu negocio crezca.
Apps móviles, webs modernas y sistemas potentes que se adaptan justo a lo que necesitas. ¿Empezando o escalando? Nosotros te damos la tecnología para lograrlo.
            </motion.p>
          </div>
          <div>
            <motion.img 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, ease:"easeInOut", delay:1}}
            viewport={{once:true}}
            src={manolo} alt="programador" className="rounded-2xl w-120 min-w-xl" />
          </div>
          
        </section>;
        <div className='z-5 w-full'>
          <motion.div 
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, ease:"easeInOut", delay:1}}
          className="flex justify-center gap-10 md:gap-80 my-20">
            <button type="button" class="bg-gradient-to-br hover:bg-gradient-to-bl from-gray-900 to-yellow-700 me-2 mb-2 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 font-medium text-white text-sm text-center dark:focus:yellow-700">Contáctenos</button>

            <button 
            onClick={handleAllowScroll}
            className="flex bg-gradient-to-br hover:bg-gradient-to-bl from-gray-900 to-yellow-700 me-2 mb-2 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 font-medium text-md text-white text-center dark:focus:yellow-700">
              Conocer Mas
              <ChevronDoubleDownIcon className="pl-2 w-9 animate-bounce" />
            </button>
          </motion.div>
                  
        </div>
        <div className='hidden lg:block right-0 z-1 absolute bg-gradient-to-br from-50% from-transparent to-50% to-cyan-950/20 w-2/3 h-screen'>

        </div>
      </main>
    </>
  )
}
