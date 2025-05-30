import React from "react";
import Hero from "./section/Hero";
import About from "./section/About";

const App = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
};

export default App;
