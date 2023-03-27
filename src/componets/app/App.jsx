import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrationForm } from "../registration-form/Registration-form";
import { Footer } from "../footer/Footer";
import { GenderSelection } from "../gender-selection/Gender-selection";
import { PurposeOfDating } from "../purpose-of-dating/Purpose-of-dating";
import { paths } from "../../constans";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
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
