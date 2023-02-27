import { RelationshipChoice } from "./RelationshipChoice";
import { transitionPaths } from "./App";

export const PurposeOfDating = () => {
  return (
    <div className="page-container">
      <div className="main-purpose-of-dating">
        <p className="title-purpose-of-dating">Цель знакомства:</p>
        <RelationshipChoice
          text={"дружба и общение"}
          path={transitionPaths.registrationForm}
          className={"button-purpose-of-dating"}
          name={"friendship"}
          value={"friendship"}
        />
        <RelationshipChoice
          text={"долгосрочные отношения"}
          path={transitionPaths.registrationForm}
          className={"button-purpose-of-dating"}
          name={"relationship"}
          value={"relationship"}
        />
        <RelationshipChoice
          text={"создание семьи"}
          path={transitionPaths.registrationForm}
          className={"button-purpose-of-dating"}
          name={"family"}
          value={"family"}
        />
        <RelationshipChoice
          text={"встречи без обязательств"}
          path={transitionPaths.registrationForm}
          className={"button-purpose-of-dating"}
          name={"meetings"}
          value={"meetings"}
        />
        <p className="promt-text">
          Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов
        </p>
      </div>
    </div>
  );
};
