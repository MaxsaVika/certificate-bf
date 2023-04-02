import css from "./SelectManager.module.css";

function SelectManager({ items }) {
  return items.map((item) => {
    return (
      <option
        key={item.id}
        value={item.value}
        className={css.userFormAdviceSelectOption}
      >
        {item.selectName}
      </option>
    );
  });
}

export default SelectManager;
