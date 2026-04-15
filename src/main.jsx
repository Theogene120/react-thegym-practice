import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Todo from "./Todo";
import Calculator from './Calculator'
import MemeGenerator from "./components/MemeGenerator";
import ChefClaudeApp from "./components/ChefClaudeApp";
import Tenzies from "./components/Tenzies";
// import FormSkills from './FormSkills.jsx'
//import Conditional from './Conditional'
import Fetch from '/src/components/Fetch.jsx'
//import WindowTracker from "./components/WindowTruck";
import "./index.css";
import MentalModel from "./MentalModel";
import Login from "./MentalModel/QuestionOne";
import Search from "./MentalModel/QuestionTwo";
import Posts from "./MentalModel/QuestionThree";
import Counter from "./MentalModel/QuestionFour";
import GetData from "./MentalModel/GetData";
import NameTransferLists from "./MentalModel/QuestionSeven";
// import Counter from "./ReactGate/Question1";
import ToggleButtons from "./ReactGate/Question3";
import NameTransfer from "./ReactGate/Question4";
import FetchData from "./ReactGate/FetchData";
import CardList from "./ReactGate/Question5";
import Context from "./Context";


import ProductList from "./UKPractice/FirstQuestion";
import UserProfileDemo from "./UKPractice/UserProfileDemo ";
import TouchTypingApp from "./UKPractice/ThirdQuestion";

import Routing from "./Routing";
import FormSkills from "./FormSkills";

import App from './components/Suspense'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormSkills />
  </StrictMode>,
);
