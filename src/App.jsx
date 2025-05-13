import NavBar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import ContactForm from "./components-I/contact-form";
function App() {

  return <div>
      <NavBar />
      <Hero />
      <About />
      {/* <Services />
      <Mision />
      <Cta />
      <Footer /> */}
      <ContactForm/>
    </div>;
}

export default App
