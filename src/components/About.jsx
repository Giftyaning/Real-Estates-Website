import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center text-center mx-auto py-4 md:px-20 w-100 overflow-hidden lg:px-32"
      id="About"
      style={{ marginTop: "10em" }}
    >
      <h1 className="mb-3">
        About{" "}
        <span className="text-decoration-underline fw-lighter">Our Brand</span>
      </h1>
      <p className="text-secondary mw-100 mb-5">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="d-flex flex-column flex-md-row align-items-center g-5 w-100">
        <img src={assets.brand_img} alt="Brand Image" className="w-50" />
        <div className="d-flex flex-column text-start p-lg-5  p-md-5 mt-5 text-secondary">
          <div className="row g-3 w-100">
            <div className="col-6 col-md-6 col-lg-6">
              <p className="mb-0">10+</p>
              <p>Years of Experience</p>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
              <p className="mb-0">12+</p>
              <p>Project Completed</p>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
              <p className="mb-0">20+</p>
              <p>Mn, Sq, Ft, Delivered</p>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
              <p className="mb-0">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="my-3 m">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            nesciunt, voluptate alias ipsum incidunt labore reprehenderit
            consequatur tempore maxime ullam perferendis suscipit recusandae
            blanditiis culpa molestias eius. Eius, illum aliquam.
          </p>
          <button
            className="btn btn-primary px-4 py-2 w-100 w-sm-100 w-md-50 w-lg-auto"
            style={{ maxWidth: "150px" }}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
