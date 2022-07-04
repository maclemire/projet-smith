import React from 'react'
import Description from '../Description';
import Navigation from '../Navigation/Navigation';

export default function Layout({children}) {
  return (
    <div className="">
      <Navigation />
      <div className="flex">
        <Description />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
