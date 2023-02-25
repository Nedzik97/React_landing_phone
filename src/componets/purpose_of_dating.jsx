import { Link } from "react-router-dom";

export const PurposeOfDating = () => {
  return (
    <div className="page_container">
      <div className="main_purpose_of_dating">
        <p className="title_purpose_of_dating">Цель знакомства:</p>
        <Link className="transition_link" to="/create_quastionnaire">
          <button className="button_purpose_of_dating" type="button">
            дружба и общение
          </button>
        </Link>
        <Link className="transition_link" to="/create_quastionnaire">
          <button className="button_purpose_of_dating" type="button">
            долгосрочные отношения
          </button>
        </Link>
        <Link className="transition_link" to="/create_quastionnaire">
          <button className="button_purpose_of_dating" type="button">
            создание семьи
          </button>
        </Link>
        <Link className="transition_link" to="/create_quastionnaire">
          <button className="button_purpose_of_dating" type="button">
            встречи без обязательств
          </button>
        </Link>
        <p className="promt_text">
          Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов
        </p>
      </div>
    </div>
  );
};
