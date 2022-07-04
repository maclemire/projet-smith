import React from "react";

export default function Base({ phrase, titre }) {
  return (
    <div className="bg-beige">
      <p className="">{phrase}</p>
      <p className="">{titre}</p>
    </div>
  );
}
