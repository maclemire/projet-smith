import React from "react";

export default function Base({ phrase, titre }) {
  return (
    <div className="">
      <p className="text-grey text-lg">{phrase}</p>
      <p className="text-primary text-5xl font-bold">{titre}</p>
    </div>
  );
}
