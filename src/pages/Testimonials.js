import React from "react";
import Layout from "../components/Layouts/Layout";
import Base from "../components/Props/Base";
import Card from "../components/Testimonials/Card";

export default function Testimonials() {
  return (
    <Layout>
      <Base phrase="Ce que les clients disent" titre="Témoignages" />
      <div className="grid grid-cols-3 gap-12">
        <Card
          titre="Rapide et efficace"
          texte="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, molestiae cumque nam recusandae quasi corrupti, non natus adipisci ducimus repellat consequuntur repudiandae odit a doloremque."
          image="homme1.webp"
          nom="Diane Smith"
        />
        <Card
          titre="Fort de proposition"
          texte="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, molestiae cumque nam recusandae quasi corrupti, non natus adipisci ducimus repellat consequuntur repudiandae odit a doloremque."
          image="homme2.webp"
          nom="Diane smith"
        />
        <Card
          titre="Agréable et professionel"
          texte="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, molestiae cumque nam recusandae quasi corrupti, non natus adipisci ducimus repellat consequuntur repudiandae odit a doloremque."
          image="femme.webp"
          nom="Diane Smith"
        />
      </div>
    </Layout>
  );
}
