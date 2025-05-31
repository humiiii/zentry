import React from "react";
import Hero from "./section/Hero";
import About from "./section/About";
import Navbar from "./components/Navbar";
import Features from "./section/Features";
import Story from "./section/Story";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const App = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
