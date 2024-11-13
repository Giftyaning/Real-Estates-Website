import React from 'react'

const Contact = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center text-center mx-auto py-4 md:px-20 w-100 overflow-hidden lg:px-32"
      id="Contact"
    >
      <h1>
        Contact <span className="text-decoration-underline">With Us</span>
      </h1>
      <p className="text-secondary mw-100 mb-5">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form className="container-md py-5">
        <div className="d-flex flex-wrap w-100">
          <div className="p-2 w-50 text-start">
            Your Name
            <input
              className="form-control border border-gray rounded px-4 py-3 mt-2 w-100"
              name="Name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="p-2 w-50 text-start">
            Your Email
            <input
              className="form-control border border-gray rounded px-4 py-3 mt-2 w-100"
              name="Email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="container-md py-4 d-flex flex-wrap w-100">
          Message
          <textarea
            id="message"
            className="form-control"
            name="Message"
            placeholder="Message"
            rows="4"
            required
            style={{resize: "none" }}
          >

          </textarea>
        </div>
      </form>
    </div>
  );
}

export default Contact
