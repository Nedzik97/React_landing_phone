import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrationForm } from "./RegistrationForm";
import { Footer } from "./Footer";
import { GenderSelection } from "./GenderSelection";
import { PurposeOfDating } from "./PurposeOfDating";

export const transitionPaths = {
  purposeofdating: "/purposeofdating",
  registrationForm: "/registration-form",
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GenderSelection />} />
          <Route
            path={transitionPaths.purposeofdating}
            element={<PurposeOfDating />}
          />
          <Route
            path={transitionPaths.registrationForm}
            element={<RegistrationForm />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
