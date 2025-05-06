import { useState, useEffect } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Hero() {
  const [allowScroll, setAllowScroll] = useState(false);

  useEffect(() => {
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
    <main className="relative flex flex-col justify-center items-center bg-[#121212] w-full min-h-screen overflow-hidden">
      {/* Animated Grid Background */}
      <div className="z-0 absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-[#f0b100]/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
            />
          ))}
        </div>
        
        {/* More, smaller and faster glowing particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute bg-[#f0b100] rounded-full"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
              filter: 'blur(5px)',
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Enhanced Glowing lights */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="top-1/4 left-1/4 absolute bg-[#f0b100] opacity-15 blur-[120px] rounded-full w-[400px] h-[400px] filter"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="right-1/3 bottom-1/3 absolute bg-[#f0b100] opacity-15 blur-[100px] rounded-full w-[300px] h-[300px] filter"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.25, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <section className="z-10 relative flex flex-col justify-center items-center mx-auto px-6 w-full max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo/Brand */}
          <div className="mb-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block bg-[#f0b100]/10 px-4 py-2 border border-[#f0b100]/30 rounded-full font-medium text-[#f0b100] text-sm uppercase tracking-wider"
            >
              FortuneCode
            </motion.span>
          </div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto max-w-4xl font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight"
          >
            Construimos el futuro{' '}
            <span className="inline-block relative">
              <span className="z-10 relative">digital</span>
              <span className="bottom-0 left-0 z-0 absolute bg-[#f0b100]/50 w-full h-3 -rotate-1" />
            </span>{' '}
            de tu negocio
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            Soluciones tecnológicas personalizadas que escalan con tu visión.
            Desde apps móviles hasta sistemas empresariales complejos.
          </motion.p>

          {/* Animated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col items-center space-y-8 mt-12"
          >
            <div className="group relative">
              <button
                onClick={handleAllowScroll}
                className="z-10 relative flex items-center bg-[#f0b100] group-hover:bg-[#f0b100]/90 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl font-medium text-[#121212] text-lg hover:scale-105 transition-all duration-300 transform"
              >
                Contáctenos
                <ChevronDoubleDownIcon className="ml-3 w-6 h-6 animate-bounce" />
              </button>
              <motion.div 
                className="z-0 absolute inset-0 bg-[#f0b100] opacity-0 blur-md rounded-xl"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Typewriter effect */}
            <div className="mt-6 font-mono text-[#f0b100] text-2xl">
              <Typewriter
                options={{
                  strings: ['100% PERSONALIZADO', 'TECNOLOGÍA DE PUNTA', 'RESULTADOS MEDIBLES'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}