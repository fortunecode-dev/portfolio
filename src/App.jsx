import NavBar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

import ContactForm from "./components-I/contact-form";

import Services from "./components/services"

function App() {

  return <div>
      <NavBar />
      <Hero />
      <Services />
      <About />
      
      {/* <Mision />
      <Cta />
      <Footer /> */}
      <ContactForm/>
    </div>;
}

export default App
