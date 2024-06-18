import React from "react";
import { Collapse } from "antd";

const Faq = () => {
  const text1 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      Yes, as we are associated with VISA.
    </p>
  );
  const text2 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      Both locations have AutoBurger.
    </p>
  );
  const text3 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      Any questions or problems about requesting a refund contact us at <a href="">goodburger@gmail.com.uy</a> 
    </p>
  );
  const text4 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      All products contain the appropriate nutritional information on the box.
    </p>
  );
  const text5 = (
    <p
      style={{
        paddingLeft: 24,
      }}>
      At the moment we have no delivery but we are working on it.
    </p>
  );

  const items = [
    {
      key: "1",
      label: "Can I use VISA debit card?",
      children: text1,
    },
    {
      key: "2",
      label: "Which locations have AutoBurger?",
      children: text2,
    },
    {
      key: "3",
      label: "How can I solve a cashback?",
      children: text3,
    },
    {
      key: "4",
      label:
        "Where can I find nutritional information about products?",
      children: text4,
    },
    {
      key: "5",
      label: "Do you have any applications to use delivery?",
      children: text5,
    },
  ];

  return (
    <>
      <h1 className="container">Frequently Asked Questions</h1>
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
