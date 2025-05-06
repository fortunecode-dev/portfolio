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
    <main className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#121212] overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
            className="absolute rounded-full bg-[#f0b100]"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
              filter: 'blur(1px)',
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
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#f0b100] rounded-full filter blur-[120px] opacity-15"
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
          className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-[#f0b100] rounded-full filter blur-[100px] opacity-15"
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
      <section className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-6 mx-auto text-center">
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
              className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-[#f0b100] uppercase bg-[#f0b100]/10 rounded-full border border-[#f0b100]/30"
            >
              FortuneCode
            </motion.span>
          </div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Construimos el futuro{' '}
            <span className="relative inline-block">
              <span className="relative z-10">digital</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#f0b100]/50 -rotate-1 z-0" />
            </span>{' '}
            de tu negocio
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Soluciones tecnológicas personalizadas que escalan con tu visión.
            Desde apps móviles hasta sistemas empresariales complejos.
          </motion.p>

          {/* Animated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col items-center mt-12 space-y-8"
          >
            <div className="relative group">
              <button
                onClick={handleAllowScroll}
                className="relative z-10 flex items-center px-8 py-4 text-lg font-medium text-[#121212] transition-all duration-300 transform bg-[#f0b100] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 group-hover:bg-[#f0b100]/90"
              >
                Contáctenos
                <ChevronDoubleDownIcon className="w-6 h-6 ml-3 animate-bounce" />
              </button>
              <motion.div 
                className="absolute inset-0 z-0 rounded-xl bg-[#f0b100] blur-md opacity-0"
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
            <div className="mt-6 text-2xl text-[#f0b100] font-mono">
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