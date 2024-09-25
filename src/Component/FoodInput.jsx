import style from "./FoodItem.module.css";
const FoodInput = ({ keydownhandle }) => {
  return (
    <input
      className={style.input}
      type="text"
      placeholder="Enter user name..."
      onKeyDown={keydownhandle}
    />
  );
};

export default FoodInput;
