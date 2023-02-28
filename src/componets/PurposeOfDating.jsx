import { SelectionItem } from "./SelectionItem";
import { paths } from "../constans";

export const PurposeOfDating = () => {
  return (
    <div className="page-container">
      <div className="main-purpose-of-dating">
        <p className="title-purpose-of-dating">Цель знакомства:</p>
        <SelectionItem
          text={"дружба и общение"}
          path={paths.registrationForm}
          className={"button-purpose-of-dating"}
        />
        <SelectionItem
          text={"долгосрочные отношения"}
          path={paths.registrationForm}
          className={"button-purpose-of-dating"}
        />
        <SelectionItem
          text={"создание семьи"}
          path={paths.registrationForm}
          className={"button-purpose-of-dating"}
        />
        <SelectionItem
          text={"встречи без обязательств"}
          path={paths.registrationForm}
          className={"button-purpose-of-dating"}
        />
        <p className="promt-text">
          Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов
        </p>
      </div>
    </div>
  );
};
