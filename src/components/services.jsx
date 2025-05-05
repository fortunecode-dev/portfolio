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
      "Creamos apps para Android y iOS adaptadas a las necesidades de tu negocio, con interfaces intuitivas y alto rendimiento.",
    icon: ComputerDesktopIcon
  },
  {
    name: "Diseño y desarrollo de sitios web",
    description:
      "Construimos sitios web modernos, responsivos y optimizados para SEO que reflejan la identidad de tu marca y mejoran tu presencia en línea.",
    icon: GlobeAltIcon
  },
  {
    name: "Sistemas personalizados y automatización empresarial",
    description:
      "Desarrollamos plataformas internas, paneles administrativos y soluciones de software que optimizan procesos, aumentan eficiencia y escalan contigo.",
    icon: Cog8ToothIcon
  },
  {
    name: "Integración de servicios en la nube",
    description:
      "Ofrecemos soluciones en la nube seguras y escalables, desde bases de datos remotas hasta despliegue de aplicaciones y almacenamiento en servidores como AWS, Google Cloud o Vercel.",
    icon: CloudIcon
  }
];

export default function Services() {
  return <div className="bg-gradient-to-t from-gray-900 to-cyan-950 py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeIn" }} viewport={{ once: true }} className="font-semibold text-yellow-500 text-base/7">
            Innovamos contigo
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }} viewport={{ once: true }} className="mt-2 font-semibold text-yellow-500 text-4xl sm:text-5xl lg:text-balance text-pretty tracking-tight">
            Servicios que ofrecemos
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }} viewport={{ once: true }} className="mt-6 text-white text-lg/8">
            En <span className="font-bold text-yellow-500">
              Fortune Code
            </span>, combinamos creatividad y tecnología para ofrecer soluciones digitales que impulsan el crecimiento de tu negocio. Ya sea que necesites una app, un sitio web o un sistema personalizado, nosotros lo desarrollamos a tu medida.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeIn", delay: 0.4 }} viewport={{ once: true }} className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-4xl">
          <dl className="gap-x-8 gap-y-10 lg:gap-y-16 grid grid-cols-1 lg:grid-cols-2 lg:max-w-none max-w-xl">
            {features.map(feature =>
              <div key={feature.name} className="relative pl-16">
                <dt className="font-semibold text-yellow-500 text-base/7">
                  <div className="top-0 left-0 absolute flex justify-center items-center bg-yellow-500 rounded-lg size-10">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-white text-base/7">
                  {feature.description}
                </dd>
              </div>
            )}
          </dl>
        </motion.div>
      </div>
    </div>;
}
