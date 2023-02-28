import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrationForm } from "./RegistrationForm";
import { Footer } from "./Footer";
import { GenderSelection } from "./GenderSelection";
import { PurposeOfDating } from "./PurposeOfDating";
import { paths } from "../constans";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GenderSelection />} />
          <Route path={paths.purposeOfDating} element={<PurposeOfDating />} />
          <Route path={paths.registrationForm} element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
