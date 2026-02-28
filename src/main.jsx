import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import FormSkills from './FormSkills.jsx'
//import Conditional from './Conditional'
import Fetch from '/src/components/Fetch.jsx'
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Fetch />
  </StrictMode>,
);
