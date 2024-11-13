import React from 'react'
import { toast } from "react-toastify";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "184c157f-10ce-4131-bcaa-bc22e839bd0d");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult("");
      }
    };

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

      <form onSubmit={onSubmit} className="container-md py-5">
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
            rows="9"
            required
            style={{resize: "none" }}
          >

          </textarea>
        </div>
        <button className='bg-primary text-white py-2 px-5 mb-5 rounded'>{result ? result : "Send Message"}</button>
      </form>
    </div>
  );
}

export default Contact
