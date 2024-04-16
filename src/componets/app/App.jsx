import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useLocation, useOutlet } from "react-router-dom";
import { createRef } from "react";
import { RegistrationForm } from "../registration-form/Registration-form";
import { Footer } from "../footer/Footer";
import { GenderSelection } from "../gender-selection/Gender-selection";
import { PurposeOfDating } from "../purpose-of-dating/Purpose-of-dating";
import { path } from "../../constans";
import styles from "./App.module.scss";

export const routes = [
  {
    path: "/landing_meeting_website/",
    element: <GenderSelection />,
    nodeRed: createRef(),
  },
  {
    path: path.purposeOfDating,
    element: <PurposeOfDating />,
    nodeRef: createRef(),
  },
  {
    path: path.registrationForm,
    element: <RegistrationForm />,
    nodeRef: createRef(),
  },
];

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <div className={styles.app}>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames={{
            enter: styles.pageEnter,
          }}
          unmountOnExit
        >
          {(state) => {
            return (
              <div ref={nodeRef} className={styles.page}>
                {currentOutlet}
              </div>
            );
          }}
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </div>
  );
}

export default App;
