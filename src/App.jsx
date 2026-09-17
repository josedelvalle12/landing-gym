import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Method from "./components/Method";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="bg-ink text-paper font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Method />
        <Programs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
