import React from "react";
import { CardProps } from "./card.interface";

const Card: React.FC<CardProps> = ({ id, data }) => {
  const imageUrl = data?.Images[0].url;
  return (
    <>
      <div className="cursor-pointer rounded-md m-4">
        <img
          src={imageUrl}
          alt="Card"
          className="max-w-xs transition duration-500 ease-in-out hover:scale-105 object-cover w-80 h-80 rounded-md"
        />
      </div>
    </>
  );
};

export default Card;
