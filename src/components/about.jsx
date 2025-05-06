import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

// fortunecode.dev@gmail.com
// +53 55432562

export default function About() {
  return (
<div id='about' className="flex lg:flex-row flex-col justify-center items-center gap-20 bg-[#181818] px-10 py-20 lg:py-32 min-h-screen">

  <div className="flex flex-col items-start gap-10 lg:w-1/2">
    <div>
      <motion.h1 
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1, ease:"circOut"}}
        viewport={{once:true}}
        className="font-bold text-[#f0b100] text-5xl md:text-6xl"
      >
        Contáctanos
      </motion.h1>
    </div>
    
    <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1, ease:"circOut", delay:0.2}}
      viewport={{once:true}}
      className="space-y-6"
    >
      <div className="flex items-start gap-4">
        <div className="bg-[#f0b100]/10 p-3 rounded-full">
          <EnvelopeIcon className="w-6 h-6 text-[#f0b100]" />
        </div>
        <div>
          <h3 className="text-gray-400 text-sm">Correo electrónico</h3>
          <a href="mailto:contacto@fortunecode.com" className="text-white hover:text-[#f0b100] text-lg transition-colors">
            fortunecode.dev@gmail.com
          </a>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="bg-[#f0b100]/10 p-3 rounded-full">
          <PhoneIcon className="w-6 h-6 text-[#f0b100]" />
        </div>
        <div>
          <h3 className="text-gray-400 text-sm">Teléfono</h3>
          <a href="tel:+1234567890" className="text-white hover:text-[#f0b100] text-lg transition-colors">
            +53 55432562
          </a>
        </div>
      </div>
      
      {/* <div className="flex items-start gap-4">
        <div className="bg-[#f0b100]/10 p-3 rounded-full">
          <MapPinIcon className="w-6 h-6 text-[#f0b100]" />
        </div>
        <div>
          <h3 className="text-gray-400 text-sm">Oficina principal</h3>
          <p className="text-white text-lg">
            Av. Tecnológico 1234<br />
            Ciudad Digital, CP 45678
          </p>
        </div>
      </div> */}
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8"
      >
        <a 
          href="#contact-form" 
          className="inline-flex items-center bg-[#f0b100] hover:bg-[#f0b100]/90 shadow-lg px-8 py-3 rounded-lg font-bold text-[#121212] transition-colors"
        >
          Enviar mensaje directo
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  </div>
</div>



  )
}