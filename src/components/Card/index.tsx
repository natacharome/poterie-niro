import React from "react";
import { CardProps } from "./card.interface";

const Card: React.FC<CardProps> = ({ id, title, children }) => {
  return (
    <>
      <div id={id} className="flex m-10 bg-white flex-col p-6 rounded-lg">
        <h3 className=" font-primary font-semibold text-3xl border-b-2 p-2 border-gray-100 mb-5">
          {title}
        </h3>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Card;
