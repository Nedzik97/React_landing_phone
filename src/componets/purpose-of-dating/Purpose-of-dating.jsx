import { SelectionItem } from "../Selection-item";
import { path } from "../../constans";
import styles from "./Purpose-of-dating.module.scss";

export const PurposeOfDating = () => {
  return (
    <div className={styles.mainPurposeOfDating}>
      <p className={styles.titlePurposeOfDating}>Цель знакомства:</p>
      <SelectionItem
        text={"дружба и общение"}
        path={path.registrationForm}
        className={styles.buttonPurposeOfDating}
      />
      <SelectionItem
        text={"долгосрочные отношения"}
        path={path.registrationForm}
        className={styles.buttonPurposeOfDating}
      />
      <SelectionItem
        text={"создание семьи"}
        path={path.registrationForm}
        className={styles.buttonPurposeOfDating}
      />
      <SelectionItem
        text={"встречи без обязательств"}
        path={path.registrationForm}
        className={styles.buttonPurposeOfDating}
      />
      <p className={styles.promtText}>
        Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов
      </p>
    </div>
  );
};
