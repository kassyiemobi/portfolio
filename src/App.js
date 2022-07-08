import About from "./components/about";
import Hero from "./components/Hero";
import NavBar from "./components/navBar";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
