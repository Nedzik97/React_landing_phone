import { Link } from "react-router-dom";

export const PurposeOfDating = () => {
  return (
    <div className="page-container">
      <div className="main-purpose-of-dating">
        <p className="title-purpose-of-dating">Цель знакомства:</p>
        <Link className="transition-link" to="/registration-form">
          <button className="button-purpose-of-dating" type="button">
            дружба и общение
          </button>
        </Link>
        <Link className="transition-link" to="/registration-form">
          <button className="button-purpose-of-dating" type="button">
            долгосрочные отношения
          </button>
        </Link>
        <Link className="transition-link" to="/registration-form">
          <button className="button-purpose-of-dating" type="button">
            создание семьи
          </button>
        </Link>
        <Link className="transition-link" to="/registration-form">
          <button className="button-purpose-of-dating" type="button">
            встречи без обязательств
          </button>
        </Link>
        <p className="promt-text">
          Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов
        </p>
      </div>
    </div>
  );
};
