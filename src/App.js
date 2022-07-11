import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/Hero";
import NavBar from "./components/navBar";
import Skills from "./components/skills";
import Works from "./components/works";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
