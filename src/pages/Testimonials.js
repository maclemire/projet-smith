import React from "react";
import Layout from "../components/Layouts/Layout";
import Base from "../components/Props/Base";
import Card from "../components/Testimonials/Card";

export default function Testimonials() {
  return (
    <Layout>
      <Base phrase="Ce que les clients disent" titre="Témoignages" />
      <Card />
    </Layout>
  );
}
