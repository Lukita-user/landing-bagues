import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ComoTrabajamos from "./components/ComoTrabajamos";
import Tutoriales from "./components/Tutoriales";
import Catalogo from "./components/Catalogo";
import Beneficios from "./components/Beneficios";
import CTA from "./components/CTA";
import WhatsappFloat from "./components/WhatsappFloat";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <ComoTrabajamos />

      <Catalogo />
      
      <Tutoriales />


      <Beneficios />

      <CTA />

      <WhatsappFloat />
    </>
  );
}

export default App;