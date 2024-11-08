import React from "react";
import "./App.scss";
import Home from "./pages/home/Home.jsx";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="App">
        <Home />
      </div>
    </AnimatePresence>
  );
}

export default App;
