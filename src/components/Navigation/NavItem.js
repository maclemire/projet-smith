import React from 'react'

export default function NavItem({nom, href}) {
  return (
    <div className="px-5 py-4 mt-2 bg-primary text-white border border-r-white hover:bg-secondary text-sm">
      <a href={href}>{nom}</a>
    </div>
  );
}
