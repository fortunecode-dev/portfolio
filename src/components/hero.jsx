import { useState, useEffect } from 'react';
// import manolo from '../assets/image/christian-velitchkov-oCD1HUJmFIM.jpg';
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
      <main className='flex flex-col justify-center items-center bg-gradient-to-tl from-gray-950 to-gray-800 w-full h-screen'>
        <section className="z-5 relative flex lg:flex-row flex-col justify-center items-center gap-10 mx-10 lg:mx-20 lg:mt-50">
          <div class="top-1/2 left-1/2 absolute bg-cyan-500 opacity-30 blur-[200px] rounded-full w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 transform"></div>
          <div className="flex flex-col w-full lg:w-1/2">
            <div >
              <h1 className="flex flex-col items-center font-bold">
                <motion.span 
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration:.6, ease:"easeInOut"}}
                style={{
                  filter: "drop-shadow(1px 5px 10px rgba(0,0,0))"
                }}
                className="bg-clip-text bg-gradient-to-t from-gray-700 to-gray-100 text-transparent text-9xl">Fortune</motion.span>
                <motion.span
                initial={{opacity:0, x:-100}} 
                animate={{opacity:1, x:0}}
                transition={{duration:1, ease:"easeInOut"}}
                style={{
                  filter: "drop-shadow(1px 5px 10px rgba(0,0,0))"
                }}
                className="bg-clip-text bg-gradient-to-t from-yellow-500 to-zinc-100 text-transparent text-9xl">{` <code/>`}</motion.span>

              </h1>
              <motion.p 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1.2, ease:"easeInOut"}}
            className="mt-10 font-mono text-zinc-200 text-xl text-center">
             Creamos software a tu medida para que tu negocio crezca.
Apps móviles, webs modernas y sistemas potentes que se adaptan justo a lo que necesitas. ¿Empezando o escalando? Nosotros te damos la tecnología para lograrlo.
            </motion.p>
              <h6  className="my-3.5 pt-9 font-mono font-semibold text-zinc-200 text-3xl text-center">
                 
                  <Typewriter
                  options={{
                    strings: [` Programamos tu suerte`],
                    autoStart: true,
                    loop: true,
                  }}
                  />
                  
                </h6>
            </div>
            
          </div>
          {/* <div>
            <motion.img 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, ease:"easeInOut", delay:1}}
            viewport={{once:true}}
            src={manolo} alt="programador" className="rounded-2xl w-120 min-w-xl" />
          </div> */}
          
        </section>
        
          {/* <div
          
          className="-top-40 sm:-top-150 sm:left-150 relative inset-x-0 blur-3xl transform-gpu animate-pulse"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] absolute bg-linear-to-tr from-[#343100] to-[#e5ff00] opacity-30 w-[36.125rem] sm:w-[72.1875rem] aspect-1155/678 rotate-[30deg] -translate-x-1/2"
          />
        </div> */}
        
        <div className='z-5 w-full'>
          <motion.div 
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration:1.3, ease:"easeInOut"}}
          className="flex justify-center gap-10 md:gap-80 my-20">
            {/* <button type="button" class="hover:bg-yellow-500 bg-gradient-to-bl hover:bg-gradient-to-bl from-yellow-500 to-85% to-zinc-600 me-2 mb-2 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium text-white text-sm text-center dark:focus:yellow-700">Contáctenos</button> */}

            <button 
            onClick={handleAllowScroll}
            className="flex hover:bg-yellow-500 bg-gradient-to-br from-yellow-500 to-80% to-gray-900 shadow-lg me-2 mb-2 px-5 py-2.5 border-t-1 border-t-zinc-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold text-md text-white text-center">
              Conocer Mas
              <ChevronDoubleDownIcon className="pl-2 w-9 animate-bounce" />
            </button>
          </motion.div>
                  
        </div>
        {/* <div className='hidden lg:block right-0 z-1 absolute bg-gradient-to-br from-50% from-transparent to-50% to-cyan-950/20 w-2/3 h-screen'>

        </div> */}
      </main>
    </>
  )
}
