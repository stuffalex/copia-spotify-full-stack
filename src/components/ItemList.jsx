import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link className="item-list__link" to="/">
          Mostrar tudo
        </Link>
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => {
            return (
              <SingleItem
                path={path}
                idPath={idPath}
                {...currObj}
                key={`${title}-${index}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;
