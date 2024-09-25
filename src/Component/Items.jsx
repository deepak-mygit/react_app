import styles from "./Items.module.css";
const Items = ({ data, bought, handleBuyButton }) => {
  return (
    <li className={`${styles.kgItem} list-group-item ${bought && "active"}`}>
      {data}
      <button className={styles.btn} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};
export default Items;
