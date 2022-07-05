import React from "react";
import Layout from "../components/Layouts/Layout";
import Base from "../components/Props/Base";
import ServicesCard from "../components/Services/ServicesCard";

export default function Services() {
  return (
    <Layout>
      <Base phrase="Ce que je vous offre" titre="Mes Services" />
      <div className="grid grid-cols-3 gap-6">
        <ServicesCard
          icone="reveil.webp"
          titre="Développement de site web"
          texte="La création de site web est indispensable pour améliorer la visibilité de ses activités. Le développement de votre site web est réalisé avec soin et répond aux standards web du W3C"
        />
        <ServicesCard icone="feuille.webp" titre="Maintenance" texte="Un site internet en bonne santé est un site internet mis à jour. Les forfaits de maintenance proposés sont le fruit d'années d'expériences et de solutions apportées à mes clients afin de vous garantir un site internet performant et fiable." />
        <ServicesCard icone="graph.webp" titre="Référencement (SEO)" texte="Votre site internet est développé avec pour objectif d'apparaître dans les premières pages sur les moteurs de recherche." />
      </div>
    </Layout>
  );
}
