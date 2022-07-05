import React from "react";
import Layout from "../components/Layouts/Layout";
import Base from "../components/Props/Base";
import Form from "../components/Contact/Form";

export default function Contact() {
  return (
    <Layout>
      <Base titre="Contactez moi" />
      <div className="w-6/12">
        <p className="text-grey-dark text-xs pt-20 pb-12 font-medium leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aut
          asperiores maxime, nemo quisquam libero modi magnam obcaecati harum
          reiciendis laudantium exercitationem tempore quibusdam blanditiis?
        </p>

        <Form />
      </div>
    </Layout>
  );
}
