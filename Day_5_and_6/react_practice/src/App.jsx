import React from "react";
import Hero from "./components/Hero";
import Specifications from "./components/Specifications";
import Navbar from "./components/Navbar";

const App = () => {
  return (
     <main className="max-w-7xl mx-auto px-2 pt-8 max-h-full">
        <Navbar />
        <Hero />
        <Specifications />
      </main>
  );
};

export default App;
