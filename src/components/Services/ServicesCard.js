import React from 'react'

export default function ServicesCard({ icone, titre, texte}) {
  return (
    <div className="flex py-24">
      <img className="w-12 h-12" src={icone} alt="" />
      <div className="pl-6">
        <p className="font-bold text-xl text-primary">{titre}</p>
        <p className="pt-4 text-xs leading-relaxed text-grey-dark font-medium">
          {texte}
        </p>
      </div>
    </div>
  );
}
