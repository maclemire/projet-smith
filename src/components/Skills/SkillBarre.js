import React from 'react'

export default function SkillBarre({ titre, pourcentage, color, largeur}) {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <span className="text-xs font-medium text-primary">
          {titre}
        </span>
        <span className="text-xs font-medium text-primary">
          {pourcentage}%
        </span>
      </div>

      <div className="bg-white rounded-full h-1">
        <div className= {`${color} h-1 rounded-full ${largeur}`}></div>
      </div>
    </div>
  );
}
