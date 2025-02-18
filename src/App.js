import Header from "./components/Header";
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Services from "./components/Services"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
     <Header />
     <HeroSection />
     <About />
     <Services />
     <Blog />
     <Contact />
    </div>
  );
}
export default App;
