import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Todo from "./Todo";
import Calculator from './Calculator'
import MemeGenerator from "./components/MemeGenerator";
import ChefClaudeApp from "./components/ChefClaudeApp";
// import FormSkills from './FormSkills.jsx'
//import Conditional from './Conditional'
import Fetch from '/src/components/Fetch.jsx'
//import WindowTracker from "./components/WindowTruck";
import "./index.css";

import App from './components/Suspense'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
);
