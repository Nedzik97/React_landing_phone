import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes } from "react-router-dom";
import { RegistrationForm } from "../registration-form/Registration-form";
import { Footer } from "../footer/Footer";
import { GenderSelection } from "../gender-selection/Gender-selection";
import { PurposeOfDating } from "../purpose-of-dating/Purpose-of-dating";
import { path } from "../../constans";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <TransitionGroup>
        <CSSTransition timeout={3000} classNames="page" unmountOnExit>
          <Routes>
            <Route path="/" axact element={<GenderSelection />} />
            <Route
              path={path.purposeOfDating}
              axact
              element={<PurposeOfDating />}
            />
            <Route
              path={path.registrationForm}
              axact
              element={<RegistrationForm />}
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
