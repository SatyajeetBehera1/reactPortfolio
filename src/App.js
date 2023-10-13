import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import particle_config from "./Components/particle-config";
import React from "react";

// import { useCallback } from "react";
// function App() {
//   return (
//     <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/technologies" element={<Technologies />} />
//         </Routes>
//         <Footer />
//     </Router>
//   );
// }
// export default App;
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
        <Footer />
      </Router>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particle_config}
      />
    </div>
  );
}
export default App;
