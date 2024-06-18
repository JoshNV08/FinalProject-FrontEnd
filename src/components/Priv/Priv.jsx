import React from "react";

const Priv = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">
        <strong>Privacy Policy</strong>
      </h2>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">
            <strong>
              <u>Use of Cookies.</u>
            </strong>
          </h5>
          <p className="card-text">
            We use cookies and similar technologies to collect information about
            how you use our Services. Cookies are small data files stored on
            your device when you visit a website. Cookies allow us to remember
            your preferences, enhance your experience, and show you relevant
            ads. You can disable cookies in your browser, but doing so may
            affect your ability to use some of our Services.
          </p>

          <h5 className="card-title">
            <strong>
              <u>Types of Information We Collect and How It Is Used.</u>
            </strong>
          </h5>
          <p className="card-text">
            At Goodburger, we value your privacy. We collect personal
            information only when you voluntarily share it, whether by visiting
            our website or accessing our Wi-Fi network.
          </p>

          <h5 className="card-title">
            <strong>
              <u>Privacy Policy for Minors.</u>
            </strong>
          </h5>
          <p className="card-text">
            Our Services are not directed to children under 13 years old. We do
            not intentionally collect personal information from children under
            13. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us at{" "}
            <a href="mailto:rrhh@goodburger.com.uy">rrhh@goodburger.com.uy</a>
          </p>

          <h5 className="card-title">
            <strong>
              <u>Changes to the Policy.</u>
            </strong>
          </h5>
          <p className="card-text">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated Privacy Policy on our
            website.
          </p>

          <h5 className="card-title">
            <strong>
              <u>How to Contact Us</u>
            </strong>
          </h5>
          <p className="card-text">
            If you have any questions about this Privacy Policy, you can contact
            us at{" "}
            <a href="mailto:rrhh@goodburger.com.uy">rrhh@goodburger.com.uy</a>
          </p>
        </div>
      </div>
      <hr />
      <div className="mb-3">
        <span className="text-muted">
          © 2024 GoodBurger. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Priv;
