import {
  Cog8ToothIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  CloudIcon
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Desarrollo de aplicaciones móviles a medida",
    description:
      "Creamos apps para Android adaptadas a las necesidades de tu negocio, con interfaces intuitivas y alto rendimiento.",
    icon: ComputerDesktopIcon
  },
  {
    name: "Diseño y desarrollo de sitios web",
    description:
      "Construimos sitios web modernos, responsivos y optimizados  que reflejan la identidad de tu marca y mejoran tu presencia en línea.",
    icon: GlobeAltIcon
  },
  {
    name: "Sistemas personalizados y automatización empresarial",
    description:
      "Desarrollamos plataformas internas, paneles administrativos y soluciones de software que optimizan procesos, aumentan eficiencia y escalan contigo.",
    icon: Cog8ToothIcon
  },
  {
    name: "Analíticas avanzadas",
    description:
      "Algoritmos que transforman tus datos en decisiones estratégicas. Predecimos riesgos, optimizamos procesos y generamos ventajas competitivas en tiempo real.",
    icon: CloudIcon
  }
];

export default function Services() {
  return (
    <div
      id="services"
      className="relative bg-[#121212] py-24 sm:py-32 overflow-hidden"
    >
      {/* Fondo decorativo similar al Hero */}
      <div className="z-0 absolute inset-0 opacity-20 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) =>
          <motion.div
            key={i}
            className="absolute border border-[#f0b100]/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        )}
      </div>

      {/* Efectos de luz */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="top-1/4 left-1/4 absolute bg-[#f0b100] opacity-10 blur-[120px] rounded-full w-[400px] h-[400px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="z-10 relative mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight"
          >
            Servicios que{" "}
            <span className="inline-block relative">
              <span className="z-10 relative">ofrecemos</span>
              <span className="bottom-0 left-0 z-0 absolute bg-[#f0b100]/50 w-full h-3 -rotate-1" />
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-300 text-lg leading-relaxed"
          >
            En <span className="font-bold text-[#f0b100]">FortuneCode</span>,
            combinamos creatividad y tecnología para ofrecer soluciones
            digitales que impulsan el crecimiento de tu negocio.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-4xl"
        >
          <div className="gap-x-8 gap-y-12 lg:gap-y-16 grid grid-cols-1 lg:grid-cols-2">
            {features.map((feature, index) =>
              <motion.div
                key={feature.name}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative p-4 pl-16"
              >
                <dt className="font-bold text-[#f0b100] text-lg">
                  <div className="top-0 left-0 absolute flex justify-center items-center bg-[#f0b100] group-hover:bg-[#f0b100]/90 m-2 rounded-lg w-12 h-12 transition-all duration-300">
                    <feature.icon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-3 text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </dd>

                {/* Efecto de borde al hover */}
                <div className="-z-10 absolute inset-0 opacity-0 group-hover:opacity-100 border border-[#f0b100]/10 group-hover:border-[#f0b100]/30 rounded-xl transition-all duration-500" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
