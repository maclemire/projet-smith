import React from "react";
import Layout from "../components/Layouts/Layout";
import Base from "../components/Props/Base";
import Section1 from "../components/About/Section1";
import Section2 from "../components/About/Section2";


export default function About() {
  return (
  <Layout>
    <Base phrase='Développeur full stack' titre='Justin Bieber' />
    <Section1 />
    <Section2 />
  </Layout>);
}
