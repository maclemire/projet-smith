import React from "react";
import Layout from "../components/Layouts/Layout";
import Base from "../components/Props/Base";

export default function Error() {
  return (
    <Layout>
      <Base phrase="Oups..." titre="Erreur 404" />
    </Layout>
  );
}
