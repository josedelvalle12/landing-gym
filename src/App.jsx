import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import './App.css'

function App() {
  return (
    
      <div className="bg-black text-gray-200 font-sans scroll-smooth">
      <Navbar />
      <main className="">
        <Hero />
        <Services />
        <Testimonials />
        <CallToAction />
      </main>
      <footer className="bg-gray-900 text-gray-500 text-center py-6 mt-20">
        &copy; 2024 FitPro. Todos los derechos reservados.
      </footer>
    </div>
    
  )
}

export default App
