import React from "react";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <div>
      <nav className="ml-8 mt-2 flex font-montserrat">
        <a href="/" className="text-3xl font-extrabold mr-10 mt-4">
          Smith<span className="text-4xl text-secondary">.</span>CV
        </a>

        <ul className="flex ">
          <NavItem nom="About" href="/" />
          <NavItem nom="Skills" href="/skills" />
          <NavItem nom="Services" href="/services" />
          <NavItem nom="Portfolio" href="/portfolio" />
          <NavItem nom="Testimonials" href="/testimonials" />
          <NavItem nom="Contact" href="/contact" />
        </ul>
      </nav>
    </div>
  );
}
