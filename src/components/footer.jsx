import React from 'react'
import logo from '../assets/image/LOGO.png'
import face from "../assets/image/icons-social-media/facebook.png";
import insta from '../assets/image/icons-social-media/instagram.png'
import whats from '../assets/image/icons-social-media/whatsapp (1).png'
import git from "../assets/image/icons-social-media/github.png";
export default function Footer() {
  return <footer>
      <main className="flex mx-10 px-20 border-zinc-700 border-t-2 h-100">
        <div>
          <img src={logo} alt="" className="pt-5 w-20" />
        </div>
        <div className="flex justify-end gap-20 pt-10 w-full">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-md">Solutions</h3>
            <a href="#">Diseño Web</a>
            <a href="#">Desarrollo Web</a>
            <a href="#">Diseño de Aplicaciones</a>
            <a href="#">Desarrollo de Aplicaciones</a>
            <a href="#">SEO</a>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-md">Soporte</h3>
            <a href="#">Ayuda</a>
            <a href="#">Documentacion</a>
            <a href="#">Contacto</a>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-md">Compañía</h3>
            <a href="#">A cerca de...</a>
            <a href="#">Blog</a>
            <a href="#">Trabajos</a>
            <a href="#">Precios</a>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-md">Legal</h3>
            <a href="#">Terminos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Licencia</a>
          </div>
        </div>
      </main>
      <footer className="flex justify-between items-center mx-10 py-4 border-zinc-700 border-t-2">
        <div>
          <h2>© 2025 FortuneCode. Todos los derechos reservados.</h2>
        </div>
        <div className="flex items-end gap-8">
          <a href="#">
            <img src={face} alt="" className="w-10 h-10" />
          </a>
          <a href="#">
            <img src={insta} alt="" className="w-10 h-10" />
          </a>
          <a href="#">
            <img src={whats} alt="" className="w-10 h-10" />
          </a>
          <a href="#">
            <img src={git} alt="" className="w-10 h-10" />
          </a>
        </div>
      </footer>
    </footer>;
}
