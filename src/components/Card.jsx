import React from "react";

function Card({ name, password }) {
  return (
    <div className="border shadow-lg w-1/3 bg-gray-200 flex flex-col items-center p-4 rounded-md">
      <div className="w-full flex flex-col gap-4">
        <h2 className="font-bold">Tu nombre es:</h2>
        <h3>{name}</h3>
        <h2 className="font-bold">Tu contraseña es:</h2>
        <p>{password}</p>
      </div>
    </div>
  );
}

export default Card;
