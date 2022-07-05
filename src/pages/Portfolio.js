import React from "react";
import Layout from "../components/Layouts/Layout";
import Base from "../components/Props/Base";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Portfolio() {
  return (
    <Layout>
      <Base titre="Mon Portfolio" />
      <div className="pl-1 pt-16 pb-16 text-base font-semibold">
        <a className="pr-8" href="http://localhost:3000/portfolio">
          Tous
        </a>
        <a className="pr-8 text-grey-dark" href="http://localhost:3000/react">
          React
        </a>
        <a className="text-grey-dark" href="http://localhost:3000/php-laravel">
          Php/Laravel
        </a>
      </div>

      <div className="flex gap-10">
        <img className="w-96" src="bee.jpg" alt="" />
        <img className="w-96" src="gun.jpg" alt="" />
      </div>
    </Layout>
  );
}
