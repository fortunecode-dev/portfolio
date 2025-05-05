import React from 'react'
import image1 from '../assets/image/mission/slide1.jpg'
import image2 from '../assets/image/mission/slide2.jpg'
import image3 from '../assets/image/mission/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
import image4 from '../assets/image/mission/Gemini_Generated_Image_g706fqg706fqg706.jpeg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
export default function Mision() {
  const [ref, inView] = useInView({
    triggerOnce:true,
    threshold:0.5,
  });

  return (
    <>
     <section className='flex gap-20 bg-gradient-to-t from-transparent to-25% to-gray-900 pb-60 text-amber-50'>
      <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1, ease:"easeInOut"}}
      viewport={{once:true}}
      className='mr-15 lg:mr-0 ml-15 lg:ml-45 w-full'>
        <div className='flex flex-col gap-4 py-20'>
          <span className='text-yellow-500 text-xl'>Propósito</span>
          <h2 className='font-bold text-5xl'>Nuestro objetivo y filosofía</h2>
          <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, animi! Eum nobis excepturi voluptates quaerat nam quis provident tenetur? Possimus quos odio fuga deserunt. Numquam facilis assumenda vitae suscipit doloremque.</p>
        </div>
        <div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-3xl'>Nuestra misión</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae repellendus est praesentium, placeat quia consectetur ipsum quo debitis nesciunt repellat nulla, atque ad adipisci fugit? Voluptate hic incidunt tenetur consectetur!
            Totam sint numquam deleniti laudantium consequuntur! Eum et molestias nemo odio praesentium quos! Odit impedit, ad aperiam obcaecati placeat alias dolorem omnis rerum labore quaerat dolores quisquam pariatur itaque quia.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid ex ad ipsa eaque incidunt doloribus explicabo qui est earum praesentium, obcaecati eius nemo sequi harum. Placeat obcaecati reprehenderit laudantium.
            Voluptatem facilis ducimus doloremque dolorem odit aliquid perferendis optio excepturi, autem totam quia dicta sapiente cumque porro minus laboriosam laborum ab quaerat laudantium vero eum, quibusdam, nesciunt minima? Labore, enim?</p>

            <span className='py-20 border-zinc-600 border-b-2 font-bold text-zinc-300 text-xl'>Números</span>
            <div ref={ref} className='gap-20 grid grid-cols-2'>
              <div>
                <h2 className='pb-4 font-bold text-5xl'>
                  { inView && <CountUp end={150000000} duration={5} separator="," prefix='$'/>}
                </h2>
                <span>Aumentó</span>
              </div>
              <div>
                <h2 className='pb-4 font-bold text-5xl'>
                  { inView && <CountUp end={30000} duration={3} separator=','/>}
                </h2>
                <span>Empresas</span>
              </div>
              <div>
                <h2 className='pb-4 font-bold text-5xl'>
                  { inView && <CountUp end={1500000} duration={5} separator=','/>}
                </h2>
                <span>Ofertas cerradas</span>
              </div>
              <div>
                <h2 className='pb-4 font-bold text-5xl'>
                  { inView && <CountUp end={20000000} duration={6} separator=','/>}
                </h2>
                <span>clientes potenciales generados</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
          
      <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1, ease:"easeInOut"}}
      viewport={{once:true}}
      className='hidden lg:flex items-center gap-10 w-3/4'>
        <div className='flex flex-col gap-35 pt-50'>
          <img src={image2} alt="imagen1" className='drop-shadow-2xl rounded-2xl w-xl' />
          <img src={image1} alt="imagen1" className='drop-shadow-2xl rounded-2xl w-xl' />
        </div>
        <div className='flex flex-col gap-35 pb-50'>
          <img src={image4} alt="imagen1" className='drop-shadow-2xl rounded-2xl w-xl' />
          <img src={image3} alt="imagen1" className='drop-shadow-2xl rounded-2xl w-xl' />
        </div>
      </motion.div>
        
     </section> 
    </>
  )
}
