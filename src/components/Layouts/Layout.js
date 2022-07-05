import React from 'react'
import Description from '../Description';
import Navigation from '../Navigation/Navigation';

export default function Layout({children}) {
  return (
    <div>
      <Navigation />
      <div className="flex ml-8 mr-12">
        <Description />
        <main className="bg-beige w-11/12 pr-20 pl-16 pt-12 font-montserrat">{children}</main>
      </div>
    </div>
  );
}
