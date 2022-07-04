import React from "react";

export default function Base({ phrase, titre }) {
  return (
    <div className="">
      <p className="text-grey-dark text-lg font-medium">{phrase}</p>
      <p className="text-primary text-5xl font-extrabold">{titre}</p>
    </div>
  );
}
