import React from 'react'
import { assets, testimonialsData } from '../assets/assets';


const Testimonials = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center text-center mx-auto py-4 md:px-20 w-100 overflow-hidden lg:px-32"
      id="Testimonials"
    >
      <h1>
        Customer <span className="text-decoration-underline">Testimonials</span>
      </h1>
      <p className="text-secondary mw-100 mb-5">
        Real Stories from Those Who Found Home With Us
      </p>

      <div className="d-flex w-100 justify-content-center g-5 flex-wrap">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="mw-25 border border-shadow rounded px-5 py-5 text-center"
          >
            <img
              className="w-5 h-5 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2>{testimonial.name}</h2>
            <p>{testimonial.title}</p>

            <div >
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials

