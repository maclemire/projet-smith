import React from 'react'
import Description from '../Description';
import Navigation from '../Navigation/Navigation';

export default function Layout({children}) {
  return (
    <div className="">
      <Navigation />
      <div className="flex ml-8 mr-12">
        <Description />
        <main className="bg-beige w-11/12 pl-24 pt-24 font-montserrat">{children}</main>
      </div>
    </div>
  );
}
