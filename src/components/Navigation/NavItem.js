import React from 'react'

export default function NavItem({nom, href,}) {
  return (
    <div className="mt-6">
      <a
        className="px-5 py-4 bg-primary text-white border border-r-white hover:bg-secondary text-sm"
        href={href}
      >
        {nom}
      </a>
    </div>
  );
}
