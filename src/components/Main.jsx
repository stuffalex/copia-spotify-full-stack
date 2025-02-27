import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas" items={5} />
      <ItemList title="Musicas" items={10} />
    </div>
  );
};

export default Main;
