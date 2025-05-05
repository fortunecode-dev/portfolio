import { motion } from 'framer-motion'
import equipo from '../assets/image/jason-goodman-Oalh2MojUuk-unsplash.jpg'
export default function About() {
  return (
    <>
    <div id='about' className="flex lg:flex-row flex-col items-center gap-20 bg-cyan-950 px-45 py-80 lg:py-32 min-h-screen overflow-hidden">
      <div className="flex flex-col items-left gap-10">
        <div >
            <motion.h1 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, ease:"circOut"}}
            viewport={{once:true}}
            className="text-yellow-500 text-6xl">¿Quienes Somos?</motion.h1>
        </div>
        <div>
            <motion.p 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, ease:"circOut",delay:.3}}
            viewport={{once:true}}
            className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste et, ipsa suscipit molestias expedita quos dolorum id voluptatibus? Iure eum reiciendis dolores neque. Doloribus recusandae alias laboriosam non ipsum velit?
            Laboriosam sunt molestiae quos pariatur soluta vero consectetur incidunt ratione itaque? In, quo quisquam! Error architecto ipsum alias rem quas, nobis hic nihil nesciunt in corrupti, vitae totam non. Ducimus?
            Facilis accusamus sapiente reiciendis dolor? Nihil possimus optio facilis in rerum iure necessitatibus iusto, voluptatem soluta dolorem porro magni. Quaerat adipisci expedita recusandae amet ducimus maiores culpa! Nobis, cupiditate quae.
            Dicta eaque accusantium ea perferendis quos! Temporibus, quas. Maxime ea quaerat eveniet? Natus eligendi dolore accusantium assumenda quod animi commodi. Totam repellat perspiciatis mollitia tempora. Repudiandae soluta illum reiciendis quisquam!
            Fugiat, quisquam esse? Eius distinctio officia esse nostrum laboriosam voluptate? Perferendis explicabo neque necessitatibus ex, saepe libero numquam illum fugit consequuntur delectus amet molestias quaerat iusto commodi? Delectus, fugit accusamus.
            </motion.p>

        </div>
      </div>
      <div>
        <motion.img 
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1, ease:"circOut",delay:.3}}
        viewport={{once:true}}
        src={equipo} alt="equipo" className='drop-shadow-2xl rounded-xl min-w-lg' />
      </div>
    </div>    
    </>
  )
}

