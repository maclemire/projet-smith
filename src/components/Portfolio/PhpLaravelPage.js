import React from 'react'
import Layout from "../Layouts/Layout";
import Base from "../Props/Base";

export default function PhpLaravelPage() {
  return (
    <Layout>
      <Base titre="Mon Portfolio" />
      <div className="pl-1 pt-16 pb-16 text-base font-semibold">
        <a
          className="pr-8 text-grey-dark"
          href="http://localhost:3000/portfolio"
        >
          Tous
        </a>
        <a className="pr-8 text-grey-dark" href="http://localhost:3000/react">
          React
        </a>
        <a className="text-primary" href="http://localhost:3000/php-laravel">
          Php/Laravel
        </a>
      </div>

      <div>
        <img className="w-96" src="gun.jpg" alt="" />
      </div>
    </Layout>
  );
}
