import { SelectionItem } from "../Selection-item";
import { paths } from "../../constans";
import styles from "./Purpose-of-dating.module.scss";

export const PurposeOfDating = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainPurposeOfDating}>
        <p className={styles.titlePurposeOfDating}>Цель знакомства:</p>
        <SelectionItem
          text={"дружба и общение"}
          path={paths.registrationForm}
          className={styles.buttonPurposeOfDating}
        />
        <SelectionItem
          text={"долгосрочные отношения"}
          path={paths.registrationForm}
          className={styles.buttonPurposeOfDating}
        />
        <SelectionItem
          text={"создание семьи"}
          path={paths.registrationForm}
          className={styles.buttonPurposeOfDating}
        />
        <SelectionItem
          text={"встречи без обязательств"}
          path={paths.registrationForm}
          className={styles.buttonPurposeOfDating}
        />
        <p className={styles.promtText}>
          Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов
        </p>
      </div>
    </div>
  );
};
