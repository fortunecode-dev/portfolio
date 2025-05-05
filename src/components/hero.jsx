import React, {useState, useEffect} from 'react'
import manolo from '../assets/image/christian-velitchkov-oCD1HUJmFIM.jpg'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion' 

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
      <main className='flex flex-col justify-center items-center bg-gradient-to-t from-cyan-950 to-white w-full h-screen'>
        <section className="z-5 flex lg:flex-row flex-col justify-center items-center gap-10 mx-10 lg:mx-20 mt-100 lg:mt-50">
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="flex">
              <h1 className="flex flex-col gap-1 font-bold">
                <motion.span 
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration:.6, ease:"easeInOut"}}
                className="text-cyan-950 text-8xl">Fortune</motion.span>
                <span className="text-yellow-500 text-7xl">
                  <Typewriter
                  options={{
                    strings: ["< code/>"],
                    autoStart: true,
                    loop: true,
                  }}
                  />
                  
                </span>
              </h1>
            </div>
            <motion.span 
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            transition={{duration:.6, ease:"easeInOut", delay:.6}}
            className="my-3.5 font-semibold text-cyan-950 text-2xl">
              Programamos tu suerte
            </motion.span>
            <motion.p 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1.2, ease:"easeInOut", delay:1}}
            className="text-xl">
              Somos una empresa especializada en el desarrollo de software a
              medida. Creamos soluciones digitales únicas para potenciar
              negocios: desde aplicaciones móviles intuitivas hasta sitios web
              modernos y funcionales. Ya sea que estés comenzando o buscando
              llevar tu empresa al siguiente nivel, diseñamos tecnología que
              se adapta a tu visión.
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
            <button 
            onClick={handleAllowScroll}
            className="flex items-center bg-gradient-to-t from-zinc-800 to-neutral-700 drop-shadow-xl hover:drop-shadow-md p-3 border-2 border-cyan-800 hover:border-yellow-500 rounded-3xl font-semibold text-yellow-500 hover:text-white text-xl duration-200">
              Conocer Mas
              <ChevronDoubleDownIcon className="pl-2 w-9 animate-bounce" />
            </button>
            <button className="bg-gradient-to-t from-zinc-800 to-neutral-700 drop-shadow-xl hover:drop-shadow-md p-3 border-2 border-cyan-800 hover:border-yellow-500 rounded-3xl font-semibold text-yellow-500 hover:text-white text-xl duration-200">
              Contáctenos
            </button>
          </motion.div>
                  
        </div>
        <div className='hidden lg:block right-0 z-1 absolute bg-gradient-to-br from-50% from-transparent to-50% to-cyan-950/20 w-2/3 h-screen'>

        </div>
      </main>
    </>
  )
}
