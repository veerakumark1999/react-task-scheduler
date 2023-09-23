import React from "react";

import LineItem from "./LineItem";
const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item, id) => (
        <LineItem
          item={item}
          key={id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
