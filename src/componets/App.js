import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import { CreateQuastionnaire } from "./create_quastionnaire";
import { FooterQuastionnaire } from "../componets/footer_quastionnaire";
import { GenderSelection } from "../componets/gender_selection";
import { PurposeOfDating } from "../componets/purpose_of_dating";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GenderSelection />} />
          <Route path="/purposeofdating" element={<PurposeOfDating />} />
          <Route
            path="/create_quastionnaire"
            element={<CreateQuastionnaire />}
          />
        </Routes>
        <FooterQuastionnaire />
      </div>
    </BrowserRouter>
  );
}

export default App;
