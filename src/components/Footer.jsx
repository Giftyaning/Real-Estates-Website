import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="d-flex flex-column pt-5 px-3 px-md-5 px-lg-6 w-100 overflow-hidden"
      style={{ backgroundColor: "#0a1120" }}
      id="Footer"
    >
      <div className="container mx-auto gap-5 d-flex flex-column flex-md-row justify-content-between align-items-start w-100">
        <div className="col-md-4 mb-4 mb-md-0">
          <img src={assets.logo_dark} alt="" />
          <p className="mt-4 text-white-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            itaque deserunt quis harum saepe ex.
          </p>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <h3 className="text-white fs-5 fw-bold">Company</h3>
          <ul className="d-flex flex-column gap-2 mt-3 list-unstyled">
            <li className="bg-transparent w-100">
              <a
                href="#Header"
                className="text-white-50 text-decoration-none d-block text-start w-100 p-2"
              >
                Home
              </a>
            </li>
            <li className="bg-transparent w-100">
              <a
                href="#About"
                className="text-white-50 text-decoration-none d-block text-start w-100 p-2"
              >
                About us
              </a>
            </li>
            <li className="bg-transparent w-100">
              <a
                href="#Contact"
                className="text-white-50 text-decoration-none d-block text-start w-100 p-2"
              >
                Contact us
              </a>
            </li>
            <li className="bg-transparent w-100">
              <a
                href="#"
                className="text-white-50 text-decoration-none d-block text-start w-100 p-2"
              >
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <h3 className="text-white fs-5 fw-bold">
            Subscribe to our newsletter
          </h3>
          <p className="mt-4 text-white-50 mb-4">
            The Latest new, articles, and resources, sent to your inbox weekly.
          </p>
          <div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control w-75 "
                placeholder="Enter your email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top border-secondary py-4 mt-5 text-center text-white-50 mt-auto">
          Copyright 2024 Ⓒ Gifty. All Right Reserved
        </div>

    </div>
  );
};

export default Footer;
