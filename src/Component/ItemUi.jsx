import { useState } from "react";
import Items from "./Items";
const ItemUi = ({ sname }) => {
  let [activeItem, setActiveItem] = useState([]);

  let onByButton = (item, event) => {
    let newItems = [...activeItem, item];
    setActiveItem(newItems);
  };
  return (
    <ul className="list-group list-group-flush">
      {sname.map((item) => (
        <Items
          key={item}
          data={item}
          bought={activeItem.includes(item)}
          handleBuyButton={(event) => onByButton(item, event)}
        ></Items>
      ))}
    </ul>
  );
};
export default ItemUi;
