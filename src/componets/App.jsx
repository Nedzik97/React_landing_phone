import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrationForm } from "./registration-form";
import { FooterQuastionnaire } from "./footer-quastionnaire";
import { GenderSelection } from "./gender-selection";
import { PurposeOfDating } from "./purpose-of-dating";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GenderSelection />} />
          <Route path="/purposeofdating" element={<PurposeOfDating />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
        </Routes>
        <FooterQuastionnaire />
      </div>
    </BrowserRouter>
  );
}

export default App;
