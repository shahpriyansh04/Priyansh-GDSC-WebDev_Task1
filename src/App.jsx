import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Events from "./components/Events";
function App() {
  return (
    <div className="!text-black dark:bg-black">
      <Header />
      <Featured />
      <Events />
    </div>
  );
}

export default App;
