import React from "react";
import Layout from "../components/Layouts/Layout";
import Base from "../components/Props/Base";
import SkillBarre from "../components/Skills/SkillBarre";

export default function Skills() {
  return (
    <Layout>
      <Base phrase="Ce que je fais bien" titre="Mes Compétences" />

      <p className="text-grey-dark text-xs py-16 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim
        earum at? Aliquid provident quam porro ex atque ad voluptatibus amet
        officia cum natus, quis quisquam sequi ut voluptas dolore pariatur,
        inventore nostrum ea eligendi! Distinctio reprehenderit est molestiae
        placeat.
      </p>

      <div className="grid grid-cols-3 gap-6">
        <SkillBarre
          titre="HTML5"
          pourcentage="70"
          color="bg-gradient-to-r from-cyan-200 to-purple-500"
          largeur="w-4/6"
        />
        <SkillBarre
          titre="CSS"
          pourcentage="60"
          color="bg-gradient-to-r from-red-500 to-fuchsia-400"
          largeur="w-3/5"
        />
        <SkillBarre
          titre="JavaScript"
          pourcentage="75"
          color="bg-gradient-to-r from-blue-600 to-pink-500"
          largeur="w-3/4"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 pt-4">
        <SkillBarre
          titre="React"
          pourcentage="100"
          color="bg-gradient-to-r from-green-300 to-yellow-300"
          largeur="w-full"
        />
        <SkillBarre
          titre="WordPress"
          pourcentage="90"
          color="bg-gradient-to-r from-lime-400 to-blue-600"
          largeur="w-11/12"
        />
        <SkillBarre
          titre="PHP/Laravel"
          pourcentage="100"
          color="bg-gradient-to-r from-red-500 to-orange-300"
          largeur="w-full"
        />
      </div>
    </Layout>
  );
}
