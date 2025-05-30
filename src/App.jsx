import React from "react";
import Hero from "./section/Hero";
import About from "./section/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
