import React from 'react'

export default function Card( {titre, texte, image, nom}) {
  return (
    <div>
      <div className="bg-white mt-24 pt-4 pb-12 px-8">
        <p className="text-primary pb-6 font-extrabold">{titre}</p>
        <p className="text-grey-dark text-xs leading-relaxed font-medium">{texte}</p>
        <img className="rounded-full w-12 h-12 my-6" src={image} alt="" />
        <p className="text-secondary">
         {nom} <span className="text-grey-dark">customer</span>
        </p>
      </div>
    </div>
  );
}


