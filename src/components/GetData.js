import React from "react";
import Datas from "../separate";
import Design from "./Design";

export default function GetDisplay() {
  const displayDesign = Datas.map(item =>{
    return <Design key={item.id} {...item} />
  })

  console.log(displayDesign)
  return (
    <>
      {displayDesign}
    </>
  );
}