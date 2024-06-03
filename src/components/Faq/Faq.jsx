import React from "react";
import { Collapse } from "antd";

const Faq = () => {
  const text1 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      Si, ya que estamos asociados a VISA.
    </p>
  );
  const text2 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      Los dos locales tienen AutoBurger.
    </p>
  );
  const text3 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      Cualquier consulta o problema acerca de solicitar un reembolso de dinero contactarse a <a href="">goodburger@gmail.com.uy</a> 
    </p>
  );
  const text4 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      Todo producto contiene la debida información nutricional en la caja.
    </p>
  );
  const text5 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      Por el momento no tenemos delivery pero estamos trabajando en ello.
    </p>
  );

  const items = [
    {
      key: "1",
      label: "¿Puedo usar tarjeta de débito VISA?",
      children: text1,
    },
    {
      key: "2",
      label: "¿Qué locales tienen AutoBurger?",
      children: text2,
    },
    {
      key: "3",
      label: "¿Cómo puedo solucionar un reembolso de dinero?",
      children: text3,
    },
    {
      key: "4",
      label:
        "¿Dónde puedo encontrar información nutricional sobre los productos?",
      children: text4,
    },
    {
      key: "5",
      label: "¿Tienen alguna aplicación para utilizar delivery?",
      children: text5,
    },
  ];

  return (
    <>
      <h1 className="container">Preguntas más frecuentes</h1>
      <Collapse
        className="container mb-5"
        items={items}
        bordered={false}
        defaultActiveKey={["1"]}
      />
    </>
  );
};

export default Faq;
